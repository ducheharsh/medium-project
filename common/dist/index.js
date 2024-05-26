"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.userSchema = exports.updateBlogSchema = exports.blogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.blogSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    authorName: zod_1.default.string(),
    createdAt: zod_1.default.string(),
    likedBy: zod_1.default.array(zod_1.default.string()).optional(),
});
exports.updateBlogSchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
});
exports.userSchema = zod_1.default.object({
    name: zod_1.default.string().max(50).optional(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6, { message: "Password must be at least 6 characters long" }),
});
exports.updateUserSchema = zod_1.default.object({
    name: zod_1.default.string().max(50).optional(),
    email: zod_1.default.string().email().optional(),
    password: zod_1.default.string().min(6, { message: "Password must be at least 6 characters long" }).optional()
});
