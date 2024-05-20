import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Hono } from "hono";
import { any, string, z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { jwt, sign, verify } from "hono/jwt";

export const blogs = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//blog schema
const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
});

blogs.use("/*", async (c, next) => {
  const pretoken = c.req.header("Authorization");
  if (!pretoken) {
    c.status(401);
    return c.json({ error: "Access Denied" });
  }
  const token = pretoken.split(" ")[1];

  try {
    const verifiedToken = await verify(token, c.env.JWT_SECRET);
    if (verifiedToken.id) {
      c.set("userId", verifiedToken.id);
      await next();
    } else {
      c.json({ error: "Invalid token" });
    }
  } catch (err) {
    return c.text("Invalid token");
  }
});

blogs.post("/", zValidator("json", blogSchema), async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const parsedData = c.req.valid("json");

  try {
    const blog = await prisma.post.create({
      data: {
        title: parsedData.title,
        content: parsedData.content,
        authorId: c.get("userId"),
      },
    });
    return c.json({
      blog: blog,
      msg: "Blog created Successfully",
    });
  } catch (e) {
    console.log(e);
  }
});

blogs.delete("/delete/:id" ,async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");

  try{
    const blog = await prisma.post.delete({
      where:{
        id:c.req.param("id"),
        authorId:userId
      }
    
    });
    return c.json({
      msg:"Blog Deleted Successfully"
    });
  }catch(e:any){
    console.log(e);
    return c.json(e)
  }
})

blogs.put("/update", zValidator("json", updateBlogSchema), async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const parsedData = c.req.valid("json");
  const userId = c.get("userId");
  try {
    const blog = await prisma.post.update({
      where: {
        id: parsedData.id,
        authorId: userId,
      },
      data: {
        title: parsedData.title,
        content: parsedData.content,
      },
    });
    return c.json({
      msg: "Blog Updated Successfully",
      title: parsedData.title,
      content: parsedData.content,
    });
  } catch (e) {
    console.log(e);
  }
});

blogs.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select:{
        id:true,
        title:true,
        content:true,
        createdAt:true,
        author:{
          select:{
            name:true,
          }
        }
      }
    });

    return c.json(blogs);
  } catch (e) {
    console.log(e);
    return c.text("Something went wrong");
  }
});

blogs.get("/:id", async (c) => {
  const userId = c.get("jwtPayload");
  const blogId = c.req.param("id");
  console.log(blogId);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
        authorId: userId,
      },
      select:{
        id:true,
        title:true,
        content:true,
        createdAt:true,
        author:{
          select:{
            name:true,
          }
        }
      }
    },);
    return c.json(blog);
  } catch (e) {
    return c.text("Unable to locate your blog");
  }
});
