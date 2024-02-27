import React, { useEffect, useState } from 'react'
import "../style/Gototop.css"

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const gotoup = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const listenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll)
  }, []);

  return (
    <>
      {isVisible && (
        <div className="go_up flex justify-end 
      " onClick={gotoup}>
          <button className="bg-[#fe7555] h-[58px] w-[48px] rounded-full"><i class="fa-solid fa-arrow-up"></i></button>

        </div>
      )}
    </>

  )
}
export default GoToTop