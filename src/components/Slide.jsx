import React, { useState } from 'react'
import TextLayout from './TextLayout'
// import { slider } from '../utils/data'
import { couple1, fam1, fam2, fam3 } from '../utils/components'



const Slide = () => {

  const imageAssets = [fam1, fam2, couple1]

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === slider.length - 1) return 0
      return index + 1
      // console.log(showNextImage)
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return slider.length - 1
      // console.log(index)
      return index - 1
    })
  }



  const slider = [
    { number: 1, image: fam1, descr: 'ABS family portrait' },
    { number: 2, image: fam2, descr: 'ABS family portrait' },
    { number: 3, image: couple1, descr: 'Mr & Mrs SYLLA' },
  ]

  // console.log('current slider length is ' + slider.length + ' & will translate by ' + 100/slider.length + ' %')

  return (
    <div className='w-screen flexV md:flex-col-reverse=== center py-20 max-w-7xl= relative z-[2]'>

      <div className='flex w-full center py-6'>
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

      <div className='flex start w-full relative h-full lg:max-h-[70vh]== '>

        <div id='slider'
          className={`flex start w-full relative h-full overflow-x-scroll snap-mandatory snap-x scrollbar-hide mx-20 max-w-7xl== 
                      ${imageIndex === 0 && `-translate-x-[calc(1/${slider.length})]`}
                    `}>

          {/* ${imageIndex === 1 && `-translate-x-[calc(1_/_${slider.length})]`} */}
          {slider.map((item, index) => (
            <div
              key={index}
              className={`left relative group overflow-hidden w-full h-full flex-grow-0 shrink-0 snap-x snap-center
                          
              `}>
              <img className='full oject-cover' src={item.image} alt="photos" />
              <h4 className='absolute top-4 left-4 text-white mix-blend-difference drop-shadow-md'>0{index + 1}</h4>

              <div className="descrBox opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 flex flex-row-reverse justify-between items-center p-8 hover:bg-white duration-700 bg-gray-200/50">
                <h4 className='text-black drop-shadow-md tracking-widest'>{index + 1}/{slider.length}</h4>
                <h4 className='h4 uppercase animate-slideright'>{item.descr}</h4>
              </div>
            </div>
          ))}

        </div>
        <div className='slideButtonWrapper group left-0' onClick={showPrevImage}>
          <i className='ri-arrow-left-line slideButton ' />
        </div>

        <div className='slideButtonWrapper group right-0' onClick={showNextImage}>
          <i className='ri-arrow-right-line slideButton' />
        </div>
      </div>


    </div>
  )
}

export default Slide