import { useEffect, useState } from 'react'
import { images } from '../assets/assets'

const ArrowButton = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  //Scrolling back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-10 right-30">
      <button className=" rounded-full bg-[#FC595C]  ">
        <img
          onClick={scrollToTop}
          src={images.scroll}
          width={30}
          alt=""
          className="invert"
        />
      </button>
    </div>
  )
}

export default ArrowButton
