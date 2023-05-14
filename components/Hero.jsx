import React, { useState } from "react";
import Modal from "./Modal";

export default function Hero({ heading, message }) {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => {
		setShowModal(true);
		console.log("clicked");
	};
	return (
		<div className="flex items-center justify-center h-screen mb-4 bg-fixed bg-center bg-cover custom-bg">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-3rem] ">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
				<button
					onClick={handleShow}
					className="px-8 py-2 border"
				>
					Book
				</button>
				{showModal ? (
					<Modal
						show={showModal}
						handleClose={handleClose}
					></Modal>
				) : null}
			</div>
		</div>
	);
}
