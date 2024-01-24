import React, { useState } from 'react'
import TextLayout from './TextLayout'
// import { slider } from '../utils/data'
import { couple1, fam1, fam2/* , fam3 */ } from '../utils/components'



const Slide = () => {

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === slider.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return slider.length - 1
      return index - 1
    })
  }

  const slider = [
    { number: 1, image: fam1, descr: 'ABS family portrait' },
    { number: 2, image: fam2, descr: 'ABS family portrait' },
    { number: 3, image: couple1, descr: 'Mr & Mrs SYLLA' },
  ]

  console.log(slider.length + ' for slider length and displays image ' + imageIndex)

  return (
    <div className='w-full flexV md:flex-col-reverse=== center py-20 max-w-7xl bg-white relative z-[2]'>

      <div className='flex w-full center py-6'> <TextLayout title="A dedicated father "
        text=""
        descr="Abdoulaye SYLLA remains a devoted father to his children. He emphasizes the importance of family values and the pivotal role that a supportive family environment plays in shaping the future of the next generation. He has always prioritized spending quality time with his children, nurturing their dreams, and instilling in them the same values of integrity and compassion that he upholds in his own life.
          "
        hasTitle
        css='w-full center px-12'
        hasText={false}
        hasDescr
        showLines={false}
        color="white"
      />

      </div>

      <div className='flex start w-full relative h-full'>

        <div id='slider'
          className={`flex start w-full relative h-full overflow-x-scroll snap-mandatory snap-x scrollbar-hide mx-20 max-w-7xl== 
                      
                    `}>
          <div className={`full flex start 
            ${imageIndex === 0 && ''} 
          `}>
            {slider.map((item, index) => (

              <div key={index} className={`left relative group overflow-hidden w-full h-full flex-grow-0 shrink-0 snap-x snap-center`}>
                <img className='full oject-cover' src={item.image} alt="photos" />
              </div>
            ))}

          </div>


        </div>

        <div className="descrBox opacity-0==== group-hover:opacity-100= absolute bottom-0 left-0 right-0 flex flex-row-reverse justify-between items-center p-8 hover:bg-white= duration-700 bg-gray-100 mx-20">

          <div className="navigations flex relative w-fit px-2 gap-2">
            <div className={`flex center w-[44px] group ${imageIndex === 0 && "!disabledButton"}`}
              onClick={() => setImageIndex(imageIndex > 0 & imageIndex < slider.length && imageIndex - 1)}>
              <i className='ri-arrow-left-line slideButton ' />
            </div>

            <div className={`flex center w-[44px] group ${imageIndex === slider.length - 1 && '!disabledButton'} `}
              onClick={() => setImageIndex(imageIndex < slider.length && imageIndex + 1)}>
              <i className='ri-arrow-right-line slideButton' />
            </div>
          </div>

          <div className='flex justify-between items-center w-fit'>
            <h4 className='text-black drop-shadow-md tracking-widest'>{imageIndex + 1}/{slider.length} — </h4>
            <h4 className='h4 uppercase  ml-1 animate-slidedown'>{slider[imageIndex].descr}</h4>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Slide