import React, { useEffect, useState } from "react";
import CardPost from "../components/CardPost";
import "./Post.css";

function Posts() {
	const [post, setPost] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPost = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const data = await response.json();
			setPost(data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<section className="Posts">
			<h2>Hello, here are the Posts</h2>

			{isLoading ? (
				<h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>
			) : (
				<div className="card_post">
					{post.map((item, index) => (
						<CardPost key={item.id} item={item} />
					))}
				</div>
			)}
		</section>
	);
}

export default Posts;
