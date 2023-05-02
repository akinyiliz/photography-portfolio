/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
	return (
		<div className="max-w-[1240px] m-auto h-screen p-4">
			<h1 className="text-3xl font-bold p-4 text-center">
				Let's work together
			</h1>
			<form className="max-w-[600px] m-auto">
				<div className="grid grid-cols-2 gap-2">
					<input
						className="border shadow-lg p-3"
						type="text"
						placeholder="Name"
					/>
					<input
						className="border shadow-lg p-3"
						type="email"
						placeholder="Email"
					/>
				</div>
				<input
					className="border shadow-lg p-3 w-full my-2"
					type="text"
					placeholder="Subject"
				/>
				<textarea
					className="border shadow-lg p-3 w-full"
					cols="30"
					row="10"
					placeholder="Message"
				></textarea>
				<button className="border shadow-lg w-full p-3 mt-2">Submit</button>
			</form>
		</div>
	);
};

export default Contact;
