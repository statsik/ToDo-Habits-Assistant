import { Route, Routes } from 'react-router-dom'
import './App.module.css'
import AppBar from '../appbar/AppBar'
import Loader from '../Loader/Loader'
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import('../../pages/homepage/homepage'));
const TaskPage = lazy(() => import('../../pages/taskpage/TaskPage'));
const HabitPage = lazy(() => import('../../pages/habitpage/HabitPage'));
const MotivationPage = lazy(() => import('../../pages/motivationpage/MotivationPage'));

const App = () => {

  return (
    <>
      <AppBar></AppBar>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/tasks" element={<TaskPage />}/>
          <Route path="/habits" element={<HabitPage/>}/>
          <Route path="/motivation" element={<MotivationPage/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
