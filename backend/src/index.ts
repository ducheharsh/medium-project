import { Hono } from 'hono'
import { users } from './routes/users'
export const app = new Hono()
app.route('/api/v1', users)


export default app
