import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'

export async function userAuth(c:any) {
  const pretoken = c.req.header("Authorization");
  if (!pretoken) return c.json({ error: "Access Denied" });
  const token = pretoken.split(" ")[1];

  try {
    const verifiedToken = await verify(token, c.env.JWT_SECRET);
    if (verifiedToken.id){
        c.req.id = verifiedToken.id;
        c.next();
    }else{
        c.json({error: "Invalid token"});
    }
  } catch (err) {
    c.res.status(400).json({ error: "Invalid token" });
  }
}



