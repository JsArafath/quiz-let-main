import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Quiz from './Components/Quiz/Quiz';
import Charts from './Components/Charts/Charts';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/quiz/:quizId',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <Quiz></Quiz>
      },
      {
        path: '/quiz',
        element: <Quiz></Quiz>
      },
      {
        path: '/statistics',
        element: <Charts></Charts>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  
])
function App() {
  return (
   <div className='banner-bg'>
    <RouterProvider router={router}>
    
    </RouterProvider>
   </div>
  );
}

export default App;
