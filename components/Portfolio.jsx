import React from "react";
import Image from "next/legacy/image";
import Photo1 from "../public/photo-1.avif";
import Photo2 from "../public/photo-2.avif";
import Photo3 from "../public/photo-3.avif";
import Photo4 from "../public/photo-4.avif";
import Photo5 from "../public/photo-5.avif";

const Portfolio = () => {
	return (
		<div className="max-w-[1240px] mx-auto text-center py-8">
			<h1 className="text-4xl font-bold p-4">Photos</h1>
			<div className="grid grid-rows-none p-4 md:grid-cols-5 gap-4">
				<div className="w-full h-full col-span-2 row-span-2 md:col-span-3">
					<Image
						src={Photo1}
						alt=""
						layout="responsive"
						width="677"
						height="451"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src={Photo2}
						alt=""
						width="215"
						height="217"
						layout="responsive"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src={Photo3}
						alt=""
						width="215"
						height="217"
						layout="responsive"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src={Photo4}
						alt=""
						width="215"
						height="217"
						layout="responsive"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src={Photo5}
						alt=""
						width="215"
						height="217"
						layout="responsive"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
