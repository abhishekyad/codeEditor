import React, { useEffect, useState } from "react";
import ProblemStatement from "./ProblemStatement";
import axios from "axios";
import { languageOptions } from "../constants/languageOptions";
import {useLocation} from 'react-router-dom';
import {Home,alpha,codes} from './Home'
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import Language from "./Language";
import { useNavigate } from "react-router-dom";
import text1 from '../testcases/tc1.js';
import text2 from '../testcases/tc2.js';
import text3 from '../testcases/tc3.js';
import text4 from '../testcases/tc4.js';
import text5 from '../testcases/tc5.js';
import text6 from '../testcases/tc6.js';
import text7 from '../testcases/tc7.js';
import text8 from '../testcases/tc8.js';
import text9 from '../testcases/tc9.js';
import text10 from '../testcases/tc10.js';



let output=[[['',''],['',''],['',''],['',''],['','']],
             [['',''],['',''],['',''],['',''],['','']],
             [['',''],['',''],['',''],['',''],['','']],
             [['',''],['',''],['',''],['',''],['','']],
             [['',''],['',''],['',''],['',''],['','']]];
let input=[text1,text2,text3,text4,text5,text6,text7,text8,text9,text10];
const CodeEditor = () => {
  const location=useLocation()
  const [code, setCode] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [loader,setLoader] = useState(false);
  const [language, setLanguage] = useState(languageOptions[0]);
  const programId=location.state.key.substring(0,location.state.key.indexOf(":"));
  let navigate= useNavigate();

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
    console.log(sl.value);
  };
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        codes[location.state.count]=data;
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = async() => {
    setProcessing(true);
    let name
    switch(language.value){
    case 'python': name='file.py';break;
    case 'javascript': name='file.js';break;
    case 'java': name='file.java';break;
    }
    const opt = {
      method: 'POST',
      url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b3f943c655msh1421920b8f8a6f2p1feca9jsn87a8bca0917e',
        'X-RapidAPI-Host': 'onecompiler-apis.p.rapidapi.com'
      },
      data: {
        language: language.value,
        stdin: customInput,
        files: [
          {
            name: name,
            content: codes[location.state.count]
          }
        ]
      }
    };
    try{
    let response= await axios.request(opt);
    setOutputDetails(response.data);
    console.log(response.data);
    setProcessing(false);
    }
    catch(err){
      alert(err.statusCode);
    }
    // axios.post('https://api.jdoodle.com/v1/execute/?script=&clientId=8f768d24ae56a53a7f9c7cc7dd360266&clientSecret=217797a06bf7a2cd63dfd2a848d4ba2422d97eadd9e9457ac0adcb66fce90219')
    // .then(response => {
    //   alert(response.data.error)
    //   })
    //   .catch(error => {
    //   });
  };

  const handleSubmit = async() => {
    alpha[location.state.count]=1
    setLoader(true);
    let name
    let i=1
    let index=location.state.count
    switch(language.value){
    case 'python': name='file.py';break;
    case 'javascript': name='file.js';break;
    case 'java': name='file.java';break;
    }
    for (i = 0; i <5; i++) {
    const opt = {
      method: 'POST',
      url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b3f943c655msh1421920b8f8a6f2p1feca9jsn87a8bca0917e',
        'X-RapidAPI-Host': 'onecompiler-apis.p.rapidapi.com'
      },
      data: {
        language: language.value,
        stdin: input[programId-1][0][i],
        files: [
          {
            name: name,
            content: codes[index]
          }
        ]
      }
    };
    try{
    let response= await axios.request(opt);
    output[index][i][0]=response.data;   //actual output
    output[index][i][1]=input[programId-1][1][i];       // desired output
    console.log(response.data);
    setProcessing(false);
    }
    catch(err){
      alert(err.statusCode);
    }
  }
      navigate(-1);
    };


  

  return (
    <div style={{display:'flex',justifyContent:'center', height:'100vh',backgroundColor:'green'}}>
      
      <div style={{display:'flex', width:'100vh', justifyContent:'center'}}>
      <div style={{backgroundColor:'limegreen'}}>
      <h1 >Problem Statement</h1>
      <div style={{padding:'2vh',justifyContent:'left'}}>{(location.state.key).substring(location.state.key.indexOf(":")+1)}</div>
      </div>
      </div>
      <div >
          <Language onSelectChange={onSelectChange} />
        <div>
          <ProblemStatement
            code={codes[location.state.count]}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
          
        <div >
          <div style={{display:'inline-block',width:'100vh', height: '50vh'}}>
          {loader?
      <div class="loader-container" style={{position:'absolute', backgroundColor:'white',top:'300px',left:'800px'}}>
      <div class="loader"></div><div style={{display:'flex', justifyContent:'center'}}><p>Loading...</p></div>
   </div>:null}
            <div style={{display:'flex',width:'100vh', height: '7vh'}}>
              <button
              class="button"
              style={{backgroundColor:'white',color:'black',width:'80vh', height: '5vh'}}
              onClick={handleCompile}
              disabled={!code}
              >
                {processing ? "Processing..." : "Compile and Execute"}
              </button>
              <button
              class="button"
              style={{backgroundColor:'white',color:'black',width:'80vh', height: '5vh'}}
              onClick={handleSubmit}>SUBMIT</button>
            </div><CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />

            <div class="button" style={{backgroundColor:'white'}} >
              <OutputWindow outputDetails={outputDetails} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export  {CodeEditor,output};



