import React from 'react'
const Helmet = (props) => {
  document.title = "Kider - " + props.title;
  return (
    <>
      <div>{props.children}</div>
    </>
  )
}
export default Helmet