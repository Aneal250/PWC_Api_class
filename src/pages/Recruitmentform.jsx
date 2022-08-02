import React, { useState, useEffect } from "react";
import "./RecruitmentForm.css";

const Recruitmentform = () => {
	const initialState = { username: "", email: "", password: "" };

	const [inputValue, setInputValue] = useState({ initialState });
	const [errorCheck, setErrorCheck] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [storedData, setStoredData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		console.log(inputValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorCheck(validateInput(inputValue));
		console.log(inputValue);

		const input = {
			username: "john",
			email: "anealemeka@gmail.com",
			password: "Admin12345",
		};
		localStorage.setItem("inputValue", JSON.stringify(input));
	};

	const validateInput = (values) => {
		let error = {};
		var regrex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
		if (!values.username) {
			error.username = "Username is required";
		}
		if (!values.email) {
			error.email = "Email is required";
		} else if (!values.email.includes("@")) {
			error.email = "Email is invalid";
		}
		if (!values.password) {
			error.password = "Password is required";
		} else if (values.password.length < 4) {
			error.password = "Password must be at least 6 characters";
		} else if (values.password.length > 16) {
			error.password = "Password must be less than 20 characters";
		} else if (regrex.test(values.password)) {
			error.password = "Password must not contain special characters";
		}

		if (
			values.password === "" &&
			values.username === "" &&
			values.email === ""
		) {
			setIsSubmit(true);
		}

		return error;
	};

	useEffect(() => {
		const data = localStorage.getItem("inputValue");
		if (data) {
			setStoredData(JSON.parse(data));
		}
	}, []);

	console.log(storedData);
	return (
		<div className="main">
			<div className="container">
				<div className="row">
					{isSubmit && (
						<div className="success">
							<h3>Login Successful</h3>
						</div>
					)}
					<h1>Recruitment Form</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username">username</label>
							<input
								type="text"
								placeholder="username"
								id="username"
								name="username"
								value={inputValue.username}
								onChange={handleChange}
							/>
							<p>{errorCheck.username}</p>
						</div>
						<div>
							<label htmlFor="email">email</label>
							<input
								type="text"
								placeholder="email"
								id="email"
								name="email"
								value={inputValue.email}
								onChange={handleChange}
							/>
							<p>{errorCheck.email}</p>
						</div>
						<div>
							<label htmlFor="email">password</label>
							<input
								type="password"
								placeholder="password"
								id="password"
								name="password"
								value={inputValue.password}
								onChange={handleChange}
							/>
							<p>{errorCheck.password}</p>
						</div>
						<button className="btn" type="submit">
							Submit
						</button>
					</form>

					<div>
						<span>name: {storedData.username}</span>
						<span>email: {storedData.email}</span>
						<span>password: {storedData.password}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recruitmentform;
