import { Route, Routes } from 'react-router-dom'
import './App.module.css'
import Loader from '../Loader/Loader'
import { Suspense, lazy } from "react";
import Header from '../Header/Header';
import LoginPage from '../../pages/Loginpage/LoginPage';
import RegistrationPage from '../../pages/Registrationpage/RegistrationPage';
import RestrictedRoute from '../../RestrictedRoute';

const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const TaskPage = lazy(() => import('../../pages/Taskpage/TaskPage'));
const HabitPage = lazy(() => import('../../pages/Habitpage/HabitPage'));
const MotivationPage = lazy(() => import('../../pages/Motivationpage/MotivationPage'));

const App = () => {

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute
                  redirectTo="/tasks" component={<RegistrationPage />}
            />}
          />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />}
            />}
          />
          <Route path="/tasks" element={<TaskPage />}/>
          <Route path="/habits" element={<HabitPage/>}/>
          <Route path="/motivation" element={<MotivationPage/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
