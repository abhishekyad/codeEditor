import React from "react";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
      {" "}
      <textarea
        rows="3"
        class="input"
        style={{width:'99vh'}}
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
      ></textarea>
    </div>
  );
};

export default CustomInput;