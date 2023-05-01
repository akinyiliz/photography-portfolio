import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { previewData } from "next/dist/client/components/headers";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div
			id="gallery"
			className="max-w-[1240px] mx-auto"
		>
			<h1 className="text-4xl font-bold text-center p-4">Gallery</h1>

			<div className="relative flex justify-center">
				{SliderData.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "opacity-[1] ease-in duration-300"
									: "opacity-0"
							}
						>
							<FaArrowCircleLeft
								size={40}
								className="absolute top-[50%] left-[30px] text-black  cursor-pointer select-none z-[2]"
								onClick={prevSlide}
							/>
							{index === current && (
								<Image
									src={slide.image}
									alt="/"
									width="700"
									height="300"
									style={{
										objectFit: "cover",
									}}
								/>
							)}
							<FaArrowCircleRight
								size={40}
								className="absolute top-[50%] right-[30px] text-black cursor-pointer select-none z-[2]"
								onClick={nextSlide}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
