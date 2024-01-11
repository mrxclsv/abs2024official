import React, { useState } from 'react'
import TextLayout from './TextLayout'
import { couple1, fam1, fam2 } from '../utils/components'



const Slide = () => {
  
  const imageAssets = [fam1, fam2, couple1]

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageAssets.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageAssets.length - 1
      return index - 1
    })
  }


  return (
    <div className='w-full flexV md:flex-row center py-20 max-w-7xl relative'>
      <div className='flex start w-full relative h-full '>
        <div className='flex start w-full relative h-full overflow-x-scroll snap-mandatory snap-x scrollbar-hide'>
          {/* {imageAssets?.map((item, index) => ( */}
            <div /* key={index} */ className='left relative overflow-hidden w-full flex-grow-0 shrink-0 snap-x snap-center h-full'>
              <img className='full oject-contain' src={imageAssets[imageIndex]} alt="photos" />
              
              <div className="descrBox absolute bottom-0 left-0 right-0 flexV py-2 bg-gray-200/70">
                <p>ABS family portrait</p>
              </div>
            </div>
          {/* ))} */}

        </div>
        <div className='slideButtonWrapper group left-0' onClick={showPrevImage}>
          <i className='ri-arrow-left-line slideButton ' />
        </div>

        <div className='slideButtonWrapper group right-0' onClick={showNextImage}>
          <i className='ri-arrow-right-line slideButton' />
        </div>
      </div>

      <div className='flex w-full center'>
        <TextLayout 
          title="A dedicated father "
          text=""
          descr="Abdoulaye SYLLA remains a devoted father to his children. He emphasizes the importance of family values and the pivotal role that a supportive family environment plays in shaping the future of the next generation. He has always prioritized spending quality time with his children, nurturing their dreams, and instilling in them the same values of integrity and compassion that he upholds in his own life.
          "
          hasTitle
          hasText={false}
          hasDescr
          showLines={false}
          color="white"
        />

      </div>
    </div>
  )
}

export default Slide