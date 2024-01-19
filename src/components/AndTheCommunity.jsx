import React from 'react'
import SplitDiv from './SplitDiv'
import { Socials, abswhite } from '../utils/components'


const AndTheCommunity = () => {
  return (
    <div className="&TheCommunity h-full lg:min-h-[600px] w-screen flexV lg:flex center relative bg-blakk py-10 overflow-y-hidden">
      <div className='flexV lg:flex-row center w-full =lg:h-[80vh] lg:max-h-[600px]= relative max-w-7xl'>

        <SplitDiv title="The philanthropist" color="black" link="/the-philanthropist"
          hasTitle={true} hasText={true}  hasDescr={true}
          showLines={true}
          mainCSS="lg:w-full"
          css="w-full pr-0"
          blockCSS="!h-fit w-full min-w-full lg:pr-0"
          layout={1} 
          text='& the community' 
          descr="Abdoulaye SYLLA's vision extends far beyond the economic realm; it encompasses a holistic approach to societal well-being. His commitment to social equity, environmental sustainability, and overall quality of life for his fellow Senegalese showcases the depth of his vision. ABS is not just a leader driven by numbers and statistics; he is a champion of comprehensive progress."
          wrapperCSS='h-fit w-1/2== hidden=' 
          imageCSS='hidden'
          image={abswhite}
          hasLink
        />
        <Socials css="" />

      </div>
    </div>
  )
}

export default AndTheCommunity