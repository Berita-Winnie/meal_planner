import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlanMeals from './pages/PlanMeals'
import WeeklyPlan from './pages/WeeklyPlan'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-meals" element={<PlanMeals />} />
        <Route path="/weekly-plan" element={<WeeklyPlan />} />
      </Routes>
    </>
  )
}

export default App
