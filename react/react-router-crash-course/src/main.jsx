import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

// itna import krne se aacha h js file me sb ko ek sath pehle hi import kra do
// import Home from './component/Home/home'
// import About from './component/About/About.jsx'
// import Contact from './component/Contact/Contact.jsx'
// import Github from './component/Github/Github.jsx'
// import Header from './component/Header/header.jsx'
// import Footer from './component/Footer/Footer.jsx'
import { Home , About, Contact,UserCompo, Github} from './component/index.jsx'


import Layout from './component/HighOrderComponent(hoc)/Layout.jsx'
// import UserCompo from './component/UserCompo/UserCompo.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, 
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<UserCompo />}/>
      <Route path='Github' element={<Github />}/>
    </Route> 
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
