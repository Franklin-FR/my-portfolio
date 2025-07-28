// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import MainSection from './sections/MainSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full'>
      <Navbar/>
      <Hero/>
      <MainSection/>
    </div>
      
    </>
  )
}

export default App


// import {
//   createBrowserRouter,
//   RouterProvider,
//   // Route,
//   // Link,
// } from "react-router-dom";
// import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './sections/Hero'
// import MainSection from './sections/MainSection'

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:  <h1>We welcome you today, we are so elated to have you here</h1>
//     },
//     {
//       path: "/navbar",
//       element:  <NavBar/>
//     },
//     {
//       path: "/homepage",
//       element: <HomePage/>,
//     },
//     {
//       path: "/footer",
//       element: <Footer/>,
//     },
//     {
//       path: "/sidebar",
//       element: <SideBar/>,
//     },
//     {
//       path: "/card",
//       element: <Card/>,
//     },
//     {
//       path: "/mini/card",
//       element: <MiniCard/>,
//     },
//     {
//       path: "/signup",
//       element: <SignUp/>,
//     },
//     {
//       path: "/login",
//       element: <Login/>,
//     },
//     {
//       path: "/wishlist",
//       element: <WishList/>,
//     },
//     {
//       path: "/cart",
//       element: <Cart/>,
//     },
//     {
//       path: "/account",
//       element: <Account/>,
//     },
//     {
//       path: "/about",
//       element: <About/>,
//     },
//     {
//       path: "/personality",
//       element: <PersonalityCard/>,
//     },
//     {
//       path: "/contact",
//       element: <Contact/>,
//     },
//   ]);
  

//   return <RouterProvider router={router} />
// }

// export default App
