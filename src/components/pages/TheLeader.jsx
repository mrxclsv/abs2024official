import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { SplitDiv, TextLayout } from '../../utils/components'
import { project } from '../../utils/data'

const TheLeader = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])

  return (
    <div className='min-h-screen w-screen flexV bg-white text-black'>

      <div className='hero w-full h-[110vh] min-h-[400px] flex center relative bg-gray-100 z-[0]'>
        <div className='full flex center overflow-hidden relative bg-white text-white'>
          <img className='full object-cover object-top pointer-events-none  opacity-100 fixed hover:scale-110' src="/abs/abs_blue_3.PNG" alt="xam sa bopp" />
        </div>
        <div className='absolute absoluteAll flex center -translate-y-20  '>
        <h1 className='h1 leading-[100%] font-normal text-left text-[100px] uppercase text-black drop-shadow-lg line md:absolute md:left-20 md:my-auto'>Xam sa bopp</h1>
        </div>

      </div>

      <SplitDiv title="Yoon Wi" 
          hasTitle={true} hasText={true}  hasDescr={true}
          layout={1} 
          css="bg-none bg-gray-700 z-[1]"
          showLines={true}
          text="Building on local talents"
          descr="In order to empower the senegalse workforce, Abdoulaye SYLLA builds on local talent, creating National Giants in various industries, rendering him and his partners much more competitive in national and international business and affairs."
          color="" 
        />

      <div className='splitText z-[1] flex center px-10 paddingY md:py-20 bg-blakk text-white'>

        <div className='contentWrapper md:gap-10'>
          <TextLayout title=""
            text="A leader by example"
            descr="In the modern world, diversity and inclusivity are the foundations of successful organizations, Abdoulaye Sylla's Ecotra stands as an example of how a company can leverage the strengths of both local and foreign talent to create, innovate, and build the nation. With a workforce of 1300 people, including 800 Senegalese, representatives from 20 nations around the world, and 6% disabled individuals."
            hasTitle={false}
            hasText={true}
            hasDescr={true}
            />
            <TextLayout title=""
            text="the senegalese workforce"
            descr="Founded on the principle of supporting local communities and fostering economic development, Abdoulaye Sylla plays a pivotal role in the growth of Senegal's engineering, architectural, technology, and infrastructure sectors. His commitment to hiring local young engineers and architects has provided jobs and also transferred knowledge, skills, and technology to the local workforce."
            hasTitle={false}
            hasText={true}
            hasDescr={true}
            />

        </div>

      </div>

      <div className='w-full flex relative center overflow-hidden h-[80vh] pt-10== bg-white z-[1] '>

        <div className='contentWrapper flexV relative overflow-hidden md:flex-row-reverse'>
          <div className='left Image relative overflow-hidden w-full h-full md:w-1/2 bg-white'>
            <img className='full object-cover object-top' src="/abs/abs_white_wall.jpg" alt="photos" />
            {/* <div className="descrBox absolute bottom-0 left-0 right-0 flexV py-2 bg-gray-200/70">
              <p>Portrait de famille ABS</p>
            </div> */}
          </div>

          <div className='flex w-full md:w-1/2 relative center bg-white z-[2] h-auto'>
            <TextLayout 
              title=""
              text="Empower the disabled: a policy of inclusivity"
              descr="As part of Abdoulaye SYLLA's plan to elevate the nation, he employs 6% disabled individuals as part of his workforce. His approach serves as a model for the nation. By creating an inclusive environment, he demonstrates that disabilities are no barrier.
              "
              css="!bg-white !h-full"
              hasTitle={false}
              hasText
              hasDescr
              showLines
            />

          </div>

        </div>


        </div>

      <div className='flex w-screen relative overflow-hiddenf'>
        <img className='full object-cover' src="/default.jpg" alt="beloved son" />
      </div>

      <div className='splitText z-[1] flex items-start justify-center px-10 py-10 bg-blakk text-white'>

        <div className='contentWrapper'>
          <TextLayout title="Beyond business"
            text="Beyond Business"
            descr="What truly marks ABS as a leader is his unwavering commitment to social & community service. For over 2 decades ABS has actively supported community development projects and initiatives, supporting education, healthcare, and infrastructure in Senegal donating over 2 billion each year.
            #ABS2024 #fiftyfiftyleu #C50PN #xamsabopp."
            hasTitle={true}
            hasText={false}
            hasDescr={true}
            />

            <TextLayout title="20 Years of social service"
            text=""
            descr="Abdoulaye Sylla's life is a testament of how one man can build a better future for his country. From constructing schools and hospitals to sustainable infrastructure and everything in between, his 20 years has created a lasting impact on the Senegal he serves. ABS is a leader and a model of how a man of vision can transform a society."
            hasTitle={true}
            hasText={false}
            hasDescr={true}
            />
        </div>

      </div>

    </div>
  )
}

export default TheLeader