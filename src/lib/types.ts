export type Post = {
	postId: number;
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
