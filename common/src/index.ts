import z from "zod"

export const blogSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    content: z.string(),
    authorName: z.string(),
    createdAt: z.string(),
})

export type blogType = z.infer<typeof blogSchema>

export const updateBlogSchema = z.object({
    id: z.string(),
    title: z.string().optional(),
    content: z.string().optional(),
}
)

export type updateblogType = z.infer<typeof updateBlogSchema>

export const userSchema = z.object({
    name:z.string().max(50).optional(),
    email: z.string().email(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
})

export type userType = z.infer<typeof userSchema>

export const updateUserSchema = z.object({
    name:z.string().max(50).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).optional()
})

export type updateUserType = z.infer<typeof updateUserSchema>
