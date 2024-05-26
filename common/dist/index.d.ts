import z from "zod";
export declare const blogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    content: z.ZodString;
    authorName: z.ZodString;
    createdAt: z.ZodString;
    likedBy: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    id?: string | undefined;
    likedBy?: string[] | undefined;
}, {
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    id?: string | undefined;
    likedBy?: string[] | undefined;
}>;
export type blogType = z.infer<typeof blogSchema>;
export declare const updateBlogSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type updateblogType = z.infer<typeof updateBlogSchema>;
export declare const userSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type userType = z.infer<typeof userSchema>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
export type updateUserType = z.infer<typeof updateUserSchema>;
