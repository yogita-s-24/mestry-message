import {z} from "zod";

export const verifySchema = z.objcet({
    code : z.string().length(6, {message : "Code must be 6 characters"})
})