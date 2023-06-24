export default /*glsl */ `varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying float vDisplacement;

    uniform float uTime;
    void main(){
        vUv=uv;
        gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);
    }
`