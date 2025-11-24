import React from 'react'
import { days } from '../assets/calender'

const Calender = () => {
  return (
    <div className="flex flex-row gap-1 sm:gap-2 md:gap-10 justify-center mt-4 sm:mt-6 md:mt-8">
      {days.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center   gap-2  md:gap-4 text-xs md:text-sm p-1 rounded-full"
        >
          <p className="font-medium text-gray-400">{day.day}</p>
          <p className="text-gray-400 rounded-full p-2 w-8 h-8 font-medium">
            {day.date}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Calender
