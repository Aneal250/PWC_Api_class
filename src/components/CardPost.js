import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const CardPost = ({ item }) => {
	const excerpt = (str) => {
		return str.length > 80 ? str.substring(0, 80) + "..." : str;
	};

	return (
		<div key={item.id} className="cardPost">
			<h2>{item.id}</h2>
			<h4>{item.title}</h4>
			<p>{excerpt(item.body)}</p>

			<Link to={`/singleblogpost/${item.id}`}>
				<button className="post-btn"> Read More</button>
			</Link>
		</div>
	);
};

export default CardPost;
