import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home,alpha,code} from "./pages/Home";
import {CodeEditor,output} from "./pages/CodeEditor";
import Test from "./pages/Test";

export default function Beginning() {
    
  return (

  <div >
    <BrowserRouter>
            <Routes>
              <Route
                         exact path="/"
                        element={<Home />}
                    />
              <Route
                         exact path="/CodeEditor"
                        element={<CodeEditor />}
                    />
              <Route
                         exact path="/Test"
                        element={<Test />}
                    />
            </Routes>
          </BrowserRouter>
  </div>
  );
}







