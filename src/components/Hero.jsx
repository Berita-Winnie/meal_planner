import React from 'react'
import { images } from '../assets/assets'

const Hero = () => {
  return (
    <div className="container flex  flex-col justify-center items-center pt-34  mx-auto px-2  md:px-16">
      <div className="flex flex-row  justify-between items-center md:gap-12 lg:gap-16">
        <img
          className="w-28  sm:w-32 md:w-40 lg:w-60  "
          src={images.humburgur}
          alt=""
        />
        <p className="font-pacifico text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-medium">
          Good food
        </p>
      </div>
      <div className="flex flex-row justify-between items-center md:gap-8  font-medium ">
        <p className="font-pacifico text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Good Mood!
        </p>
        <img
          className="w-46  sm:w-50 md:w-60 lg:w-80"
          src={images.hero}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
