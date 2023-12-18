import React from "react";

import InstagramImg from "./InstagramImg";

import socials from "@/lib/socials";

function Instagram() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-12">
      <p className="text-4xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@creative_photos</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {socials.map((image, index) => (
          <InstagramImg key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Instagram;
