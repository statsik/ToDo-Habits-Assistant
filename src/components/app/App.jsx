import { Route, Routes } from 'react-router-dom'
import './App.module.css'
import Loader from '../Loader/Loader'
import { Suspense, lazy } from "react";
import Header from '../header/Header';
import LoginPage from '../../pages/loginpage/LoginPage';
import RegistrationPage from '../../pages/registrationpage/RegistrationPage';
import RestrictedRoute from '../../RestrictedRoute';

const HomePage = lazy(() => import('../../pages/homepage/HomePage'));
const TaskPage = lazy(() => import('../../pages/taskpage/TaskPage'));
const HabitPage = lazy(() => import('../../pages/habitpage/HabitPage'));
const MotivationPage = lazy(() => import('../../pages/motivationpage/MotivationPage'));

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
