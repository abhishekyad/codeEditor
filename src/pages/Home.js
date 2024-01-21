import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { Checkmark } from 'react-checkmark'
import text1 from '../programs/problem1.js';
import text2 from '../programs/problem2.js';
import text3 from '../programs/problem3.js';
import text4 from '../programs/problem4.js';
import text5 from '../programs/problem5.js';
import text6 from '../programs/problem6.js';
import text7 from '../programs/problem7.js';
import text8 from '../programs/problem8.js';
import text9 from '../programs/problem9.js';
import text0 from '../programs/problem10.js';
import { useNavigate } from "react-router-dom";

let array=[text0,text1,text2,text3,text4,text5,text6,text7,text8,text9]
const shuffled = array.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, 5);
let alpha=[0,0,0,0,0];
let initialcode = null;
let codes=[initialcode,initialcode,initialcode,initialcode,initialcode];

 
const Home = () => {
  let navigate= useNavigate();

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:'inline-block',height:'100vh',width:'100vh', justifyContent:'center', backgroundColor:'green',alignItems:'center'}}>
        <div style={{display:'flex',height:'10vh',width:'100vh', justifyContent:'center', alignItems:'center', backgroundColor:'limegreen', color:'white'}}><h1 >Problems
  </h1></div>
            <br />
            <ul>
                <li>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate("/CodeEditor",{state:{key:selected[0], count:0}})}><h2>Problem 1</h2></button> 
                    {alpha[0]==1 && <Checkmark size='large' />}
                    </div>
                </li>
                <li>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate("/CodeEditor",{state:{key:selected[1], count:1}})}><h2>Problem 2</h2></button> 
                    {alpha[1]==1 && <Checkmark size='large' />}
                    </div>
                </li>
                <li>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate("/CodeEditor",{state:{key:selected[2], count:2}})}><h2>Problem 3</h2></button> 
                    {alpha[2]==1 && <Checkmark size='large' />}
                    </div>
                </li>
                <li>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate("/CodeEditor",{state:{key:selected[3], count:3}})}><h2>Problem 4</h2></button> 
                    {alpha[3]==1 && <Checkmark size='large' />}
                    </div>
                </li>
                <li>
                    <div style={{display:'flex',height:'10vh',width:'100vh', alignItems:'center'}}>
                    <button class="button" style={{backgroundColor:'limegreen',width:'70vh', height: '7vh'}} onClick={() => navigate("/CodeEditor",{state:{key:selected[4], count:4}})}><h2>Problem 5</h2></button> 
                    {alpha[4]==1 && <Checkmark size='large' />}
                    </div>
                </li>
            </ul>
            { (alpha[0]==1&&alpha[1]==1&&alpha[2]==1&&alpha[3]==1&&alpha[4]==1)&&
                    <div style={{padding:'5vh'}}>
                        <button class="button" style={{backgroundColor:'limegreen',width:'85vh', height: '7vh', justifyContent:'center', alignItems:'center'}} onClick={() => navigate("/Test",{state:{key:selected[4], count:4}})}><h2>Run All Test Cases</h2></button>
                    </div>
                }
        </div>
        </div>
    );
};
 
export  {Home,alpha, codes};



