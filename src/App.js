import {/*  useEffect,  useEffect,*/ useEffect, useState } from 'react';
import { /* Navigate, */ Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Navbar, Footer, NotFound,
  Home, SonOfSenegal, TheLeader, TheVisionary, ThePhilanthropist,
  Projects,
  ABSFacts,
  ScrollToTop,
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
    if (menu === true) {
      setMenu(false)
    } else {
      setMenu(true)
    };
  };

  const [navW, setNavW] = useState(false)
  const toggleNav = () => setNavW(!navW)

  const [scrollTop, setScrollTop] = useState(false);

  function toggleScroll() {
    // console.log(window.scrollY)
    if (window.scrollY > 500) {
      setScrollTop(true)
    } else setScrollTop(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', toggleScroll);
    return () => {
      window.removeEventListener('scroll', toggleScroll)
    }
  }, [])

  let scrollDuration = 200; // duration in milliseconds
  let scrollStep = -window.scrollY / (scrollDuration / 1); // 16ms is the time between frames

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



  return (

    <div className="APP flexV  relative overflow-x-hidden overflow-y-auto== ==scrollbar-hide scroll-smooth">

      <Navbar nawW={navW} menu={menu} setMenu={setMenu}
        toggleNav={toggleNav} toggleMenu={toggleMenu}
      />

      <ScrollToTop scrollTop={scrollTop} toggleScroll={toggleScroll} scrollToTop={scrollToTop} />

      <main className='flex w-[100dvw] min-h-[100dvh] overflow-x-hidden items-center justify-start relative scrollbar-hide scroll-smooth'>

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/son-of-senegal" element={<SonOfSenegal />} />
          <Route exact path="/the-leader" element={<TheLeader />} />
          <Route exact path="/the-philanthropist" element={<ThePhilanthropist />} />
          <Route exact path="/the-visionary" element={<TheVisionary />} />
          <Route exact path="/100facts" element={<ABSFacts />} />
          <Route exact path="/projects" element={<Projects />} />

          <Route exact path="/*" element={<NotFound />} />


        </Routes>

      </main>


      <Footer />

    </div>
  )
}

export default App
