export type Post = {
	postId: number;
	authorUsername: string;
	authorHandle: string;
	title: string;
	body: string;
	authorId: number;
	createdOn: string;
	updatedOn: string;
	likedBy: number[];
};


export type UserResp = {
	userId: number;
	username: string,
}
