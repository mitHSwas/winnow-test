import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: '/quizTropic/:quizId',
          element: <Quizes></Quizes>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
