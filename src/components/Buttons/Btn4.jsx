import React from 'react'
import "./Btn4.css"

const Btn4 = ({link}) => {
return (
    <div className="btn4">
    <a href={link}>
    <button>
    S T A R T
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
</a>
</div>
)
}

export default Btn4
