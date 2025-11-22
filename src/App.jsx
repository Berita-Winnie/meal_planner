import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlanMeals from './pages/PlanMeals'
import WeeklyPlan from './pages/WeeklyPlan'
import Navbar from './components/Navbar'
import ArrowButton from './components/ArrowButton'
const App = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-meals" element={<PlanMeals />} />
        <Route path="/weekly-plan" element={<WeeklyPlan />} />
      </Routes>
      <ArrowButton />
    </div>
  )
}

export default App
