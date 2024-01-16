import {/*  useEffect,  useEffect,*/ useState } from 'react';
import { /* Navigate, */ Routes, Route } from 'react-router-dom';
import './App.css';
import 
{ 
  Navbar, Footer, NotFound,
  Home, SonOfSenegal, TheLeader, TheVisionary, ThePhilanthropist,
  Projects,
  ABSFacts,
}  
from './utils/components';



function App() {


  // ! TODAY AND TIME
  // function getTime() {
  //   const currentHour = new Date.getHours();
  //   // const currentDay = new Date.getDays();
  //   // console.log(currentHour /* + currentDay */);
  //   return {
  //     currentHour: currentHour
  //   }
  // }

  // const [navTrigger, setNavTrigger] = useState(false);
  // const toggleNavTrigger = () => setNavTrigger(!true)


  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    if (menu === true ) {
      setMenu (false)
    } else {
      setMenu(true)
    };
  };
  
  const [navW, setNavW] = useState(false)
  const toggleNav = () => setNavW(!navW)
  // const screenW = window.innerWidth
  // console.log('screen width is', window.innerWidth)
// 
  // useEffect(() => {
  //   if(screenW >= 1024) {
  //     setNavW(true)
  //   } else {
  //     setNavW(false)
  //   } 
  //   console.log('screen width is', window.innerWidth)
  // })



  // useEffect(() => {
  //   window.scroll(0,0)
  // },[])


  return (

    <div className="APP flexV h-screen= relative overflow-x-hidden overflow-y-auto== ==scrollbar-hide scroll-smooth">

      <Navbar nawW={navW} menu={menu} setMenu={setMenu} 
              toggleNav={toggleNav} toggleMenu={toggleMenu} 
          />
      

      <main className='flex w-[100dvw] overflow-x-hidden items-center justify-start relative scrollbar-hide scroll-smooth'>

      <Routes>

        <Route exact path="/"                     element={<Home /* navTrigger={navTrigger} */ />}  />
        <Route exact path="/son-of-senegal"       element={<SonOfSenegal />}  />
        <Route exact path="/the-leader"           element={<TheLeader />}  />
        <Route exact path="/the-philanthropist"   element={<ThePhilanthropist />}  />
        <Route exact path="/the-visionary"        element={<TheVisionary />}  />
        <Route exact path="/100facts"             element={<ABSFacts />}  />
        <Route exact path="/projects"             element={<Projects />}  />

        <Route exact path="/*"                    element={<NotFound />}  />


      </Routes>

      </main>


      <Footer />

    </div>
  )
}

export default App
