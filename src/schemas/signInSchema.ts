import {z} from "zop";

export const signInSchema = z.object({
    identifier : z.string(),
    password : z.string()
})