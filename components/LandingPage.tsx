import Image from "next/image";
import React from "react";

import GreenBackgroundSVG from "./ui/GreenBackgroundSVG";

function LandingPage() {
  return (
    <div className='container mx-auto justify-center space-y-6 flex'>
      <div className="flex flex-col py-2 mx-8 lg:py-2 px-8 z-20 text-start align-center">
          <h2 className="text-3xl lg:text-3xl font-extrabold text-black lg:font-size-100">
            Build <span className="text-gfc-green text-3xl">Faster</span>
          </h2>
          <h2 className="text-3xl lg:text-3xl md:text-3xl font-extrabold text-black dark:text-white font-size-100">
                      
          </h2>

          <p className="mt-4 text-black dark:text-white font-size-16 font-bold">
            We are a team of passionate developers who want to help you build your next project.
          </p>
          <div className="lg:mt-0 lg:flex-shrink">
            <div className="mt-12 inline-flex rounded-md shadow">
            </div>
          </div>
      </div>
        <div className="hidden lg:flex">
          <div className="flex items-center p-24 md:p-14 relative z-10 pb-0">
            <Image
              src="https://i.postimg.cc/sDDGgckP/digital-sky.jpg"
              className="rounded-lg absolute left-0"
              alt="Tree"
              style={{ zIndex: "10" }}
              width="436"
              height="255"
            />
            <div className="rounded-lg relative z-0">
              <GreenBackgroundSVG />
            </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;
