import React from 'react'
import elton from '../assets/elton2.jpg'
import {TypeAnimation} from 'react-type-animation'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa'



const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-fit object-left scale-x-[-1]"
        src={elton}
        alt="MB"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Im Elton Benjamin
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Im a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tech Enthusiast",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                1000,
                " Web Developer",
                1000,
                "",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[75px] w-full'>
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main