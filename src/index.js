import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM  from "react-dom/client";
// import { ToneMapping } from "three";
import Experience from "./components/Experience";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Canvas 
     dpr={[1,2]} //setting pixel ratio for all devices
     flat //for linear ToneMapping
     gl={{
      antialias:false,
      // outputEncoding:THREE.LinearEncoding
      
      // outputEncoding:THREE.sRGBEncoding //default
      
      // toneMapping:THREE.CineonToneMapping
      // toneMapping:THREE.ACESFilmicToneMapping
     }}
//   orthographic
   camera={
      {  fov:75,
         // zoom:100,
         near:0.1,
         far:100,
         position:[0,0,2.8]}
      }>   
   <Experience/>
</Canvas>
);
