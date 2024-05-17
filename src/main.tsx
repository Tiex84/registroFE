import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Classrooms from './pages/classrooms/Classrooms.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import ErrorPage from './pages/404/404.tsx';
import Subjects from './pages/subjects/Subjects.tsx';
import Settings from './pages/settings/Settings.tsx';
import Users from './pages/users/Users.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '',
      element: <Dashboard />
    },{
      path: 'classrooms',
      element: <Classrooms />
    }, {
      path: 'subjects',
      element: <Subjects />
    }, {
      path: 'users',
      element: <Users />
    }, {
      path: 'settings',
      element: <Settings />
    }]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
