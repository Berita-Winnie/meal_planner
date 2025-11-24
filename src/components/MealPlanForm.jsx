import React from 'react'

const MealPlanForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto mt-12">
      <div className=" w-80 h-60 p-4 shadow-sm">
        <form className="p-2">
          <div className="flex flex-row justify-between p-2  mb-2 border-b">
            <label> BREAKFAST</label>
            <button className="bg-[#FC595C] text-white rounded-full h-6 w-6 ">
              +
            </button>
          </div>

          <textarea
            className="w-full h-40 focus:outline-none focus:ring-none  "
            name=""
            placeholder="Enter breakfast"
          />
        </form>
      </div>
      <div className=" w-80 h-60 p-4 shadow-md">
        <form className="p-2">
          <div className="flex flex-row justify-between p-2  mb-2 border-b">
            <label>LUNCH</label>
            <button className="bg-[#FC595C] text-white rounded-full h-6 w-6 ">
              +
            </button>
          </div>

          <textarea
            className="w-full h-40 focus:outline-none focus:ring-none  "
            name=""
            placeholder="Enter lunch"
          />
        </form>
      </div>
      <div className=" w-80 h-60 p-4 shadow-md">
        <form className="p-2">
          <div className="flex flex-row justify-between p-2  mb-2 border-b">
            <label>DINNER</label>
            <button className="bg-[#FC595C] text-white rounded-full h-6 w-6 ">
              +
            </button>
          </div>

          <textarea
            className="w-full h-40 focus:outline-none focus:ring-none  "
            name=""
            placeholder="Enter dinner"
          />
        </form>
      </div>
    </div>
  )
}

export default MealPlanForm
