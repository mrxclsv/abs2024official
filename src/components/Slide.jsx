import React, { useState } from 'react'
import TextLayout from './TextLayout'
// import { slider } from '../utils/data'
import { couple1, fam1, fam2, jumeaux, jumeaux_ } from '../utils/components'



const Slide = () => {

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === slider.length - 1)
        return 0
      return index + 1
    })
  }

  function nextImage() {
    setImageIndex(index => {
      if (imageIndex === slider.length - 1)
        return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return slider.length - 1
      return index - 1
    })
  }

  const [isOpen, setIsOpen] = useState(false)
  const [imageToShow, setImageToShow] = useState(null)

  function currentImage() {
    setIsOpen(imageID => {
      if (imageIndex === slider[imageIndex])
        return setIsOpen()
    })
  }

  const slider = [
    { number: 1,
      image: fam2, 
      descr: 'ABS family portrait',
      css: 'w-full !object-center !origin-center'
    },
    { number: 2,
      image: fam1, 
      descr: 'Sons of ABS', 
      css: ''
    },
    { number: 3,
      image: couple1, 
      descr: 'Mr & Mrs SYLLA', 
      css: ''
    },
    { number: 4,
      image: jumeaux, 
      descr: 'Sylla Twins',
      css: '!object-contain '
    },
  ]

  // console.log(slider.length + ' for slider length and displays image ' + imageIndex)

  return (
    <div className='w-full flexV center py-20 lg:max-w-7xl bg-white relative z-[2]'>

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

      <div className='flexV  start w-full relative h-full lg:max-w-7xl'>
        {/* <div className='thumbnails flex justify-between lg:max-w-7xl gap-20 mx-auto py-20'>
          {slider.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setImageIndex(index)} 
              className={`left relative group overflow-hidden scrollbar-hide bg-blakk rounded-lg w-full h-[100px] snap-x snap-center`}>
              <img className='h-full oject-cover relative opacity-70 group-hover:opacity-100 transition duration-700' src={item.image} alt="photos" />
            </div>
          ))}
        </div> */}

        <div id='slider'
          className={`flex max-h-[65vh] start full relative overflow-x-scroll snap-mandatory snap-x scrollbar-hide z-[200]`}>
          <div className={`full flex items-start justify-start 
            ${imageIndex === 0 && `-translate-x-[0]`} 
            ${imageIndex === 1 && `-translate-x-[100%]`}
            ${imageIndex === 2 && `-translate-x-[200%]`}
            ${imageIndex === 3 && `-translate-x-[300%]`}
            ${imageIndex === 4 && `-translate-x-[400%]`}
            ${imageIndex === 5 && `-translate-x-[500%]`}
            transition duration-1000 ease-in-out 
          `}>
            {slider.map((item, index) => (
              <div key={item.number} className={`flex !items-start !justify-start left relative group overflow-hidden overflow-y-hidden scrollbar-hide w-full h-full flex-grow-0 shrink-0 snap-x snap-center animate-slowfade min-h-[400px] lg:min-h-[70vh] bg-gray-100 lg:bg-transparent max-h-[1200px] lg:max-w-7xl`}>
                <img className={`inset-0 my-auto h-full absolute sideZero object-cover lg:object-contain transition  ${item.css} `} src={item.image} alt="photos" />
              </div>
            ))}
          </div>
        </div>

        <div id="descrBox" className="flex flex-row-reverse justify-between items-center relative w-full lg:max-w-4xl border-b mx-auto px-6 lg:px-8 py-4 duration-700">

          <div id="navigations" className="flex lg:flex-row relative w-fit lg:px-2 gap-2">
            <div className={`flex center w-[44px] group ${imageIndex === 0 && "!disabledButton"}`}
              onClick={() => setImageIndex(imageIndex > 0 & imageIndex < slider.length && imageIndex - 1)}>
              <i className='ri-arrow-left-line slideButton ' />
            </div>

            <div className={`flex center w-[44px] group ${imageIndex === slider.length - 1 && '=!disabledButton'} `}
              onClick={() => nextImage()}>
              {imageIndex < slider.length - 1 ?
                <i className='ri-arrow-right-line slideButton' />
                :
                <i className='ri-refresh-line slideButton animate-slideright' />
              }
            </div>
          </div>

          <div className='flex flex-col-reverse lg:flex-row w-full start text-left gap-3 lg:gap-0'>
            <h4 className='text-black drop-shadow-md tracking-widest w-16'>{imageIndex + 1}/{slider.length} </h4>
            <h4 className='h4 uppercase w-full lg:text-left animate-slidedown'>{slider[imageIndex].descr}</h4>
          </div>
        </div>

      </div>

      <div id='imageOpen' className={``}>

      </div>


    </div>
  )
}

export default Slide