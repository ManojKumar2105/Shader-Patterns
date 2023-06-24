export default /*glsl*/` 
varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid){
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) + sin(rotation) * (uv.x - mid.x) + mid.y
    );
}


vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

void main(){
    // gl_FragColor=vec4(vec3(step(0.9,1.0-abs(length(vUv.x-0.5)))),1.0);

    // PATTERN 1
    // gl_FragColor=vec4(vUv.x,vUv.y,1.0,1.0);
    
    // PATTERN 2
    // gl_FragColor=vec4(vUv.x,vUv.y,0.0,1.0);
    
    // PATTERN 3
    // gl_FragColor=vec4(vec3(vUv.y),1.0);
    
    // PATTERN 4
    // gl_FragColor=vec4(vec3(vUv.y),1.0);
    
    // PATTERN 5
    // gl_FragColor=vec4(vec3(step(0.5,vUv.y)),1.0);
    
    // PATTERN 6
    // gl_FragColor=vec4(vec3(step(0.8,mod(vUv.y*10.0,1.0))),1.0);
    
    // PATTERN 7
    // float Strength = mod(vUv.y*10.0,1.0);
    // Strength = step(0.8,Strength);
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 8
    // float Strength = mod(vUv.x*10.0,1.0);
    // Strength = step(0.8,Strength);
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 9
    // float Strength = step(0.8,mod(vUv.x*10.0,1.0));
    // Strength += step(0.8,mod(vUv.y*10.0,1.0));
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 10
    // float Strength = step(0.8,mod(vUv.x*10.0,1.0));
    // Strength *= step(0.8,mod(vUv.y*10.0,1.0));
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 11
    // float barX = step(0.4,mod(vUv.x*10.0,1.0));
    // barX *= step(0.8,mod(vUv.y*10.0,1.0));
    // float barY = step(0.8,mod(vUv.x*10.0,1.0));
    // barY *= step(0.4,mod(vUv.y*10.0,1.0));

    // float Strength = barX + barY;
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 12
    // float barX = step(0.4,mod(vUv.x*10.0,1.0));
    // barX *= step(0.8,mod(vUv.y*10.0 + 0.23,1.0));
    // float barY = step(0.8,mod(vUv.x*10.0 - 0.8,1.0));
    // barY *= step(0.4,mod(vUv.y*10.0,1.0));

    // float Strength = barX + barY;
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 13

    // gl_FragColor=vec4(vec3(step(0.1,vUv.x - 0.5)),1.0);
    // gl_FragColor=vec4(vec3(abs(vUv.x - 0.5) ),1.0);
    
    // PATTERN 14
    // float Strength = min(abs(vUv.x - 0.5) , abs(vUv.y - 0.5)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 15
    // float Strength = max(abs(vUv.x - 0.5) , abs(vUv.y - 0.5)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 16
    // float Strength = max(abs(vUv.x - 0.5) , abs(vUv.y - 0.5)); 
    // gl_FragColor=vec4(vec3(step(0.2,Strength)),1.0);

    // PATTERN 17 Square
    // float Strength = max(abs(vUv.x - 0.5) , abs(vUv.y - 0.5)); //Simple way 
    // // float Strength1 = max(abs(vUv.x - 0.5) , abs(vUv.y - 0.5)); 
    // // float Strength2 = 1.0 - max(abs(vUv.x - 0.5) , abs(vUv.y - 0.5));
    // // float Strength = Strength1 * Strength2 ;
    // gl_FragColor=vec4(vec3(step(0.4,Strength)),1.0);

    // PATTERN 18
    // float Strength = floor(vUv.x * 10.0) / 10.0;
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 19
    // float Strength = random(vUv);
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 20
    // float Strength = random(vec2(floor(vUv.x * 10.0) / 10.0 , 
    // floor(vUv.y * 10.0) / 10.0
    // ));
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 21
    // float Strength = length(vUv);
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 22
    // float Strength = length(vUv - 0.5); //Simple way
    // float Strength = distance(vUv,vec2(0.5)); //More performant way
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // // PATTERN 23
    //  float Strength = 1.0 - length(vUv - 0.5); //Simple way
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // // PATTERN 24
    //  float Strength =0.01/length(vUv - 0.5) * 5.0; 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 25 pointLight
    // vec2 lightUv = vec2(
    //     vUv.x * 0.1 + 0.45 ,
    //     vUv.y * 0.8 + 0.1
    // );
    //  float Strength =0.01/length(lightUv - 0.5) * 2.5; 
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // PATTERN 26 Star
    // vec2 lightUvX = vec2(
    //     vUv.x * 0.1 + 0.45 ,
    //     vUv.y * 0.8 + 0.1
    // );

    // float lightX = 0.01/length(lightUvX - 0.5) * 2.5;
    
    // vec2 lightUvY = vec2(
    //     vUv.y * 0.1 + 0.45 ,
    //     vUv.x * 0.8 + 0.1
    // );

    // float lightY = 0.01/length(lightUvY - 0.5) * 2.5;

    //  float Strength = lightX * lightY; 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // PATTERN 27 Unexpected Pattern

    // vec2 rotatedUV = rotate(vUv, 0.8, vec2(0.5));
    // vec2 lightUvX = vec2(
    //     rotatedUV.x * 0.1 + 0.45 ,
    //     rotatedUV.y * 0.8 + 0.1
    // );

    // float lightX = 0.01/length(lightUvX - 0.5) * 2.5;
    
    // vec2 lightUvY = vec2(
    //     rotatedUV.y * 0.1 + 0.45 ,
    //     rotatedUV.x * 0.8 + 0.1
    // );

    // float lightY = 0.01/length(lightUvY - 0.5) * 2.5;

    //  float Strength = lightX * lightY; 
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // Pattern 28 CIRCLE
    //  float Strength = step(0.35,length(vUv - 0.5)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 29 Different circle pattern
    //  float Strength = abs(length(vUv - 0.5) - 0.25); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 30
    //  float Strength = step(0.01,abs(length(vUv - 0.5) - 0.25)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 30
    //  float Strength =1.0 -  step(0.01,abs(length(vUv - 0.5) - 0.25)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 31 Strange Pattern
    // vec2 wavedUv = vec2(
    //     vUv.x,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    //  float Strength =1.0 -  step(0.01,abs(length(wavedUv - 0.5) - 0.25)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    
    // // Pattern 32 Strange Pattern
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 30.0) * 0.1,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    //  float Strength =1.0 -  step(0.01,abs(length(wavedUv - 0.5) - 0.25)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 33
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    //  float Strength =1.0 -  step(0.01,abs(length(wavedUv - 0.5) - 0.25)); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 33
    // float angle = atan(vUv.x,vUv.y);
    //  float Strength =angle; 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 33
    // float angle = atan(vUv.x - 0.5,vUv.y - 0.5);
    // float Strength =angle; 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // Pattern 33
    // float angle = atan(vUv.x - 0.5,vUv.y - 0.5);
    // angle/=3.14*2.0;
    // angle+=0.5;
    // float Strength =angle; 
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    // Pattern 33
    // float angle = atan(vUv.x - 0.5,vUv.y - 0.5);
    // angle/=3.14*2.0;
    // angle+=0.5;
    // angle = mod(angle * 30.0,1.0);
    // float Strength =angle; 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    // // Pattern 33
    // float angle = atan(vUv.x - 0.5,vUv.y - 0.5);
    // angle/=3.14*2.0;
    // angle+=0.5;
    // float Strength =sin(angle * 100.0); 
    // gl_FragColor=vec4(vec3(Strength),1.0);
   
    // // Pattern 33 unexpected but cool pattern
    // float angle = atan(vUv.x - 0.5,vUv.y - 0.5);
    // angle/=3.14*2.0;
    // angle+=0.5;
    // float sinusoid = sin(angle * 100.0); 
    // float radius = 0.25 + sinusoid * 0.02;
    // float Strength = 1.0 - step(0.35,(length(vUv - 0.5)) - radius); 
    // gl_FragColor=vec4(vec3(Strength),1.0);

    //Pattern 33

    // float Strength = cnoise(vUv*10.0);
    // gl_FragColor=vec4(vec3(Strength),1.0);

    //Pattern 33

    // float Strength =step(0.0, cnoise(vUv*10.0));
    // gl_FragColor=vec4(vec3(Strength),1.0);

    //Pattern 33

    // float Strength =step(0.0, cnoise(vUv*10.0));
    // gl_FragColor=vec4(vec3(Strength),1.0);
    //Pattern 33

    // float Strength = 1.0 - abs(cnoise(vUv*10.0));
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    //Pattern 33

    // float Strength = sin(cnoise(vUv*10.0) * 20.0);
    // gl_FragColor=vec4(vec3(Strength),1.0);
    
    //Pattern 33

    float Strength = step(0.5,sin(cnoise(vUv*10.0) * 20.0));
    //Black and WHITE
    // gl_FragColor=vec4(vec3(Strength),1.0);
    vec3 Blackcolor = vec3(0.0);
    vec3 uvcolor = vec3(vUv,1.0);
    vec3 mixedColor = mix(Blackcolor,uvcolor,Strength);

    gl_FragColor=vec4(vec3(mixedColor),1.0);


}`