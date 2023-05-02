import React from "react";
import InstagramImg from "./InstagramImg";
import IgImg1 from "../public/ig-img-1.jpeg";
import IgImg2 from "../public/ig-img-2.jpeg";
import IgImg3 from "../public/ig-img-3.jpeg";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";

function Instagram() {
	return (
		<div className="max-w-[1240px] mx-auto text-center py-12">
			<p className="text-4xl font-bold">Follow me on Instagram</p>
			<p className="pb-4">@creative_photos</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
				<InstagramImg socialImg={IgImg1} />
				<InstagramImg socialImg={IgImg2} />
				<InstagramImg socialImg={IgImg3} />
				<InstagramImg socialImg={IgImg4} />
				<InstagramImg socialImg={IgImg5} />
				<InstagramImg socialImg={IgImg6} />
			</div>
		</div>
	);
}

export default Instagram;