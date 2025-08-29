import { Route, Routes } from 'react-router-dom'
import './App.module.css'
import Loader from './components/Loader/Loader.jsx'
import { Suspense, lazy } from "react";
import RestrictedRoute from './RestrictedRoute.jsx';

const Header = lazy(() => import('../src/components/Header/Header.jsx'));
const HomePage = lazy(() => import('../src/pages/Homepage/HomePage.jsx'));
const TaskPage = lazy(() => import('../src/pages/Taskpage/TaskPage.jsx'));
const HabitPage = lazy(() => import('../src/pages/Habitpage/HabitPage.jsx'));
const MotivationPage = lazy(() => import('../src/pages/Motivationpage/MotivationPage.jsx'));
const LoginPage = lazy(() => import('../src/pages/Loginpage/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('../src/pages/Registrationpage/RegistrationPage.jsx'));

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
