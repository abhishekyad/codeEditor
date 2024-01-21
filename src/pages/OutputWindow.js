import React from "react";

const OutputWindow = ({ outputDetails }) => {
  return (
    <div>{outputDetails?
      <div class="button" style={{display:'inline-block', backgroundColor:'white', color:'black', justifyContent:'center',height:'10vh'}} >
        <h1 style={{display:'flex', justifyContent:'center',width:'100vh'}}>Output</h1>
        <div >
          {outputDetails.stdout?<h2>{outputDetails.stdout}</h2>: outputDetails.stderr?<h2>{outputDetails.stderr.substring(outputDetails.stderr.indexOf(',')+1)}</h2>:null}
        </div>
      </div>:null}
    </div>
  );
};

export default OutputWindow;