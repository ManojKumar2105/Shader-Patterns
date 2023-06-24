
import React from "react";

import vertexShader1 from "../shaders/vertexShader1.js";
import fragmentShader1 from "../shaders/fragmentShader1.js";

export default function Experience(){

    return (
        <>
                 <mesh>
                    <planeGeometry />
                    <shaderMaterial vertexShader={vertexShader1} fragmentShader={fragmentShader1} />
                 </mesh>
        </>
    )
    
}



