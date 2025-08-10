import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../../pages/homepage/homepage'
import AppBar from '../appbar/AppBar'
import TaskPage from '../../pages/taskpage/TaskPage'
import HabitPage from '../../pages/habitpage/HabitPage'
import MotivationPage from '../../pages/motivationpage/MotivationPage'
import Loader from '../Loader/Loader'

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
