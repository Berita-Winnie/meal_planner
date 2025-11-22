import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { images } from '../assets/assets'
const Navbar = () => {
  const [showMobileNav, setShowmobileNav] = useState(false)
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileNav])

  return (
    <div className=" sticky top-0 left-0 w-full z-50  bg-white/50   backdrop-blur-xl md:px-20 lg:px-30  ">
      <div className="  container  flex flex-row mx-auto  justify-between items-center py-4 px-2 md:p-6 ">
        <h3 className="font-medium text-xl sm:text-2xl md:text-3xl ">Berita</h3>
        <div className=" hidden md:flex flex-row  gap-8 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                : 'font-normal  '
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                : 'font-normal  '
            }
            to="/plan-meals"
          >
            PlanMeals
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                : 'font-normal  '
            }
            to="weekly-plan"
          >
            WeeklyPlan
          </NavLink>
        </div>

        <img
          onClick={() => setShowmobileNav(true)}
          className={`w-8 text-black ${
            showMobileNav ? 'hidden' : 'block'
          } cursor-pointer md:hidden`}
          src={images.menu_icon}
          alt=""
        />

        {/* --------Mobile nav------------ */}
        <div
          className={` 
         fixed top-0 left-0 w-full h-screen bg-white/70  backdrop-blur-3xl z-20  md:hidden transform transition-transform duration-700 ease-in-out  ${
           showMobileNav ? 'translate-x-0' : 'translate-x-full'
         } 
        `}
        >
          <div className="flex flex-col  gap-8 ">
            <div className="flex justify-end">
              <img
                onClick={() => setShowmobileNav(false)}
                className=" w-10 m-4 cursor-pointer "
                src={images.cancel_icon}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-8  p-8">
              <NavLink
                onClick={() => setShowmobileNav(false)}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                    : 'font-normal  '
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setShowmobileNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                    : 'font-normal  '
                }
                to="/plan-meals"
              >
                PlanMeals
              </NavLink>
              <NavLink
                onClick={() => setShowmobileNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? ' pb-1 border-b-2 border-b-[#FC595C] font-semibold '
                    : 'font-normal  '
                }
                to="weekly-plan"
              >
                WeeklyPlan
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
