import React from 'react'
import downarrow from "../images/down-arrow.svg"

function Section(props) {

  const bgImage = {
    backgroundImage: `url(./images/${props.backgroundImg})`
  }

  return (
    <div className="section" style={bgImage}>
        <div className="section--text">
            <h1>{props.title}</h1>
            <p>{props.description} {props.underlineText && <u>Touchless Delivery.</u>}</p>
        </div> 
        <div className="button--group">
            <div className="section--btns">
                <button>{props.leftBtnText}</button>
                {props.rightBtnText && <button>{props.rightBtnText}</button>}
            </div> 
            <img src={downarrow} alt="down-arrow" className="down--arrow" />
        </div>      
    </div>
  )
}

export default Section