import React from 'react'
import  img2 from './img2.png'
import './About.css';

const About = (props) => {
  let myStyle={
    color:props.mode=='dark'?'white':'black',
    backgroundColor:props.mode=='dark'?'black':'white',
    border:'2px solid',
    borderColor: props.mode=='dark'?'white':'black',

  }
  return (
      < div className="container-fluid" style={{color:props.mode=='dark'?'white':'black'}}> 
       <h1 className="text1"> Made by Divyansh Rastogi </h1>
        <img src={img2} className="logo" style={{border:`6px solid ${props.mode=='dark'?'grey':'black'}`}}height={200} width={200}/> 
        <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About me </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    My name is Divyansh Rastogi and this is the app built  by me . I am  passionate web developer and Coder.I am learning react.

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>About this App </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Contact Me </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                   You can contact me on -
                   <br/>
                    <a href="https://www.instagram.com/itsviper_26/?hl=en">  Instagram</a> 
                    <br/>
                    <a href="www.linkedin.com/in/divyansh-rastogi-"> Linkedin </a>
                     <br/>
                    <a href="https://github.com/DivyanshRAStog"> Github </a>
                    </div>
                    </div>
                </div>
            </div>

      </div>
  )
}

export default About
