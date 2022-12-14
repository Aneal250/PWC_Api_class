import React, { useEffect, useState } from "react";

const Conditionals = () => {
	const [text, setText] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// useEffect(() => {
	// 	localStorage.getItem(isLoggedIn);
	// });

	// useEffect(() => {
	// 	localStorage.setItem("text", text);
	// 	console.log(text);
	// }, [text]);

	return (
		<div style={{ textAlign: "center", color: "white" }}>
			<h1>What is Fullstack</h1>
			<button onClick={() => setText(!text)}>Show Text</button>
			{text && isLoggedIn && (
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			)}

			{/* Second Instance */}

			{isLoggedIn ? <p> Welcome you are loggedIn</p> : null}
		</div>
	);
};

export default Conditionals;
