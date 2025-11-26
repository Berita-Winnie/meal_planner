import React from 'react'
import { images } from '../assets/assets'
import Calender from './calender'

const PlannedMeals = () => {
  return (
    <>
      <Calender />
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto mt-12">
        <div className=" relative w-80 h-60 p-4 shadow-sm bg-[linear-gradient(to_bottom,#ffffff_55%,#017371_100%)]  rounded-sm">
          <form className="p-2">
            <div className="flex flex-row justify-between p-2  mb-2 border-b ">
              <label> BREAKFAST</label>
            </div>
            <img
              src={images.morning}
              alt=""
              width={220}
              className="absolute left-36  top-20"
            />
          </form>
        </div>

        <div className=" relative w-80 h-60 p-4 shadow-sm bg-[linear-gradient(to_bottom,#ffffff_55%,#017371_100%)]  rounded-sm">
          <form className="p-2">
            <div className="flex flex-row justify-between p-2  mb-2 border-b ">
              <label>LUNCH</label>
            </div>
            <img
              src={images.lunch}
              alt=""
              width={220}
              className="absolute left-36  top-20"
            />
          </form>
        </div>

        <div className=" relative w-80 h-60 p-4 shadow-sm bg-[linear-gradient(to_bottom,#ffffff_55%,#017371_100%)]  rounded-sm">
          <form className="p-2">
            <div className="flex flex-row justify-between p-2  mb-2 border-b ">
              <label> DINNER</label>
            </div>
            <img
              src={images.dinner}
              alt=""
              width={220}
              className="absolute left-36  top-20"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default PlannedMeals
