import React ,{useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {CodeEditor,output} from "./CodeEditor";



const Test = () => {
  let navigate= useNavigate();
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
		<div style={{display:'inline-block',height:'100vh',width:'100vh', justifyContent:'center', backgroundColor:'green'}}>
            
            <ul>
                    <div style={{display:'inline-block',height:'1vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}><h2>Problem 1</h2>
                    	<div style={{display:'inline-block',height:'5vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>Input</h10></div><div><h10>Your Output</h10></div><div><h10>Desired Output</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[0][0][0].stdin}</h10></div><div><h10>{output[0][0][0].stdout}</h10></div><div><h10>{output[0][0][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[0][1][0].stdin}</h10></div><div><h10>{output[0][1][0].stdout}</h10></div><div><h10>{output[0][1][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[0][2][0].stdin}</h10></div><div><h10>{output[0][2][0].stdout}</h10></div><div><h10>{output[0][2][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[0][3][0].stdin}</h10></div><div><h10>{output[0][3][0].stdout}</h10></div><div><h10>{output[0][3][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[0][4][0].stdin}</h10></div><div><h10>{output[0][4][0].stdout}</h10></div><div><h10>{output[0][4][1]}</h10></div></div>
                    	</div>
                    </div>
                	<div style={{display:'inline-block',height:'1vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}><h2>Problem 2</h2>
                    	<div style={{display:'inline-block',height:'5vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>Input</h10></div><div><h10>Your Output</h10></div><div><h10>Desired Output</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[1][0][0].stdin}</h10></div><div><h10>{output[1][0][0].stdout}</h10></div><div><h10>{output[1][0][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[1][1][0].stdin}</h10></div><div><h10>{output[1][1][0].stdout}</h10></div><div><h10>{output[1][1][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[1][2][0].stdin}</h10></div><div><h10>{output[1][2][0].stdout}</h10></div><div><h10>{output[1][2][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[1][3][0].stdin}</h10></div><div><h10>{output[1][3][0].stdout}</h10></div><div><h10>{output[1][3][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[1][4][0].stdin}</h10></div><div><h10>{output[1][4][0].stdout}</h10></div><div><h10>{output[1][4][1]}</h10></div></div>
                    	</div>
                    </div>
                    <div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}><h2>Problem 3</h2>
                    	<div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>Input</h10></div><div><h10>Your Output</h10></div><div><h10>Desired Output</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[2][0][0].stdin}</h10></div><div><h10>{output[2][0][0].stdout}</h10></div><div><h10>{output[2][0][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[2][1][0].stdin}</h10></div><div><h10>{output[2][1][0].stdout}</h10></div><div><h10>{output[2][1][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[2][2][0].stdin}</h10></div><div><h10>{output[2][2][0].stdout}</h10></div><div><h10>{output[2][2][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[2][3][0].stdin}</h10></div><div><h10>{output[2][3][0].stdout}</h10></div><div><h10>{output[2][3][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[2][4][0].stdin}</h10></div><div><h10>{output[2][4][0].stdout}</h10></div><div><h10>{output[2][4][1]}</h10></div></div>
                    	</div>
                    </div>
                    <div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}><h2>Problem 4</h2>
                    	<div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>Input</h10></div><div><h10>Your Output</h10></div><div><h10>Desired Output</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[3][0][0].stdin}</h10></div><div><h10>{output[3][0][0].stdout}</h10></div><div><h10>{output[3][0][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[3][1][0].stdin}</h10></div><div><h10>{output[3][1][0].stdout}</h10></div><div><h10>{output[3][1][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[3][2][0].stdin}</h10></div><div><h10>{output[3][2][0].stdout}</h10></div><div><h10>{output[3][2][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[3][3][0].stdin}</h10></div><div><h10>{output[3][3][0].stdout}</h10></div><div><h10>{output[3][3][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[3][4][0].stdin}</h10></div><div><h10>{output[3][4][0].stdout}</h10></div><div><h10>{output[3][4][1]}</h10></div></div>
                    	</div>
                    </div>
                    <div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}><h2>Problem 5</h2>
                    	<div style={{display:'inline-block',height:'10vh',width:'100vh',color:'white', alignItems:'center',justifyContent:'center'}}>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>Input</h10></div><div><h10>Your Output</h10></div><div><h10>Desired Output</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[4][0][0].stdin}</h10></div><div><h10>{output[4][0][0].stdout}</h10></div><div><h10>{output[4][0][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[4][1][0].stdin}</h10></div><div><h10>{output[4][1][0].stdout}</h10></div><div><h10>{output[4][1][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[4][2][0].stdin}</h10></div><div><h10>{output[4][2][0].stdout}</h10></div><div><h10>{output[4][2][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[4][3][0].stdin}</h10></div><div><h10>{output[4][3][0].stdout}</h10></div><div><h10>{output[4][3][1]}</h10></div></div>
	                    	<div style={{display:'inline-block', padding:'20px'}}><div><h10>{output[4][4][0].stdin}</h10></div><div><h10>{output[4][4][0].stdout}</h10></div><div><h10>{output[4][4][1]}</h10></div></div>
                    	</div>
                    </div>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate(-1)}><h2>Back to Problems</h2></button> 
                    </div>
            </ul>
        </div>
        </div>
    );
};

export default Test;