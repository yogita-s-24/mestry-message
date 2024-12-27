import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string,
    createdAt: Date
}

const MessageShema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true],
        match: [
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain at least 8 characters, one letter, one number and one special character"
        ]
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
        unique: true,

    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry is required"],
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        required: [true, "Is verified is required"],
        default: false
    },

    isAcceptingMessage: {
        type: Boolean,
        required: [true, "Is accepting message is required"],
        default: false
    },
    messages: [MessageShema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

export default UserModel;
