
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { sign, verify } from "hono/jwt";

export const users = new Hono<
{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();




const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
})


users.post("/signup",zValidator('json', userSchema), async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const parsedData = c.req.valid('json')
    console.log(parsedData);
  
  try{
    const userExists = await prisma.user.findFirst({
        where:{
            email: parsedData.email
        }
    })
    if (userExists) {
        return c.json({error: "User already exists"});
    }
  const user = await prisma.user.create({
    data: {
        email: parsedData.email,
        password: parsedData.password
    }
  })
  console.log(user);
  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
        msg: "User created successfully",
        token: jwt
    });

}catch (e) {
    return c.json({error: "An error occurred while creating the user"});
}
});

users.post("/signin",zValidator('json', userSchema), async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const parsedData = c.req.valid('json')

    try{
        const user = await prisma.user.findUnique({
            where:{
                email: parsedData.email,
                password: parsedData.password
            }
        })
        if (!user) {
            return c.json({error: "Invalid email or password"});
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            msg: "User logged in successfully",
            token: jwt
        });
    }catch (e) {
        return c.json({error: "An error occurred while logging in"});
    }
})


