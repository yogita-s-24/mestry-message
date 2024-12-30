import { Message } from "@/model/User";

export interface ApiResponse {
    (property) ApiResponse.isAcceptingMessages?:
    boolean | undefined
    isAcceptingMessages?: boolean
    messages?:Array<Message>
    


}