import { Route, Routes } from 'react-router-dom'
import './App.module.css'
import Loader from '../Loader/Loader.jsx'
import { Suspense, lazy } from "react";
import RestrictedRoute from '../../RestrictedRoute.jsx';

const Header = lazy(() => import('../Header/Header.jsx'));
const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const TaskPage = lazy(() => import('../../pages/Taskpage/TaskPage'));
const HabitPage = lazy(() => import('../../pages/Habitpage/HabitPage'));
const MotivationPage = lazy(() => import('../../pages/Motivationpage/MotivationPage'));
const LoginPage = lazy(() => import('../../pages/Loginpage/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/Registrationpage/RegistrationPage.jsx'));

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
