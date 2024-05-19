import { Hono } from 'hono'
import { users } from './routes/users'
import { blogs } from './routes/blogs'
import { cors } from 'hono/cors'

export const app = new Hono()

app.use(
  '/*',
  cors({ origin: '*'})
)
app.route('/api/v1/user', users)
app.route('/api/v1/blog', blogs)



export default app

