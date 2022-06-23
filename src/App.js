
import './App.css';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React,{useState} from 'react'
 import Alert from './components/Alert';
 import About from './components/About';
 import Home from './components/Home'
 import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light')//dark mide ienns of nit
  const[alert,setAlert]=useState(':light mode enabled');
  const showAlert=(message,type)=>
  {
setAlert({
  msg:message,
  typ:type,
})
setTimeout(()=>
{
  setAlert(null)
},1500)
  }
  const toggleMode = ()=>
  {
    if (mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert(":Dark mode enabled" , "success")
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(":light mode enabled" , "success")
    }
  }
  return (
    <>
    <Router>
    <Navbar  title="TextUtils"  mode={mode} toggleMode={toggleMode}> </Navbar>
    <Alert alert={alert}> </Alert>
      <div className="container my-4" >
     
      </div>
      <Routes> 

      <Route exact  path="/" element= { <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> } />
      <Route exact path="/" element= { <Home/>} />   
        <Route exact  path="/components/About" element= {<About/>} />
        </Routes>
      </Router>
    </>
  
  );
}

export default App; 