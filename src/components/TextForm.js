import React,{useState} from 'react'
export default function TextForm(props) {
  const [ text ,setText]=useState(" ");
  const  handleUpClick =(event)=>
  {
// console.log("Handle was clicked");
console.log(event);
  setText("Uppercase was clicked" + text);
  let myText=text.toUpperCase();
  setText(myText);
  props.showAlert("Converted to uppercase" ,"success")
  }
  const  handleOnChange =(event)=>                                                 
  {
console.log("Handle was clicked");
 let a=document.querySelector('textarea').textContent;
// console.log(event.target.value);
setText(event.target.value);
  }
  const handleLowClick=()=>
  {
let mytext1=text.toLowerCase();
setText(mytext1);
props.showAlert("Converted to lowercase" ,"success")
  }
  const clearText=()=>
  {
let mytext=" ";
setText(mytext);
props.showAlert("Text cleared" ,"success")
  }
  const copyText=()=>
  {
    let a=document.querySelector('textarea');
    a.select();
    navigator.clipboard.writeText(a.value);
    alert("Your text is copied");
    props.showAlert("Text copied" ,"success")
  }
  const SpaceText=()=>
  {
    let mytext1=text.split(/[\r\n]/); // each element of this array returns string
    console.log(mytext1);
    var mytext=''; //empty string
    for( var i=0;i<mytext1.length;i++)
    {
      console.log(mytext1[i].split(/[\s]/)); // now each element of string  will split int array 
        mytext=mytext+mytext1[i].split(/[\s]+/).join( ' ')+'\n'; //again converted from array to string by using join + added 2 strings by conceating
        console.log(typeof(mytext));
        props.showAlert("Remove space" ,"success")
    }
   
    console.log(mytext);
    setText(mytext);
  }
  const ExtraLines=()=>
  {
    let mytext2=text.split(/[\r\n]/);
  // console.log(mytext2);
    let mytext3=mytext2.filter((my)=>
    {
        return my!="";
    }

    )
console.log(mytext3);

     setText(mytext3.join('\n'));
       props.showAlert("Remove extra lined" ,"success")
  }

  return (
    <>
      <div  className="container"  style={{color: props.mode==='dark' ?'white':'black'}} >
    <h1 > {props.heading}</h1>
  <div className="mb-3"   style={{color: props.mode==='dark' ?'white':'black'}}>
    <label htmlFor="myBox" className="form-label" >Textarea</label>
    <textarea className="form-control" onChange={handleOnChange} value={text} placeholder="Enter your text"  style={{backgroundColor: props.mode==='dark' ?'black':'white', color: props.mode==='dark' ?'white':'black'} } id="myBOX" rows="10"></textarea>
  </div>
  <button type="button" onClick={handleUpClick}  className="btn btn-primary mx-3 my-3">Convert to Uppercase</button>
  <button type="button" onClick={handleLowClick}  className="btn btn-primary my-3">Convert to Lowercase</button>
  <button type="button" onClick={clearText}  className="btn btn-primary my-3 mx-3">Clear text</button>
  <button type="button" onClick={copyText}  className="btn btn-primary my-3 mx-3">Copy text</button>
  <button type="button" onClick={SpaceText}  className="btn btn-primary my-3 mx-3">Remove extra spaces</button>
  <button type="button" onClick={ExtraLines} className="btn btn-primary my-3 mx-3">Remove blank lines</button>

  </div> 
  <div className="container"  style={{color: props.mode==='dark' ?'white':'black'}}>
<h1> Your text summary</h1>
<p> You typed {text.split(" ").filter((x)=> x!="").length} words , {text.length} characters and {text.split("").filter((x)=>(x>='a'&& x<='z')||(x>='A'&&x<='Z') ).length} alphabets </p>
<p> You typed {text.split("").filter((x)=>(x>='0' && x<='9')).length} digits</p>
<p> It will take {text.split(" ").filter((x)=> x!="").length*(0.008)*(60)}  seconds  or {text.split(" ").filter((x)=> x!="").length*(0.008)}  minutes to read the text</p>
<p> You typed {text.split("").filter((x)=> "~`!@#$%^&*():<>,.?/|+-_=".split("").includes(x)||x.charCodeAt(0)==92||x.charCodeAt(0)==34||x.charCodeAt(0)==39 ).length} specialcharacters</p>
<h2> Preview</h2>
<p> {text} </p>
    </div>
  </>
  );
  }
