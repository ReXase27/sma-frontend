export type Post = {
    postId: number;
    title: string;
    body: string;
    authorId: number;
    createdOn: string;
    updatedOn: string;
    likedBy: number[];
}

export type PostReq = {
    title: string;
    body: string;
    authorId: number;
}

export type UserReq = {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

export type LoginReq = {
    credential: string;
    password: string;
}