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
    <div className=" absolute top-0 left-0 w-full z-10 overflow-hidden ">
      <div className="  container max-w-[80%] flex flex-row mx-auto  justify-between items-center p-6 ">
        <h3 className="font-medium text-2xl md:text-3xl ">Berita</h3>
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
          className={` ${
            showMobileNav ? 'hidden' : 'block'
          } cursor-pointer md:hidden`}
          src={images.menu_icon}
          alt=""
        />

        {/* --------Mobile nav------------ */}
        <div
          className={` ${
            showMobileNav ? ' fixed w-full ' : 'hidden'
          }  right-0 top-0 bottom-0 overflow-hidden bg-white/90 transition-all  `}
        >
          <div className="flex flex-col  gap-8">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
