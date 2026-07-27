var kp=Object.defineProperty;var Gp=(s,e,t)=>e in s?kp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ze=(s,e,t)=>Gp(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="169",Hp=0,Dh=1,Vp=2,Df=1,If=2,ei=3,Ri=0,Qt=1,Bn=2,Ai=0,Rr=1,Pl=2,Ih=3,Fh=4,Wp=5,Vi=100,Xp=101,qp=102,Yp=103,jp=104,Kp=200,Zp=201,Jp=202,$p=203,Ll=204,Ul=205,Qp=206,em=207,tm=208,nm=209,im=210,rm=211,sm=212,om=213,am=214,Dl=0,Il=1,Fl=2,Fr=3,Nl=4,Ol=5,Bl=6,zl=7,Ff=0,lm=1,cm=2,Ci=0,hm=1,um=2,fm=3,Nf=4,dm=5,pm=6,mm=7,Of=300,Nr=301,Or=302,kl=303,Gl=304,ua=306,Hl=1e3,Yi=1001,Vl=1002,_n=1003,gm=1004,Qs=1005,$t=1006,Oa=1007,ji=1008,hi=1009,Bf=1010,zf=1011,Ds=1012,Oc=1013,Ji=1014,ii=1015,Hs=1016,Bc=1017,zc=1018,Br=1020,kf=35902,Gf=1021,Hf=1022,Cn=1023,Vf=1024,Wf=1025,Pr=1026,zr=1027,Xf=1028,kc=1029,qf=1030,Gc=1031,Hc=1033,Oo=33776,Bo=33777,zo=33778,ko=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,jl=36196,Kl=37492,Zl=37496,Jl=37808,$l=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,Go=36492,uc=36494,fc=36495,Yf=36283,dc=36284,pc=36285,mc=36286,vm=3200,jf=3201,Kf=0,_m=1,Ti="",Tn="srgb",Pi="srgb-linear",Vc="display-p3",fa="display-p3-linear",Zo="linear",_t="srgb",Jo="rec709",$o="p3",lr=7680,Nh=519,xm=512,ym=513,Sm=514,Zf=515,Mm=516,wm=517,Em=518,bm=519,Oh=35044,Bh="300 es",ri=2e3,Qo=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const bs=Math.PI/180,Is=180/Math.PI;function tr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Gt(s,e,t){return Math.max(e,Math.min(t,s))}function Wc(s,e){return(s%e+e)%e}function Tm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Am(s,e,t){return s!==e?(t-s)/(e-s):0}function Ts(s,e,t){return(1-t)*s+t*e}function Cm(s,e,t,n){return Ts(s,e,1-Math.exp(-t*n))}function Rm(s,e=1){return e-Math.abs(Wc(s,e*2)-e)}function Pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Lm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Um(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dm(s,e){return s+Math.random()*(e-s)}function Im(s){return s*(.5-Math.random())}function Fm(s){s!==void 0&&(zh=s);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(s){return s*bs}function Om(s){return s*Is}function Bm(s){return(s&s-1)===0&&s!==0}function zm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function km(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function br(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:bs,RAD2DEG:Is,generateUUID:tr,clamp:Gt,euclideanModulo:Wc,mapLinear:Tm,inverseLerp:Am,lerp:Ts,damp:Cm,pingpong:Rm,smoothstep:Pm,smootherstep:Lm,randInt:Um,randFloat:Dm,randFloatSpread:Im,seededRandom:Fm,degToRad:Nm,radToDeg:Om,isPowerOfTwo:Bm,ceilPowerOfTwo:zm,floorPowerOfTwo:km,setQuaternionFromProperEuler:Gm,normalize:Xt,denormalize:br};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=i[0],p=i[3],g=i[6],_=i[1],x=i[4],S=i[7],T=i[2],b=i[5],w=i[8];return r[0]=o*v+a*_+l*T,r[3]=o*p+a*x+l*b,r[6]=o*g+a*S+l*w,r[1]=c*v+h*_+f*T,r[4]=c*p+h*x+f*b,r[7]=c*g+h*S+f*w,r[2]=u*v+d*_+m*T,r[5]=u*p+d*x+m*b,r[8]=u*g+d*S+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=t*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Qe;function Jf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hm(){const s=ea("canvas");return s.style.display="block",s}const kh={};function Ho(s){s in kh||(kh[s]=!0,console.warn(s))}function Vm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gh=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hh=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Pi]:{transfer:Zo,primaries:Jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Tn]:{transfer:_t,primaries:Jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fa]:{transfer:Zo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hh),fromReference:s=>s.applyMatrix3(Gh)},[Vc]:{transfer:_t,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hh),fromReference:s=>s.applyMatrix3(Gh).convertLinearToSRGB()}},qm=new Set([Pi,fa]),lt={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ls[e].toReference,i=ls[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ls[s].primaries},getTransfer:function(s){return s===Ti?Zo:ls[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(ls[e].luminanceCoefficients)}};function Lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function za(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cr;class Ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=ea("canvas")),cr.width=e.width,cr.height=e.height;const n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Lr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jm=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ka(i[o].image)):r.push(ka(i[o]))}else r=ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ym.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Km=0;class Wt extends Xr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Yi,i=Yi,r=$t,o=ji,a=Cn,l=hi,c=Wt.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=tr(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Of;Wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,T=(g+1)/2,b=(h+u)/4,w=(f+v)/4,R=(m+p)/4;return x>S&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=w/n):S>T?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=R/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zm extends Xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qf extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let qr=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(f!==v||l!==u||c!==d||h!==m){let p=1-a;const g=l*u+c*d+h*m+f*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,g*_);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const S=a*_;if(l=l*p+u*S,c=c*p+d*S,h=h*p+m*S,f=f*p+v*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-a*d,e[t+2]=c*m+h*d+a*u-l*f,e[t+3]=h*m-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new W,Vh=new qr;class nr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),to.subVectors(this.max,cs),hr.subVectors(e.a,cs),ur.subVectors(e.b,cs),fr.subVectors(e.c,cs),xi.subVectors(ur,hr),yi.subVectors(fr,ur),Ui.subVectors(hr,fr);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Ha(t,hr,ur,fr,to)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,hr,ur,fr,to))?!1:(no.crossVectors(xi,yi),t=[no.x,no.y,no.z],Ha(t,hr,ur,fr,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new W,new W,new W,new W,new W,new W,new W,new W],Mn=new W,eo=new nr,hr=new W,ur=new W,fr=new W,xi=new W,yi=new W,Ui=new W,cs=new W,to=new W,no=new W,Di=new W;function Ha(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $m=new nr,hs=new W,Va=new W;class Yr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$m.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Va)),this.expandByPoint(hs.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new W,Wa=new W,io=new W,Si=new W,Xa=new W,ro=new W,qa=new W;let Xc=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wa.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=Si.dot(this.direction),l=-Si.dot(io),c=Si.lengthSq(),h=Math.abs(1-o*o);let f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Wa).addScaledVector(io,u),d}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){Xa.subVectors(t,e),ro.subVectors(n,e),qa.crossVectors(Xa,ro);let o=this.direction.dot(qa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(Si,ro));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Si));if(c<0||l+c>o)return null;const h=-a*Si.dot(qa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class pt{constructor(e,t,n,i,r,o,a,l,c,h,f,u,d,m,v,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,u,d,m,v,p)}set(e,t,n,i,r,o,a,l,c,h,f,u,d,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,d=o*f,m=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,d=o*f,m=a*h,v=a*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qm,e,eg)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Mi.crossVectors(n,rn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Mi.crossVectors(n,rn)),Mi.normalize(),so.crossVectors(rn,Mi),i[0]=Mi.x,i[4]=so.x,i[8]=rn.x,i[1]=Mi.y,i[5]=so.y,i[9]=rn.y,i[2]=Mi.z,i[6]=so.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],x=n[7],S=n[11],T=n[15],b=i[0],w=i[4],R=i[8],G=i[12],y=i[1],E=i[5],I=i[9],C=i[13],L=i[2],B=i[6],U=i[10],j=i[14],H=i[3],X=i[7],K=i[11],O=i[15];return r[0]=o*b+a*y+l*L+c*H,r[4]=o*w+a*E+l*B+c*X,r[8]=o*R+a*I+l*U+c*K,r[12]=o*G+a*C+l*j+c*O,r[1]=h*b+f*y+u*L+d*H,r[5]=h*w+f*E+u*B+d*X,r[9]=h*R+f*I+u*U+d*K,r[13]=h*G+f*C+u*j+d*O,r[2]=m*b+v*y+p*L+g*H,r[6]=m*w+v*E+p*B+g*X,r[10]=m*R+v*I+p*U+g*K,r[14]=m*G+v*C+p*j+g*O,r[3]=_*b+x*y+S*L+T*H,r[7]=_*w+x*E+S*B+T*X,r[11]=_*R+x*I+S*U+T*K,r[15]=_*G+x*C+S*j+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+r*l*f-i*c*f-r*a*u+n*c*u+i*a*d-n*l*d)+v*(+t*l*d-t*c*u+r*o*u-i*o*d+i*c*h-r*l*h)+p*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*h-n*c*h)+g*(-i*a*h-t*l*f+t*a*u+i*o*f-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],v=e[13],p=e[14],g=e[15],_=f*p*c-v*u*c+v*l*d-a*p*d-f*l*g+a*u*g,x=m*u*c-h*p*c-m*l*d+o*p*d+h*l*g-o*u*g,S=h*v*c-m*f*c+m*a*d-o*v*d-h*a*g+o*f*g,T=m*f*l-h*v*l-m*a*u+o*v*u+h*a*p-o*f*p,b=t*_+n*x+i*S+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(v*u*r-f*p*r-v*i*d+n*p*d+f*i*g-n*u*g)*w,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*g+n*l*g)*w,e[3]=(f*l*r-a*u*r-f*i*c+n*u*c+a*i*d-n*l*d)*w,e[4]=x*w,e[5]=(h*p*r-m*u*r+m*i*d-t*p*d-h*i*g+t*u*g)*w,e[6]=(m*l*r-o*p*r-m*i*c+t*p*c+o*i*g-t*l*g)*w,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*d+t*l*d)*w,e[8]=S*w,e[9]=(m*f*r-h*v*r-m*n*d+t*v*d+h*n*g-t*f*g)*w,e[10]=(o*v*r-m*a*r+m*n*c-t*v*c-o*n*g+t*a*g)*w,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*d-t*a*d)*w,e[12]=T*w,e[13]=(h*v*i-m*f*i+m*n*u-t*v*u-h*n*p+t*f*p)*w,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*p-t*a*p)*w,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*u+t*a*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,v=o*h,p=o*f,g=a*f,_=l*c,x=l*h,S=l*f,T=n.x,b=n.y,w=n.z;return i[0]=(1-(v+g))*T,i[1]=(d+S)*T,i[2]=(m-x)*T,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(u+g))*b,i[6]=(p+_)*b,i[7]=0,i[8]=(m+x)*w,i[9]=(p-_)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=dr.set(i[0],i[1],i[2]).length();const o=dr.set(i[4],i[5],i[6]).length(),a=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const c=1/r,h=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ri){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let d,m;if(a===ri)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Qo)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ri){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-r),u=(t+e)*c,d=(n+i)*h;let m,v;if(a===ri)m=(o+r)*f,v=-2*f;else if(a===Qo)m=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new W,wn=new pt,Qm=new W(0,0,0),eg=new W(1,1,1),Mi=new W,so=new W,rn=new W,Wh=new pt,Xh=new qr;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tg=0;const qh=new W,pr=new qr,Xn=new pt,oo=new W,us=new W,ng=new W,ig=new qr,Yh=new W(1,0,0),jh=new W(0,1,0),Kh=new W(0,0,1),Zh={type:"added"},rg={type:"removed"},mr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class It extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new W,t=new zn,n=new qr,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new Qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(us,oo,this.up):Xn.lookAt(oo,us,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Xn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new W(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new W,qn=new W,ja=new W,Yn=new W,gr=new W,vr=new W,Jh=new W,Ka=new W,Za=new W,Ja=new W,$a=new ht,Qa=new ht,el=new ht;class An{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),qn.subVectors(n,t),ja.subVectors(e,t);const o=En.dot(En),a=En.dot(qn),l=En.dot(ja),c=qn.dot(qn),h=qn.dot(ja),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return $a.setScalar(0),Qa.setScalar(0),el.setScalar(0),$a.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),el.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),qn.subVectors(e,t),En.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;gr.subVectors(i,n),vr.subVectors(r,n),Ka.subVectors(e,n);const l=gr.dot(Ka),c=vr.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,i);const h=gr.dot(Za),f=vr.dot(Za);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(gr,o);Ja.subVectors(e,r);const d=gr.dot(Ja),m=vr.dot(Ja);if(m>=0&&d<=m)return t.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(vr,a);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Jh.subVectors(r,i),a=(f-h)/(f-h+(d-m)),t.copy(i).addScaledVector(Jh,a);const g=1/(p+v+u);return o=v*g,a=u*g,t.copy(n).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function tl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Wc(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return lt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Gt(Vt.r*255,0,255))*65536+Math.round(Gt(Vt.g*255,0,255))*256+Math.round(Gt(Vt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Tn){lt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ao);const n=Ts(wi.h,ao.h,t),i=Ts(wi.s,ao.s,t),r=Ts(wi.l,ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ye;Ye.NAMES=td;let sg=0,ir=class extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Rr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Ul,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class da extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new W,lo=new Ue;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class nd extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class id extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let og=0;const vn=new pt,nl=new It,_r=new W,sn=new nr,fs=new nr,Bt=new W;class cn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?id:nd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(sn.min,fs.min),sn.expandByPoint(Bt),Bt.addVectors(sn.max,fs.max),sn.expandByPoint(Bt)):(sn.expandByPoint(fs.min),sn.expandByPoint(fs.max))}sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),Bt.add(_r)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new W,l[R]=new W;const c=new W,h=new W,f=new W,u=new Ue,d=new Ue,m=new Ue,v=new W,p=new W;function g(R,G,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,G),f.fromBufferAttribute(n,y),u.fromBufferAttribute(r,R),d.fromBufferAttribute(r,G),m.fromBufferAttribute(r,y),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(E),a[R].add(v),a[G].add(v),a[y].add(v),l[R].add(p),l[G].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,G=_.length;R<G;++R){const y=_[R],E=y.start,I=y.count;for(let C=E,L=E+I;C<L;C+=3)g(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const x=new W,S=new W,T=new W,b=new W;function w(R){T.fromBufferAttribute(i,R),b.copy(T);const G=a[R];x.copy(G),x.sub(T.multiplyScalar(T.dot(G))).normalize(),S.crossVectors(b,G);const E=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,G=_.length;R<G;++R){const y=_[R],E=y.start,I=y.count;for(let C=E,L=E+I;C<L;C+=3)w(e.getX(C+0)),w(e.getX(C+1)),w(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new an(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new pt,Ii=new Xc,co=new Yr,Qh=new W,ho=new W,uo=new W,fo=new W,il=new W,po=new W,eu=new W,mo=new W;class Dt extends It{constructor(e=new cn,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(il.fromBufferAttribute(f,e),o?po.addScaledVector(il,h):po.addScaledVector(il.sub(t),h))}t.add(po)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(co.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(co,Qh)===null||Ii.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&($h.copy(r).invert(),Ii.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=_,T=x;S<T;S+=3){const b=a.getX(S),w=a.getX(S+1),R=a.getX(S+2);i=go(this,g,e,n,c,h,f,b,w,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=go(this,o,e,n,c,h,f,_,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=_,T=x;S<T;S+=3){const b=S,w=S+1,R=S+2;i=go(this,g,e,n,c,h,f,b,w,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const _=p,x=p+1,S=p+2;i=go(this,o,e,n,c,h,f,_,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ag(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ri,a),l===null)return null;mo.copy(a),mo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:s}}function go(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ho),s.getVertexPosition(l,uo),s.getVertexPosition(c,fo);const h=ag(s,e,t,n,ho,uo,fo,eu);if(h){const f=new W;An.getBarycoord(eu,ho,uo,fo,f),i&&(h.uv=An.getInterpolatedAttribute(i,a,l,c,f,new Ue)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,l,c,f,new Ue)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new W,materialIndex:0};An.getNormal(ho,uo,fo,u.normal),h.face=u,h.barycoord=f}return h}class rr extends cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function m(v,p,g,_,x,S,T,b,w,R,G){const y=S/w,E=T/R,I=S/2,C=T/2,L=b/2,B=w+1,U=R+1;let j=0,H=0;const X=new W;for(let K=0;K<U;K++){const O=K*E-C;for(let N=0;N<B;N++){const Q=N*y-I;X[v]=Q*_,X[p]=O*x,X[g]=L,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[g]=b>0?1:-1,h.push(X.x,X.y,X.z),f.push(N/w),f.push(1-K/R),j+=1}}for(let K=0;K<R;K++)for(let O=0;O<w;O++){const N=u+O+B*K,Q=u+O+B*(K+1),z=u+(O+1)+B*(K+1),k=u+(O+1)+B*K;l.push(N,Q,k),l.push(Q,z,k),H+=6}a.addGroup(d,H,G),d+=H,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=kr(s[t]);for(const i in n)e[i]=n[i]}return e}function lg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const sd={clone:kr,merge:qt};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new W,tu=new Ue,nu=new Ue;class on extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,yr=1;class ug extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(xr,yr,e,t);i.layers=this.layers,this.add(i);const r=new on(xr,yr,e,t);r.layers=this.layers,this.add(r);const o=new on(xr,yr,e,t);o.layers=this.layers,this.add(o);const a=new on(xr,yr,e,t);a.layers=this.layers,this.add(a);const l=new on(xr,yr,e,t);l.layers=this.layers,this.add(l);const c=new on(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ad extends Wt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fg extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ad(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rr(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Ai});r.uniforms.tEquirect.value=t;const o=new Dt(i,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=$t),new ug(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const rl=new W,dg=new W,pg=new Qe;let Gi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pg.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Fi=new Yr,vo=new W;class qc{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],m=i[9],v=i[10],p=i[11],g=i[12],_=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,u-c,p-d,S-g).normalize(),n[1].setComponents(l+r,u+c,p+d,S+g).normalize(),n[2].setComponents(l+o,u+h,p+m,S+_).normalize(),n[3].setComponents(l-o,u-h,p-m,S-_).normalize(),n[4].setComponents(l-a,u-f,p-v,S-x).normalize(),t===ri)n[5].setComponents(l+a,u+f,p+v,S+x).normalize();else if(t===Qo)n[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mg(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class pi extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,u=t/l,d=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const _=g*u-o;for(let x=0;x<c;x++){const S=x*f-r;m.push(S,-_,0),v.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,S=_+c*(g+1),T=_+1+c*(g+1),b=_+1+c*g;d.push(x,S,b),d.push(S,T,b)}this.setIndex(d),this.setAttribute("position",new ln(m,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:_g,alphamap_pars_fragment:xg,alphatest_fragment:yg,alphatest_pars_fragment:Sg,aomap_fragment:Mg,aomap_pars_fragment:wg,batching_pars_vertex:Eg,batching_vertex:bg,begin_vertex:Tg,beginnormal_vertex:Ag,bsdfs:Cg,iridescence_fragment:Rg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ig,color_fragment:Fg,color_pars_fragment:Ng,color_pars_vertex:Og,color_vertex:Bg,common:zg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Hg,displacementmap_vertex:Vg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:lv,envmap_vertex:$g,fog_vertex:Qg,fog_pars_vertex:ev,fog_fragment:tv,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:hv,lights_phong_fragment:uv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:vv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:Sv,map_fragment:Mv,map_pars_fragment:wv,map_particle_fragment:Ev,map_particle_pars_fragment:bv,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Cv,morphcolor_vertex:Rv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Uv,normal_fragment_begin:Dv,normal_fragment_maps:Iv,normal_pars_fragment:Fv,normal_pars_vertex:Nv,normal_vertex:Ov,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Hv,opaque_fragment:Vv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:jv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:$v,shadowmap_vertex:Qv,shadowmask_pars_fragment:e0,skinbase_vertex:t0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:r0,specularmap_fragment:s0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:f0,uv_vertex:d0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:v0,backgroundCube_frag:_0,cube_vert:x0,cube_frag:y0,depth_vert:S0,depth_frag:M0,distanceRGBA_vert:w0,distanceRGBA_frag:E0,equirect_vert:b0,equirect_frag:T0,linedashed_vert:A0,linedashed_frag:C0,meshbasic_vert:R0,meshbasic_frag:P0,meshlambert_vert:L0,meshlambert_frag:U0,meshmatcap_vert:D0,meshmatcap_frag:I0,meshnormal_vert:F0,meshnormal_frag:N0,meshphong_vert:O0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:k0,meshtoon_vert:G0,meshtoon_frag:H0,points_vert:V0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:j0},Fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},On={basic:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:qt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:qt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:qt([Fe.points,Fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:qt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:qt([Fe.common,Fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:qt([Fe.sprite,Fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:qt([Fe.common,Fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:qt([Fe.lights,Fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const _o={r:0,b:0,g:0},Ni=new zn,K0=new pt;function Z0(s,e,t,n,i,r,o){const a=new Ye(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const S=m(_);S===null?g(a,l):S&&S.isColor&&(g(S,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,x){const S=m(x);S&&(S.isCubeTexture||S.mapping===ua)?(h===void 0&&(h=new Dt(new rr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:kr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(x.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Ni)),h.material.toneMapped=lt.getTransfer(S.colorSpace)!==_t,(f!==S||u!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Dt(new pi(2,2),new fi({name:"BackgroundMaterial",uniforms:kr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,x){_.getRGB(_o,rd(s)),n.buffers.color.setClear(_o.r,_o.g,_o.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:v,addToRenderList:p}}function J0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(y,E,I,C,L){let B=!1;const U=f(C,I,E);r!==U&&(r=U,c(r.object)),B=d(y,C,I,L),B&&m(y,C,I,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(y,E,I,C),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function f(y,E,I){const C=I.wireframe===!0;let L=n[y.id];L===void 0&&(L={},n[y.id]=L);let B=L[E.id];B===void 0&&(B={},L[E.id]=B);let U=B[C];return U===void 0&&(U=u(l()),B[C]=U),U}function u(y){const E=[],I=[],C=[];for(let L=0;L<t;L++)E[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:C,object:y,attributes:{},index:null}}function d(y,E,I,C){const L=r.attributes,B=E.attributes;let U=0;const j=I.getAttributes();for(const H in j)if(j[H].location>=0){const K=L[H];let O=B[H];if(O===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),K===void 0||K.attribute!==O||O&&K.data!==O.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function m(y,E,I,C){const L={},B=E.attributes;let U=0;const j=I.getAttributes();for(const H in j)if(j[H].location>=0){let K=B[H];K===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const O={};O.attribute=K,K&&K.data&&(O.data=K.data),L[H]=O,U++}r.attributes=L,r.attributesNum=U,r.index=C}function v(){const y=r.newAttributes;for(let E=0,I=y.length;E<I;E++)y[E]=0}function p(y){g(y,0)}function g(y,E){const I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[y]=1,C[y]===0&&(s.enableVertexAttribArray(y),C[y]=1),L[y]!==E&&(s.vertexAttribDivisor(y,E),L[y]=E)}function _(){const y=r.newAttributes,E=r.enabledAttributes;for(let I=0,C=E.length;I<C;I++)E[I]!==y[I]&&(s.disableVertexAttribArray(I),E[I]=0)}function x(y,E,I,C,L,B,U){U===!0?s.vertexAttribIPointer(y,E,I,L,B):s.vertexAttribPointer(y,E,I,C,L,B)}function S(y,E,I,C){v();const L=C.attributes,B=I.getAttributes(),U=E.defaultAttributeValues;for(const j in B){const H=B[j];if(H.location>=0){let X=L[j];if(X===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const K=X.normalized,O=X.itemSize,N=e.get(X);if(N===void 0)continue;const Q=N.buffer,z=N.type,k=N.bytesPerElement,ne=z===s.INT||z===s.UNSIGNED_INT||X.gpuType===Oc;if(X.isInterleavedBufferAttribute){const q=X.data,se=q.stride,ce=X.offset;if(q.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)g(H.location+Se,q.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Se=0;Se<H.locationSize;Se++)p(H.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Se=0;Se<H.locationSize;Se++)x(H.location+Se,O/H.locationSize,z,K,se*k,(ce+O/H.locationSize*Se)*k,ne)}else{if(X.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)g(H.location+q,X.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let q=0;q<H.locationSize;q++)p(H.location+q);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let q=0;q<H.locationSize;q++)x(H.location+q,O/H.locationSize,z,K,O*k,O/H.locationSize*q*k,ne)}}else if(U!==void 0){const K=U[j];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}_()}function T(){R();for(const y in n){const E=n[y];for(const I in E){const C=E[I];for(const L in C)h(C[L].object),delete C[L];delete E[I]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const I in E){const C=E[I];for(const L in C)h(C[L].object),delete C[L];delete E[I]}delete n[y.id]}function w(y){for(const E in n){const I=n[E];if(I[y.id]===void 0)continue;const C=I[y.id];for(const L in C)h(C[L].object),delete C[L];delete I[y.id]}}function R(){G(),o=!0,r!==i&&(r=i,c(r.object))}function G(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function $0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];for(let v=0;v<u.length;v++)t.update(m,n,u[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Q0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Cn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==hi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!R)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:T,maxSamples:b}}function e_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Gi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=s.get(f);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,x=_*4;let S=g.clippingState||null;l.value=S,S=h(m,u,x,d);for(let T=0;T!==x;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=d+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=d;x!==v;++x,S+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function t_(s){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Nr:a===Gl&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fg(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class cd extends od{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,iu=[.125,.215,.35,.446,.526,.582],Wi=20,sl=new cd,ru=new Ye;let ol=null,al=0,ll=0,cl=!1;const Hi=(1+Math.sqrt(5))/2,Sr=1/Hi,su=[new W(-Hi,Sr,0),new W(Hi,Sr,0),new W(-Sr,0,Hi),new W(Sr,0,Hi),new W(0,Hi,-Sr),new W(0,Hi,Sr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Hs,format:Cn,colorSpace:Pi,depthBuffer:!1},i=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return i}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,i){const a=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ru),h.toneMapping=Ci,h.autoClear=!1;const d=new da({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Dt(new rr,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(ru),v=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;xo(i,_*x,g>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Nr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=su[(i-r-1)%su.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Dt(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),v=r/m,p=isFinite(r)?1+Math.floor(h*v):Wi;p>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const g=[];let _=0;for(let w=0;w<Wi;++w){const R=w/v,G=Math.exp(-R*R/2);g.push(G),w===0?_+=G:w<p&&(_+=2*G)}for(let w=0;w<g.length;w++)g[w]=g[w]/_;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const S=this._sizeLods[i],T=3*S*(i>x-Tr?i-x+Tr:0),b=4*(this._cubeSize-S);xo(t,T,b,3*S,2*S),l.setRenderTarget(t),l.render(f,sl)}}function n_(s){const e=[],t=[],n=[];let i=s;const r=s-Tr+1+iu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Tr?l=iu[o-s+Tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*d),x=new Float32Array(p*m*d),S=new Float32Array(g*m*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,R=b>2?0:-1,G=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(G,v*m*b),x.set(u,p*m*b);const y=[b,b,b,b,b,b];S.set(y,g*m*b)}const T=new cn;T.setAttribute("position",new an(_,v)),T.setAttribute("uv",new an(x,p)),T.setAttribute("faceIndex",new an(S,g)),e.push(T),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(s,e,t){const n=new $i(s,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function i_(s,e,t){const n=new Float32Array(Wi),i=new W(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function lu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function cu(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Gl,h=l===Nr||l===Or;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ou(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new ou(s)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ho("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o_(s,e,t,n){const i={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const v=u.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)e.remove(v[p])}u.removeEventListener("dispose",o),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const v=d[m];for(let p=0,g=v.length;p<g;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let x=0,S=_.length;x<S;x+=3){const T=_[x+0],b=_[x+1],w=_[x+2];u.push(T,b,b,w,w,T)}}else if(m!==void 0){const _=m.array;v=m.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const T=x+0,b=x+1,w=x+2;u.push(T,b,b,w,w,T)}}else return;const p=new(Jf(u)?id:nd)(u,1);p.version=v;const g=r.get(f);g&&e.remove(g),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function a_(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,u*o,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];t.update(p,n,1)}function f(u,d,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)c(u[g]/o,d[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_];for(let _=0;_<v.length;_++)t.update(g,n,v[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function l_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function c_(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let T=a.attributes.position.count*S,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*b*4*f),R=new Qf(w,T,b,f);R.type=ii,R.needsUpdate=!0;const G=S*4;for(let E=0;E<f;E++){const I=g[E],C=_[E],L=x[E],B=T*b*4*E;for(let U=0;U<I.count;U++){const j=U*G;m===!0&&(i.fromBufferAttribute(I,U),w[B+j+0]=i.x,w[B+j+1]=i.y,w[B+j+2]=i.z,w[B+j+3]=0),v===!0&&(i.fromBufferAttribute(C,U),w[B+j+4]=i.x,w[B+j+5]=i.y,w[B+j+6]=i.z,w[B+j+7]=0),p===!0&&(i.fromBufferAttribute(L,U),w[B+j+8]=i.x,w[B+j+9]=i.y,w[B+j+10]=i.z,w[B+j+11]=L.itemSize===4?i.w:1)}}u={count:f,texture:R,size:new Ue(T,b)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function h_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class hd extends Wt{constructor(e,t,n,i,r,o,a,l,c,h=Pr){if(h!==Pr&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=Ji),n===void 0&&h===zr&&(n=Br),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new Wt,hu=new hd(1,1),fd=new Qf,dd=new Jm,pd=new ad,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function jr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=uu[i];if(r===void 0&&(r=new Float32Array(i),uu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pa(s,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function u_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function f_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function d_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function p_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function m_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;mu.set(n),s.uniformMatrix2fv(this.addr,!1,mu),Nt(t,n)}}function g_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;pu.set(n),s.uniformMatrix3fv(this.addr,!1,pu),Nt(t,n)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;du.set(n),s.uniformMatrix4fv(this.addr,!1,du),Nt(t,n)}}function __(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function x_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function M_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function E_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function b_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function T_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hu.compareFunction=Zf,r=hu):r=ud,t.setTexture2D(e||r,i)}function A_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dd,i)}function C_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function R_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fd,i)}function P_(s){switch(s){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return y_;case 35669:case 35673:return S_;case 5125:return M_;case 36294:return w_;case 36295:return E_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}function L_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){const t=jr(e,this.size,2);s.uniform2fv(this.addr,t)}function D_(s,e){const t=jr(e,this.size,3);s.uniform3fv(this.addr,t)}function I_(s,e){const t=jr(e,this.size,4);s.uniform4fv(this.addr,t)}function F_(s,e){const t=jr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N_(s,e){const t=jr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function O_(s,e){const t=jr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function B_(s,e){s.uniform1iv(this.addr,e)}function z_(s,e){s.uniform2iv(this.addr,e)}function k_(s,e){s.uniform3iv(this.addr,e)}function G_(s,e){s.uniform4iv(this.addr,e)}function H_(s,e){s.uniform1uiv(this.addr,e)}function V_(s,e){s.uniform2uiv(this.addr,e)}function W_(s,e){s.uniform3uiv(this.addr,e)}function X_(s,e){s.uniform4uiv(this.addr,e)}function q_(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,r[o])}function Y_(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dd,r[o])}function j_(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pd,r[o])}function K_(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fd,r[o])}function Z_(s){switch(s){case 5126:return L_;case 35664:return U_;case 35665:return D_;case 35666:return I_;case 35674:return F_;case 35675:return N_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}}class $_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z_(t.type)}}class Q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function gu(s,e){s.seq.push(e),s.map[e.id]=e}function ex(s,e,t){const n=s.name,i=n.length;for(hl.lastIndex=0;;){const r=hl.exec(n),o=hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gu(t,c===void 0?new J_(a,s,e):new $_(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Q_(a),gu(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ex(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tx=37297;let nx=0;function ix(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rx(s){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s);let n;switch(e===t?n="":e===$o&&t===Jo?n="LinearDisplayP3ToLinearSRGB":e===Jo&&t===$o&&(n="LinearSRGBToLinearDisplayP3"),s){case Pi:case fa:return[n,"LinearTransferOETF"];case Tn:case Vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _u(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ix(s.getShaderSource(e),o)}else return i}function sx(s,e){const t=rx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ox(s,e){let t;switch(e){case hm:t="Linear";break;case um:t="Reinhard";break;case fm:t="Cineon";break;case Nf:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new W;function ax(){lt.getLuminanceCoefficients(yo);const s=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function cx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ss(s){return s!==""}function xu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(s){return s.replace(ux,dx)}const fx=new Map;function dx(s,e){let t=$e[e];if(t===void 0){const n=fx.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(s){return s.replace(px,mx)}function mx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===If?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function vx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Nr:case Or:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function xx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case lm:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function yx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gx(t),c=vx(t),h=_x(t),f=xx(t),u=yx(t),d=lx(t),m=cx(r),v=i.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ss).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ss).join(`
`),g.length>0&&(g+=`
`)):(p=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),g=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ci?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,sx("linearToOutputTexel",t.outputColorSpace),ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=gc(o),o=xu(o,t),o=yu(o,t),a=gc(a),a=xu(a,t),a=yu(a,t),o=Su(o),a=Su(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+p+o,S=_+g+a,T=vu(i,i.VERTEX_SHADER,x),b=vu(i,i.FRAGMENT_SHADER,S);i.attachShader(v,T),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(E){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(v).trim(),C=i.getShaderInfoLog(T).trim(),L=i.getShaderInfoLog(b).trim();let B=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,b);else{const j=_u(i,T,"vertex"),H=_u(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+j+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(C===""||L==="")&&(U=!1);U&&(E.diagnostics={runnable:B,programLog:I,vertexShader:{log:C,prefix:p},fragmentShader:{log:L,prefix:g}})}i.deleteShader(T),i.deleteShader(b),R=new Vo(i,v),G=hx(i,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let G;this.getAttributes=function(){return G===void 0&&w(this),G};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,tx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let Mx=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function bx(s,e,t,n,i,r,o){const a=new ed,l=new wx,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,E,I,C,L){const B=C.fog,U=L.geometry,j=y.isMeshStandardMaterial?C.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),X=H&&H.mapping===ua?H.image.height:null,K=v[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const O=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,N=O!==void 0?O.length:0;let Q=0;U.morphAttributes.position!==void 0&&(Q=1),U.morphAttributes.normal!==void 0&&(Q=2),U.morphAttributes.color!==void 0&&(Q=3);let z,k,ne,q;if(K){const tt=On[K];z=tt.vertexShader,k=tt.fragmentShader}else z=y.vertexShader,k=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const se=s.getRenderTarget(),ce=L.isInstancedMesh===!0,Se=L.isBatchedMesh===!0,ve=!!y.map,Y=!!y.matcap,F=!!H,de=!!y.aoMap,pe=!!y.lightMap,le=!!y.bumpMap,_e=!!y.normalMap,he=!!y.displacementMap,me=!!y.emissiveMap,P=!!y.metalnessMap,M=!!y.roughnessMap,V=y.anisotropy>0,J=y.clearcoat>0,re=y.dispersion>0,ee=y.iridescence>0,Re=y.sheen>0,ue=y.transmission>0,ye=V&&!!y.anisotropyMap,Pe=J&&!!y.clearcoatMap,ge=J&&!!y.clearcoatNormalMap,we=J&&!!y.clearcoatRoughnessMap,De=ee&&!!y.iridescenceMap,Ae=ee&&!!y.iridescenceThicknessMap,Me=Re&&!!y.sheenColorMap,Te=Re&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,je=!!y.specularColorMap,Z=!!y.specularIntensityMap,be=ue&&!!y.transmissionMap,ie=ue&&!!y.thicknessMap,fe=!!y.gradientMap,Le=!!y.alphaMap,Ee=y.alphaTest>0,Be=!!y.alphaHash,Je=!!y.extensions;let et=Ci;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=s.toneMapping);const Ne={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:z,fragmentShader:k,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Se,batchingColor:Se&&L._colorsTexture!==null,instancing:ce,instancingColor:ce&&L.instanceColor!==null,instancingMorph:ce&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Pi,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Y,envMap:F,envMapMode:F&&H.mapping,envMapCubeUVHeight:X,aoMap:de,lightMap:pe,bumpMap:le,normalMap:_e,displacementMap:d&&he,emissiveMap:me,normalMapObjectSpace:_e&&y.normalMapType===_m,normalMapTangentSpace:_e&&y.normalMapType===Kf,metalnessMap:P,roughnessMap:M,anisotropy:V,anisotropyMap:ye,clearcoat:J,clearcoatMap:Pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:we,dispersion:re,iridescence:ee,iridescenceMap:De,iridescenceThicknessMap:Ae,sheen:Re,sheenColorMap:Me,sheenRoughnessMap:Te,specularMap:Ie,specularColorMap:je,specularIntensityMap:Z,transmission:ue,transmissionMap:be,thicknessMap:ie,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:Ee,alphaHash:Be,combine:y.combine,mapUv:ve&&p(y.map.channel),aoMapUv:de&&p(y.aoMap.channel),lightMapUv:pe&&p(y.lightMap.channel),bumpMapUv:le&&p(y.bumpMap.channel),normalMapUv:_e&&p(y.normalMap.channel),displacementMapUv:he&&p(y.displacementMap.channel),emissiveMapUv:me&&p(y.emissiveMap.channel),metalnessMapUv:P&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:ye&&p(y.anisotropyMap.channel),clearcoatMapUv:Pe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(y.sheenRoughnessMap.channel),specularMapUv:Ie&&p(y.specularMap.channel),specularColorMapUv:je&&p(y.specularColorMap.channel),specularIntensityMapUv:Z&&p(y.specularIntensityMap.channel),transmissionMapUv:be&&p(y.transmissionMap.channel),thicknessMapUv:ie&&p(y.thicknessMap.channel),alphaMapUv:Le&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_e||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(ve||Le),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bn,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&y.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(E,y),S(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function T(y){const E=v[y.type];let I;if(E){const C=On[E];I=sd.clone(C.uniforms)}else I=y.uniforms;return I}function b(y,E){let I;for(let C=0,L=h.length;C<L;C++){const B=h[C];if(B.cacheKey===E){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Sx(s,E,y,r),h.push(I)),I}function w(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function G(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:T,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:G}}function Tx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ax(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,u,d,m,v,p){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:v,group:p},s[e]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=v,g.group=p),e++,g}function a(f,u,d,m,v,p){const g=o(f,u,d,m,v,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(f,u,d,m,v,p){const g=o(f,u,d,m,v,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,u){t.length>1&&t.sort(f||Ax),n.length>1&&n.sort(u||wu),i.length>1&&i.sort(u||wu)}function h(){for(let f=e,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Cx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Eu,s.set(n,[o])):i>=r.length?(o=new Eu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ye};break;case"SpotLight":t={position:new W,direction:new W,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function Px(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lx=0;function Ux(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dx(s){const e=new Rx,t=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,r=new pt,o=new pt;function a(c){let h=0,f=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,_=0,x=0,S=0,T=0,b=0,w=0;c.sort(Ux);for(let G=0,y=c.length;G<y;G++){const E=c[G],I=E.color,C=E.intensity,L=E.distance,B=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=I.r*C,f+=I.g*C,u+=I.b*C;else if(E.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(E.sh.coefficients[U],C);w++}else if(E.isDirectionalLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const j=E.shadow,H=t.get(E);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=E.shadow.matrix,_++}n.directional[d]=U,d++}else if(E.isSpotLight){const U=e.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(I).multiplyScalar(C),U.distance=L,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,n.spot[v]=U;const j=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,j.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[v]=j.matrix,E.castShadow){const H=t.get(E);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=B,S++}v++}else if(E.isRectAreaLight){const U=e.get(E);U.color.copy(I).multiplyScalar(C),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=U,p++}else if(E.isPointLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){const j=E.shadow,H=t.get(E);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=E.shadow.matrix,x++}n.point[m]=U,m++}else if(E.isHemisphereLight){const U=e.get(E);U.skyColor.copy(E.color).multiplyScalar(C),U.groundColor.copy(E.groundColor).multiplyScalar(C),n.hemi[g]=U,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==g||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.directionalLength=d,R.pointLength=m,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=g,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=T,R.numLightProbes=w,n.version=Lx++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0;const p=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const x=c[g];if(x.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function bu(s){const e=new Dx(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ix(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new bu(s),e.set(i,[a])):r>=o.length?(a=new bu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class md extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ox(s,e,t){let n=new qc;const i=new Ue,r=new Ue,o=new ht,a=new md({depthPacking:jf}),l=new gd,c={},h=t.maxTextureSize,f={[Ri]:Qt,[Qt]:Ri,[Bn]:Bn},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Fx,fragmentShader:Nx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new cn;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let g=this.type;this.render=function(b,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const G=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const C=g!==ei&&this.type===ei,L=g===ei&&this.type!==ei;for(let B=0,U=b.length;B<U;B++){const j=b[B],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const X=H.getFrameExtents();if(i.multiply(X),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,H.mapSize.y=r.y)),H.map===null||C===!0||L===!0){const O=this.type!==ei?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new $i(i.x,i.y,O),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const K=H.getViewportCount();for(let O=0;O<K;O++){const N=H.getViewport(O);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),I.viewport(o),H.updateMatrices(j,O),n=H.getFrustum(),S(w,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===ei&&_(H,R),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(G,y,E)};function _(b,w){const R=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,R,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,R,d,v,null)}function x(b,w,R,G){let y=null;const E=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=y.uuid,C=w.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let B=L[C];B===void 0&&(B=y.clone(),L[C]=B,w.addEventListener("dispose",T)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,G===ei?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=s.properties.get(y);I.light=R}return y}function S(b,w,R,G,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ei)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const C=e.update(b),L=b.material;if(Array.isArray(L)){const B=C.groups;for(let U=0,j=B.length;U<j;U++){const H=B[U],X=L[H.materialIndex];if(X&&X.visible){const K=x(b,X,G,y);b.onBeforeShadow(s,b,w,R,C,K,H),s.renderBufferDirect(R,null,C,K,b,H),b.onAfterShadow(s,b,w,R,C,K,H)}}}else if(L.visible){const B=x(b,L,G,y);b.onBeforeShadow(s,b,w,R,C,B,null),s.renderBufferDirect(R,null,C,B,b,null),b.onAfterShadow(s,b,w,R,C,B,null)}}const I=b.children;for(let C=0,L=I.length;C<L;C++)S(I[C],w,R,G,y)}function T(b){b.target.removeEventListener("dispose",T);for(const R in c){const G=c[R],y=b.target.uuid;y in G&&(G[y].dispose(),delete G[y])}}}const Bx={[Dl]:Il,[Fl]:Bl,[Nl]:zl,[Fr]:Ol,[Il]:Dl,[Bl]:Fl,[zl]:Nl,[Ol]:Fr};function zx(s){function e(){let Z=!1;const be=new ht;let ie=null;const fe=new ht(0,0,0,0);return{setMask:function(Le){ie!==Le&&!Z&&(s.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){Z=Le},setClear:function(Le,Ee,Be,Je,et){et===!0&&(Le*=Je,Ee*=Je,Be*=Je),be.set(Le,Ee,Be,Je),fe.equals(be)===!1&&(s.clearColor(Le,Ee,Be,Je),fe.copy(be))},reset:function(){Z=!1,ie=null,fe.set(-1,0,0,0)}}}function t(){let Z=!1,be=!1,ie=null,fe=null,Le=null;return{setReversed:function(Ee){be=Ee},setTest:function(Ee){Ee?ne(s.DEPTH_TEST):q(s.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!Z&&(s.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(be&&(Ee=Bx[Ee]),fe!==Ee){switch(Ee){case Dl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Fl:s.depthFunc(s.LESS);break;case Fr:s.depthFunc(s.LEQUAL);break;case Nl:s.depthFunc(s.EQUAL);break;case Ol:s.depthFunc(s.GEQUAL);break;case Bl:s.depthFunc(s.GREATER);break;case zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ee}},setLocked:function(Ee){Z=Ee},setClear:function(Ee){Le!==Ee&&(s.clearDepth(Ee),Le=Ee)},reset:function(){Z=!1,ie=null,fe=null,Le=null}}}function n(){let Z=!1,be=null,ie=null,fe=null,Le=null,Ee=null,Be=null,Je=null,et=null;return{setTest:function(Ne){Z||(Ne?ne(s.STENCIL_TEST):q(s.STENCIL_TEST))},setMask:function(Ne){be!==Ne&&!Z&&(s.stencilMask(Ne),be=Ne)},setFunc:function(Ne,tt,mt){(ie!==Ne||fe!==tt||Le!==mt)&&(s.stencilFunc(Ne,tt,mt),ie=Ne,fe=tt,Le=mt)},setOp:function(Ne,tt,mt){(Ee!==Ne||Be!==tt||Je!==mt)&&(s.stencilOp(Ne,tt,mt),Ee=Ne,Be=tt,Je=mt)},setLocked:function(Ne){Z=Ne},setClear:function(Ne){et!==Ne&&(s.clearStencil(Ne),et=Ne)},reset:function(){Z=!1,be=null,ie=null,fe=null,Le=null,Ee=null,Be=null,Je=null,et=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,m=!1,v=null,p=null,g=null,_=null,x=null,S=null,T=null,b=new Ye(0,0,0),w=0,R=!1,G=null,y=null,E=null,I=null,C=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=U>=2);let H=null,X={};const K=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),N=new ht().fromArray(K),Q=new ht().fromArray(O);function z(Z,be,ie,fe){const Le=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(Z,Ee),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<ie;Be++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(be+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ee}const k={};k[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),k[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),k[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),r.setFunc(Fr),pe(!1),le(Dh),ne(s.CULL_FACE),F(Ai);function ne(Z){c[Z]!==!0&&(s.enable(Z),c[Z]=!0)}function q(Z){c[Z]!==!1&&(s.disable(Z),c[Z]=!1)}function se(Z,be){return h[Z]!==be?(s.bindFramebuffer(Z,be),h[Z]=be,Z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=be),Z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=be),!0):!1}function ce(Z,be){let ie=u,fe=!1;if(Z){ie=f.get(be),ie===void 0&&(ie=[],f.set(be,ie));const Le=Z.textures;if(ie.length!==Le.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Be=Le.length;Ee<Be;Ee++)ie[Ee]=s.COLOR_ATTACHMENT0+Ee;ie.length=Le.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function Se(Z){return d!==Z?(s.useProgram(Z),d=Z,!0):!1}const ve={[Vi]:s.FUNC_ADD,[Xp]:s.FUNC_SUBTRACT,[qp]:s.FUNC_REVERSE_SUBTRACT};ve[Yp]=s.MIN,ve[jp]=s.MAX;const Y={[Kp]:s.ZERO,[Zp]:s.ONE,[Jp]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[im]:s.SRC_ALPHA_SATURATE,[tm]:s.DST_COLOR,[Qp]:s.DST_ALPHA,[$p]:s.ONE_MINUS_SRC_COLOR,[Ul]:s.ONE_MINUS_SRC_ALPHA,[nm]:s.ONE_MINUS_DST_COLOR,[em]:s.ONE_MINUS_DST_ALPHA,[rm]:s.CONSTANT_COLOR,[sm]:s.ONE_MINUS_CONSTANT_COLOR,[om]:s.CONSTANT_ALPHA,[am]:s.ONE_MINUS_CONSTANT_ALPHA};function F(Z,be,ie,fe,Le,Ee,Be,Je,et,Ne){if(Z===Ai){m===!0&&(q(s.BLEND),m=!1);return}if(m===!1&&(ne(s.BLEND),m=!0),Z!==Wp){if(Z!==v||Ne!==R){if((p!==Vi||x!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,x=Vi),Ne)switch(Z){case Rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}g=null,_=null,S=null,T=null,b.set(0,0,0),w=0,v=Z,R=Ne}return}Le=Le||be,Ee=Ee||ie,Be=Be||fe,(be!==p||Le!==x)&&(s.blendEquationSeparate(ve[be],ve[Le]),p=be,x=Le),(ie!==g||fe!==_||Ee!==S||Be!==T)&&(s.blendFuncSeparate(Y[ie],Y[fe],Y[Ee],Y[Be]),g=ie,_=fe,S=Ee,T=Be),(Je.equals(b)===!1||et!==w)&&(s.blendColor(Je.r,Je.g,Je.b,et),b.copy(Je),w=et),v=Z,R=!1}function de(Z,be){Z.side===Bn?q(s.CULL_FACE):ne(s.CULL_FACE);let ie=Z.side===Qt;be&&(ie=!ie),pe(ie),Z.blending===Rr&&Z.transparent===!1?F(Ai):F(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),r.setFunc(Z.depthFunc),r.setTest(Z.depthTest),r.setMask(Z.depthWrite),i.setMask(Z.colorWrite);const fe=Z.stencilWrite;o.setTest(fe),fe&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),he(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):q(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(Z){G!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),G=Z)}function le(Z){Z!==Hp?(ne(s.CULL_FACE),Z!==y&&(Z===Dh?s.cullFace(s.BACK):Z===Vp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):q(s.CULL_FACE),y=Z}function _e(Z){Z!==E&&(B&&s.lineWidth(Z),E=Z)}function he(Z,be,ie){Z?(ne(s.POLYGON_OFFSET_FILL),(I!==be||C!==ie)&&(s.polygonOffset(be,ie),I=be,C=ie)):q(s.POLYGON_OFFSET_FILL)}function me(Z){Z?ne(s.SCISSOR_TEST):q(s.SCISSOR_TEST)}function P(Z){Z===void 0&&(Z=s.TEXTURE0+L-1),H!==Z&&(s.activeTexture(Z),H=Z)}function M(Z,be,ie){ie===void 0&&(H===null?ie=s.TEXTURE0+L-1:ie=H);let fe=X[ie];fe===void 0&&(fe={type:void 0,texture:void 0},X[ie]=fe),(fe.type!==Z||fe.texture!==be)&&(H!==ie&&(s.activeTexture(ie),H=ie),s.bindTexture(Z,be||k[Z]),fe.type=Z,fe.texture=be)}function V(){const Z=X[H];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pe(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ae(Z){N.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),N.copy(Z))}function Me(Z){Q.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Q.copy(Z))}function Te(Z,be){let ie=l.get(be);ie===void 0&&(ie=new WeakMap,l.set(be,ie));let fe=ie.get(Z);fe===void 0&&(fe=s.getUniformBlockIndex(be,Z.name),ie.set(Z,fe))}function Ie(Z,be){const fe=l.get(be).get(Z);a.get(be)!==fe&&(s.uniformBlockBinding(be,fe,Z.__bindingPointIndex),a.set(be,fe))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},H=null,X={},h={},f=new WeakMap,u=[],d=null,m=!1,v=null,p=null,g=null,_=null,x=null,S=null,T=null,b=new Ye(0,0,0),w=0,R=!1,G=null,y=null,E=null,I=null,C=null,N.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ne,disable:q,bindFramebuffer:se,drawBuffers:ce,useProgram:Se,setBlending:F,setMaterial:de,setFlipSided:pe,setCullFace:le,setLineWidth:_e,setPolygonOffset:he,setScissorTest:me,activeTexture:P,bindTexture:M,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:we,texImage3D:De,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:Pe,texStorage3D:ge,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:ue,compressedTexSubImage3D:ye,scissor:Ae,viewport:Me,reset:je}}function Tu(s,e,t,n){const i=kx(n);switch(t){case Gf:return s*e;case Vf:return s*e;case Wf:return s*e*2;case Xf:return s*e/i.components*i.byteLength;case kc:return s*e/i.components*i.byteLength;case qf:return s*e*2/i.components*i.byteLength;case Gc:return s*e*2/i.components*i.byteLength;case Hf:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case Hc:return s*e*4/i.components*i.byteLength;case Oo:case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(s,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(s,8)*Math.max(e,8)/2;case jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Go:case uc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yf:case dc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(s){switch(s){case hi:case Bf:return{byteLength:1,components:1};case Ds:case zf:case Hs:return{byteLength:2,components:1};case Bc:case zc:return{byteLength:2,components:4};case Ji:case Oc:case ii:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Gx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return d?new OffscreenCanvas(P,M):ea("canvas")}function v(P,M,V){let J=1;const re=me(P);if((re.width>V||re.height>V)&&(J=V/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(J*re.width),Re=Math.floor(J*re.height);f===void 0&&(f=m(ee,Re));const ue=M?m(ee,Re):f;return ue.width=ee,ue.height=Re,ue.getContext("2d").drawImage(P,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Re+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==_n&&P.minFilter!==$t}function g(P){s.generateMipmap(P)}function _(P,M,V,J,re=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=M;if(M===s.RED&&(V===s.FLOAT&&(ee=s.R32F),V===s.HALF_FLOAT&&(ee=s.R16F),V===s.UNSIGNED_BYTE&&(ee=s.R8)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.R8UI),V===s.UNSIGNED_SHORT&&(ee=s.R16UI),V===s.UNSIGNED_INT&&(ee=s.R32UI),V===s.BYTE&&(ee=s.R8I),V===s.SHORT&&(ee=s.R16I),V===s.INT&&(ee=s.R32I)),M===s.RG&&(V===s.FLOAT&&(ee=s.RG32F),V===s.HALF_FLOAT&&(ee=s.RG16F),V===s.UNSIGNED_BYTE&&(ee=s.RG8)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RG8UI),V===s.UNSIGNED_SHORT&&(ee=s.RG16UI),V===s.UNSIGNED_INT&&(ee=s.RG32UI),V===s.BYTE&&(ee=s.RG8I),V===s.SHORT&&(ee=s.RG16I),V===s.INT&&(ee=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),V===s.UNSIGNED_INT&&(ee=s.RGB32UI),V===s.BYTE&&(ee=s.RGB8I),V===s.SHORT&&(ee=s.RGB16I),V===s.INT&&(ee=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),V===s.UNSIGNED_INT&&(ee=s.RGBA32UI),V===s.BYTE&&(ee=s.RGBA8I),V===s.SHORT&&(ee=s.RGBA16I),V===s.INT&&(ee=s.RGBA32I)),M===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),M===s.RGBA){const Re=re?Zo:lt.getTransfer(J);V===s.FLOAT&&(ee=s.RGBA32F),V===s.HALF_FLOAT&&(ee=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ee=Re===_t?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(P,M){let V;return P?M===null||M===Ji||M===Br?V=s.DEPTH24_STENCIL8:M===ii?V=s.DEPTH32F_STENCIL8:M===Ds&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===Br?V=s.DEPTH_COMPONENT24:M===ii?V=s.DEPTH_COMPONENT32F:M===Ds&&(V=s.DEPTH_COMPONENT16),V}function S(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){const M=P.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&h.delete(M)}function b(P){const M=P.target;M.removeEventListener("dispose",b),G(M)}function w(P){const M=n.get(P);if(M.__webglInit===void 0)return;const V=P.source,J=u.get(V);if(J){const re=J[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(P),Object.keys(J).length===0&&u.delete(V)}n.remove(P)}function R(P){const M=n.get(P);s.deleteTexture(M.__webglTexture);const V=P.source,J=u.get(V);delete J[M.__cacheKey],o.memory.textures--}function G(P){const M=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let re=0;re<M.__webglFramebuffer[J].length;re++)s.deleteFramebuffer(M.__webglFramebuffer[J][re]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let J=0,re=V.length;J<re;J++){const ee=n.get(V[J]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(P)}let y=0;function E(){y=0}function I(){const P=y;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),y+=1,P}function C(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function L(P,M){const V=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,P,M);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function B(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function U(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Q(V,P,M);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function j(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){z(V,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}const H={[Hl]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Vl]:s.MIRRORED_REPEAT},X={[_n]:s.NEAREST,[gm]:s.NEAREST_MIPMAP_NEAREST,[Qs]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[Oa]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},K={[xm]:s.NEVER,[bm]:s.ALWAYS,[ym]:s.LESS,[Zf]:s.LEQUAL,[Sm]:s.EQUAL,[Em]:s.GEQUAL,[Mm]:s.GREATER,[wm]:s.NOTEQUAL};function O(P,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===Oa||M.magFilter===Qs||M.magFilter===ji||M.minFilter===$t||M.minFilter===Oa||M.minFilter===Qs||M.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,H[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,H[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,H[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,X[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,X[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==Qs&&M.minFilter!==ji||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function N(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));const J=M.source;let re=u.get(J);re===void 0&&(re={},u.set(J,re));const ee=C(M);if(ee!==P.__cacheKey){re[ee]===void 0&&(re[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[ee].usedTimes++;const Re=re[P.__cacheKey];Re!==void 0&&(re[P.__cacheKey].usedTimes--,Re.usedTimes===0&&R(M)),P.__cacheKey=ee,P.__webglTexture=re[ee].texture}return V}function Q(P,M,V){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const re=N(P,M),ee=M.source;t.bindTexture(J,P.__webglTexture,s.TEXTURE0+V);const Re=n.get(ee);if(ee.version!==Re.__version||re===!0){t.activeTexture(s.TEXTURE0+V);const ue=lt.getPrimaries(lt.workingColorSpace),ye=M.colorSpace===Ti?null:lt.getPrimaries(M.colorSpace),Pe=M.colorSpace===Ti||ue===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ge=v(M.image,!1,i.maxTextureSize);ge=he(M,ge);const we=r.convert(M.format,M.colorSpace),De=r.convert(M.type);let Ae=_(M.internalFormat,we,De,M.colorSpace,M.isVideoTexture);O(J,M);let Me;const Te=M.mipmaps,Ie=M.isVideoTexture!==!0,je=Re.__version===void 0||re===!0,Z=ee.dataReady,be=S(M,ge);if(M.isDepthTexture)Ae=x(M.format===zr,M.type),je&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,Ae,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ge.width,ge.height,0,we,De,null));else if(M.isDataTexture)if(Te.length>0){Ie&&je&&t.texStorage2D(s.TEXTURE_2D,be,Ae,Te[0].width,Te[0].height);for(let ie=0,fe=Te.length;ie<fe;ie++)Me=Te[ie],Ie?Z&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Me.width,Me.height,we,De,Me.data):t.texImage2D(s.TEXTURE_2D,ie,Ae,Me.width,Me.height,0,we,De,Me.data);M.generateMipmaps=!1}else Ie?(je&&t.texStorage2D(s.TEXTURE_2D,be,Ae,ge.width,ge.height),Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,we,De,ge.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,ge.width,ge.height,0,we,De,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ae,Te[0].width,Te[0].height,ge.depth);for(let ie=0,fe=Te.length;ie<fe;ie++)if(Me=Te[ie],M.format!==Cn)if(we!==null)if(Ie){if(Z)if(M.layerUpdates.size>0){const Le=Tu(Me.width,Me.height,M.format,M.type);for(const Ee of M.layerUpdates){const Be=Me.data.subarray(Ee*Le/Me.data.BYTES_PER_ELEMENT,(Ee+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Ee,Me.width,Me.height,1,we,Be,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,ge.depth,we,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Ae,Me.width,Me.height,ge.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,ge.depth,we,De,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Ae,Me.width,Me.height,ge.depth,0,we,De,Me.data)}else{Ie&&je&&t.texStorage2D(s.TEXTURE_2D,be,Ae,Te[0].width,Te[0].height);for(let ie=0,fe=Te.length;ie<fe;ie++)Me=Te[ie],M.format!==Cn?we!==null?Ie?Z&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Z&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Me.width,Me.height,we,De,Me.data):t.texImage2D(s.TEXTURE_2D,ie,Ae,Me.width,Me.height,0,we,De,Me.data)}else if(M.isDataArrayTexture)if(Ie){if(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ae,ge.width,ge.height,ge.depth),Z)if(M.layerUpdates.size>0){const ie=Tu(ge.width,ge.height,M.format,M.type);for(const fe of M.layerUpdates){const Le=ge.data.subarray(fe*ie/ge.data.BYTES_PER_ELEMENT,(fe+1)*ie/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,ge.width,ge.height,1,we,De,Le)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,we,De,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ge.width,ge.height,ge.depth,0,we,De,ge.data);else if(M.isData3DTexture)Ie?(je&&t.texStorage3D(s.TEXTURE_3D,be,Ae,ge.width,ge.height,ge.depth),Z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,we,De,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ge.width,ge.height,ge.depth,0,we,De,ge.data);else if(M.isFramebufferTexture){if(je)if(Ie)t.texStorage2D(s.TEXTURE_2D,be,Ae,ge.width,ge.height);else{let ie=ge.width,fe=ge.height;for(let Le=0;Le<be;Le++)t.texImage2D(s.TEXTURE_2D,Le,Ae,ie,fe,0,we,De,null),ie>>=1,fe>>=1}}else if(Te.length>0){if(Ie&&je){const ie=me(Te[0]);t.texStorage2D(s.TEXTURE_2D,be,Ae,ie.width,ie.height)}for(let ie=0,fe=Te.length;ie<fe;ie++)Me=Te[ie],Ie?Z&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,we,De,Me):t.texImage2D(s.TEXTURE_2D,ie,Ae,we,De,Me);M.generateMipmaps=!1}else if(Ie){if(je){const ie=me(ge);t.texStorage2D(s.TEXTURE_2D,be,Ae,ie.width,ie.height)}Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,De,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ae,we,De,ge);p(M)&&g(J),Re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function z(P,M,V){if(M.image.length!==6)return;const J=N(P,M),re=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const ee=n.get(re);if(re.version!==ee.__version||J===!0){t.activeTexture(s.TEXTURE0+V);const Re=lt.getPrimaries(lt.workingColorSpace),ue=M.colorSpace===Ti?null:lt.getPrimaries(M.colorSpace),ye=M.colorSpace===Ti||Re===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!Pe&&!ge?we[fe]=v(M.image[fe],!0,i.maxCubemapSize):we[fe]=ge?M.image[fe].image:M.image[fe],we[fe]=he(M,we[fe]);const De=we[0],Ae=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),Te=_(M.internalFormat,Ae,Me,M.colorSpace),Ie=M.isVideoTexture!==!0,je=ee.__version===void 0||J===!0,Z=re.dataReady;let be=S(M,De);O(s.TEXTURE_CUBE_MAP,M);let ie;if(Pe){Ie&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Te,De.width,De.height);for(let fe=0;fe<6;fe++){ie=we[fe].mipmaps;for(let Le=0;Le<ie.length;Le++){const Ee=ie[Le];M.format!==Cn?Ae!==null?Ie?Z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,Ee.width,Ee.height,Ae,Me,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,Te,Ee.width,Ee.height,0,Ae,Me,Ee.data)}}}else{if(ie=M.mipmaps,Ie&&je){ie.length>0&&be++;const fe=me(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Te,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ge){Ie?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Ae,Me,we[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,we[fe].width,we[fe].height,0,Ae,Me,we[fe].data);for(let Le=0;Le<ie.length;Le++){const Be=ie[Le].image[fe].image;Ie?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Be.width,Be.height,Ae,Me,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Te,Be.width,Be.height,0,Ae,Me,Be.data)}}else{Ie?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ae,Me,we[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,Ae,Me,we[fe]);for(let Le=0;Le<ie.length;Le++){const Ee=ie[Le];Ie?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Ae,Me,Ee.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,Te,Ae,Me,Ee.image[fe])}}}p(M)&&g(s.TEXTURE_CUBE_MAP),ee.__version=re.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function k(P,M,V,J,re,ee){const Re=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),ye=_(V.internalFormat,Re,ue,V.colorSpace);if(!n.get(M).__hasExternalTextures){const ge=Math.max(1,M.width>>ee),we=Math.max(1,M.height>>ee);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,ye,ge,we,M.depth,0,Re,ue,null):t.texImage2D(re,ee,ye,ge,we,0,Re,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),le(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,re,n.get(V).__webglTexture,0,pe(M)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,re,n.get(V).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(P,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const J=M.depthTexture,re=J&&J.isDepthTexture?J.type:null,ee=x(M.stencilBuffer,re),Re=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=pe(M);le(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,ee,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ee,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,P)}else{const J=M.textures;for(let re=0;re<J.length;re++){const ee=J[re],Re=r.convert(ee.format,ee.colorSpace),ue=r.convert(ee.type),ye=_(ee.internalFormat,Re,ue,ee.colorSpace),Pe=pe(M);V&&le(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ye,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ye,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ye,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function q(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,re=pe(M);if(M.depthTexture.format===Pr)le(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(M.depthTexture.format===zr)le(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function se(P){const M=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=J}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");q(M.__webglFramebuffer,P)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),ne(M.__webglDepthbuffer[J],P,!1);else{const re=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ne(M.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(P,M,V){const J=n.get(P);M!==void 0&&k(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&se(P)}function Se(P){const M=P.texture,V=n.get(P),J=n.get(M);P.addEventListener("dispose",b);const re=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let ye=0;ye<M.mipmaps.length;ye++)V.__webglFramebuffer[ue][ye]=s.createFramebuffer()}else V.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)V.__webglFramebuffer[ue]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Re)for(let ue=0,ye=re.length;ue<ye;ue++){const Pe=n.get(re[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&le(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const ye=re[ue];V.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Pe=r.convert(ye.format,ye.colorSpace),ge=r.convert(ye.type),we=_(ye.internalFormat,Pe,ge,ye.colorSpace,P.isXRRenderTarget===!0),De=pe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,we,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),O(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)k(V.__webglFramebuffer[ue][ye],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye);else k(V.__webglFramebuffer[ue],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(M)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ue=0,ye=re.length;ue<ye;ue++){const Pe=re[ue],ge=n.get(Pe);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),O(s.TEXTURE_2D,Pe),k(V.__webglFramebuffer,P,Pe,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),p(Pe)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),O(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)k(V.__webglFramebuffer[ye],P,M,s.COLOR_ATTACHMENT0,ue,ye);else k(V.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,ue,0);p(M)&&g(ue),t.unbindTexture()}P.depthBuffer&&se(P)}function ve(P){const M=P.textures;for(let V=0,J=M.length;V<J;V++){const re=M[V];if(p(re)){const ee=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(re).__webglTexture;t.bindTexture(ee,Re),g(ee),t.unbindTexture()}}}const Y=[],F=[];function de(P){if(P.samples>0){if(le(P)===!1){const M=P.textures,V=P.width,J=P.height;let re=s.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(P),ue=M.length>1;if(ue)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const Pe=n.get(M[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,V,J,0,0,V,J,re,s.NEAREST),l===!0&&(Y.length=0,F.length=0,Y.push(s.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Y.push(ee),F.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const Pe=n.get(M[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pe(P){return Math.min(i.maxSamples,P.samples)}function le(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(P){const M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function he(P,M){const V=P.colorSpace,J=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Pi&&V!==Ti&&(lt.getTransfer(V)===_t?(J!==Cn||re!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=k,this.useMultisampledRTT=le}function Hx(s,e){function t(n,i=Ti){let r;const o=lt.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===Bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bf)return s.BYTE;if(n===zf)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===Oc)return s.INT;if(n===Ji)return s.UNSIGNED_INT;if(n===ii)return s.FLOAT;if(n===Hs)return s.HALF_FLOAT;if(n===Gf)return s.ALPHA;if(n===Hf)return s.RGB;if(n===Cn)return s.RGBA;if(n===Vf)return s.LUMINANCE;if(n===Wf)return s.LUMINANCE_ALPHA;if(n===Pr)return s.DEPTH_COMPONENT;if(n===zr)return s.DEPTH_STENCIL;if(n===Xf)return s.RED;if(n===kc)return s.RED_INTEGER;if(n===qf)return s.RG;if(n===Gc)return s.RG_INTEGER;if(n===Hc)return s.RGBA_INTEGER;if(n===Oo||n===Bo||n===zo||n===ko)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Kl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===$l||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===uc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===dc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Vx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wx={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Wt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jx extends Xr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=new Yx,p=t.getContextAttributes();let g=null,_=null;const x=[],S=[],T=new Ue;let b=null;const w=new on;w.layers.enable(1),w.viewport=new ht;const R=new on;R.layers.enable(2),R.viewport=new ht;const G=[w,R],y=new Vx;y.layers.enable(1),y.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let k=x[z];return k===void 0&&(k=new ul,x[z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(z){let k=x[z];return k===void 0&&(k=new ul,x[z]=k),k.getGripSpace()},this.getHand=function(z){let k=x[z];return k===void 0&&(k=new ul,x[z]=k),k.getHandSpace()};function C(z){const k=S.indexOf(z.inputSource);if(k===-1)return;const ne=x[k];ne!==void 0&&(ne.update(z.inputSource,z.frame,c||o),ne.dispatchEvent({type:z.type,data:z.inputSource}))}function L(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",B);for(let z=0;z<x.length;z++){const k=S[z];k!==null&&(S[z]=null,x[z].disconnect(k))}E=null,I=null,v.reset(),e.setRenderTarget(g),d=null,u=null,f=null,i=null,_=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",L),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const k={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new $i(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let k=null,ne=null,q=null;p.depth&&(q=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=p.stencil?zr:Pr,ne=p.stencil?Br:Ji);const se={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(se),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new $i(u.textureWidth,u.textureHeight,{format:Cn,type:hi,depthTexture:new hd(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(z){for(let k=0;k<z.removed.length;k++){const ne=z.removed[k],q=S.indexOf(ne);q>=0&&(S[q]=null,x[q].disconnect(ne))}for(let k=0;k<z.added.length;k++){const ne=z.added[k];let q=S.indexOf(ne);if(q===-1){for(let ce=0;ce<x.length;ce++)if(ce>=S.length){S.push(ne),q=ce;break}else if(S[ce]===null){S[ce]=ne,q=ce;break}if(q===-1)break}const se=x[q];se&&se.connect(ne)}}const U=new W,j=new W;function H(z,k,ne){U.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const q=U.distanceTo(j),se=k.projectionMatrix.elements,ce=ne.projectionMatrix.elements,Se=se[14]/(se[10]-1),ve=se[14]/(se[10]+1),Y=(se[9]+1)/se[5],F=(se[9]-1)/se[5],de=(se[8]-1)/se[0],pe=(ce[8]+1)/ce[0],le=Se*de,_e=Se*pe,he=q/(-de+pe),me=he*-de;if(k.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(me),z.translateZ(he),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),se[10]===-1)z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const P=Se+he,M=ve+he,V=le-me,J=_e+(q-me),re=Y*ve/M*P,ee=F*ve/M*P;z.projectionMatrix.makePerspective(V,J,re,ee,P,M),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function X(z,k){k===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(k.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let k=z.near,ne=z.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(ne=v.depthFar)),y.near=R.near=w.near=k,y.far=R.far=w.far=ne,(E!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,I=y.far);const q=z.parent,se=y.cameras;X(y,q);for(let ce=0;ce<se.length;ce++)X(se[ce],q);se.length===2?H(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),K(z,y,q)};function K(z,k,ne){ne===null?z.matrix.copy(k.matrixWorld):(z.matrix.copy(ne.matrixWorld),z.matrix.invert(),z.matrix.multiply(k.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(k.projectionMatrix),z.projectionMatrixInverse.copy(k.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Is*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let O=null;function N(z,k){if(h=k.getViewerPose(c||o),m=k,h!==null){const ne=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let q=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,q=!0);for(let ce=0;ce<ne.length;ce++){const Se=ne[ce];let ve=null;if(d!==null)ve=d.getViewport(Se);else{const F=f.getViewSubImage(u,Se);ve=F.viewport,ce===0&&(e.setRenderTargetTextures(_,F.colorTexture,u.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(_))}let Y=G[ce];Y===void 0&&(Y=new on,Y.layers.enable(ce),Y.viewport=new ht,G[ce]=Y),Y.matrix.fromArray(Se.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Se.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ve.x,ve.y,ve.width,ve.height),ce===0&&(y.matrix.copy(Y.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),q===!0&&y.cameras.push(Y)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){const ce=f.getDepthInformation(ne[0]);ce&&ce.isValid&&ce.texture&&v.init(e,ce,i.renderState)}}for(let ne=0;ne<x.length;ne++){const q=S[ne],se=x[ne];q!==null&&se!==void 0&&se.update(q,k,c||o)}O&&O(z,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),m=null}const Q=new ld;Q.setAnimationLoop(N),this.setAnimationLoop=function(z){O=z},this.dispose=function(){}}}const Oi=new zn,Kx=new pt;function Zx(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,rd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,x,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),x=_.envMap,S=_.envMapRotation;x&&(p.envMap.value=x,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Oi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;n.uniformBlockBinding(_,S)}function c(_,x){let S=i[_.id];S===void 0&&(m(_),S=h(_),i[_.id]=S,_.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(_,T);const b=e.render.frame;r[_.id]!==b&&(u(_),r[_.id]=b)}function h(_){const x=f();_.__bindingPointIndex=x;const S=s.createBuffer(),T=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=i[_.id],S=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,w=S.length;b<w;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let G=0,y=R.length;G<y;G++){const E=R[G];if(d(E,b,G,T)===!0){const I=E.__offset,C=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let B=0;B<C.length;B++){const U=C[B],j=v(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,I+L,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,x,S,T){const b=_.value,w=x+"_"+S;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{const R=T[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(_){const x=_.uniforms;let S=0;const T=16;for(let w=0,R=x.length;w<R;w++){const G=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,E=G.length;y<E;y++){const I=G[y],C=Array.isArray(I.value)?I.value:[I.value];for(let L=0,B=C.length;L<B;L++){const U=C[L],j=v(U),H=S%T,X=H%j.boundary,K=H+X;S+=X,K!==0&&T-K<j.storage&&(S+=T-K),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=j.storage}}}const b=S%T;return b>0&&(S+=T-b),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class $x{constructor(e={}){const{canvas:t=Hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Ci,this.toneMappingExposure=1;const x=this;let S=!1,T=0,b=0,w=null,R=-1,G=null;const y=new ht,E=new ht;let I=null;const C=new Ye(0);let L=0,B=t.width,U=t.height,j=1,H=null,X=null;const K=new ht(0,0,B,U),O=new ht(0,0,B,U);let N=!1;const Q=new qc;let z=!1,k=!1;const ne=new pt,q=new pt,se=new W,ce=new ht,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Y(){return w===null?j:1}let F=n;function de(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const $="webgl2";if(F=de($,D),F===null)throw de($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pe,le,_e,he,me,P,M,V,J,re,ee,Re,ue,ye,Pe,ge,we,De,Ae,Me,Te,Ie,je,Z;function be(){pe=new s_(F),pe.init(),Ie=new Hx(F,pe),le=new Q0(F,pe,e,Ie),_e=new zx(F),le.reverseDepthBuffer&&_e.buffers.depth.setReversed(!0),he=new l_(F),me=new Tx,P=new Gx(F,pe,_e,me,le,Ie,he),M=new t_(x),V=new r_(x),J=new mg(F),je=new J0(F,J),re=new o_(F,J,he,je),ee=new h_(F,re,J,he),Ae=new c_(F,le,P),ge=new e_(me),Re=new bx(x,M,V,pe,le,je,ge),ue=new Zx(x,me),ye=new Cx,Pe=new Ix(pe),De=new Z0(x,M,V,_e,ee,u,l),we=new Ox(x,ee,le),Z=new Jx(F,he,le,_e),Me=new $0(F,pe,he),Te=new a_(F,pe,he),he.programs=Re.programs,x.capabilities=le,x.extensions=pe,x.properties=me,x.renderLists=ye,x.shadowMap=we,x.state=_e,x.info=he}be();const ie=new jx(x,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=pe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(B,U,!1))},this.getSize=function(D){return D.set(B,U)},this.setSize=function(D,$,oe=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,U=$,t.width=Math.floor(D*j),t.height=Math.floor($*j),oe===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(B*j,U*j).floor()},this.setDrawingBufferSize=function(D,$,oe){B=D,U=$,j=oe,t.width=Math.floor(D*oe),t.height=Math.floor($*oe),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(y)},this.getViewport=function(D){return D.copy(K)},this.setViewport=function(D,$,oe,ae){D.isVector4?K.set(D.x,D.y,D.z,D.w):K.set(D,$,oe,ae),_e.viewport(y.copy(K).multiplyScalar(j).round())},this.getScissor=function(D){return D.copy(O)},this.setScissor=function(D,$,oe,ae){D.isVector4?O.set(D.x,D.y,D.z,D.w):O.set(D,$,oe,ae),_e.scissor(E.copy(O).multiplyScalar(j).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(D){_e.setScissorTest(N=D)},this.setOpaqueSort=function(D){H=D},this.setTransparentSort=function(D){X=D},this.getClearColor=function(D){return D.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(D=!0,$=!0,oe=!0){let ae=0;if(D){let te=!1;if(w!==null){const Ce=w.texture.format;te=Ce===Hc||Ce===Gc||Ce===kc}if(te){const Ce=w.texture.type,Oe=Ce===hi||Ce===Ji||Ce===Ds||Ce===Br||Ce===Bc||Ce===zc,xe=De.getClearColor(),ke=De.getClearAlpha(),Ke=xe.r,qe=xe.g,Ve=xe.b;Oe?(d[0]=Ke,d[1]=qe,d[2]=Ve,d[3]=ke,F.clearBufferuiv(F.COLOR,0,d)):(m[0]=Ke,m[1]=qe,m[2]=Ve,m[3]=ke,F.clearBufferiv(F.COLOR,0,m))}else ae|=F.COLOR_BUFFER_BIT}$&&(ae|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),oe&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ye.dispose(),Pe.dispose(),me.dispose(),M.dispose(),V.dispose(),ee.dispose(),je.dispose(),Z.dispose(),Re.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Pt),ie.removeEventListener("sessionend",Mt),Lt.stop()};function fe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const D=he.autoReset,$=we.enabled,oe=we.autoUpdate,ae=we.needsUpdate,te=we.type;be(),he.autoReset=D,we.enabled=$,we.autoUpdate=oe,we.needsUpdate=ae,we.type=te}function Ee(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Be(D){const $=D.target;$.removeEventListener("dispose",Be),Je($)}function Je(D){et(D),me.remove(D)}function et(D){const $=me.get(D).programs;$!==void 0&&($.forEach(function(oe){Re.releaseProgram(oe)}),D.isShaderMaterial&&Re.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,oe,ae,te,Ce){$===null&&($=Se);const Oe=te.isMesh&&te.matrixWorld.determinant()<0,xe=Qr(D,$,oe,ae,te);_e.setMaterial(ae,Oe);let ke=oe.index,Ke=1;if(ae.wireframe===!0){if(ke=re.getWireframeAttribute(oe),ke===void 0)return;Ke=2}const qe=oe.drawRange,Ve=oe.attributes.position;let ot=qe.start*Ke,ut=(qe.start+qe.count)*Ke;Ce!==null&&(ot=Math.max(ot,Ce.start*Ke),ut=Math.min(ut,(Ce.start+Ce.count)*Ke)),ke!==null?(ot=Math.max(ot,0),ut=Math.min(ut,ke.count)):Ve!=null&&(ot=Math.max(ot,0),ut=Math.min(ut,Ve.count));const ft=ut-ot;if(ft<0||ft===1/0)return;je.setup(te,ae,xe,oe,ke);let Ot,st=Me;if(ke!==null&&(Ot=J.get(ke),st=Te,st.setIndex(Ot)),te.isMesh)ae.wireframe===!0?(_e.setLineWidth(ae.wireframeLinewidth*Y()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(te.isLine){let We=ae.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*Y()),te.isLineSegments?st.setMode(F.LINES):te.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else te.isPoints?st.setMode(F.POINTS):te.isSprite&&st.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)st.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const We=te._multiDrawStarts,bt=te._multiDrawCounts,rt=te._multiDrawCount,Yt=ke?J.get(ke).bytesPerElement:1,mn=me.get(ae).currentProgram.getUniforms();for(let zt=0;zt<rt;zt++)mn.setValue(F,"_gl_DrawID",zt),st.render(We[zt]/Yt,bt[zt])}else if(te.isInstancedMesh)st.renderInstances(ot,ft,te.count);else if(oe.isInstancedBufferGeometry){const We=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,bt=Math.min(oe.instanceCount,We);st.renderInstances(ot,ft,bt)}else st.render(ot,ft)};function Ne(D,$,oe){D.transparent===!0&&D.side===Bn&&D.forceSinglePass===!1?(D.side=Qt,D.needsUpdate=!0,Et(D,$,oe),D.side=Ri,D.needsUpdate=!0,Et(D,$,oe),D.side=Bn):Et(D,$,oe)}this.compile=function(D,$,oe=null){oe===null&&(oe=D),p=Pe.get(oe),p.init($),_.push(p),oe.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),D!==oe&&D.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();const ae=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ce=te.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const xe=Ce[Oe];Ne(xe,oe,te),ae.add(xe)}else Ne(Ce,oe,te),ae.add(Ce)}),_.pop(),p=null,ae},this.compileAsync=function(D,$,oe=null){const ae=this.compile(D,$,oe);return new Promise(te=>{function Ce(){if(ae.forEach(function(Oe){me.get(Oe).currentProgram.isReady()&&ae.delete(Oe)}),ae.size===0){te(D);return}setTimeout(Ce,10)}pe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let tt=null;function mt(D){tt&&tt(D)}function Pt(){Lt.stop()}function Mt(){Lt.start()}const Lt=new ld;Lt.setAnimationLoop(mt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(D){tt=D,ie.setAnimationLoop(D),D===null?Lt.stop():Lt.start()},ie.addEventListener("sessionstart",Pt),ie.addEventListener("sessionend",Mt),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera($),$=ie.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,$,w),p=Pe.get(D,_.length),p.init($),_.push(p),q.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Q.setFromProjectionMatrix(q),k=this.localClippingEnabled,z=ge.init(this.clippingPlanes,k),v=ye.get(D,g.length),v.init(),g.push(v),ie.enabled===!0&&ie.isPresenting===!0){const Ce=x.xr.getDepthSensingMesh();Ce!==null&&un(Ce,$,-1/0,x.sortObjects)}un(D,$,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(H,X),ve=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ve&&De.addToRenderList(v,D),this.info.render.frame++,z===!0&&ge.beginShadows();const oe=p.state.shadowsArray;we.render(oe,D,$),z===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=v.opaque,te=v.transmissive;if(p.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(te.length>0)for(let Oe=0,xe=Ce.length;Oe<xe;Oe++){const ke=Ce[Oe];xn(ae,te,D,ke)}ve&&De.render(D);for(let Oe=0,xe=Ce.length;Oe<xe;Oe++){const ke=Ce[Oe];fn(v,D,ke,ke.viewport)}}else te.length>0&&xn(ae,te,D,$),ve&&De.render(D),fn(v,D,$);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(x,D,$),je.resetDefaultState(),R=-1,G=null,_.pop(),_.length>0?(p=_[_.length-1],z===!0&&ge.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function un(D,$,oe,ae){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Q.intersectsSprite(D)){ae&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(q);const Oe=ee.update(D),xe=D.material;xe.visible&&v.push(D,Oe,xe,oe,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Q.intersectsObject(D))){const Oe=ee.update(D),xe=D.material;if(ae&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ce.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ce.copy(Oe.boundingSphere.center)),ce.applyMatrix4(D.matrixWorld).applyMatrix4(q)),Array.isArray(xe)){const ke=Oe.groups;for(let Ke=0,qe=ke.length;Ke<qe;Ke++){const Ve=ke[Ke],ot=xe[Ve.materialIndex];ot&&ot.visible&&v.push(D,Oe,ot,oe,ce.z,Ve)}}else xe.visible&&v.push(D,Oe,xe,oe,ce.z,null)}}const Ce=D.children;for(let Oe=0,xe=Ce.length;Oe<xe;Oe++)un(Ce[Oe],$,oe,ae)}function fn(D,$,oe,ae){const te=D.opaque,Ce=D.transmissive,Oe=D.transparent;p.setupLightsView(oe),z===!0&&ge.setGlobalState(x.clippingPlanes,oe),ae&&_e.viewport(y.copy(ae)),te.length>0&&dn(te,$,oe),Ce.length>0&&dn(Ce,$,oe),Oe.length>0&&dn(Oe,$,oe),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function xn(D,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new $i(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Hs:hi,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[ae.id],Oe=ae.viewport||y;Ce.setSize(Oe.z,Oe.w);const xe=x.getRenderTarget();x.setRenderTarget(Ce),x.getClearColor(C),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),ve&&De.render(oe);const ke=x.toneMapping;x.toneMapping=Ci;const Ke=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),z===!0&&ge.setGlobalState(x.clippingPlanes,ae),dn(D,oe,ae),P.updateMultisampleRenderTarget(Ce),P.updateRenderTargetMipmap(Ce),pe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ve=0,ot=$.length;Ve<ot;Ve++){const ut=$[Ve],ft=ut.object,Ot=ut.geometry,st=ut.material,We=ut.group;if(st.side===Bn&&ft.layers.test(ae.layers)){const bt=st.side;st.side=Qt,st.needsUpdate=!0,pn(ft,oe,ae,Ot,st,We),st.side=bt,st.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(Ce),P.updateRenderTargetMipmap(Ce))}x.setRenderTarget(xe),x.setClearColor(C,L),Ke!==void 0&&(ae.viewport=Ke),x.toneMapping=ke}function dn(D,$,oe){const ae=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ce=D.length;te<Ce;te++){const Oe=D[te],xe=Oe.object,ke=Oe.geometry,Ke=ae===null?Oe.material:ae,qe=Oe.group;xe.layers.test(oe.layers)&&pn(xe,$,oe,ke,Ke,qe)}}function pn(D,$,oe,ae,te,Ce){D.onBeforeRender(x,$,oe,ae,te,Ce),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(x,$,oe,ae,D,Ce),te.transparent===!0&&te.side===Bn&&te.forceSinglePass===!1?(te.side=Qt,te.needsUpdate=!0,x.renderBufferDirect(oe,$,ae,te,D,Ce),te.side=Ri,te.needsUpdate=!0,x.renderBufferDirect(oe,$,ae,te,D,Ce),te.side=Bn):x.renderBufferDirect(oe,$,ae,te,D,Ce),D.onAfterRender(x,$,oe,ae,te,Ce)}function Et(D,$,oe){$.isScene!==!0&&($=Se);const ae=me.get(D),te=p.state.lights,Ce=p.state.shadowsArray,Oe=te.state.version,xe=Re.getParameters(D,te.state,Ce,$,oe),ke=Re.getProgramCacheKey(xe);let Ke=ae.programs;ae.environment=D.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(D.isMeshStandardMaterial?V:M).get(D.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,Ke===void 0&&(D.addEventListener("dispose",Be),Ke=new Map,ae.programs=Ke);let qe=Ke.get(ke);if(qe!==void 0){if(ae.currentProgram===qe&&ae.lightsStateVersion===Oe)return $r(D,xe),qe}else xe.uniforms=Re.getUniforms(D),D.onBeforeCompile(xe,x),qe=Re.acquireProgram(xe,ke),Ke.set(ke,qe),ae.uniforms=xe.uniforms;const Ve=ae.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ve.clippingPlanes=ge.uniform),$r(D,xe),ae.needsLights=qs(D),ae.lightsStateVersion=Oe,ae.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.directionalShadowMap.value=te.state.directionalShadowMap,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotShadowMap.value=te.state.spotShadowMap,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMap.value=te.state.pointShadowMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.currentProgram=qe,ae.uniformsList=null,qe}function Ln(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=Vo.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function $r(D,$){const oe=me.get(D);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Qr(D,$,oe,ae,te){$.isScene!==!0&&($=Se),P.resetTextureUnits();const Ce=$.fog,Oe=ae.isMeshStandardMaterial?$.environment:null,xe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Pi,ke=(ae.isMeshStandardMaterial?V:M).get(ae.envMap||Oe),Ke=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,qe=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ve=!!oe.morphAttributes.position,ot=!!oe.morphAttributes.normal,ut=!!oe.morphAttributes.color;let ft=Ci;ae.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,st=Ot!==void 0?Ot.length:0,We=me.get(ae),bt=p.state.lights;if(z===!0&&(k===!0||D!==G)){const xt=D===G&&ae.id===R;ge.setState(ae,D,xt)}let rt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==bt.state.version||We.outputColorSpace!==xe||te.isBatchedMesh&&We.batching===!1||!te.isBatchedMesh&&We.batching===!0||te.isBatchedMesh&&We.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&We.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||te.isInstancedMesh&&We.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&We.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&We.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&We.instancingMorph===!1&&te.morphTexture!==null||We.envMap!==ke||ae.fog===!0&&We.fog!==Ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ge.numPlanes||We.numIntersection!==ge.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==qe||We.morphTargets!==Ve||We.morphNormals!==ot||We.morphColors!==ut||We.toneMapping!==ft||We.morphTargetsCount!==st)&&(rt=!0):(rt=!0,We.__version=ae.version);let Yt=We.currentProgram;rt===!0&&(Yt=Et(ae,$,te));let mn=!1,zt=!1,Un=!1;const gt=Yt.getUniforms(),gn=We.uniforms;if(_e.useProgram(Yt.program)&&(mn=!0,zt=!0,Un=!0),ae.id!==R&&(R=ae.id,zt=!0),mn||G!==D){le.reverseDepthBuffer?(ne.copy(D.projectionMatrix),Wm(ne),Xm(ne),gt.setValue(F,"projectionMatrix",ne)):gt.setValue(F,"projectionMatrix",D.projectionMatrix),gt.setValue(F,"viewMatrix",D.matrixWorldInverse);const xt=gt.map.cameraPosition;xt!==void 0&&xt.setValue(F,se.setFromMatrixPosition(D.matrixWorld)),le.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&gt.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),G!==D&&(G=D,zt=!0,Un=!0)}if(te.isSkinnedMesh){gt.setOptional(F,te,"bindMatrix"),gt.setOptional(F,te,"bindMatrixInverse");const xt=te.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),gt.setValue(F,"boneTexture",xt.boneTexture,P))}te.isBatchedMesh&&(gt.setOptional(F,te,"batchingTexture"),gt.setValue(F,"batchingTexture",te._matricesTexture,P),gt.setOptional(F,te,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",te._indirectTexture,P),gt.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",te._colorsTexture,P));const Li=oe.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Ae.update(te,oe,Yt),(zt||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,gt.setValue(F,"receiveShadow",te.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(gn.envMap.value=ke,gn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(gn.envMapIntensity.value=$.environmentIntensity),zt&&(gt.setValue(F,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Ta(gn,Un),Ce&&ae.fog===!0&&ue.refreshFogUniforms(gn,Ce),ue.refreshMaterialUniforms(gn,ae,j,U,p.state.transmissionRenderTarget[D.id]),Vo.upload(F,Ln(We),gn,P)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Vo.upload(F,Ln(We),gn,P),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&gt.setValue(F,"center",te.center),gt.setValue(F,"modelViewMatrix",te.modelViewMatrix),gt.setValue(F,"normalMatrix",te.normalMatrix),gt.setValue(F,"modelMatrix",te.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const xt=ae.uniformsGroups;for(let es=0,sr=xt.length;es<sr;es++){const gi=xt[es];Z.update(gi,Yt),Z.bind(gi,Yt)}}return Yt}function Ta(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function qs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,$,oe){me.get(D.texture).__webglTexture=$,me.get(D.depthTexture).__webglTexture=oe;const ae=me.get(D);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,$){const oe=me.get(D);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,oe=0){w=D,T=$,b=oe;let ae=!0,te=null,Ce=!1,Oe=!1;if(D){const ke=me.get(D);if(ke.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(F.FRAMEBUFFER,null),ae=!1;else if(ke.__webglFramebuffer===void 0)P.setupRenderTarget(D);else if(ke.__hasExternalTextures)P.rebindTextures(D,me.get(D.texture).__webglTexture,me.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ve=D.depthTexture;if(ke.__boundDepthTexture!==Ve){if(Ve!==null&&me.has(Ve)&&(D.width!==Ve.image.width||D.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(D)}}const Ke=D.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const qe=me.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qe[$])?te=qe[$][oe]:te=qe[$],Ce=!0):D.samples>0&&P.useMultisampledRTT(D)===!1?te=me.get(D).__webglMultisampledFramebuffer:Array.isArray(qe)?te=qe[oe]:te=qe,y.copy(D.viewport),E.copy(D.scissor),I=D.scissorTest}else y.copy(K).multiplyScalar(j).floor(),E.copy(O).multiplyScalar(j).floor(),I=N;if(_e.bindFramebuffer(F.FRAMEBUFFER,te)&&ae&&_e.drawBuffers(D,te),_e.viewport(y),_e.scissor(E),_e.setScissorTest(I),Ce){const ke=me.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,oe)}else if(Oe){const ke=me.get(D.texture),Ke=$||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,oe||0,Ke)}R=-1},this.readRenderTargetPixels=function(D,$,oe,ae,te,Ce,Oe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(xe=xe[Oe]),xe){_e.bindFramebuffer(F.FRAMEBUFFER,xe);try{const ke=D.texture,Ke=ke.format,qe=ke.type;if(!le.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ae&&oe>=0&&oe<=D.height-te&&F.readPixels($,oe,ae,te,Ie.convert(Ke),Ie.convert(qe),Ce)}finally{const ke=w!==null?me.get(w).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(D,$,oe,ae,te,Ce,Oe){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(xe=xe[Oe]),xe){const ke=D.texture,Ke=ke.format,qe=ke.type;if(!le.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=D.width-ae&&oe>=0&&oe<=D.height-te){_e.bindFramebuffer(F.FRAMEBUFFER,xe);const Ve=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),F.readPixels($,oe,ae,te,Ie.convert(Ke),Ie.convert(qe),0);const ot=w!==null?me.get(w).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,ot);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vm(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(Ve),F.deleteSync(ut),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,$=null,oe=0){D.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,D=arguments[1]);const ae=Math.pow(2,-oe),te=Math.floor(D.image.width*ae),Ce=Math.floor(D.image.height*ae),Oe=$!==null?$.x:0,xe=$!==null?$.y:0;P.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,Oe,xe,te,Ce),_e.unbindTexture()},this.copyTextureToTexture=function(D,$,oe=null,ae=null,te=0){D.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,D=arguments[1],$=arguments[2],te=arguments[3]||0,oe=null);let Ce,Oe,xe,ke,Ke,qe;oe!==null?(Ce=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,xe=oe.min.x,ke=oe.min.y):(Ce=D.image.width,Oe=D.image.height,xe=0,ke=0),ae!==null?(Ke=ae.x,qe=ae.y):(Ke=0,qe=0);const Ve=Ie.convert($.format),ot=Ie.convert($.type);P.setTexture2D($,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const ut=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ot=F.getParameter(F.UNPACK_SKIP_PIXELS),st=F.getParameter(F.UNPACK_SKIP_ROWS),We=F.getParameter(F.UNPACK_SKIP_IMAGES),bt=D.isCompressedTexture?D.mipmaps[te]:D.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,te,Ke,qe,Ce,Oe,Ve,ot,bt.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,te,Ke,qe,bt.width,bt.height,Ve,bt.data):F.texSubImage2D(F.TEXTURE_2D,te,Ke,qe,Ce,Oe,Ve,ot,bt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We),te===0&&$.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(D,$,oe=null,ae=null,te=0){D.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,D=arguments[2],$=arguments[3],te=arguments[4]||0);let Ce,Oe,xe,ke,Ke,qe,Ve,ot,ut;const ft=D.isCompressedTexture?D.mipmaps[te]:D.image;oe!==null?(Ce=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,xe=oe.max.z-oe.min.z,ke=oe.min.x,Ke=oe.min.y,qe=oe.min.z):(Ce=ft.width,Oe=ft.height,xe=ft.depth,ke=0,Ke=0,qe=0),ae!==null?(Ve=ae.x,ot=ae.y,ut=ae.z):(Ve=0,ot=0,ut=0);const Ot=Ie.convert($.format),st=Ie.convert($.type);let We;if($.isData3DTexture)P.setTexture3D($,0),We=F.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)P.setTexture2DArray($,0),We=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const bt=F.getParameter(F.UNPACK_ROW_LENGTH),rt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Yt=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),zt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe),D.isDataTexture||D.isData3DTexture?F.texSubImage3D(We,te,Ve,ot,ut,Ce,Oe,xe,Ot,st,ft.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(We,te,Ve,ot,ut,Ce,Oe,xe,Ot,ft.data):F.texSubImage3D(We,te,Ve,ot,ut,Ce,Oe,xe,Ot,st,ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,bt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zt),te===0&&$.generateMipmaps&&F.generateMipmap(We),_e.unbindTexture()},this.initRenderTarget=function(D){me.get(D).__webglFramebuffer===void 0&&P.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?P.setTextureCube(D,0):D.isData3DTexture?P.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?P.setTexture2DArray(D,0):P.setTexture2D(D,0),_e.unbindTexture()},this.resetState=function(){T=0,b=0,w=null,_e.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===fa?"display-p3":"srgb"}}class jc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qx extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ey extends an{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class vd extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new W,na=new W,Au=new pt,ds=new Xc,So=new Yr,fl=new W,Cu=new W;class ty extends It{constructor(e=new cn,t=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ta.fromBufferAttribute(t,i-1),na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ta.distanceTo(na);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Au.copy(i).invert(),ds.copy(e.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,p=m-1;v<p;v+=c){const g=h.getX(v),_=h.getX(v+1),x=Mo(this,e,ds,l,g,_);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(d),g=Mo(this,e,ds,l,v,p);g&&t.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,p=m-1;v<p;v+=c){const g=Mo(this,e,ds,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=Mo(this,e,ds,l,m-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ta.fromBufferAttribute(o,i),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,fl,Cu)>n)return;fl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(fl);if(!(l<e.near||l>e.far))return{distance:l,point:Cu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ru=new W,Pu=new W;class ny extends ty{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ru.fromBufferAttribute(t,i),Pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ru.distanceTo(Pu);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new pt,vc=new Xc,wo=new Yr,Eo=new W;class iy extends It{constructor(e=new cn,t=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Lu.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,v=d;m<v;m++){const p=c.getX(m);Eo.fromBufferAttribute(f,p),Uu(Eo,p,l,i,e,t,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,v=d;m<v;m++)Eo.fromBufferAttribute(f,m),Uu(Eo,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uu(s,e,t,n,i,r,o){const a=vc.distanceSqToPoint(s);if(a<t){const l=new W;vc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ry extends Wt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new W,i=[],r=[],o=[],a=new W,l=new pt;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Gt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Gt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kc extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sy extends Kc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const bo=new W,dl=new Zc,pl=new Zc,ml=new Zc;class oy extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new W){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),c=bo);const f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),dl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,p),pl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,p),ml.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),pl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ml.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(dl.calc(l),pl.calc(l),ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new W().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Du(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function ay(s,e){const t=1-s;return t*t*e}function ly(s,e){return 2*(1-s)*s*e}function cy(s,e){return s*s*e}function As(s,e,t,n){return ay(s,e)+ly(s,t)+cy(s,n)}function hy(s,e){const t=1-s;return t*t*t*e}function uy(s,e){const t=1-s;return 3*t*t*s*e}function fy(s,e){return 3*(1-s)*s*s*e}function dy(s,e){return s*s*s*e}function Cs(s,e,t,n,i){return hy(s,e)+uy(s,t)+fy(s,n)+dy(s,i)}class xd extends Hn{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,r.x,o.x,a.x),Cs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class py extends Hn{constructor(e=new W,t=new W,n=new W,i=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new W){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,r.x,o.x,a.x),Cs(e,i.y,r.y,o.y,a.y),Cs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yd extends Hn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends Hn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sd extends Hn{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(As(e,i.x,r.x,o.x),As(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gy extends Hn{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(As(e,i.x,r.x,o.x),As(e,i.y,r.y,o.y),As(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Du(a,l.x,c.x,h.x,f.x),Du(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ue().fromArray(i))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:sy,CatmullRomCurve3:oy,CubicBezierCurve:xd,CubicBezierCurve3:py,EllipseCurve:Kc,LineCurve:yd,LineCurve3:my,QuadraticBezierCurve:Sd,QuadraticBezierCurve3:gy,SplineCurve:Md});class vy extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _c[i.type]().fromJSON(i))}return this}}class xc extends vy{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new yd(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Sd(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new xd(this.currentPoint.clone(),new Ue(e,t),new Ue(n,i),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Md(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Kc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let Wo=class extends xc{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xc().fromJSON(i))}return this}};const _y={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=wd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(n&&(r=wy(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)f=s[m],u=s[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Fs(r,o,t,a,l,d,0),o}};function wd(s,e,t,n,i){let r,o;if(i===Iy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Iu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Iu(r,s[r],s[r+1],o);return o&&ma(o,o.next)&&(Os(o),o=o.next),o}function Qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ma(t,t.next)||St(t.prev,t,t.next)===0)){if(Os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Cy(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?yy(s,n,i,r):xy(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Os(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Sy(Qi(s),e,t),Fs(s,e,t,n,i,r,2)):o===2&&My(s,e,t,n,i,r):Fs(Qi(s),e,t,n,i,r,1);break}}}function xy(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ar(i,a,r,l,o,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yy(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,v=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,g=yc(d,m,e,t,n),_=yc(v,p,e,t,n);let x=s.prevZ,S=s.nextZ;for(;x&&x.z>=g&&S&&S.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Ar(a,h,l,f,c,u,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&Ar(a,h,l,f,c,u,S.x,S.y)&&St(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Ar(a,h,l,f,c,u,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=_;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&Ar(a,h,l,f,c,u,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Sy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ma(i,r)&&Ed(i,n,n.next,r)&&Ns(i,r)&&Ns(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Os(n),Os(n.next),n=s=r),n=n.next}while(n!==s);return Qi(n)}function My(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ly(o,a)){let l=bd(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Fs(o,e,t,n,i,r,0),Fs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function wy(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=wd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Py(c));for(i.sort(Ey),r=0;r<i.length;r++)t=by(i[r],t);return t}function Ey(s,e){return s.x-e.x}function by(s,e){const t=Ty(s,e);if(!t)return e;const n=bd(t,s);return Qi(n,n.next),Qi(t,t.next)}function Ty(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ar(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Ns(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&Ay(i,t)))&&(i=t,h=f)),t=t.next;while(t!==a);return i}function Ay(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function Cy(s,e,t,n){let i=s;do i.z===0&&(i.z=yc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ry(i)}function Ry(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function yc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Py(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ar(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ly(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Uy(s,e)&&(Ns(s,e)&&Ns(e,s)&&Dy(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||ma(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ma(s,e){return s.x===e.x&&s.y===e.y}function Ed(s,e,t,n){const i=Ao(St(s,e,t)),r=Ao(St(s,e,n)),o=Ao(St(t,n,s)),a=Ao(St(t,n,e));return!!(i!==r&&o!==a||i===0&&To(s,t,e)||r===0&&To(s,n,e)||o===0&&To(t,s,n)||a===0&&To(t,e,n))}function To(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ao(s){return s>0?1:s<0?-1:0}function Uy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ed(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ns(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function Dy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function bd(s,e){const t=new Sc(s.i,s.x,s.y),n=new Sc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Iu(s,e,t,n){const i=new Sc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Os(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Iy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ur{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ur.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Fu(e),Nu(n,e);let o=e.length;t.forEach(Fu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Nu(n,t[l]);const a=_y.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Fu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Jc extends cn{constructor(e=new Wo([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ln(i,3)),this.setAttribute("uv",new ln(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Fy;let x,S=!1,T,b,w,R;g&&(x=g.getSpacedPoints(h),S=!0,u=!1,T=g.computeFrenetFrames(h,!1),b=new W,w=new W,R=new W),u||(p=0,d=0,m=0,v=0);const G=a.extractPoints(c);let y=G.shape;const E=G.holes;if(!Ur.isClockWise(y)){y=y.reverse();for(let Y=0,F=E.length;Y<F;Y++){const de=E[Y];Ur.isClockWise(de)&&(E[Y]=de.reverse())}}const C=Ur.triangulateShape(y,E),L=y;for(let Y=0,F=E.length;Y<F;Y++){const de=E[Y];y=y.concat(de)}function B(Y,F,de){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(F,de)}const U=y.length,j=C.length;function H(Y,F,de){let pe,le,_e;const he=Y.x-F.x,me=Y.y-F.y,P=de.x-Y.x,M=de.y-Y.y,V=he*he+me*me,J=he*M-me*P;if(Math.abs(J)>Number.EPSILON){const re=Math.sqrt(V),ee=Math.sqrt(P*P+M*M),Re=F.x-me/re,ue=F.y+he/re,ye=de.x-M/ee,Pe=de.y+P/ee,ge=((ye-Re)*M-(Pe-ue)*P)/(he*M-me*P);pe=Re+he*ge-Y.x,le=ue+me*ge-Y.y;const we=pe*pe+le*le;if(we<=2)return new Ue(pe,le);_e=Math.sqrt(we/2)}else{let re=!1;he>Number.EPSILON?P>Number.EPSILON&&(re=!0):he<-Number.EPSILON?P<-Number.EPSILON&&(re=!0):Math.sign(me)===Math.sign(M)&&(re=!0),re?(pe=-me,le=he,_e=Math.sqrt(V)):(pe=he,le=me,_e=Math.sqrt(V/2))}return new Ue(pe/_e,le/_e)}const X=[];for(let Y=0,F=L.length,de=F-1,pe=Y+1;Y<F;Y++,de++,pe++)de===F&&(de=0),pe===F&&(pe=0),X[Y]=H(L[Y],L[de],L[pe]);const K=[];let O,N=X.concat();for(let Y=0,F=E.length;Y<F;Y++){const de=E[Y];O=[];for(let pe=0,le=de.length,_e=le-1,he=pe+1;pe<le;pe++,_e++,he++)_e===le&&(_e=0),he===le&&(he=0),O[pe]=H(de[pe],de[_e],de[he]);K.push(O),N=N.concat(O)}for(let Y=0;Y<p;Y++){const F=Y/p,de=d*Math.cos(F*Math.PI/2),pe=m*Math.sin(F*Math.PI/2)+v;for(let le=0,_e=L.length;le<_e;le++){const he=B(L[le],X[le],pe);q(he.x,he.y,-de)}for(let le=0,_e=E.length;le<_e;le++){const he=E[le];O=K[le];for(let me=0,P=he.length;me<P;me++){const M=B(he[me],O[me],pe);q(M.x,M.y,-de)}}}const Q=m+v;for(let Y=0;Y<U;Y++){const F=u?B(y[Y],N[Y],Q):y[Y];S?(w.copy(T.normals[0]).multiplyScalar(F.x),b.copy(T.binormals[0]).multiplyScalar(F.y),R.copy(x[0]).add(w).add(b),q(R.x,R.y,R.z)):q(F.x,F.y,0)}for(let Y=1;Y<=h;Y++)for(let F=0;F<U;F++){const de=u?B(y[F],N[F],Q):y[F];S?(w.copy(T.normals[Y]).multiplyScalar(de.x),b.copy(T.binormals[Y]).multiplyScalar(de.y),R.copy(x[Y]).add(w).add(b),q(R.x,R.y,R.z)):q(de.x,de.y,f/h*Y)}for(let Y=p-1;Y>=0;Y--){const F=Y/p,de=d*Math.cos(F*Math.PI/2),pe=m*Math.sin(F*Math.PI/2)+v;for(let le=0,_e=L.length;le<_e;le++){const he=B(L[le],X[le],pe);q(he.x,he.y,f+de)}for(let le=0,_e=E.length;le<_e;le++){const he=E[le];O=K[le];for(let me=0,P=he.length;me<P;me++){const M=B(he[me],O[me],pe);S?q(M.x,M.y+x[h-1].y,x[h-1].x+de):q(M.x,M.y,f+de)}}}z(),k();function z(){const Y=i.length/3;if(u){let F=0,de=U*F;for(let pe=0;pe<j;pe++){const le=C[pe];se(le[2]+de,le[1]+de,le[0]+de)}F=h+p*2,de=U*F;for(let pe=0;pe<j;pe++){const le=C[pe];se(le[0]+de,le[1]+de,le[2]+de)}}else{for(let F=0;F<j;F++){const de=C[F];se(de[2],de[1],de[0])}for(let F=0;F<j;F++){const de=C[F];se(de[0]+U*h,de[1]+U*h,de[2]+U*h)}}n.addGroup(Y,i.length/3-Y,0)}function k(){const Y=i.length/3;let F=0;ne(L,F),F+=L.length;for(let de=0,pe=E.length;de<pe;de++){const le=E[de];ne(le,F),F+=le.length}n.addGroup(Y,i.length/3-Y,1)}function ne(Y,F){let de=Y.length;for(;--de>=0;){const pe=de;let le=de-1;le<0&&(le=Y.length-1);for(let _e=0,he=h+p*2;_e<he;_e++){const me=U*_e,P=U*(_e+1),M=F+pe+me,V=F+le+me,J=F+le+P,re=F+pe+P;ce(M,V,J,re)}}}function q(Y,F,de){l.push(Y),l.push(F),l.push(de)}function se(Y,F,de){Se(Y),Se(F),Se(de);const pe=i.length/3,le=_.generateTopUV(n,i,pe-3,pe-2,pe-1);ve(le[0]),ve(le[1]),ve(le[2])}function ce(Y,F,de,pe){Se(Y),Se(F),Se(pe),Se(F),Se(de),Se(pe);const le=i.length/3,_e=_.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ve(_e[0]),ve(_e[1]),ve(_e[3]),ve(_e[1]),ve(_e[2]),ve(_e[3])}function Se(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function ve(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ny(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _c[i.type]().fromJSON(i)),new Jc(n,e.options)}}const Fy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ue(r,o),new Ue(a,l),new Ue(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-f),new Ue(u,1-m),new Ue(v,1-g)]:[new Ue(a,1-l),new Ue(h,1-f),new Ue(d,1-m),new Ue(p,1-g)]}};function Ny(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vs extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ou={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Oy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const By=new Oy;class $c{constructor(e){this.manager=e!==void 0?e:By,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$c.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class ky extends $c{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ou.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:i});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=jn[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0;let v=0;const p=new ReadableStream({start(g){_();function _(){f.read().then(({done:x,value:S})=>{if(x)g.close();else{v+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let b=0,w=h.length;b<w;b++){const R=h[b];R.onProgress&&R.onProgress(T)}g.enqueue(S),_()}},x=>{g.error(x)})}}});return new Response(p)}else throw new zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Ou.add(e,c);const h=jn[e];delete jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ga extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gy extends ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new pt,Bu=new W,zu=new W;class Td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ku=new pt,ps=new W,vl=new W;class Hy extends Td{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(ps),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}}class Vy extends ga{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wy extends Td{constructor(){super(new cd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Wy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xy extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qy extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return performance.now()}class jy extends ny{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ye(n),i=new Ye(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,d=0,m=-a;u<=t;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=u===r?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new cn;h.setAttribute("position",new ln(l,3)),h.setAttribute("color",new ln(c,3));const f=new vd({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ky{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new xc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const _=[];for(let x=0,S=g.length;x<S;x++){const T=g[x],b=new Wo;b.curves=T.curves,_.push(b)}return _}function n(g,_){const x=_.length;let S=!1;for(let T=x-1,b=0;b<x;T=b++){let w=_[T],R=_[b],G=R.x-w.x,y=R.y-w.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(w=_[b],G=-G,R=_[T],y=-y),g.y<w.y||g.y>R.y)continue;if(g.y===w.y){if(g.x===w.x)return!0}else{const E=y*(g.x-w.x)-G*(g.y-w.y);if(E===0)return!0;if(E<0)continue;S=!S}}else{if(g.y!==w.y)continue;if(R.x<=g.x&&g.x<=w.x||w.x<=g.x&&g.x<=R.x)return!0}}return S}const i=Ur.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Wo,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],m=0,v;u[m]=void 0,d[m]=[];for(let g=0,_=r.length;g<_;g++)a=r[g],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!h&&u[m]&&m++,u[m]={s:new Wo,p:v},u[m].s.curves=a.curves,h&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!u[0])return t(r);if(u.length>1){let g=!1,_=0;for(let x=0,S=u.length;x<S;x++)f[x]=[];for(let x=0,S=u.length;x<S;x++){const T=d[x];for(let b=0;b<T.length;b++){const w=T[b];let R=!0;for(let G=0;G<u.length;G++)n(w.p,u[G].p)&&(x!==G&&_++,R?(R=!1,f[G].push(w)):g=!0);R&&f[x].push(w)}}_>0&&g===!1&&(d=f)}let p;for(let g=0,_=u.length;g<_;g++){l=u[g].s,c.push(l),p=d[g];for(let x=0,S=p.length;x<S;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);class Zy extends $c{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ky(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new Jy(e)}}class Jy{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=$y(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function $y(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const f=Qy(h,i,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function Qy(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new Ky;let a,l,c,h,f,u,d,m;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,g=v.length;p<g;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+n,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+n,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,h=v[p++]*e+n,f=v[p++]*e+t,u=v[p++]*e+n,o.quadraticCurveTo(f,u,c,h);break;case"b":c=v[p++]*e+t,h=v[p++]*e+n,f=v[p++]*e+t,u=v[p++]*e+n,d=v[p++]*e+t,m=v[p++]*e+n,o.bezierCurveTo(f,u,d,m,c,h);break}}return{offsetX:r.ha*e,path:o}}class eS extends Jc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function tS(){var s=Object.create(null);function e(i,r){var o=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var h=i.getTransferables;if(h===void 0&&(h=null),!s[o])try{l=l.map(function(u){return u&&u.isWorkerModule&&(e(u,function(d){if(d instanceof Error)throw d}),u=s[u.id].value),u}),c=n("<"+a+">.init",c),h&&(h=n("<"+a+">.getTransferables",h));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:f,getTransferables:h},r(f)}catch(u){u&&u.noLog||console.error(u),r(u)}}function t(i,r){var o,a=i.id,l=i.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(h,function(f){return r(f instanceof Error?f:new Error(""+f))}):h(c)}catch(f){r(f)}function h(f){try{var u=s[a].getTransferables&&s[a].getTransferables(f);(!u||!Array.isArray(u)||!u.length)&&(u=void 0),r(f,u)}catch(d){console.error(d),r(d)}}}function n(i,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function nS(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Cd=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Cd=function(){return s},s},iS=0,rS=0,_l=!1,Rs=Object.create(null),Ps=Object.create(null),Mc=Object.create(null);function Kr(s){if((!s||typeof s.init!="function")&&!_l)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId,r=nS(s);i==null&&(i="#default");var o="workerModule"+ ++iS,a=s.name||o,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(_l=!0,h=Kr({workerId:i,name:"<"+a+"> function dependency: "+h.name,init:`function(){return (
`+Xo(h)+`
)}`}),_l=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];if(!Cd())return r.apply(void 0,h);if(!l){l=Hu(i,"registerModule",c.workerModuleData);var u=function(){l=null,Ps[i].delete(u)};(Ps[i]||(Ps[i]=new Set)).add(u)}return l.then(function(d){var m=d.isCallable;if(m)return Hu(i,"callModule",{id:o,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:e,init:Xo(t),getTransferables:n&&Xo(n)},c.onMainThread=r,c}function sS(s){Ps[s]&&Ps[s].forEach(function(e){e()}),Rs[s]&&(Rs[s].terminate(),delete Rs[s])}function Xo(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function oS(s){var e=Rs[s];if(!e){var t=Xo(tS);e=Rs[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=Mc[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Mc[r],o(i)}}return e}function Hu(s,e,t){return new Promise(function(n,i){var r=++rS;Mc[r]=function(o){o.success?n(o.result):i(new Error("Error in worker "+e+" call: "+o.error))},oS(s).postMessage({messageId:r,action:e,data:t})})}function Rd(){var s=function(e){function t(X,K,O,N,Q,z,k,ne){var q=1-k;ne.x=q*q*X+2*q*k*O+k*k*Q,ne.y=q*q*K+2*q*k*N+k*k*z}function n(X,K,O,N,Q,z,k,ne,q,se){var ce=1-q;se.x=ce*ce*ce*X+3*ce*ce*q*O+3*ce*q*q*Q+q*q*q*k,se.y=ce*ce*ce*K+3*ce*ce*q*N+3*ce*q*q*z+q*q*q*ne}function i(X,K){for(var O=/([MLQCZ])([^MLQCZ]*)/g,N,Q,z,k,ne;N=O.exec(X);){var q=N[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(se){return parseFloat(se)});switch(N[1]){case"M":k=Q=q[0],ne=z=q[1];break;case"L":(q[0]!==k||q[1]!==ne)&&K("L",k,ne,k=q[0],ne=q[1]);break;case"Q":{K("Q",k,ne,k=q[2],ne=q[3],q[0],q[1]);break}case"C":{K("C",k,ne,k=q[4],ne=q[5],q[0],q[1],q[2],q[3]);break}case"Z":(k!==Q||ne!==z)&&K("L",k,ne,Q,z);break}}}function r(X,K,O){O===void 0&&(O=16);var N={x:0,y:0};i(X,function(Q,z,k,ne,q,se,ce,Se,ve){switch(Q){case"L":K(z,k,ne,q);break;case"Q":{for(var Y=z,F=k,de=1;de<O;de++)t(z,k,se,ce,ne,q,de/(O-1),N),K(Y,F,N.x,N.y),Y=N.x,F=N.y;break}case"C":{for(var pe=z,le=k,_e=1;_e<O;_e++)n(z,k,se,ce,Se,ve,ne,q,_e/(O-1),N),K(pe,le,N.x,N.y),pe=N.x,le=N.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(X,K){var O=X.getContext?X.getContext("webgl",c):X,N=l.get(O);if(!N){let pe=function(M){var V=z[M];if(!V&&(V=z[M]=O.getExtension(M),!V))throw new Error(M+" not supported");return V},le=function(M,V){var J=O.createShader(V);return O.shaderSource(J,M),O.compileShader(J),J},_e=function(M,V,J,re){if(!k[M]){var ee={},Re={},ue=O.createProgram();O.attachShader(ue,le(V,O.VERTEX_SHADER)),O.attachShader(ue,le(J,O.FRAGMENT_SHADER)),O.linkProgram(ue),k[M]={program:ue,transaction:function(Pe){O.useProgram(ue),Pe({setUniform:function(we,De){for(var Ae=[],Me=arguments.length-2;Me-- >0;)Ae[Me]=arguments[Me+2];var Te=Re[De]||(Re[De]=O.getUniformLocation(ue,De));O["uniform"+we].apply(O,[Te].concat(Ae))},setAttribute:function(we,De,Ae,Me,Te){var Ie=ee[we];Ie||(Ie=ee[we]={buf:O.createBuffer(),loc:O.getAttribLocation(ue,we),data:null}),O.bindBuffer(O.ARRAY_BUFFER,Ie.buf),O.vertexAttribPointer(Ie.loc,De,O.FLOAT,!1,0,0),O.enableVertexAttribArray(Ie.loc),Q?O.vertexAttribDivisor(Ie.loc,Me):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,Me),Te!==Ie.data&&(O.bufferData(O.ARRAY_BUFFER,Te,Ae),Ie.data=Te)}})}}}k[M].transaction(re)},he=function(M,V){q++;try{O.activeTexture(O.TEXTURE0+q);var J=ne[M];J||(J=ne[M]=O.createTexture(),O.bindTexture(O.TEXTURE_2D,J),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MIN_FILTER,O.NEAREST),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MAG_FILTER,O.NEAREST)),O.bindTexture(O.TEXTURE_2D,J),V(J,q)}finally{q--}},me=function(M,V,J){var re=O.createFramebuffer();se.push(re),O.bindFramebuffer(O.FRAMEBUFFER,re),O.activeTexture(O.TEXTURE0+V),O.bindTexture(O.TEXTURE_2D,M),O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,M,0);try{J(re)}finally{O.deleteFramebuffer(re),O.bindFramebuffer(O.FRAMEBUFFER,se[--se.length-1]||null)}},P=function(){z={},k={},ne={},q=-1,se.length=0};var ce=pe,Se=le,ve=_e,Y=he,F=me,de=P,Q=typeof WebGL2RenderingContext<"u"&&O instanceof WebGL2RenderingContext,z={},k={},ne={},q=-1,se=[];O.canvas.addEventListener("webglcontextlost",function(M){P(),M.preventDefault()},!1),l.set(O,N={gl:O,isWebGL2:Q,getExtension:pe,withProgram:_e,withTexture:he,withTextureFramebuffer:me,handleContextLoss:P})}K(N)}function f(X,K,O,N,Q,z,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),h(X,function(q){var se=q.gl,ce=q.withProgram,Se=q.withTexture;Se("copy",function(ve,Y){se.texImage2D(se.TEXTURE_2D,0,se.RGBA,Q,z,0,se.RGBA,se.UNSIGNED_BYTE,K),ce("copy",o,a,function(F){var de=F.setUniform,pe=F.setAttribute;pe("aUV",2,se.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),de("1i","image",Y),se.bindFramebuffer(se.FRAMEBUFFER,ne||null),se.disable(se.BLEND),se.colorMask(k&8,k&4,k&2,k&1),se.viewport(O,N,Q,z),se.scissor(O,N,Q,z),se.drawArrays(se.TRIANGLES,0,3)})})})}function u(X,K,O){var N=X.width,Q=X.height;h(X,function(z){var k=z.gl,ne=new Uint8Array(N*Q*4);k.readPixels(0,0,N,Q,k.RGBA,k.UNSIGNED_BYTE,ne),X.width=K,X.height=O,f(k,ne,0,0,N,Q)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:f,resizeWebGLCanvasWithoutClearing:u});function m(X,K,O,N,Q,z){z===void 0&&(z=1);var k=new Uint8Array(X*K),ne=N[2]-N[0],q=N[3]-N[1],se=[];r(O,function(pe,le,_e,he){se.push({x1:pe,y1:le,x2:_e,y2:he,minX:Math.min(pe,_e),minY:Math.min(le,he),maxX:Math.max(pe,_e),maxY:Math.max(le,he)})}),se.sort(function(pe,le){return pe.maxX-le.maxX});for(var ce=0;ce<X;ce++)for(var Se=0;Se<K;Se++){var ve=F(N[0]+ne*(ce+.5)/X,N[1]+q*(Se+.5)/K),Y=Math.pow(1-Math.abs(ve)/Q,z)/2;ve<0&&(Y=1-Y),Y=Math.max(0,Math.min(255,Math.round(Y*255))),k[Se*X+ce]=Y}return k;function F(pe,le){for(var _e=1/0,he=1/0,me=se.length;me--;){var P=se[me];if(P.maxX+he<=pe)break;if(pe+he>P.minX&&le-he<P.maxY&&le+he>P.minY){var M=g(pe,le,P.x1,P.y1,P.x2,P.y2);M<_e&&(_e=M,he=Math.sqrt(_e))}}return de(pe,le)&&(he=-he),he}function de(pe,le){for(var _e=0,he=se.length;he--;){var me=se[he];if(me.maxX<=pe)break;var P=me.y1>le!=me.y2>le&&pe<(me.x2-me.x1)*(le-me.y1)/(me.y2-me.y1)+me.x1;P&&(_e+=me.y1<me.y2?1:-1)}return _e!==0}}function v(X,K,O,N,Q,z,k,ne,q,se){z===void 0&&(z=1),ne===void 0&&(ne=0),q===void 0&&(q=0),se===void 0&&(se=0),p(X,K,O,N,Q,z,k,null,ne,q,se)}function p(X,K,O,N,Q,z,k,ne,q,se,ce){z===void 0&&(z=1),q===void 0&&(q=0),se===void 0&&(se=0),ce===void 0&&(ce=0);for(var Se=m(X,K,O,N,Q,z),ve=new Uint8Array(Se.length*4),Y=0;Y<Se.length;Y++)ve[Y*4+ce]=Se[Y];f(k,ve,q,se,X,K,1<<3-ce,ne)}function g(X,K,O,N,Q,z){var k=Q-O,ne=z-N,q=k*k+ne*ne,se=q?Math.max(0,Math.min(1,((X-O)*k+(K-N)*ne)/q)):0,ce=X-(O+se*k),Se=K-(N+se*ne);return ce*ce+Se*Se}var _=Object.freeze({__proto__:null,generate:m,generateIntoCanvas:v,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",b=new Float32Array([0,0,2,0,0,2]),w=null,R=!1,G={},y=new WeakMap;function E(X){if(!R&&!B(X))throw new Error("WebGL generation not supported")}function I(X,K,O,N,Q,z,k){if(z===void 0&&(z=1),k===void 0&&(k=null),!k&&(k=w,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=w=ne.getContext("webgl",{depth:!1})}E(k);var q=new Uint8Array(X*K*4);h(k,function(ve){var Y=ve.gl,F=ve.withTexture,de=ve.withTextureFramebuffer;F("readable",function(pe,le){Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,X,K,0,Y.RGBA,Y.UNSIGNED_BYTE,null),de(pe,le,function(_e){L(X,K,O,N,Q,z,Y,_e,0,0,0),Y.readPixels(0,0,X,K,Y.RGBA,Y.UNSIGNED_BYTE,q)})})});for(var se=new Uint8Array(X*K),ce=0,Se=0;ce<q.length;ce+=4)se[Se++]=q[ce];return se}function C(X,K,O,N,Q,z,k,ne,q,se){z===void 0&&(z=1),ne===void 0&&(ne=0),q===void 0&&(q=0),se===void 0&&(se=0),L(X,K,O,N,Q,z,k,null,ne,q,se)}function L(X,K,O,N,Q,z,k,ne,q,se,ce){z===void 0&&(z=1),q===void 0&&(q=0),se===void 0&&(se=0),ce===void 0&&(ce=0),E(k);var Se=[];r(O,function(ve,Y,F,de){Se.push(ve,Y,F,de)}),Se=new Float32Array(Se),h(k,function(ve){var Y=ve.gl,F=ve.isWebGL2,de=ve.getExtension,pe=ve.withProgram,le=ve.withTexture,_e=ve.withTextureFramebuffer,he=ve.handleContextLoss;if(le("rawDistances",function(me,P){(X!==me._lastWidth||K!==me._lastHeight)&&Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,me._lastWidth=X,me._lastHeight=K,0,Y.RGBA,Y.UNSIGNED_BYTE,null),pe("main",x,S,function(M){var V=M.setAttribute,J=M.setUniform,re=!F&&de("ANGLE_instanced_arrays"),ee=!F&&de("EXT_blend_minmax");V("aUV",2,Y.STATIC_DRAW,0,b),V("aLineSegment",4,Y.DYNAMIC_DRAW,1,Se),J.apply(void 0,["4f","uGlyphBounds"].concat(N)),J("1f","uMaxDistance",Q),J("1f","uExponent",z),_e(me,P,function(Re){Y.enable(Y.BLEND),Y.colorMask(!0,!0,!0,!0),Y.viewport(0,0,X,K),Y.scissor(0,0,X,K),Y.blendFunc(Y.ONE,Y.ONE),Y.blendEquationSeparate(Y.FUNC_ADD,F?Y.MAX:ee.MAX_EXT),Y.clear(Y.COLOR_BUFFER_BIT),F?Y.drawArraysInstanced(Y.TRIANGLES,0,3,Se.length/4):re.drawArraysInstancedANGLE(Y.TRIANGLES,0,3,Se.length/4)})}),pe("post",o,T,function(M){M.setAttribute("aUV",2,Y.STATIC_DRAW,0,b),M.setUniform("1i","tex",P),Y.bindFramebuffer(Y.FRAMEBUFFER,ne),Y.disable(Y.BLEND),Y.colorMask(ce===0,ce===1,ce===2,ce===3),Y.viewport(q,se,X,K),Y.scissor(q,se,X,K),Y.drawArrays(Y.TRIANGLES,0,3)})}),Y.isContextLost())throw he(),new Error("webgl context lost")})}function B(X){var K=!X||X===w?G:X.canvas||X,O=y.get(K);if(O===void 0){R=!0;var N=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],z=I(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,X);O=z&&Q.length===z.length&&z.every(function(k,ne){return k===Q[ne]}),O||(N="bad trial run results",console.info(Q,z))}catch(k){O=!1,N=k.message}N&&console.warn("WebGL SDF generation not supported:",N),R=!1,y.set(K,O)}return O}var U=Object.freeze({__proto__:null,generate:I,generateIntoCanvas:C,generateIntoFramebuffer:L,isSupported:B});function j(X,K,O,N,Q,z){Q===void 0&&(Q=Math.max(N[2]-N[0],N[3]-N[1])/2),z===void 0&&(z=1);try{return I.apply(U,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),m.apply(_,arguments)}}function H(X,K,O,N,Q,z,k,ne,q,se){Q===void 0&&(Q=Math.max(N[2]-N[0],N[3]-N[1])/2),z===void 0&&(z=1),ne===void 0&&(ne=0),q===void 0&&(q=0),se===void 0&&(se=0);try{return C.apply(U,arguments)}catch(ce){return console.info("WebGL SDF generation failed, falling back to JS",ce),v.apply(_,arguments)}}return e.forEachPathCommand=i,e.generate=j,e.generateIntoCanvas=H,e.javascript=_,e.pathToLineSegments=r,e.webgl=U,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function aS(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(he,me){n[he]=1<<me+1,i[n[he]]=he}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,h=null;function f(){if(!h){h=new Map;var he=function(P){if(t.hasOwnProperty(P)){var M=0;t[P].split(",").forEach(function(V){var J=V.split("+"),re=J[0],ee=J[1];re=parseInt(re,36),ee=ee?parseInt(ee,36):0,h.set(M+=re,n[P]);for(var Re=0;Re<ee;Re++)h.set(++M,n[P])})}};for(var me in t)he(me)}}function u(he){return f(),h.get(he.codePointAt(0))||n.L}function d(he){return i[u(he)]}var m={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(he,me){var P=36,M=0,V=new Map,J=me&&new Map,re;return he.split(",").forEach(function ee(Re){if(Re.indexOf("+")!==-1)for(var ue=+Re;ue--;)ee(re);else{re=Re;var ye=Re.split(">"),Pe=ye[0],ge=ye[1];Pe=String.fromCodePoint(M+=parseInt(Pe,P)),ge=String.fromCodePoint(M+=parseInt(ge,P)),V.set(Pe,ge),me&&J.set(ge,Pe)}}),{map:V,reverseMap:J}}var p,g,_;function x(){if(!p){var he=v(m.pairs,!0),me=he.map,P=he.reverseMap;p=me,g=P,_=v(m.canonical,!1).map}}function S(he){return x(),p.get(he)||null}function T(he){return x(),g.get(he)||null}function b(he){return x(),_.get(he)||null}var w=n.L,R=n.R,G=n.EN,y=n.ES,E=n.ET,I=n.AN,C=n.CS,L=n.B,B=n.S,U=n.ON,j=n.BN,H=n.NSM,X=n.AL,K=n.LRO,O=n.RLO,N=n.LRE,Q=n.RLE,z=n.PDF,k=n.LRI,ne=n.RLI,q=n.FSI,se=n.PDI;function ce(he,me){for(var P=125,M=new Uint32Array(he.length),V=0;V<he.length;V++)M[V]=u(he[V]);var J=new Map;function re(jt,Sn){var Kt=M[jt];M[jt]=Sn,J.set(Kt,J.get(Kt)-1),Kt&a&&J.set(a,J.get(a)-1),J.set(Sn,(J.get(Sn)||0)+1),Sn&a&&J.set(a,(J.get(a)||0)+1)}for(var ee=new Uint8Array(he.length),Re=new Map,ue=[],ye=null,Pe=0;Pe<he.length;Pe++)ye||ue.push(ye={start:Pe,end:he.length-1,level:me==="rtl"?1:me==="ltr"?0:Lh(Pe,!1)}),M[Pe]&L&&(ye.end=Pe,ye=null);for(var ge=Q|N|O|K|r|se|z|L,we=function(jt){return jt+(jt&1?1:2)},De=function(jt){return jt+(jt&1?2:1)},Ae=0;Ae<ue.length;Ae++){ye=ue[Ae];var Me=[{_level:ye.level,_override:0,_isolate:0}],Te=void 0,Ie=0,je=0,Z=0;J.clear();for(var be=ye.start;be<=ye.end;be++){var ie=M[be];if(Te=Me[Me.length-1],J.set(ie,(J.get(ie)||0)+1),ie&a&&J.set(a,(J.get(a)||0)+1),ie&ge)if(ie&(Q|N)){ee[be]=Te._level;var fe=(ie===Q?De:we)(Te._level);fe<=P&&!Ie&&!je?Me.push({_level:fe,_override:0,_isolate:0}):Ie||je++}else if(ie&(O|K)){ee[be]=Te._level;var Le=(ie===O?De:we)(Te._level);Le<=P&&!Ie&&!je?Me.push({_level:Le,_override:ie&O?R:w,_isolate:0}):Ie||je++}else if(ie&r){ie&q&&(ie=Lh(be+1,!0)===1?ne:k),ee[be]=Te._level,Te._override&&re(be,Te._override);var Ee=(ie===ne?De:we)(Te._level);Ee<=P&&Ie===0&&je===0?(Z++,Me.push({_level:Ee,_override:0,_isolate:1,_isolInitIndex:be})):Ie++}else if(ie&se){if(Ie>0)Ie--;else if(Z>0){for(je=0;!Me[Me.length-1]._isolate;)Me.pop();var Be=Me[Me.length-1]._isolInitIndex;Be!=null&&(Re.set(Be,be),Re.set(be,Be)),Me.pop(),Z--}Te=Me[Me.length-1],ee[be]=Te._level,Te._override&&re(be,Te._override)}else ie&z?(Ie===0&&(je>0?je--:!Te._isolate&&Me.length>1&&(Me.pop(),Te=Me[Me.length-1])),ee[be]=Te._level):ie&L&&(ee[be]=ye.level);else ee[be]=Te._level,Te._override&&ie!==j&&re(be,Te._override)}for(var Je=[],et=null,Ne=ye.start;Ne<=ye.end;Ne++){var tt=M[Ne];if(!(tt&l)){var mt=ee[Ne],Pt=tt&r,Mt=tt===se;et&&mt===et._level?(et._end=Ne,et._endsWithIsolInit=Pt):Je.push(et={_start:Ne,_end:Ne,_level:mt,_startsWithPDI:Mt,_endsWithIsolInit:Pt})}}for(var Lt=[],un=0;un<Je.length;un++){var fn=Je[un];if(!fn._startsWithPDI||fn._startsWithPDI&&!Re.has(fn._start)){for(var xn=[et=fn],dn=void 0;et&&et._endsWithIsolInit&&(dn=Re.get(et._end))!=null;)for(var pn=un+1;pn<Je.length;pn++)if(Je[pn]._start===dn){xn.push(et=Je[pn]);break}for(var Et=[],Ln=0;Ln<xn.length;Ln++)for(var $r=xn[Ln],Qr=$r._start;Qr<=$r._end;Qr++)Et.push(Qr);for(var Ta=ee[Et[0]],qs=ye.level,D=Et[0]-1;D>=0;D--)if(!(M[D]&l)){qs=ee[D];break}var $=Et[Et.length-1],oe=ee[$],ae=ye.level;if(!(M[$]&r)){for(var te=$+1;te<=ye.end;te++)if(!(M[te]&l)){ae=ee[te];break}}Lt.push({_seqIndices:Et,_sosType:Math.max(qs,Ta)%2?R:w,_eosType:Math.max(ae,oe)%2?R:w})}}for(var Ce=0;Ce<Lt.length;Ce++){var Oe=Lt[Ce],xe=Oe._seqIndices,ke=Oe._sosType,Ke=Oe._eosType,qe=ee[xe[0]]&1?R:w;if(J.get(H))for(var Ve=0;Ve<xe.length;Ve++){var ot=xe[Ve];if(M[ot]&H){for(var ut=ke,ft=Ve-1;ft>=0;ft--)if(!(M[xe[ft]]&l)){ut=M[xe[ft]];break}re(ot,ut&(r|se)?U:ut)}}if(J.get(G))for(var Ot=0;Ot<xe.length;Ot++){var st=xe[Ot];if(M[st]&G)for(var We=Ot-1;We>=-1;We--){var bt=We===-1?ke:M[xe[We]];if(bt&o){bt===X&&re(st,I);break}}}if(J.get(X))for(var rt=0;rt<xe.length;rt++){var Yt=xe[rt];M[Yt]&X&&re(Yt,R)}if(J.get(y)||J.get(C))for(var mn=1;mn<xe.length-1;mn++){var zt=xe[mn];if(M[zt]&(y|C)){for(var Un=0,gt=0,gn=mn-1;gn>=0&&(Un=M[xe[gn]],!!(Un&l));gn--);for(var Li=mn+1;Li<xe.length&&(gt=M[xe[Li]],!!(gt&l));Li++);Un===gt&&(M[zt]===y?Un===G:Un&(G|I))&&re(zt,Un)}}if(J.get(G))for(var xt=0;xt<xe.length;xt++){var es=xe[xt];if(M[es]&G){for(var sr=xt-1;sr>=0&&M[xe[sr]]&(E|l);sr--)re(xe[sr],G);for(xt++;xt<xe.length&&M[xe[xt]]&(E|l|G);xt++)M[xe[xt]]!==G&&re(xe[xt],G)}}if(J.get(E)||J.get(y)||J.get(C))for(var gi=0;gi<xe.length;gi++){var _h=xe[gi];if(M[_h]&(E|y|C)){re(_h,U);for(var Ys=gi-1;Ys>=0&&M[xe[Ys]]&l;Ys--)re(xe[Ys],U);for(var js=gi+1;js<xe.length&&M[xe[js]]&l;js++)re(xe[js],U)}}if(J.get(G))for(var Aa=0,xh=ke;Aa<xe.length;Aa++){var yh=xe[Aa],Ca=M[yh];Ca&G?xh===w&&re(yh,w):Ca&o&&(xh=Ca)}if(J.get(a)){var ts=R|G|I,Sh=ts|w,Ks=[];{for(var or=[],ar=0;ar<xe.length;ar++)if(M[xe[ar]]&a){var ns=he[xe[ar]],Mh=void 0;if(S(ns)!==null)if(or.length<63)or.push({char:ns,seqIndex:ar});else break;else if((Mh=T(ns))!==null)for(var is=or.length-1;is>=0;is--){var Ra=or[is].char;if(Ra===Mh||Ra===T(b(ns))||S(b(Ra))===ns){Ks.push([or[is].seqIndex,ar]),or.length=is;break}}}Ks.sort(function(jt,Sn){return jt[0]-Sn[0]})}for(var Pa=0;Pa<Ks.length;Pa++){for(var wh=Ks[Pa],Zs=wh[0],La=wh[1],Eh=!1,yn=0,Ua=Zs+1;Ua<La;Ua++){var bh=xe[Ua];if(M[bh]&Sh){Eh=!0;var Th=M[bh]&ts?R:w;if(Th===qe){yn=Th;break}}}if(Eh&&!yn){yn=ke;for(var Da=Zs-1;Da>=0;Da--){var Ah=xe[Da];if(M[Ah]&Sh){var Ch=M[Ah]&ts?R:w;Ch!==qe?yn=Ch:yn=qe;break}}}if(yn){if(M[xe[Zs]]=M[xe[La]]=yn,yn!==qe){for(var rs=Zs+1;rs<xe.length;rs++)if(!(M[xe[rs]]&l)){u(he[xe[rs]])&H&&(M[xe[rs]]=yn);break}}if(yn!==qe){for(var ss=La+1;ss<xe.length;ss++)if(!(M[xe[ss]]&l)){u(he[xe[ss]])&H&&(M[xe[ss]]=yn);break}}}}for(var vi=0;vi<xe.length;vi++)if(M[xe[vi]]&a){for(var Rh=vi,Ia=vi,Fa=ke,os=vi-1;os>=0;os--)if(M[xe[os]]&l)Rh=os;else{Fa=M[xe[os]]&ts?R:w;break}for(var Ph=Ke,as=vi+1;as<xe.length;as++)if(M[xe[as]]&(a|l))Ia=as;else{Ph=M[xe[as]]&ts?R:w;break}for(var Na=Rh;Na<=Ia;Na++)M[xe[Na]]=Fa===Ph?Fa:qe;vi=Ia}}}for(var nn=ye.start;nn<=ye.end;nn++){var Bp=ee[nn],Js=M[nn];if(Bp&1?Js&(w|G|I)&&ee[nn]++:Js&R?ee[nn]++:Js&(I|G)&&(ee[nn]+=2),Js&l&&(ee[nn]=nn===0?ye.level:ee[nn-1]),nn===ye.end||u(he[nn])&(B|L))for(var $s=nn;$s>=0&&u(he[$s])&c;$s--)ee[$s]=ye.level}}return{levels:ee,paragraphs:ue};function Lh(jt,Sn){for(var Kt=jt;Kt<he.length;Kt++){var _i=M[Kt];if(_i&(R|X))return 1;if(_i&(L|w)||Sn&&_i===se)return 0;if(_i&r){var Uh=zp(Kt);Kt=Uh===-1?he.length:Uh}}return 0}function zp(jt){for(var Sn=1,Kt=jt+1;Kt<he.length;Kt++){var _i=M[Kt];if(_i&L)break;if(_i&se){if(--Sn===0)return Kt}else _i&r&&Sn++}return-1}}var Se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function Y(){if(!ve){var he=v(Se,!0),me=he.map,P=he.reverseMap;P.forEach(function(M,V){me.set(V,M)}),ve=me}}function F(he){return Y(),ve.get(he)||null}function de(he,me,P,M){var V=he.length;P=Math.max(0,P==null?0:+P),M=Math.min(V-1,M==null?V-1:+M);for(var J=new Map,re=P;re<=M;re++)if(me[re]&1){var ee=F(he[re]);ee!==null&&J.set(re,ee)}return J}function pe(he,me,P,M){var V=he.length;P=Math.max(0,P==null?0:+P),M=Math.min(V-1,M==null?V-1:+M);var J=[];return me.paragraphs.forEach(function(re){var ee=Math.max(P,re.start),Re=Math.min(M,re.end);if(ee<Re){for(var ue=me.levels.slice(ee,Re+1),ye=Re;ye>=ee&&u(he[ye])&c;ye--)ue[ye]=re.level;for(var Pe=re.level,ge=1/0,we=0;we<ue.length;we++){var De=ue[we];De>Pe&&(Pe=De),De<ge&&(ge=De|1)}for(var Ae=Pe;Ae>=ge;Ae--)for(var Me=0;Me<ue.length;Me++)if(ue[Me]>=Ae){for(var Te=Me;Me+1<ue.length&&ue[Me+1]>=Ae;)Me++;Me>Te&&J.push([Te+ee,Me+ee])}}}),J}function le(he,me,P,M){var V=_e(he,me,P,M),J=[].concat(he);return V.forEach(function(re,ee){J[ee]=(me.levels[re]&1?F(he[re]):null)||he[re]}),J.join("")}function _e(he,me,P,M){for(var V=pe(he,me,P,M),J=[],re=0;re<he.length;re++)J[re]=re;return V.forEach(function(ee){for(var Re=ee[0],ue=ee[1],ye=J.slice(Re,ue+1),Pe=ye.length;Pe--;)J[ue-Pe]=ye[Pe]}),J}return e.closingToOpeningBracket=T,e.getBidiCharType=u,e.getBidiCharTypeName=d,e.getCanonicalBracket=b,e.getEmbeddingLevels=ce,e.getMirroredCharacter=F,e.getMirroredCharactersMap=de,e.getReorderSegments=pe,e.getReorderedIndices=_e,e.getReorderedString=le,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const Pd=/\bvoid\s+main\s*\(\s*\)\s*{/g;function wc(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=$e[i];return r?wc(r):n}return s.replace(e,t)}const kt=[];for(let s=0;s<256;s++)kt[s]=(s<16?"0":"")+s.toString(16);function lS(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toUpperCase()}const Bi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},cS=Date.now(),Vu=new WeakMap,Wu=new Map;let hS=1e10;function Ec(s,e){const t=pS(e);let n=Vu.get(s);if(n||Vu.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let u=Wu[f];if(!u){const d=uS(this,c,e,t);u=Wu[f]=d}c.vertexShader=u.vertexShader,c.fragmentShader=u.fragmentShader,Bi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-cS}}),this[i]&&this[i](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:hS++}),h.uuid=lS(),h.uniforms=Bi({},c.uniforms,e.uniforms),h.defines=Bi({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Bi({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Bi(this.extensions,c.extensions),Bi(this.defines,c.defines),Bi(this.uniforms,sd.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ec(s.isDerivedMaterial?s.getDepthMaterial():new md({depthPacking:jf}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ec(s.isDerivedMaterial?s.getDistanceMaterial():new gd,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return n[t]=o,new o}function uS(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:f,fragmentColorTransform:u,customRewriter:d,timeUniform:m}=n;if(r=r||"",o=o||"",a=a||"",c=c||"",h=h||"",f=f||"",(l||d)&&(e=wc(e)),(u||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=wc(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(u){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),f=`${u}
${v.join(`
`)}
${f}`}if(m){const v=`
uniform float ${m};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}() {
  vec3 position = troika_position_${i};
  vec3 normal = troika_normal_${i};
  vec2 uv = troika_uv_${i};
  ${l}
  troika_position_${i} = position;
  troika_normal_${i} = normal;
  troika_uv_${i} = uv;
}
`,o=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}();
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,g,_)=>/\battribute\s+vec[23]\s+$/.test(_.substr(0,g))?p:`troika_${p}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Xu(e,i,r,o,a),t=Xu(t,i,c,h,f),{vertexShader:e,fragmentShader:t}}function Xu(s,e,t,n,i){return(n||i||t)&&(s=s.replace(Pd,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function fS(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let dS=0;const qu=new Map;function pS(s){const e=JSON.stringify(s,fS);let t=qu.get(e);return t==null&&qu.set(e,t=++dS),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function mS(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],h=0;h<l;h++){var f=r.readUint(o,a);a+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,a=r;o.readFixed(i,r),r+=4;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:i,_offset:a},f={},u=0;u<l;u++){var d=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var m=o.readUint(i,r);r+=4;var v=o.readUint(i,r);r+=4,f[d]={offset:m,length:v}}for(u=0;u<c.length;u++){var p=c[u];f[p]&&(h[p.trim()]=e[p.trim()].parse(i,f[p].offset,f[p].length,h))}return h},_tabOffset:function(i,r,o){for(var a=e._bin,l=a.readUshort(i,o+4),c=o+12,h=0;h<l;h++){var f=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var u=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,f==r)return u}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,o){for(var a="",l=0;l<o;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var a=e._bin._tdec;return a&&r==0&&o==i.length?a.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,a,l){var c=e._bin,h={},f=r;c.readFixed(i,r),r+=4;var u=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var m=c.readUshort(i,r);return r+=2,h.scriptList=e._lctf.readScriptList(i,f+u),h.featureList=e._lctf.readFeatureList(i,f+d),h.lookupList=e._lctf.readLookupList(i,f+m,l),h},e._lctf.readLookupList=function(i,r,o){var a=e._bin,l=r,c=[],h=a.readUshort(i,r);r+=2;for(var f=0;f<h;f++){var u=a.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+u,o);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var h=a.readUshort(i,r);r+=2;for(var f=c.ltype,u=0;u<h;u++){var d=a.readUshort(i,r);r+=2;var m=o(i,f,l+d,c);c.tabs.push(m)}return c},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,a=[],l=o.readUshort(i,r);if(r+=2,l==1){var c=o.readUshort(i,r);r+=2;var h=o.readUshort(i,r);r+=2;for(var f=0;f<h;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(i,r)),r+=2}if(l==2){var u=o.readUshort(i,r);for(r+=2,f=0;f<u;f++)a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var a=i[o],l=i[o+1];if(i[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,a={};a.fmt=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(i,r,l)),a.fmt==2&&(a.tab=o.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var f=o.readASCII(i,r,4);r+=4;var u=o.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,a+u);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var h=o.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<h;f++)l.tab.push(o.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var f=o.readASCII(i,r,4);r+=4;var u=o.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,a+u)}return l},e._lctf.readScriptTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,a+c));var h=o.readUshort(i,r);r+=2;for(var f=0;f<h;f++){var u=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2,l[u.trim()]=e._lctf.readLangSysTable(i,a+d)}return l},e._lctf.readLangSysTable=function(i,r){var o=e._bin,a={};o.readUshort(i,r),r+=2,a.reqFeature=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.features=o.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,o){var a=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(a.readASCII(i,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var u=[];for(h=0;h<f.length-1;h++)u.push(e.CFF.readDict(i,r+f[h],r+f[h+1]));r+=f[f.length-1];var d=u[0],m=[];r=e.CFF.readIndex(i,r,m);var v=[];for(h=0;h<m.length-1;h++)v.push(a.readASCII(i,r+m[h],m[h+1]-m[h]));if(r+=m[m.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,m=[],r=e.CFF.readIndex(i,r,m);var p=[];for(h=0;h<m.length-1;h++)p.push(a.readBytes(i,r+m[h],m[h+1]-m[h]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(i,r,g),d.FDArray=[],h=0;h<g.length-1;h++){var _=e.CFF.readDict(i,r+g[h],r+g[h+1]);e.CFF._readFDict(i,_,v),d.FDArray.push(_)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var x=i[r];if(r++,x!=3)throw x;var S=a.readUshort(i,r);for(r+=2,h=0;h<S+1;h++)d.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,v),d},e.CFF._readFDict=function(i,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(i,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(a.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var h=0;h<c;h++)a.push(i[r+h]);return a},e.CFF.readCharset=function(i,r,o){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var h=0;h<o;h++){var f=a.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=a.readUshort(i,r),r+=2;var u=0;for(c==1?(u=i[r],r++):(u=a.readUshort(i,r),r+=2),h=0;h<=u;h++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,o){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var h=0;h<l;h++)o.push(i[r+h]);else if(c==2)for(h=0;h<l;h++)o.push(a.readUshort(i,r+2*h));else if(c==3)for(h=0;h<l;h++)o.push(16777215&a.readUint(i,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,o){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,f=null,u=null;l<=20&&(f=l,h=1),l==12&&(f=100*l+c,h=2),21<=l&&l<=27&&(f=l,h=1),l==28&&(u=a.readShort(i,r+1),h=3),29<=l&&l<=31&&(f=l,h=1),32<=l&&l<=246&&(u=l-139,h=1),247<=l&&l<=250&&(u=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(u=256*-(l-251)-c-108,h=2),l==255&&(u=a.readInt(i,r+1)/65535,h=5),o.val=u??"o"+f,o.size=h},e.CFF.readCharString=function(i,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var h=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,d=null,m=null;h<=20&&(d=h,u=1),h==12&&(d=100*h+f,u=2),h!=19&&h!=20||(d=h,u=2),21<=h&&h<=27&&(d=h,u=1),h==28&&(m=l.readShort(i,r+1),u=3),29<=h&&h<=31&&(d=h,u=1),32<=h&&h<=246&&(m=h-139,u=1),247<=h&&h<=250&&(m=256*(h-247)+f+108,u=2),251<=h&&h<=254&&(m=256*-(h-251)-f-108,u=2),h==255&&(m=l.readInt(i,r+1)/65535,u=5),c.push(m??"o"+d),r+=u}return c},e.CFF.readDict=function(i,r,o){for(var a=e._bin,l={},c=[];r<o;){var h=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,d=null,m=null;if(h==28&&(m=a.readShort(i,r+1),u=3),h==29&&(m=a.readInt(i,r+1),u=5),32<=h&&h<=246&&(m=h-139,u=1),247<=h&&h<=250&&(m=256*(h-247)+f+108,u=2),251<=h&&h<=254&&(m=256*-(h-251)-f-108,u=2),h==255)throw m=a.readInt(i,r+1)/65535,u=5,"unknown number";if(h==30){var v=[];for(u=1;;){var p=i[r+u];u++;var g=p>>4,_=15&p;if(g!=15&&v.push(g),_!=15&&v.push(_),_==15)break}for(var x="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<v.length;T++)x+=S[v[T]];m=parseFloat(x)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],u=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],u=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(m),r+=u}return l},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var h=[];l.tables=[];for(var f=0;f<c;f++){var u=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var m=a.readUint(i,r);r+=4;var v="p"+u+"e"+d,p=h.indexOf(m);if(p==-1){var g;p=l.tables.length,h.push(m);var _=a.readUshort(i,m);_==0?g=e.cmap.parse0(i,m):_==4?g=e.cmap.parse4(i,m):_==6?g=e.cmap.parse6(i,m):_==12?g=e.cmap.parse12(i,m):console.debug("unknown format: "+_,u,d,m),l.tables.push(g)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var o=e._bin,a=r,l={};l.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var h=o.readUshort(i,r);r+=2;var f=h/2;l.searchRange=o.readUshort(i,r),r+=2,l.entrySelector=o.readUshort(i,r),r+=2,l.rangeShift=o.readUshort(i,r),r+=2,l.endCount=o.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=o.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var u=0;u<f;u++)l.idDelta.push(o.readShort(i,r)),r+=2;for(l.idRangeOffset=o.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,a.firstCode=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var l=o.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var h=r+12*c,f=o.readUint(i,h+0),u=o.readUint(i,h+4),d=o.readUint(i,h+8);a.groups.push([f,u,d])}return a},e.glyf={},e.glyf.parse=function(i,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var o=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(o.readUshort(a,l)),l+=2;var f=o.readUshort(a,l);if(l+=2,a.length-l<f)return null;c.instructions=o.readBytes(a,l,f),l+=f;var u=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<u;h++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var m=a[l];l++;for(var v=0;v<m;v++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<u;h++){var p=(2&c.flags[h])!=0,g=(16&c.flags[h])!=0;p?(c.xs.push(g?a[l]:-a[l]),l++):g?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],h=0;h<u;h++)p=(4&c.flags[h])!=0,g=(32&c.flags[h])!=0,p?(c.ys.push(g?a[l]:-a[l]),l++):g?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var _=0,x=0;for(h=0;h<u;h++)_+=c.xs[h],x+=c.ys[h],c.xs[h]=_,c.ys[h]=x}else{var S;c.parts=[];do{S=o.readUshort(a,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=o.readUshort(a,l),l+=2,1&S){var b=o.readShort(a,l);l+=2;var w=o.readShort(a,l);l+=2}else b=o.readInt8(a,l),l++,w=o.readInt8(a,l),l++;2&S?(T.m.tx=b,T.m.ty=w):(T.p1=b,T.p2=w),8&S?(T.m.a=T.m.d=o.readF2dot14(a,l),l+=2):64&S?(T.m.a=o.readF2dot14(a,l),l+=2,T.m.d=o.readF2dot14(a,l),l+=2):128&S&&(T.m.a=o.readF2dot14(a,l),l+=2,T.m.b=o.readF2dot14(a,l),l+=2,T.m.c=o.readF2dot14(a,l),l+=2,T.m.d=o.readF2dot14(a,l),l+=2)}while(32&S);if(256&S){var R=o.readUshort(a,l);for(l+=2,c.instr=[],h=0;h<R;h++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var f=l.readUshort(i,o);o+=2,h.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&h.fmt==1){var u=l.readUshort(i,o);o+=2,u!=0&&(h.pos=e.GPOS.readValueRecord(i,o,u))}else if(r==2&&h.fmt>=1&&h.fmt<=2){u=l.readUshort(i,o),o+=2;var d=l.readUshort(i,o);o+=2;var m=e._lctf.numOfOnes(u),v=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var p=l.readUshort(i,o);o+=2;for(var g=0;g<p;g++){var _=c+l.readUshort(i,o);o+=2;var x=l.readUshort(i,_);_+=2;for(var S=[],T=0;T<x;T++){var b=l.readUshort(i,_);_+=2,u!=0&&(I=e.GPOS.readValueRecord(i,_,u),_+=2*m),d!=0&&(C=e.GPOS.readValueRecord(i,_,d),_+=2*v),S.push({gid2:b,val1:I,val2:C})}h.pairsets.push(S)}}if(h.fmt==2){var w=l.readUshort(i,o);o+=2;var R=l.readUshort(i,o);o+=2;var G=l.readUshort(i,o);o+=2;var y=l.readUshort(i,o);for(o+=2,h.classDef1=e._lctf.readClassDef(i,c+w),h.classDef2=e._lctf.readClassDef(i,c+R),h.matrix=[],g=0;g<G;g++){var E=[];for(T=0;T<y;T++){var I=null,C=null;u!=0&&(I=e.GPOS.readValueRecord(i,o,u),o+=2*m),d!=0&&(C=e.GPOS.readValueRecord(i,o,d),o+=2*v),E.push({val1:I,val2:C})}h.matrix.push(E)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,o)+c),h.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,o+2)+c),h.markClassCount=l.readUshort(i,o+4),h.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,o+6)+c),h.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,o+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,o)+c),h.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,o+2)+c),h.markClassCount=l.readUshort(i,o+4),h.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,o+6)+c),h.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,o+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var L=l.readUshort(i,o);o+=2;var B=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=L;else if(a.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(i,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(i,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(i,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(i,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(i,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(i,r,o){var a=e._bin,l=[],c=r,h=a.readUshort(i,r);r+=2;for(var f=0;f<h;f++){for(var u=[],d=0;d<o;d++)u.push(e.GPOS.readAnchorRecord(i,c+a.readUshort(i,r))),r+=2;l.push(u)}return l},e.GPOS.readMarkArray=function(i,r){var o=e._bin,a=[],l=r,c=o.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var f=e.GPOS.readAnchorRecord(i,o.readUshort(i,r+2)+l);f.markClass=o.readUshort(i,r),a.push(f),r+=4}return a},e.GPOS.readAnchorRecord=function(i,r){var o=e._bin,a={};return a.fmt=o.readUshort(i,r),a.x=o.readShort(i,r+2),a.y=o.readShort(i,r+4),a},e.GSUB={},e.GSUB.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(i,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var f=l.readUshort(i,o);o+=2,h.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(i,o),o+=2;else if(h.fmt==2){var u=l.readUshort(i,o);o+=2,h.newg=l.readUshorts(i,o,u),o+=2*h.newg.length}}else if(r==2&&h.fmt==1){u=l.readUshort(i,o),o+=2,h.seqs=[];for(var d=0;d<u;d++){var m=l.readUshort(i,o)+c;o+=2;var v=l.readUshort(i,m);h.seqs.push(l.readUshorts(i,m+2,v))}}else if(r==4)for(h.vals=[],u=l.readUshort(i,o),o+=2,d=0;d<u;d++){var p=l.readUshort(i,o);o+=2,h.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&h.fmt==2){if(h.fmt==2){var g=l.readUshort(i,o);o+=2,h.cDef=e._lctf.readClassDef(i,c+g),h.scset=[];var _=l.readUshort(i,o);for(o+=2,d=0;d<_;d++){var x=l.readUshort(i,o);o+=2,h.scset.push(x==0?null:e.GSUB.readSubClassSet(i,c+x))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){u=l.readUshort(i,o),o+=2;for(var S=[],T=0;T<u;T++)S.push(e._lctf.readCoverage(i,c+l.readUshort(i,o+2*T)));o+=2*u,d==0&&(h.backCvg=S),d==1&&(h.inptCvg=S),d==2&&(h.ahedCvg=S)}u=l.readUshort(i,o),o+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(i,o,u)}}else{if(r==7&&h.fmt==1){var b=l.readUshort(i,o);o+=2;var w=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=b;else if(a.ltype!=b)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,a=r,l=[],c=o(i,r);r+=2;for(var h=0;h<c;h++){var f=o(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+f))}return l},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,a={},l=o(i,r),c=o(i,r+=2);r+=2,a.input=[];for(var h=0;h<l-1;h++)a.input.push(o(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=o.readUshort(i,r);r+=2,c==1&&h--,a[l[c]]=o.readUshorts(i,r,h),r+=2*a[l[c]].length}return h=o.readUshort(i,r),r+=2,a.subst=o.readUshorts(i,r,2*h),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+f))}return l},e.GSUB.readLigature=function(i,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,f=0,u=0;u<a.maxp.numGlyphs;u++)u<a.hhea.numberOfHMetrics&&(h=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(h),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,o,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,o,a);var h=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},u=0;u<h;u++){r+=2,o=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var m=d>>>8;if((m&=15)!=0)throw"unknown kern table format: "+m;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,o,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var h={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var u=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=u>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,h)}return h},e.kern.readFormat0=function(i,r,o){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var h=0;h<c;h++){var f=a.readUshort(i,r);r+=2;var u=a.readUshort(i,r);r+=2;var d=a.readShort(i,r);r+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var m=o.rval[o.rval.length-1];m.glyph2.push(u),m.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(i,r,o,a){var l=e._bin,c=[],h=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(h==0)for(var u=0;u<f;u++)c.push(l.readUshort(i,r+(u<<1))<<1);if(h==1)for(u=0;u<f;u++)c.push(l.readUint(i,r+(u<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,o){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,o){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var h,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],u=r+=2,d=0;d<c;d++){var m=a.readUshort(i,r);r+=2;var v=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var g=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var x=a.readUshort(i,r);r+=2;var S,T=f[g],b=u+12*c+x;if(m==0)S=a.readUnicode(i,b,_/2);else if(m==3&&v==0)S=a.readUnicode(i,b,_/2);else if(v==0)S=a.readASCII(i,b,_);else if(v==1)S=a.readUnicode(i,b,_/2);else if(v==3)S=a.readUnicode(i,b,_/2);else{if(m!=1)throw"unknown encoding "+v+", platformID: "+m;S=a.readASCII(i,b,_),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+m+","+p.toString(16);l[w]==null&&(l[w]={}),l[w][T!==void 0?T:g]=S,l[w]._lang=p}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){h=R;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(i,r),r+=2,o.usWeightClass=a.readUshort(i,r),r+=2,o.usWidthClass=a.readUshort(i,r),r+=2,o.fsType=a.readUshort(i,r),r+=2,o.ySubscriptXSize=a.readShort(i,r),r+=2,o.ySubscriptYSize=a.readShort(i,r),r+=2,o.ySubscriptXOffset=a.readShort(i,r),r+=2,o.ySubscriptYOffset=a.readShort(i,r),r+=2,o.ySuperscriptXSize=a.readShort(i,r),r+=2,o.ySuperscriptYSize=a.readShort(i,r),r+=2,o.ySuperscriptXOffset=a.readShort(i,r),r+=2,o.ySuperscriptYOffset=a.readShort(i,r),r+=2,o.yStrikeoutSize=a.readShort(i,r),r+=2,o.yStrikeoutPosition=a.readShort(i,r),r+=2,o.sFamilyClass=a.readShort(i,r),r+=2,o.panose=a.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=a.readUint(i,r),r+=4,o.ulUnicodeRange2=a.readUint(i,r),r+=4,o.ulUnicodeRange3=a.readUint(i,r),r+=4,o.ulUnicodeRange4=a.readUint(i,r),r+=4,o.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,o.fsSelection=a.readUshort(i,r),r+=2,o.usFirstCharIndex=a.readUshort(i,r),r+=2,o.usLastCharIndex=a.readUshort(i,r),r+=2,o.sTypoAscender=a.readShort(i,r),r+=2,o.sTypoDescender=a.readShort(i,r),r+=2,o.sTypoLineGap=a.readShort(i,r),r+=2,o.usWinAscent=a.readUshort(i,r),r+=2,o.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var a=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=a.readUint(i,r),r+=4,o.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var a=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=a.readShort(i,r),r+=2,o.sCapHeight=a.readShort(i,r),r+=2,o.usDefault=a.readUshort(i,r),r+=2,o.usBreak=a.readUshort(i,r),r+=2,o.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var a=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var f=l.groups[h];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,h=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;h=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,h,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var a=o==0?0:i.endPts[o-1]+1,l=i.endPts[o],c=a;c<=l;c++){var h=c==a?l:c-1,f=c==l?a:c+1,u=1&i.flags[c],d=1&i.flags[h],m=1&i.flags[f],v=i.xs[c],p=i.ys[c];if(c==a)if(u){if(!d){e.U.P.moveTo(r,v,p);continue}e.U.P.moveTo(r,i.xs[h],i.ys[h])}else d?e.U.P.moveTo(r,i.xs[h],i.ys[h]):e.U.P.moveTo(r,(i.xs[h]+v)/2,(i.ys[h]+p)/2);u?d&&e.U.P.lineTo(r,v,p):m?e.U.P.qcurveTo(r,v,p,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,v,p,(v+i.xs[f])/2,(p+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,f=0;f<l.crds.length;f+=2){var u=l.crds[f],d=l.crds[f+1];o.crds.push(u*h.a+d*h.b+h.tx),o.crds.push(u*h.c+d*h.d+h.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U._applySubs=function(i,r,o,a){for(var l=i.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var h,f=o.tabs[c];if(!f.coverage||(h=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(o.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[h];else if(o.ltype==4)for(var u=f.vals[h],d=0;d<u.length;d++){var m=u[d],v=m.chain.length;if(!(v>l)){for(var p=!0,g=0,_=0;_<v;_++){for(;i[r+g+(1+_)]==-1;)g++;m.chain[_]!=i[r+g+(1+_)]&&(p=!1)}if(p){for(i[r]=m.nglyph,_=0;_<v+g;_++)i[r+_+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var x=e._lctf.getInterval(f.cDef,i[r]),S=f.cDef[x+2],T=f.scset[S],b=0;b<T.length;b++){var w=T[b],R=w.input;if(!(R.length>l)){for(p=!0,_=0;_<R.length;_++){var G=e._lctf.getInterval(f.cDef,i[r+1+_]);if(x==-1&&f.cDef[G+2]!=R[_]){p=!1;break}}if(p){var y=w.substLookupRecords;for(d=0;d<y.length;d+=2)y[d],y[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var E=f.lookupRec;for(b=0;b<E.length;b+=2){x=E[b];var I=a[E[b+1]];e.U._applySubs(i,r+x,I,a)}}}}},e.U._glsCovered=function(i,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,u=e.U.glyphToPath(i,h),d=0;d<u.crds.length;d+=2)a.crds.push(u.crds[d]+l),a.crds.push(u.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<u.cmds.length;d++)a.cmds.push(u.cmds[d]);o&&a.cmds.push("X"),l+=i.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(i,h,f))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,a,l,c,h){i.cmds.push("C"),i.crds.push(r,o,a,l,c,h)},e.U.P.qcurveTo=function(i,r,o,a,l){i.cmds.push("Q"),i.crds.push(r,o,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,a,l){for(var c=r.stack,h=r.nStems,f=r.haveWidth,u=r.width,d=r.open,m=0,v=r.x,p=r.y,g=0,_=0,x=0,S=0,T=0,b=0,w=0,R=0,G=0,y=0,E={val:0,size:0};m<i.length;){e.CFF.getCharString(i,m,E);var I=E.val;if(m+=E.size,I=="o1"||I=="o18")c.length%2!=0&&!f&&(u=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,f=!0;else if(I=="o3"||I=="o23")c.length%2!=0&&!f&&(u=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,f=!0;else if(I=="o4")c.length>1&&!f&&(u=c.shift()+a.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),d=!0;else if(I=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(I=="o6"||I=="o7")for(var C=c.length,L=I=="o6",B=0;B<C;B++){var U=c.shift();L?v+=U:p+=U,L=!L,e.U.P.lineTo(l,v,p)}else if(I=="o8"||I=="o24"){C=c.length;for(var j=0;j+6<=C;)g=v+c.shift(),_=p+c.shift(),x=g+c.shift(),S=_+c.shift(),v=x+c.shift(),p=S+c.shift(),e.U.P.curveTo(l,g,_,x,S,v,p),j+=6;I=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(I=="o11")break;if(I=="o1234"||I=="o1235"||I=="o1236"||I=="o1237")I=="o1234"&&(_=p,x=(g=v+c.shift())+c.shift(),y=S=_+c.shift(),b=S,R=p,v=(w=(T=(G=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,_,x,S,G,y),e.U.P.curveTo(l,T,b,w,R,v,p)),I=="o1235"&&(g=v+c.shift(),_=p+c.shift(),x=g+c.shift(),S=_+c.shift(),G=x+c.shift(),y=S+c.shift(),T=G+c.shift(),b=y+c.shift(),w=T+c.shift(),R=b+c.shift(),v=w+c.shift(),p=R+c.shift(),c.shift(),e.U.P.curveTo(l,g,_,x,S,G,y),e.U.P.curveTo(l,T,b,w,R,v,p)),I=="o1236"&&(g=v+c.shift(),_=p+c.shift(),x=g+c.shift(),y=S=_+c.shift(),b=S,w=(T=(G=x+c.shift())+c.shift())+c.shift(),R=b+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,g,_,x,S,G,y),e.U.P.curveTo(l,T,b,w,R,v,p)),I=="o1237"&&(g=v+c.shift(),_=p+c.shift(),x=g+c.shift(),S=_+c.shift(),G=x+c.shift(),y=S+c.shift(),T=G+c.shift(),b=y+c.shift(),w=T+c.shift(),R=b+c.shift(),Math.abs(w-v)>Math.abs(R-p)?v=w+c.shift():p=R+c.shift(),e.U.P.curveTo(l,g,_,x,S,G,y),e.U.P.curveTo(l,T,b,w,R,v,p));else if(I=="o14"){if(c.length>0&&!f&&(u=c.shift()+o.nominalWidthX,f=!0),c.length==4){var H=c.shift(),X=c.shift(),K=c.shift(),O=c.shift(),N=e.CFF.glyphBySE(o,K),Q=e.CFF.glyphBySE(o,O);e.U._drawCFF(o.CharStrings[N],r,o,a,l),r.x=H,r.y=X,e.U._drawCFF(o.CharStrings[Q],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(I=="o19"||I=="o20")c.length%2!=0&&!f&&(u=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,f=!0,m+=h+7>>3;else if(I=="o21")c.length>2&&!f&&(u=c.shift()+a.nominalWidthX,f=!0),p+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(I=="o22")c.length>1&&!f&&(u=c.shift()+a.nominalWidthX,f=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(I=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);g=v+c.shift(),_=p+c.shift(),x=g+c.shift(),S=_+c.shift(),v=x+c.shift(),p=S+c.shift(),e.U.P.curveTo(l,g,_,x,S,v,p)}else if(I=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)g=v,_=p+c.shift(),v=x=g+c.shift(),p=(S=_+c.shift())+c.shift(),e.U.P.curveTo(l,g,_,x,S,v,p);else if(I=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)_=p,x=(g=v+c.shift())+c.shift(),S=_+c.shift(),v=x+c.shift(),p=S,e.U.P.curveTo(l,g,_,x,S,v,p);else if(I=="o10"||I=="o29"){var z=I=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=z.Subrs[k+z.Bias];r.x=v,r.y=p,r.nStems=h,r.haveWidth=f,r.width=u,r.open=d,e.U._drawCFF(ne,r,o,a,l),v=r.x,p=r.y,h=r.nStems,f=r.haveWidth,u=r.width,d=r.open}}else if(I=="o30"||I=="o31"){var q=c.length,se=(j=0,I=="o31");for(j+=q-(C=-3&q);j<C;)se?(_=p,x=(g=v+c.shift())+c.shift(),p=(S=_+c.shift())+c.shift(),C-j==5?(v=x+c.shift(),j++):v=x,se=!1):(g=v,_=p+c.shift(),x=g+c.shift(),S=_+c.shift(),v=x+c.shift(),C-j==5?(p=S+c.shift(),j++):p=S,se=!0),e.U.P.curveTo(l,g,_,x,S,v,p),j+=4}else{if((I+"").charAt(0)=="o")throw console.debug("Unknown operation: "+I,i),I;c.push(I)}}}r.x=v,r.y=p,r.nStems=h,r.haveWidth=f,r.width=u,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function gS(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(I,C){for(var L=new t(31),B=0;B<31;++B)L[B]=C+=1<<I[B-1];var U=new n(L[30]);for(B=1;B<30;++B)for(var j=L[B];j<L[B+1];++j)U[j]=j-L[B]<<5|B;return[L,U]},l=a(i,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var f=a(r,0)[0],u=new t(32768),d=0;d<32768;++d){var m=(43690&d)>>>1|(21845&d)<<1;m=(61680&(m=(52428&m)>>>2|(13107&m)<<2))>>>4|(3855&m)<<4,u[d]=((65280&m)>>>8|(255&m)<<8)>>>1}var v=function(I,C,L){for(var B=I.length,U=0,j=new t(C);U<B;++U)++j[I[U]-1];var H,X=new t(C);for(U=0;U<C;++U)X[U]=X[U-1]+j[U-1]<<1;{H=new t(1<<C);var K=15-C;for(U=0;U<B;++U)if(I[U])for(var O=U<<4|I[U],N=C-I[U],Q=X[I[U]-1]++<<N,z=Q|(1<<N)-1;Q<=z;++Q)H[u[Q]>>>K]=O}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var _=v(p,9),x=v(g,5),S=function(I){for(var C=I[0],L=1;L<I.length;++L)I[L]>C&&(C=I[L]);return C},T=function(I,C,L){var B=C/8|0;return(I[B]|I[B+1]<<8)>>(7&C)&L},b=function(I,C){var L=C/8|0;return(I[L]|I[L+1]<<8|I[L+2]<<16)>>(7&C)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(I,C,L){var B=new Error(C||w[I]);if(B.code=I,Error.captureStackTrace&&Error.captureStackTrace(B,R),!L)throw B;return B},G=function(I,C,L){var B=I.length;if(!B||L&&!L.l&&B<5)return C||new e(0);var U=!C||L,j=!L||L.i;L||(L={}),C||(C=new e(3*B));var H,X=function(Te){var Ie=C.length;if(Te>Ie){var je=new e(Math.max(2*Ie,Te));je.set(C),C=je}},K=L.f||0,O=L.p||0,N=L.b||0,Q=L.l,z=L.d,k=L.m,ne=L.n,q=8*B;do{if(!Q){L.f=K=T(I,O,1);var se=T(I,O+1,3);if(O+=3,!se){var ce=I[(P=((H=O)/8|0)+(7&H&&1)+4)-4]|I[P-3]<<8,Se=P+ce;if(Se>B){j&&R(0);break}U&&X(N+ce),C.set(I.subarray(P,Se),N),L.b=N+=ce,L.p=O=8*Se;continue}if(se==1)Q=_,z=x,k=9,ne=5;else if(se==2){var ve=T(I,O,31)+257,Y=T(I,O+10,15)+4,F=ve+T(I,O+5,31)+1;O+=14;for(var de=new e(F),pe=new e(19),le=0;le<Y;++le)pe[o[le]]=T(I,O+3*le,7);O+=3*Y;var _e=S(pe),he=(1<<_e)-1,me=v(pe,_e);for(le=0;le<F;){var P,M=me[T(I,O,he)];if(O+=15&M,(P=M>>>4)<16)de[le++]=P;else{var V=0,J=0;for(P==16?(J=3+T(I,O,3),O+=2,V=de[le-1]):P==17?(J=3+T(I,O,7),O+=3):P==18&&(J=11+T(I,O,127),O+=7);J--;)de[le++]=V}}var re=de.subarray(0,ve),ee=de.subarray(ve);k=S(re),ne=S(ee),Q=v(re,k),z=v(ee,ne)}else R(1);if(O>q){j&&R(0);break}}U&&X(N+131072);for(var Re=(1<<k)-1,ue=(1<<ne)-1,ye=O;;ye=O){var Pe=(V=Q[b(I,O)&Re])>>>4;if((O+=15&V)>q){j&&R(0);break}if(V||R(2),Pe<256)C[N++]=Pe;else{if(Pe==256){ye=O,Q=null;break}var ge=Pe-254;if(Pe>264){var we=i[le=Pe-257];ge=T(I,O,(1<<we)-1)+c[le],O+=we}var De=z[b(I,O)&ue],Ae=De>>>4;if(De||R(3),O+=15&De,ee=f[Ae],Ae>3&&(we=r[Ae],ee+=b(I,O)&(1<<we)-1,O+=we),O>q){j&&R(0);break}U&&X(N+131072);for(var Me=N+ge;N<Me;N+=4)C[N]=C[N-ee],C[N+1]=C[N+1-ee],C[N+2]=C[N+2-ee],C[N+3]=C[N+3-ee];N=Me}}L.l=Q,L.p=ye,L.b=N,Q&&(K=1,L.m=k,L.d=z,L.n=ne)}while(!K);return N==C.length?C:function(Te,Ie,je){(je==null||je>Te.length)&&(je=Te.length);var Z=new(Te instanceof t?t:Te instanceof n?n:e)(je-Ie);return Z.set(Te.subarray(Ie,je)),Z}(C,0,N)},y=new e(0),E=typeof TextDecoder<"u"&&new TextDecoder;try{E.decode(y,{stream:!0})}catch{}return s.convert_streams=function(I){var C=new DataView(I),L=0;function B(){var ve=C.getUint16(L);return L+=2,ve}function U(){var ve=C.getUint32(L);return L+=4,ve}function j(ve){ce.setUint16(Se,ve),Se+=2}function H(ve){ce.setUint32(Se,ve),Se+=4}for(var X={signature:U(),flavor:U(),length:U(),numTables:B(),reserved:B(),totalSfntSize:U(),majorVersion:B(),minorVersion:B(),metaOffset:U(),metaLength:U(),metaOrigLength:U(),privOffset:U(),privLength:U()},K=0;Math.pow(2,K)<=X.numTables;)K++;K--;for(var O=16*Math.pow(2,K),N=16*X.numTables-O,Q=12,z=[],k=0;k<X.numTables;k++)z.push({tag:U(),offset:U(),compLength:U(),origLength:U(),origChecksum:U()}),Q+=16;var ne,q=new Uint8Array(12+16*z.length+z.reduce(function(ve,Y){return ve+Y.origLength+4},0)),se=q.buffer,ce=new DataView(se),Se=0;return H(X.flavor),j(X.numTables),j(O),j(K),j(N),z.forEach(function(ve){H(ve.tag),H(ve.origChecksum),H(Q),H(ve.origLength),ve.outOffset=Q,(Q+=ve.origLength)%4!=0&&(Q+=4-Q%4)}),z.forEach(function(ve){var Y,F=I.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var de=new Uint8Array(ve.origLength);Y=new Uint8Array(F,2),G(Y,de)}else de=new Uint8Array(F);q.set(de,ve.outOffset);var pe=0;(Q=ve.outOffset+ve.origLength)%4!=0&&(pe=4-Q%4),q.set(new Uint8Array(pe).buffer,ve.outOffset+ve.origLength),ne=Q+pe}),se.slice(0,ne)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function vS(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,a=8,l=16,c=32;let h;function f(w){if(!h){const R={R:r,L:i,D:o,C:l,U:c,T:a};h=new Map;for(let G in n){let y=0;n[G].split(",").forEach(E=>{let[I,C]=E.split("+");I=parseInt(I,36),C=C?parseInt(C,36):0,h.set(y+=I,R[G]);for(let L=C;L--;)h.set(++y,R[G])})}}return h.get(w)||c}const u=1,d=2,m=3,v=4,p=[null,"isol","init","fina","medi"];function g(w){const R=new Uint8Array(w.length);let G=c,y=u,E=-1;for(let I=0;I<w.length;I++){const C=w.codePointAt(I);let L=f(C)|0,B=u;L&a||(G&(i|o|l)?L&(r|o|l)?(B=m,(y===u||y===m)&&R[E]++):L&(i|c)&&(y===d||y===v)&&R[E]--:G&(r|c)&&(y===d||y===v)&&R[E]--,y=R[I]=B,G=L,E=I,C>65535&&I++)}return R}function _(w,R){const G=[];for(let E=0;E<R.length;E++){const I=R.codePointAt(E);I>65535&&E++,G.push(s.U.codeToGlyph(w,I))}const y=w.GSUB;if(y){const{lookupList:E,featureList:I}=y;let C;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,B=[];I.forEach(U=>{if(L.test(U.tag))for(let j=0;j<U.tab.length;j++){if(B[U.tab[j]])continue;B[U.tab[j]]=!0;const H=E[U.tab[j]],X=/^(isol|init|fina|medi)$/.test(U.tag);X&&!C&&(C=g(R));for(let K=0;K<G.length;K++)(!C||!X||p[C[K]]===U.tag)&&s.U._applySubs(G,K,H,E)}})}return G}function x(w,R){const G=new Int16Array(R.length*3);let y=0;for(;y<R.length;y++){const L=R[y];if(L===-1)continue;G[y*3+2]=w.hmtx.aWidth[L];const B=w.GPOS;if(B){const U=B.lookupList;for(let j=0;j<U.length;j++){const H=U[j];for(let X=0;X<H.tabs.length;X++){const K=H.tabs[X];if(H.ltype===1){if(s._lctf.coverageIndex(K.coverage,L)!==-1&&K.pos){C(K.pos,y);break}}else if(H.ltype===2){let O=null,N=E();if(N!==-1){const Q=s._lctf.coverageIndex(K.coverage,R[N]);if(Q!==-1){if(K.fmt===1){const z=K.pairsets[Q];for(let k=0;k<z.length;k++)z[k].gid2===L&&(O=z[k])}else if(K.fmt===2){const z=s.U._getGlyphClass(R[N],K.classDef1),k=s.U._getGlyphClass(L,K.classDef2);O=K.matrix[z][k]}if(O){O.val1&&C(O.val1,N),O.val2&&C(O.val2,y);break}}}}else if(H.ltype===4){const O=s._lctf.coverageIndex(K.markCoverage,L);if(O!==-1){const N=E(I),Q=N===-1?-1:s._lctf.coverageIndex(K.baseCoverage,R[N]);if(Q!==-1){const z=K.markArray[O],k=K.baseArray[Q][z.markClass];G[y*3]=k.x-z.x+G[N*3]-G[N*3+2],G[y*3+1]=k.y-z.y+G[N*3+1];break}}}else if(H.ltype===6){const O=s._lctf.coverageIndex(K.mark1Coverage,L);if(O!==-1){const N=E();if(N!==-1){const Q=R[N];if(S(w,Q)===3){const z=s._lctf.coverageIndex(K.mark2Coverage,Q);if(z!==-1){const k=K.mark1Array[O],ne=K.mark2Array[z][k.markClass];G[y*3]=ne.x-k.x+G[N*3]-G[N*3+2],G[y*3+1]=ne.y-k.y+G[N*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const U=E();if(U!==-1){const j=w.kern.glyph1.indexOf(R[U]);if(j!==-1){const H=w.kern.rval[j].glyph2.indexOf(L);H!==-1&&(G[U*3+2]+=w.kern.rval[j].vals[H])}}}}return G;function E(L){for(let B=y-1;B>=0;B--)if(R[B]!==-1&&(!L||L(R[B])))return B;return-1}function I(L){return S(w,L)===1}function C(L,B){for(let U=0;U<3;U++)G[B*3+U]+=L[U]||0}}function S(w,R){const G=w.GDEF&&w.GDEF.glyphClassDef;return G?s.U._getGlyphClass(R,G):0}function T(...w){for(let R=0;R<w.length;R++)if(typeof w[R]=="number")return w[R]}function b(w){const R=Object.create(null),G=w["OS/2"],y=w.hhea,E=w.head.unitsPerEm,I=T(G&&G.sTypoAscender,y&&y.ascender,E),C={unitsPerEm:E,ascender:I,descender:T(G&&G.sTypoDescender,y&&y.descender,0),capHeight:T(G&&G.sCapHeight,I),xHeight:T(G&&G.sxHeight,I),lineGap:T(G&&G.sTypoLineGap,y&&y.lineGap),supportsCodePoint(L){return s.U.codeToGlyph(w,L)>0},forEachGlyph(L,B,U,j){let H=0;const X=1/C.unitsPerEm*B,K=_(w,L);let O=0;const N=x(w,K);return K.forEach((Q,z)=>{if(Q!==-1){let k=R[Q];if(!k){const{cmds:ne,crds:q}=s.U.glyphToPath(w,Q);let se="",ce=0;for(let de=0,pe=ne.length;de<pe;de++){const le=t[ne[de]];se+=ne[de];for(let _e=1;_e<=le;_e++)se+=(_e>1?",":"")+q[ce++]}let Se,ve,Y,F;if(q.length){Se=ve=1/0,Y=F=-1/0;for(let de=0,pe=q.length;de<pe;de+=2){let le=q[de],_e=q[de+1];le<Se&&(Se=le),_e<ve&&(ve=_e),le>Y&&(Y=le),_e>F&&(F=_e)}}else Se=Y=ve=F=0;k=R[Q]={index:Q,advanceWidth:w.hmtx.aWidth[Q],xMin:Se,yMin:ve,xMax:Y,yMax:F,path:se}}j.call(null,k,H+N[z*3]*X,N[z*3+1]*X,O),H+=N[z*3+2]*X,U&&(H+=U*B)}O+=L.codePointAt(O)>65535?2:1}),H}};return C}return function(R){const G=new Uint8Array(R,0,4),y=s._bin.readASCII(G,0,4);if(y==="wOFF")R=e(R);else if(y==="wOF2")throw new Error("woff2 fonts not supported");return b(s.parse(R)[0])}}const _S=Kr({name:"Typr Font Parser",dependencies:[mS,gS,vS],init(s,e,t){const n=s(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function xS(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var S=x>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&x))},e.prototype.has=function(x){var S=this.buckets.get(x>>5);return S!==void 0&&(S&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(S,T){x.push((+T).toString(36)+":"+S.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var S=this;this.buckets.clear(),x.split(",").forEach(function(T){var b=T.split(":");S.buckets.set(parseInt(b[0],36),parseInt(b[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(x){var S=function(b){return b&i}(x).toString(16),T=function(b){return(b&i)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+S+"-"+T+".json"}function o(x,S){var T=x&n,b=S.codePointAt(T/6|0);return((b=(b||48)-48)&1<<T%6)!=0}function a(x,S){var T;(T=x,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(b){return b.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(b){var w=b[0],R=b[1];R===void 0&&(R=w),S(w,R)})}function l(x,S){a(x,function(T,b){for(var w=T;w<=b;w++)S(w)})}var c={},h={},f=new WeakMap,u="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var S=f.get(x);return S||(S=new e,l(x.ranges,function(T){return S.add(T)}),f.set(x,S)),S}var m,v=new Map;function p(x,S,T){return x[S]?S:x[T]?T:function(b){for(var w in b)return w}(x)}function g(x,S){var T=S;if(!x.includes(T)){T=1/0;for(var b=0;b<x.length;b++)Math.abs(x[b]-S)<Math.abs(T-S)&&(T=x[b])}return T}function _(x){return m||(m=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){m.add(S)})),m.has(x)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(x,S){S===void 0&&(S={});var T,b=S.lang;b===void 0&&(b=/\p{Script=Hangul}/u.test(T=x)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(T)?"ja":"en");var w=S.category;w===void 0&&(w="sans-serif");var R=S.style;R===void 0&&(R="normal");var G=S.weight;G===void 0&&(G=400);var y=(S.dataUrl||u).replace(/\/$/g,""),E=new Map,I=new Uint8Array(x.length),C={},L={},B=new Array(x.length),U=new Map,j=!1;function H(O){var N=v.get(O);return N||(N=fetch(y+"/"+O).then(function(Q){if(!Q.ok)throw new Error(Q.statusText);return Q.json().then(function(z){if(!Array.isArray(z)||z[0]!==1)throw new Error("Incorrect schema version; need 1, got "+z[0]);return z[1]})}).catch(function(Q){if(y!==u)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+y+'", trying default CDN. '+Q.message),j=!0),y=u,v.delete(O),H(O);throw Q}),v.set(O,N)),N}for(var X=function(O){var N=x.codePointAt(O),Q=r(N);B[O]=Q,c[Q]||U.has(Q)||U.set(Q,H(Q).then(function(z){c[Q]=z})),N>65535&&(O++,K=O)},K=0;K<x.length;K++)X(K);return Promise.all(U.values()).then(function(){U.clear();for(var O=function(Q){var z=x.codePointAt(Q),k=null,ne=c[B[Q]],q=void 0;for(var se in ne){var ce=L[se];if(ce===void 0&&(ce=L[se]=new RegExp(se).test(b||"en")),ce){for(var Se in q=se,ne[se])if(o(z,ne[se][Se])){k=Se;break}break}}if(!k){e:for(var ve in ne)if(ve!==q){for(var Y in ne[ve])if(o(z,ne[ve][Y])){k=Y;break e}}}k||(console.debug("No font coverage for U+"+z.toString(16)),k="latin"),B[Q]=k,h[k]||U.has(k)||U.set(k,H("font-meta/"+k+".json").then(function(F){h[k]=F})),z>65535&&(Q++,N=Q)},N=0;N<x.length;N++)O(N);return Promise.all(U.values())}).then(function(){for(var O,N=null,Q=0;Q<x.length;Q++){var z=x.codePointAt(Q);if(N&&(_(z)||d(N).has(z)))I[Q]=I[Q-1];else{N=h[B[Q]];var k=C[N.id];if(!k){var ne=N.typeforms,q=p(ne,w,"sans-serif"),se=p(ne[q],R,"normal"),ce=g((O=ne[q])===null||O===void 0?void 0:O[se],G);k=C[N.id]=y+"/font-files/"+N.id+"/"+q+"."+se+"."+ce+".woff"}var Se=E.get(k);Se==null&&(Se=E.size,E.set(k,Se)),I[Q]=Se}z>65535&&(Q++,I[Q]=I[Q-1])}return{fontUrls:Array.from(E.keys()),chars:I}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function yS(s,e){const t=Object.create(null),n=Object.create(null);function i(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=s(c.response);h.src=o,a(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):n[o]?n[o].push(a):(n[o]=[a],i(o,c=>{c.src=o,t[o]=c,n[o].forEach(h=>h(c)),delete n[o]}))}return function(o,a,{lang:l,fonts:c=[],style:h="normal",weight:f="normal",unicodeFontsURL:u}={}){const d=new Uint8Array(o.length),m=[];o.length||_();const v=new Map,p=[];if(h!=="italic"&&(h="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(S=>!S.lang||S.lang.test(l)).reverse(),c.length){let w=0;(function R(G=0){for(let y=G,E=o.length;y<E;y++){const I=o.codePointAt(y);if(w===1&&m[d[y-1]].supportsCodePoint(I)||y>0&&/\s/.test(o[y]))d[y]=d[y-1],w===2&&(p[p.length-1][1]=y);else for(let C=d[y],L=c.length;C<=L;C++)if(C===L){const B=w===2?p[p.length-1]:p[p.length]=[y,y];B[1]=y,w=2}else{d[y]=C;const{src:B,unicodeRange:U}=c[C];if(!U||x(I,U)){const j=t[B];if(!j){r(B,()=>{R(y)});return}if(j.supportsCodePoint(I)){let H=v.get(j);typeof H!="number"&&(H=m.length,m.push(j),v.set(j,H)),d[y]=H,w=1;break}}}I>65535&&y+1<E&&(d[y+1]=d[y],y++,w===2&&(p[p.length-1][1]=y))}g()})()}else p.push([0,o.length-1]),g();function g(){if(p.length){const S=p.map(T=>o.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(S,{lang:l||void 0,style:h,weight:f,dataUrl:u}).then(({fontUrls:T,chars:b})=>{const w=m.length;let R=0;p.forEach(y=>{for(let E=0,I=y[1]-y[0];E<=I;E++)d[y[0]+E]=b[R++]+w;R++});let G=0;T.forEach((y,E)=>{r(y,I=>{m[E+w]=I,++G===T.length&&_()})})})}else _()}function _(){a({chars:d,fonts:m})}function x(S,T){for(let b=0;b<T.length;b++){const[w,R=w]=T[b];if(w<=S&&S<=R)return!0}return!1}}}const SS=Kr({name:"FontResolver",dependencies:[yS,_S,xS],init(s,e,t){return s(e,t())}});function MS(s,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:m,lang:v,fonts:p,style:g,weight:_,preResolvedFonts:x,unicodeFontsURL:S},T){const b=({chars:w,fonts:R})=>{let G,y;const E=[];for(let I=0;I<w.length;I++)w[I]!==y?(y=w[I],E.push(G={start:I,end:I,fontObj:R[w[I]]})):G.end=I;T(E)};x?b(x):s(m,b,{lang:v,fonts:p,style:g,weight:_,unicodeFontsURL:S})}function a({text:m="",font:v,lang:p,sdfGlyphSize:g=64,fontSize:_=400,fontWeight:x=1,fontStyle:S="normal",letterSpacing:T=0,lineHeight:b="normal",maxWidth:w=1/0,direction:R,textAlign:G="left",textIndent:y=0,whiteSpace:E="normal",overflowWrap:I="normal",anchorX:C=0,anchorY:L=0,metricsOnly:B=!1,unicodeFontsURL:U,preResolvedFonts:j=null,includeCaretPositions:H=!1,chunkedBoundsSize:X=8192,colorRanges:K=null},O){const N=f(),Q={fontLoad:0,typesetting:0};m.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),m=m.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),_=+_,T=+T,w=+w,b=b||"normal",y=+y,o({text:m,lang:p,style:S,weight:x,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:U,preResolvedFonts:j},z=>{Q.fontLoad=f()-N;const k=isFinite(w);let ne=null,q=null,se=null,ce=null,Se=null,ve=null,Y=null,F=null,de=0,pe=0,le=E!=="nowrap";const _e=new Map,he=f();let me=y,P=0,M=new u;const V=[M];z.forEach(ue=>{const{fontObj:ye}=ue,{ascender:Pe,descender:ge,unitsPerEm:we,lineGap:De,capHeight:Ae,xHeight:Me}=ye;let Te=_e.get(ye);if(!Te){const ie=_/we,fe=b==="normal"?(Pe-ge+De)*ie:b*_,Le=(fe-(Pe-ge)*ie)/2,Ee=Math.min(fe,(Pe-ge)*ie),Be=(Pe+ge)/2*ie+Ee/2;Te={index:_e.size,src:ye.src,fontObj:ye,fontSizeMult:ie,unitsPerEm:we,ascender:Pe*ie,descender:ge*ie,capHeight:Ae*ie,xHeight:Me*ie,lineHeight:fe,baseline:-Le-Pe*ie,caretTop:Be,caretBottom:Be-Ee},_e.set(ye,Te)}const{fontSizeMult:Ie}=Te,je=m.slice(ue.start,ue.end+1);let Z,be;ye.forEachGlyph(je,_,T,(ie,fe,Le,Ee)=>{fe+=P,Ee+=ue.start,Z=fe,be=ie;const Be=m.charAt(Ee),Je=ie.advanceWidth*Ie,et=M.count;let Ne;if("isEmpty"in ie||(ie.isWhitespace=!!Be&&new RegExp(i).test(Be),ie.canBreakAfter=!!Be&&r.test(Be),ie.isEmpty=ie.xMin===ie.xMax||ie.yMin===ie.yMax||n.test(Be)),!ie.isWhitespace&&!ie.isEmpty&&pe++,le&&k&&!ie.isWhitespace&&fe+Je+me>w&&et){if(M.glyphAt(et-1).glyphObj.canBreakAfter)Ne=new u,me=-fe;else for(let mt=et;mt--;)if(mt===0&&I==="break-word"){Ne=new u,me=-fe;break}else if(M.glyphAt(mt).glyphObj.canBreakAfter){Ne=M.splitAt(mt+1);const Pt=Ne.glyphAt(0).x;me-=Pt;for(let Mt=Ne.count;Mt--;)Ne.glyphAt(Mt).x-=Pt;break}Ne&&(M.isSoftWrapped=!0,M=Ne,V.push(M),de=w)}let tt=M.glyphAt(M.count);tt.glyphObj=ie,tt.x=fe+me,tt.y=Le,tt.width=Je,tt.charIndex=Ee,tt.fontData=Te,Be===`
`&&(M=new u,V.push(M),me=-(fe+Je+T*_)+y)}),P=Z+be.advanceWidth*Ie+T*_});let J=0;V.forEach(ue=>{let ye=!0;for(let Pe=ue.count;Pe--;){const ge=ue.glyphAt(Pe);ye&&!ge.glyphObj.isWhitespace&&(ue.width=ge.x+ge.width,ue.width>de&&(de=ue.width),ye=!1);let{lineHeight:we,capHeight:De,xHeight:Ae,baseline:Me}=ge.fontData;we>ue.lineHeight&&(ue.lineHeight=we);const Te=Me-ue.baseline;Te<0&&(ue.baseline+=Te,ue.cap+=Te,ue.ex+=Te),ue.cap=Math.max(ue.cap,ue.baseline+De),ue.ex=Math.max(ue.ex,ue.baseline+Ae)}ue.baseline-=J,ue.cap-=J,ue.ex-=J,J+=ue.lineHeight});let re=0,ee=0;if(C&&(typeof C=="number"?re=-C:typeof C=="string"&&(re=-de*(C==="left"?0:C==="center"?.5:C==="right"?1:c(C)))),L&&(typeof L=="number"?ee=-L:typeof L=="string"&&(ee=L==="top"?0:L==="top-baseline"?-V[0].baseline:L==="top-cap"?-V[0].cap:L==="top-ex"?-V[0].ex:L==="middle"?J/2:L==="bottom"?J:L==="bottom-baseline"?-V[V.length-1].baseline:c(L)*J)),!B){const ue=e.getEmbeddingLevels(m,R);ne=new Uint16Array(pe),q=new Uint8Array(pe),se=new Float32Array(pe*2),ce={},Y=[1/0,1/0,-1/0,-1/0],F=[],H&&(ve=new Float32Array(m.length*4)),K&&(Se=new Uint8Array(pe*3));let ye=0,Pe=-1,ge=-1,we,De;if(V.forEach((Ae,Me)=>{let{count:Te,width:Ie}=Ae;if(Te>0){let je=0;for(let Ee=Te;Ee--&&Ae.glyphAt(Ee).glyphObj.isWhitespace;)je++;let Z=0,be=0;if(G==="center")Z=(de-Ie)/2;else if(G==="right")Z=de-Ie;else if(G==="justify"&&Ae.isSoftWrapped){let Ee=0;for(let Be=Te-je;Be--;)Ae.glyphAt(Be).glyphObj.isWhitespace&&Ee++;be=(de-Ie)/Ee}if(be||Z){let Ee=0;for(let Be=0;Be<Te;Be++){let Je=Ae.glyphAt(Be);const et=Je.glyphObj;Je.x+=Z+Ee,be!==0&&et.isWhitespace&&Be<Te-je&&(Ee+=be,Je.width+=be)}}const ie=e.getReorderSegments(m,ue,Ae.glyphAt(0).charIndex,Ae.glyphAt(Ae.count-1).charIndex);for(let Ee=0;Ee<ie.length;Ee++){const[Be,Je]=ie[Ee];let et=1/0,Ne=-1/0;for(let tt=0;tt<Te;tt++)if(Ae.glyphAt(tt).charIndex>=Be){let mt=tt,Pt=tt;for(;Pt<Te;Pt++){let Mt=Ae.glyphAt(Pt);if(Mt.charIndex>Je)break;Pt<Te-je&&(et=Math.min(et,Mt.x),Ne=Math.max(Ne,Mt.x+Mt.width))}for(let Mt=mt;Mt<Pt;Mt++){const Lt=Ae.glyphAt(Mt);Lt.x=Ne-(Lt.x+Lt.width-et)}break}}let fe;const Le=Ee=>fe=Ee;for(let Ee=0;Ee<Te;Ee++){const Be=Ae.glyphAt(Ee);fe=Be.glyphObj;const Je=fe.index,et=ue.levels[Be.charIndex]&1;if(et){const Ne=e.getMirroredCharacter(m[Be.charIndex]);Ne&&Be.fontData.fontObj.forEachGlyph(Ne,0,0,Le)}if(H){const{charIndex:Ne,fontData:tt}=Be,mt=Be.x+re,Pt=Be.x+Be.width+re;ve[Ne*4]=et?Pt:mt,ve[Ne*4+1]=et?mt:Pt,ve[Ne*4+2]=Ae.baseline+tt.caretBottom+ee,ve[Ne*4+3]=Ae.baseline+tt.caretTop+ee;const Mt=Ne-Pe;Mt>1&&h(ve,Pe,Mt),Pe=Ne}if(K){const{charIndex:Ne}=Be;for(;Ne>ge;)ge++,K.hasOwnProperty(ge)&&(De=K[ge])}if(!fe.isWhitespace&&!fe.isEmpty){const Ne=ye++,{fontSizeMult:tt,src:mt,index:Pt}=Be.fontData,Mt=ce[mt]||(ce[mt]={});Mt[Je]||(Mt[Je]={path:fe.path,pathBounds:[fe.xMin,fe.yMin,fe.xMax,fe.yMax]});const Lt=Be.x+re,un=Be.y+Ae.baseline+ee;se[Ne*2]=Lt,se[Ne*2+1]=un;const fn=Lt+fe.xMin*tt,xn=un+fe.yMin*tt,dn=Lt+fe.xMax*tt,pn=un+fe.yMax*tt;fn<Y[0]&&(Y[0]=fn),xn<Y[1]&&(Y[1]=xn),dn>Y[2]&&(Y[2]=dn),pn>Y[3]&&(Y[3]=pn),Ne%X===0&&(we={start:Ne,end:Ne,rect:[1/0,1/0,-1/0,-1/0]},F.push(we)),we.end++;const Et=we.rect;if(fn<Et[0]&&(Et[0]=fn),xn<Et[1]&&(Et[1]=xn),dn>Et[2]&&(Et[2]=dn),pn>Et[3]&&(Et[3]=pn),ne[Ne]=Je,q[Ne]=Pt,K){const Ln=Ne*3;Se[Ln]=De>>16&255,Se[Ln+1]=De>>8&255,Se[Ln+2]=De&255}}}}}),ve){const Ae=m.length-Pe;Ae>1&&h(ve,Pe,Ae)}}const Re=[];_e.forEach(({index:ue,src:ye,unitsPerEm:Pe,ascender:ge,descender:we,lineHeight:De,capHeight:Ae,xHeight:Me})=>{Re[ue]={src:ye,unitsPerEm:Pe,ascender:ge,descender:we,lineHeight:De,capHeight:Ae,xHeight:Me}}),Q.typesetting=f()-he,O({glyphIds:ne,glyphFontIndices:q,glyphPositions:se,glyphData:ce,fontData:Re,caretPositions:ve,glyphColors:Se,chunkedBounds:F,fontSize:_,topBaseline:ee+V[0].baseline,blockBounds:[re,ee-J,re+de,ee],visibleBounds:Y,timings:Q})})}function l(m,v){a({...m,metricsOnly:!0},p=>{const[g,_,x,S]=p.blockBounds;v({width:x-g,height:S-_})})}function c(m){let v=m.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function h(m,v,p){const g=m[v*4],_=m[v*4+1],x=m[v*4+2],S=m[v*4+3],T=(_-g)/p;for(let b=0;b<p;b++){const w=(v+b)*4;m[w]=g+T*b,m[w+1]=g+T*(b+1),m[w+2]=x,m[w+3]=S}}function f(){return(self.performance||Date).now()}function u(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return u.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(m){let v=u.flyweight;return v.data=this.data,v.index=m,v},splitAt(m){let v=new u;return v.data=this.data.splice(m*d.length),v}},u.flyweight=d.reduce((m,v,p,g)=>(Object.defineProperty(m,v,{get(){return this.data[this.index*d.length+p]},set(_){this.data[this.index*d.length+p]=_}}),m),{data:null,index:0}),{typeset:a,measure:l}}const Ki=()=>(self.performance||Date).now(),va=Rd();let Yu;function wS(s,e,t,n,i,r,o,a,l,c,h=!0){return h?bS(s,e,t,n,i,r,o,a,l,c).then(null,f=>(Yu||(console.warn("WebGL SDF generation failed, falling back to JS",f),Yu=!0),Ku(s,e,t,n,i,r,o,a,l,c))):Ku(s,e,t,n,i,r,o,a,l,c)}const qo=[],ES=5;let bc=0;function Ld(){const s=Ki();for(;qo.length&&Ki()-s<ES;)qo.shift()();bc=qo.length?setTimeout(Ld,0):0}const bS=(...s)=>new Promise((e,t)=>{qo.push(()=>{const n=Ki();try{va.webgl.generateIntoCanvas(...s),e({timing:Ki()-n})}catch(i){t(i)}}),bc||(bc=setTimeout(Ld,0))}),TS=4,AS=2e3,ju={};let CS=0;function Ku(s,e,t,n,i,r,o,a,l,c){const h="TroikaTextSDFGenerator_JS_"+CS++%TS;let f=ju[h];return f||(f=ju[h]={workerModule:Kr({name:h,workerId:h,dependencies:[Rd,Ki],init(u,d){const m=u().javascript.generate;return function(...v){const p=d();return{textureData:m(...v),timing:d()-p}}},getTransferables(u){return[u.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(s,e,t,n,i,r).then(({textureData:u,timing:d})=>{const m=Ki(),v=new Uint8Array(u.length*4);for(let p=0;p<u.length;p++)v[p*4+c]=u[p];return va.webglUtils.renderImageData(o,v,a,l,s,e,1<<3-c),d+=Ki()-m,--f.requests===0&&(f.idleTimer=setTimeout(()=>{sS(h)},AS)),{timing:d}})}function RS(s){s._warm||(va.webgl.isSupported(s),s._warm=!0)}const PS=va.webglUtils.resizeWebGLCanvasWithoutClearing,Ms={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},LS=new Ye;function Mr(){return(self.performance||Date).now()}const Zu=Object.create(null);function Ud(s,e){s=IS({},s);const t=Mr(),n=[];if(s.font&&n.push({label:"user",src:FS(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Ms.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Ms.unicodeFontsURL,s.colorRanges!=null){let u={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let m=s.colorRanges[d];typeof m!="number"&&(m=LS.set(m).getHex()),u[d]=m}s.colorRanges=u}Object.freeze(s);const{textureWidth:i,sdfExponent:r}=Ms,{sdfGlyphSize:o}=s,a=i/o*4;let l=Zu[o];if(!l){const u=document.createElement("canvas");u.width=i,u.height=o*256/a,l=Zu[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:u,sdfTexture:new Wt(u,void 0,void 0,void 0,$t,$t),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,US(l)}const{sdfTexture:c,sdfCanvas:h}=l;Fd(s).then(u=>{const{glyphIds:d,glyphFontIndices:m,fontData:v,glyphPositions:p,fontSize:g,timings:_}=u,x=[],S=new Float32Array(d.length*4);let T=0,b=0;const w=Mr(),R=v.map(C=>{let L=l.glyphsByFont.get(C.src);return L||l.glyphsByFont.set(C.src,L=new Map),L});d.forEach((C,L)=>{const B=m[L],{src:U,unitsPerEm:j}=v[B];let H=R[B].get(C);if(!H){const{path:Q,pathBounds:z}=u.glyphData[U][C],k=Math.max(z[2]-z[0],z[3]-z[1])/o*(Ms.sdfMargin*o+.5),ne=l.glyphCount++,q=[z[0]-k,z[1]-k,z[2]+k,z[3]+k];R[B].set(C,H={path:Q,atlasIndex:ne,sdfViewBox:q}),x.push(H)}const{sdfViewBox:X}=H,K=p[b++],O=p[b++],N=g/j;S[T++]=K+X[0]*N,S[T++]=O+X[1]*N,S[T++]=K+X[2]*N,S[T++]=O+X[3]*N,d[L]=H.atlasIndex}),_.quads=(_.quads||0)+(Mr()-w);const G=Mr();_.sdf={};const y=h.height,E=Math.ceil(l.glyphCount/a),I=Math.pow(2,Math.ceil(Math.log2(E*o)));I>y&&(console.info(`Increasing SDF texture size ${y}->${I}`),PS(h,i,I),c.dispose()),Promise.all(x.map(C=>Dd(C,l,s.gpuAccelerateSDF).then(({timing:L})=>{_.sdf[C.atlasIndex]=L}))).then(()=>{x.length&&!l.contextLost&&(Id(l),c.needsUpdate=!0),_.sdfTotal=Mr()-G,_.total=Mr()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:o,sdfExponent:r,glyphBounds:S,glyphAtlasIndices:d,glyphColors:u.glyphColors,caretPositions:u.caretPositions,chunkedBounds:u.chunkedBounds,ascender:u.ascender,descender:u.descender,lineHeight:u.lineHeight,capHeight:u.capHeight,xHeight:u.xHeight,topBaseline:u.topBaseline,blockBounds:u.blockBounds,visibleBounds:u.visibleBounds,timings:u.timings}))})}),Promise.resolve().then(()=>{l.contextLost||RS(h)})}function Dd({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Ms,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),f=h%(a/n)*n,u=Math.floor(h/(a/n))*n,d=e%4;return wS(n,n,s,t,c,l,i,f,u,d,o)}function US(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Dd(r,s,!0))})}),Promise.all(n).then(()=>{Id(s),s.sdfTexture.needsUpdate=!0})})}function DS({font:s,characters:e,sdfGlyphSize:t},n){let i=Array.isArray(e)?e.join(`
`):""+e;Ud({font:s,sdfGlyphSize:t,text:i},n)}function IS(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Co;function FS(s){return Co||(Co=typeof document>"u"?{}:document.createElement("a")),Co.href=s,Co.href}function Id(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const NS=Kr({name:"Typesetter",dependencies:[MS,SS,aS],init(s,e,t){return s(e,t())}}),Fd=Kr({name:"Typesetter",dependencies:[NS],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Fd.onMainThread;const Ju={};function OS(s){let e=Ju[s];return e||(e=Ju[s]=new pi(1,1,s,s).translate(.5,.5,0)),e}const BS="aTroikaGlyphBounds",$u="aTroikaGlyphIndex",zS="aTroikaGlyphColor";class kS extends qy{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Yr,this.boundingBox=new nr}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=OS(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){this.updateAttributeData(BS,e,4),this.updateAttributeData($u,t,1),this.updateAttributeData(zS,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:o,max:a,sin:l,cos:c}=Math,h=i/2,f=i*2,u=Math.abs(t),d=e[0]/u,m=e[2]/u,v=r((d+h)/f)!==r((m+h)/f)?-u:o(l(d)*u,l(m)*u),p=r((d-h)/f)!==r((m-h)/f)?u:a(l(d)*u,l(m)*u),g=r((d+i)/f)!==r((m+i)/f)?u*2:a(u-c(d)*u,u-c(m)*u);n.min.set(v,e[1],t<0?-g:0),n.max.set(p,e[3],t<0?0:g)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute($u).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new ey(t,n)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const GS=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,HS=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,VS=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,WS=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function XS(s){const e=Ec(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ue},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ue},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ye},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:GS,vertexTransform:HS,fragmentDefs:VS,fragmentColorTransform:WS,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Pd,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Qc=new da({color:16777215,side:Bn,transparent:!0}),Qu=8421504,ef=new pt,Ro=new W,xl=new W,ms=[],qS=new W,yl="+x+y";function tf(s){return Array.isArray(s)?s[0]:s}let Nd=()=>{const s=new Dt(new pi(1,1),Qc);return Nd=()=>s,s},Od=()=>{const s=new Dt(new pi(1,1,32,1),Qc);return Od=()=>s,s};const YS={type:"syncstart"},jS={type:"synccomplete"},Bd=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],KS=Bd.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class eh extends Dt{constructor(){const e=new kS;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Qu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=yl,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(YS),Ud({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(jS),e&&e()})))}onBeforeRender(e,t,n,i,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return XS(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Qc.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.hasOutline()){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return tf(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return tf(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:a,blockBounds:l}=i;n.uTroikaSDFTexture.value=a,n.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,h=0,f=0,u,d,m,v=0,p=0;if(t){let{outlineWidth:_,outlineOffsetX:x,outlineOffsetY:S,outlineBlur:T,outlineOpacity:b}=this;c=this._parsePercent(_)||0,h=Math.max(0,this._parsePercent(T)||0),u=b,v=this._parsePercent(x)||0,p=this._parsePercent(S)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(m=this.strokeColor,n.uTroikaStrokeColor.value.set(m??Qu),d=this.strokeOpacity,d==null&&(d=1)),u=this.fillOpacity;n.uTroikaEdgeOffset.value=c,n.uTroikaPositionOffset.value.set(v,p),n.uTroikaBlurRadius.value=h,n.uTroikaStrokeWidth.value=f,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=u??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)n.uTroikaClipRect.value.fromArray(g);else{const _=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-_,l[1]-_,l[2]+_,l[3]+_)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Ye;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||yl;if(o!==e._orientation){let a=n.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==yl&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,f,u]=l;Ro.set(0,0,0)[h]=c==="-"?1:-1,xl.set(0,0,0)[u]=f==="-"?-1:1,ef.lookAt(qS,Ro.cross(xl),xl),a.setFromMatrix4(ef)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ue){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ue){return Ro.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ro),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,o=i?Od():Nd(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let h=0;h<c.count;h++){let f=r[0]+c.getX(h)*(r[2]-r[0]);const u=r[1]+c.getY(h)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(f/i)*i,f=Math.sin(f/i)*i),l.setXYZ(h,f,u,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,ms.length=0,o.raycast(e,ms);for(let h=0;h<ms.length;h++)ms[h].object=this,t.push(ms[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,KS.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Bd.forEach(s=>{const e="_private_"+s;Object.defineProperty(eh.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new nr;new Ye;class Rn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new A);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new A);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Rn);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],f=n[5],u=n[6],d=n[7],m=n[8],v=i[0],p=i[1],g=i[2],_=i[3],x=i[4],S=i[5],T=i[6],b=i[7],w=i[8];return r[0]=o*v+a*_+l*T,r[1]=o*p+a*x+l*b,r[2]=o*g+a*S+l*w,r[3]=c*v+h*_+f*T,r[4]=c*p+h*x+f*b,r[5]=c*g+h*S+f*w,r[6]=u*v+d*_+m*T,r[7]=u*p+d*x+m*b,r[8]=u*g+d*S+m*w,t}scale(e,t){t===void 0&&(t=new Rn);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new A);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let h;const f=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=f;do u=f-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const d=r[o+i*a]/r[o+i*o];h=f;do u=f-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*d;while(--h)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Rn);const t=3,n=6,i=ZS;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let f;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do f=h-c,i[f+n*r]+=i[f+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do f=h-c,i[f+n*o]=f<=r?0:i[f+n*o]-i[f+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do f=n-c,i[f+n*o]=i[f+n*o]-i[f+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do f=n-c,i[f+n*r]=i[f+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(f=i[t+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,f)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,f=t*l,u=n*a,d=n*l,m=i*l,v=r*o,p=r*a,g=r*l,_=this.elements;return _[3*0+0]=1-(u+m),_[3*0+1]=h-g,_[3*0+2]=f+p,_[3*1+0]=h+g,_[3*1+1]=1-(c+m),_[3*1+2]=d-v,_[3*2+0]=f-p,_[3*2+1]=d+v,_[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new Rn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const ZS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new A(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new A(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new A);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new A);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new A),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new A),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new A),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=JS,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=$S;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(nf),nf.almostEquals(e,t)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const JS=new A,$S=new A,nf=new A;class hn{constructor(e){e===void 0&&(e={}),this.lowerBound=new A,this.upperBound=new A,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,rf),c=rf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new hn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=sf,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],f=n[7];this.getCorners(i,r,o,a,l,c,h,f);for(let u=0;u!==8;u++){const d=n[u];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=sf,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],f=n[7];this.getCorners(i,r,o,a,l,c,h,f);for(let u=0;u!==8;u++){const d=n[u];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(f,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(f,u));return!(m<0||d>m)}}const rf=new A,sf=[new A,new A,new A,new A,new A,new A,new A,new A];class of{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class zd{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class Ct{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new A),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=QS,i=eM;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ct);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-r*l,t.y=i*h+o*l+r*a-n*c,t.z=r*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new Ct);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,f=c*i+l*n-o*r,u=c*r+o*i-a*n,d=-o*n-a*i-l*r;return t.x=h*c+d*-o+f*-l-u*-a,t.y=f*c+d*-a+u*-o-h*-l,t.z=u*c+d*-l+h*-a-f*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const f=o*o,u=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*d),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Ct(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Ct);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,f=e.w,u,d,m,v,p;return d=i*l+r*c+o*h+a*f,d<0&&(d=-d,l=-l,c=-c,h=-h,f=-f),1-d>1e-6?(u=Math.acos(d),m=Math.sin(u),v=Math.sin((1-t)*u)/m,p=Math.sin(t*u)/m):(v=1-t,p=t),n.x=v*i+p*l,n.y=v*r+p*c,n.z=v*o+p*h,n.w=v*a+p*f,n}integrate(e,t,n,i){i===void 0&&(i=new Ct);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,f=this.w,u=t*.5;return i.x+=u*(r*f+o*h-a*c),i.y+=u*(o*f+a*l-r*h),i.z+=u*(a*f+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const QS=new A,eM=new A,tM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ge{constructor(e){e===void 0&&(e={}),this.id=Ge.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ge.idCounter=0;Ge.types=tM;class at{constructor(e){e===void 0&&(e={}),this.position=new A,this.quaternion=new Ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return at.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return at.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),n.vsub(e,i),t.conjugate(af),af.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new A),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new A),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const af=new Ct;class Ls extends Ge{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:Ge.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new A;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new A;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Ls.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new A,o=new A;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const h=new A;let f=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);const v=h.dot(o);v>u&&(u=v,f=m)}const d=[];for(let m=0;m<n.faces[f].length;m++){const v=n.vertices[n.faces[f][m]],p=new A;p.copy(v),r.vmult(p,p),i.vadd(p,p),d.push(p)}f>=0&&this.clipFaceAgainstHull(o,e,t,d,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new A,h=new A,f=new A,u=new A,d=new A,m=new A;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(p.faceNormals[x]),n.vmult(c,c);const S=p.testSepAxis(c,e,t,n,i,r);if(S===!1)return!1;S<v&&(v=S,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],h);const _=p.testSepAxis(h,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const g=l?l.length:e.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;h.copy(e.faceNormals[x]),r.vmult(h,h);const S=p.testSepAxis(h,e,t,n,i,r);if(S===!1)return!1;S<v&&(v=S,o.copy(h))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],u);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],d),u.cross(d,m),!m.almostZero()){m.normalize();const x=p.testSepAxis(m,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(m))}}return i.vsub(t,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;Ls.project(a,e,n,i,Sl),Ls.project(t,e,r,o,Ml);const l=Sl[0],c=Sl[1],h=Ml[0],f=Ml[1];if(l<f||h<c)return!1;const u=l-f,d=h-c;return u<d?u:d}calculateLocalInertia(e,t){const n=new A,i=new A;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new A,c=new A,h=new A,f=new A,u=new A,d=new A,m=new A,v=new A,p=this,g=[],_=i,x=g;let S=-1,T=Number.MAX_VALUE;for(let y=0;y<p.faces.length;y++){l.copy(p.faceNormals[y]),n.vmult(l,l);const E=l.dot(e);E<T&&(T=E,S=y)}if(S<0)return;const b=p.faces[S];b.connectedFaces=[];for(let y=0;y<p.faces.length;y++)for(let E=0;E<p.faces[y].length;E++)b.indexOf(p.faces[y][E])!==-1&&y!==S&&b.connectedFaces.indexOf(y)===-1&&b.connectedFaces.push(y);const w=b.length;for(let y=0;y<w;y++){const E=p.vertices[b[y]],I=p.vertices[b[(y+1)%w]];E.vsub(I,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),f.copy(this.faceNormals[S]),n.vmult(f,f),t.vadd(f,f),h.cross(f,u),u.negate(u),d.copy(E),n.vmult(d,d),t.vadd(d,d);const C=b.connectedFaces[y];m.copy(this.faceNormals[C]);const L=this.getPlaneConstantOfFace(C);v.copy(m),n.vmult(v,v);const B=L-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,B);_.length;)_.shift();for(;x.length;)_.push(x.shift())}m.copy(this.faceNormals[S]);const R=this.getPlaneConstantOfFace(S);v.copy(m),n.vmult(v,v);const G=R-v.dot(t);for(let y=0;y<_.length;y++){let E=v.dot(_[y])+G;if(E<=r&&(console.log(`clamped: depth=${E} to minDist=${r}`),E=r),E<=o){const I=_[y];if(E<=1e-6){const C={point:I,normal:v,depth:E};a.push(C)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,r<0)if(o<0){const f=new A;f.copy(c),t.push(f)}else{const f=new A;l.lerp(c,r/(r-o),f),t.push(f)}else if(o<0){const f=new A;l.lerp(c,r/(r-o),f),t.push(f),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new A);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,h,f,u=new A;for(let d=0;d<r.length;d++){u.copy(r[d]),t.vmult(u,u),e.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(f===void 0||m.z>f)&&(f=m.z)}n.set(o,a,l),i.set(c,h,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new A);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=new A;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new A;e.vsub(l,c);const h=a.dot(c),f=new A;r.vsub(l,f);const u=a.dot(f);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,n,i,r){const o=e.vertices.length,a=nM;let l=0,c=0;const h=iM,f=e.vertices;h.setZero(),at.vectorToLocalFrame(n,i,t,a),at.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const m=f[d].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Sl=[],Ml=[];new A;const nM=new A,iM=new A;class _a extends Ge{constructor(e){super({type:Ge.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=A,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ls({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new A),_a.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)bi.set(r[o][0],r[o][1],r[o][2]),t.vmult(bi,bi),e.vadd(bi,bi),n(bi.x,bi.y,bi.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;Dn[0].set(r.x,r.y,r.z),Dn[1].set(-r.x,r.y,r.z),Dn[2].set(-r.x,-r.y,r.z),Dn[3].set(-r.x,-r.y,-r.z),Dn[4].set(r.x,-r.y,-r.z),Dn[5].set(r.x,r.y,-r.z),Dn[6].set(-r.x,r.y,-r.z),Dn[7].set(r.x,-r.y,r.z);const o=Dn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Dn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,f=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),f>i.z&&(i.z=f),c<n.x&&(n.x=c),h<n.y&&(n.y=h),f<n.z&&(n.z=f)}}}const bi=new A,Dn=[new A,new A,new A,new A,new A,new A,new A,new A],th={DYNAMIC:1,STATIC:2,KINEMATIC:4},nh={AWAKE:0,SLEEPY:1,SLEEPING:2};class ze extends zd{constructor(e){e===void 0&&(e={}),super(),this.id=ze.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new A,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new A,this.force=new A;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ze.STATIC:ze.DYNAMIC,typeof e.type==typeof ze.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ze.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new Ct,this.initQuaternion=new Ct,this.previousQuaternion=new Ct,this.interpolatedQuaternion=new Ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new A,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Rn,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Rn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new A(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new A(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new hn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ze.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ze.SLEEPING&&this.dispatchEvent(ze.wakeupEvent)}sleep(){this.sleepState=ze.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ze.AWAKE&&n<i?(this.sleepState=ze.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ze.sleepyEvent)):t===ze.SLEEPY&&n>i?this.wakeUp():t===ze.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ze.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ze.SLEEPING||this.type===ze.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new A),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new A),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new A,r=new Ct;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=rM,o=sM,a=this.quaternion,l=this.aabb,c=oM;for(let h=0;h!==i;h++){const f=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=aM,i=lM;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new A),this.type!==ze.DYNAMIC)return;this.sleepState===ze.SLEEPING&&this.wakeUp();const n=cM;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new A),this.type!==ze.DYNAMIC)return;const n=hM,i=uM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ze.DYNAMIC&&(this.sleepState===ze.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new A),this.type!==ze.DYNAMIC)return;this.sleepState===ze.SLEEPING&&this.wakeUp();const n=t,i=fM;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=dM;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new A),this.type!==ze.DYNAMIC)return;const n=pM,i=mM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=gM;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),_a.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new A;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ze.DYNAMIC||this.type===ze.KINEMATIC)||this.sleepState===ze.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,f=this.invInertiaWorld,u=this.linearFactor,d=h*e;i.x+=a.x*d*u.x,i.y+=a.y*d*u.y,i.z+=a.z*d*u.z;const m=f.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,_=l.z*v.z;r.x+=e*(m[0]*p+m[1]*g+m[2]*_),r.y+=e*(m[3]*p+m[4]*g+m[5]*_),r.z+=e*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ze.idCounter=0;ze.COLLIDE_EVENT_NAME="collide";ze.DYNAMIC=th.DYNAMIC;ze.STATIC=th.STATIC;ze.KINEMATIC=th.KINEMATIC;ze.AWAKE=nh.AWAKE;ze.SLEEPY=nh.SLEEPY;ze.SLEEPING=nh.SLEEPING;ze.wakeupEvent={type:"wakeup"};ze.sleepyEvent={type:"sleepy"};ze.sleepEvent={type:"sleep"};const rM=new A,sM=new Ct,oM=new hn,aM=new Rn,lM=new Rn;new Rn;const cM=new A,hM=new A,uM=new A,fM=new A,dM=new A,pM=new A,mM=new A,gM=new A;class vM{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ze.STATIC||e.sleepState===ze.SLEEPING)&&(t.type&ze.STATIC||t.sleepState===ze.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=_M;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=xM,i=yM,r=SM,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new A;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const _M=new A;new A;new Ct;new A;const xM={keys:[]},yM=[],SM=[];new A;new A;new A;class MM extends vM{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class ia{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let kd,Gd,Hd,Vd,Wd,Xd,qd;const ih={CLOSEST:1,ANY:2,ALL:4};kd=Ge.types.SPHERE;Gd=Ge.types.PLANE;Hd=Ge.types.BOX;Vd=Ge.types.CYLINDER;Wd=Ge.types.CONVEXPOLYHEDRON;Xd=Ge.types.HEIGHTFIELD;qd=Ge.types.TRIMESH;class At{get[kd](){return this._intersectSphere}get[Gd](){return this._intersectPlane}get[Hd](){return this._intersectBox}get[Vd](){return this._intersectConvex}get[Wd](){return this._intersectConvex}get[Xd](){return this._intersectHeightfield}get[qd](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new A),t===void 0&&(t=new A),this.from=e.clone(),this.to=t.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=At.ANY,this.result=new ia,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||At.ANY,this.result=t.result||new ia,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(lf),wl.length=0,e.broadphase.aabbQuery(e,lf,wl),this.intersectBodies(wl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=wM,r=EM;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(BM(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new A(0,0,1);t.vmult(c,c);const h=new A;o.vsub(n,h);const f=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(f*u>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const m=new A,v=new A,p=new A;o.vsub(n,m);const g=-c.dot(m)/d;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=bM;o.from.copy(this.from),o.to.copy(this.to),at.pointToLocalFrame(n,t,o.from,o.from),at.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=TM;let l,c,h,f;l=c=0,h=f=e.data.length-1;const u=new hn;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<h;d++)for(let m=c;m<f;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,m,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(d,m,!1),at.pointToWorldFrame(n,t,e.pillarOffset,Po),this._intersectConvex(e.pillarConvex,t,Po,i,r,cf),this.result.shouldStop)return;e.getConvexTrianglePillar(d,m,!0),at.pointToWorldFrame(n,t,e.pillarOffset,Po),this._intersectConvex(e.pillarConvex,t,Po,i,r,cf)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*f,d=AM,m=CM;if(!(u<0))if(u===0)o.lerp(a,u,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=RM,l=hf,c=o&&o.faceList||null,h=e.faces,f=e.vertices,u=e.faceNormals,d=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const S=c?c[x]:x,T=h[S],b=u[S],w=t,R=n;l.copy(f[T[0]]),w.vmult(l,l),l.vadd(R,l),l.vsub(m,l),w.vmult(b,a);const G=d.dot(a);if(Math.abs(G)<this.precision)continue;const y=a.dot(l)/G;if(!(y<0)){d.scale(y,Zt),Zt.vadd(m,Zt),bn.copy(f[T[0]]),w.vmult(bn,bn),R.vadd(bn,bn);for(let E=1;!_.shouldStop&&E<T.length-1;E++){In.copy(f[T[E]]),Fn.copy(f[T[E+1]]),w.vmult(In,In),w.vmult(Fn,Fn),R.vadd(In,In),R.vadd(Fn,Fn);const I=Zt.distanceTo(m);!(At.pointInTriangle(Zt,bn,In,Fn)||At.pointInTriangle(Zt,In,bn,Fn))||I>p||this.reportIntersection(a,Zt,r,i,S)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=PM,l=NM,c=OM,h=hf,f=LM,u=UM,d=DM,m=FM,v=IM,p=e.indices;e.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),at.vectorToLocalFrame(n,t,x,f),at.pointToLocalFrame(n,t,g,u),at.pointToLocalFrame(n,t,_,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,d.vsub(u,f),f.normalize();const S=u.distanceSquared(d);e.tree.rayQuery(this,c,l);for(let T=0,b=l.length;!this.result.shouldStop&&T!==b;T++){const w=l[T];e.getNormal(w,a),e.getVertex(p[w*3],bn),bn.vsub(u,h);const R=f.dot(a),G=a.dot(h)/R;if(G<0)continue;f.scale(G,Zt),Zt.vadd(u,Zt),e.getVertex(p[w*3+1],In),e.getVertex(p[w*3+2],Fn);const y=Zt.distanceSquared(u);!(At.pointInTriangle(Zt,In,bn,Fn)||At.pointInTriangle(Zt,bn,In,Fn))||y>S||(at.vectorToWorldFrame(t,a,v),at.pointToWorldFrame(n,t,Zt,m),this.reportIntersection(v,m,r,i,w))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case At.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case At.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case At.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Xi),n.vsub(t,gs),e.vsub(t,El);const r=Xi.dot(Xi),o=Xi.dot(gs),a=Xi.dot(El),l=gs.dot(gs),c=gs.dot(El);let h,f;return(h=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&h+f<r*l-o*o}}At.CLOSEST=ih.CLOSEST;At.ANY=ih.ANY;At.ALL=ih.ALL;const lf=new hn,wl=[],gs=new A,El=new A,wM=new A,EM=new Ct,Zt=new A,bn=new A,In=new A,Fn=new A;new A;new ia;const cf={faceList:[0]},Po=new A,bM=new At,TM=[],AM=new A,CM=new A,RM=new A;new A;new A;const hf=new A,PM=new A,LM=new A,UM=new A,DM=new A,IM=new A,FM=new A;new hn;const NM=[],OM=new at,Xi=new A,Lo=new A;function BM(s,e,t){t.vsub(s,Xi);const n=Xi.dot(e);return e.scale(n,Lo),Lo.vadd(s,Lo),t.distanceTo(Lo)}class zM{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class uf{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ws{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ws.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new uf,this.jacobianElementB=new uf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,ff),a.scale(h,df),n.invInertiaWorldSolve.vmult(o,pf),i.invInertiaWorldSolve.vmult(l,mf),e.multiplyVectors(ff,pf)+t.multiplyVectors(df,mf)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,Uo),c+=Uo.dot(e.rotational),l.vmult(t.rotational,Uo),c+=Uo.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=kM;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ws.idCounter=0;const ff=new A,df=new A,pf=new A,mf=new A,Uo=new A,kM=new A;class GM extends Ws{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=HM,c=VM,h=i.velocity,f=i.angularVelocity;i.force,i.torque;const u=r.velocity,d=r.angularVelocity;r.force,r.torque;const m=WM,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),x=this.restitution+1,S=x*u.dot(g)-x*h.dot(g)+d.dot(c)-f.dot(l),T=this.computeGiMf();return-_*t-S*n-e*T}getImpactVelocityAlongNormal(){const e=XM,t=qM,n=YM,i=jM,r=KM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const HM=new A,VM=new A,WM=new A,XM=new A,qM=new A,YM=new A,jM=new A,KM=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class gf extends Ws{constructor(e,t,n){super(e,t,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=ZM,o=JM,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),f=this.computeGiMf();return-h*t-e*f}}const ZM=new A,JM=new A;class xa{constructor(e,t,n){n=zM.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=xa.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}xa.idCounter=0;class ya{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ya.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ya.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new At;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Yd extends Ge{constructor(){super({type:Ge.types.PLANE}),this.worldNormal=new A,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new A),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Kn.set(0,0,1),t.vmult(Kn,Kn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Kn.x===1?i.x=e.x:Kn.x===-1&&(n.x=e.x),Kn.y===1?i.y=e.y:Kn.y===-1&&(n.y=e.y),Kn.z===1?i.z=e.z:Kn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Kn=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new hn;new A;new hn;new A;new A;new A;new A;new A;new A;new A;new hn;new A;new at;new hn;class $M{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class QM extends $M{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let f,u,d,m,v,p;if(a!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const g=t1,_=n1,x=e1;g.length=a,_.length=a,x.length=a;for(let S=0;S!==a;S++){const T=o[S];x[S]=0,_[S]=T.computeB(h),g[S]=1/T.computeC()}if(a!==0){for(let b=0;b!==c;b++){const w=l[b],R=w.vlambda,G=w.wlambda;R.set(0,0,0),G.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let b=0;b!==a;b++){const w=o[b];f=_[b],u=g[b],p=x[b],v=w.computeGWlambda(),d=u*(f-v-w.eps*p),p+d<w.minForce?d=w.minForce-p:p+d>w.maxForce&&(d=w.maxForce-p),x[b]+=d,m+=d>0?d:-d,w.addToWlambda(d)}if(m*m<r)break}for(let b=0;b!==c;b++){const w=l[b],R=w.velocity,G=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),R.vadd(w.vlambda,R),w.wlambda.vmul(w.angularFactor,w.wlambda),G.vadd(w.wlambda,G)}let S=o.length;const T=1/h;for(;S--;)o[S].multiplier=x[S]*T}return n}}const e1=[],t1=[],n1=[];class i1{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class r1 extends i1{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const vt={sphereSphere:Ge.types.SPHERE,spherePlane:Ge.types.SPHERE|Ge.types.PLANE,boxBox:Ge.types.BOX|Ge.types.BOX,sphereBox:Ge.types.SPHERE|Ge.types.BOX,planeBox:Ge.types.PLANE|Ge.types.BOX,convexConvex:Ge.types.CONVEXPOLYHEDRON,sphereConvex:Ge.types.SPHERE|Ge.types.CONVEXPOLYHEDRON,planeConvex:Ge.types.PLANE|Ge.types.CONVEXPOLYHEDRON,boxConvex:Ge.types.BOX|Ge.types.CONVEXPOLYHEDRON,sphereHeightfield:Ge.types.SPHERE|Ge.types.HEIGHTFIELD,boxHeightfield:Ge.types.BOX|Ge.types.HEIGHTFIELD,convexHeightfield:Ge.types.CONVEXPOLYHEDRON|Ge.types.HEIGHTFIELD,sphereParticle:Ge.types.PARTICLE|Ge.types.SPHERE,planeParticle:Ge.types.PLANE|Ge.types.PARTICLE,boxParticle:Ge.types.BOX|Ge.types.PARTICLE,convexParticle:Ge.types.PARTICLE|Ge.types.CONVEXPOLYHEDRON,cylinderCylinder:Ge.types.CYLINDER,sphereCylinder:Ge.types.SPHERE|Ge.types.CYLINDER,planeCylinder:Ge.types.PLANE|Ge.types.CYLINDER,boxCylinder:Ge.types.BOX|Ge.types.CYLINDER,convexCylinder:Ge.types.CONVEXPOLYHEDRON|Ge.types.CYLINDER,heightfieldCylinder:Ge.types.HEIGHTFIELD|Ge.types.CYLINDER,particleCylinder:Ge.types.PARTICLE|Ge.types.CYLINDER,sphereTrimesh:Ge.types.SPHERE|Ge.types.TRIMESH,planeTrimesh:Ge.types.PLANE|Ge.types.TRIMESH};class s1{get[vt.sphereSphere](){return this.sphereSphere}get[vt.spherePlane](){return this.spherePlane}get[vt.boxBox](){return this.boxBox}get[vt.sphereBox](){return this.sphereBox}get[vt.planeBox](){return this.planeBox}get[vt.convexConvex](){return this.convexConvex}get[vt.sphereConvex](){return this.sphereConvex}get[vt.planeConvex](){return this.planeConvex}get[vt.boxConvex](){return this.boxConvex}get[vt.sphereHeightfield](){return this.sphereHeightfield}get[vt.boxHeightfield](){return this.boxHeightfield}get[vt.convexHeightfield](){return this.convexHeightfield}get[vt.sphereParticle](){return this.sphereParticle}get[vt.planeParticle](){return this.planeParticle}get[vt.boxParticle](){return this.boxParticle}get[vt.convexParticle](){return this.convexParticle}get[vt.cylinderCylinder](){return this.convexConvex}get[vt.sphereCylinder](){return this.sphereConvex}get[vt.planeCylinder](){return this.planeConvex}get[vt.boxCylinder](){return this.boxConvex}get[vt.convexCylinder](){return this.convexConvex}get[vt.heightfieldCylinder](){return this.heightfieldCylinder}get[vt.particleCylinder](){return this.particleCylinder}get[vt.sphereTrimesh](){return this.sphereTrimesh}get[vt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new r1,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new GM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,f=o.material||i.material;if(h&&f&&h.friction>=0&&f.friction>=0&&(c=h.friction*f.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const m=this.frictionEquationPool,v=m.length?m.pop():new gf(n,i,u*d),p=m.length?m.pop():new gf(n,i,u*d);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-u*d,v.maxForce=p.maxForce=u*d,v.ri.copy(e.ri),v.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=e.enabled,t.push(v,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];zi.setZero(),wr.setZero(),Er.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(zi.vadd(t.ni,zi),wr.vadd(t.ri,wr),Er.vadd(t.rj,Er)):(zi.vsub(t.ni,zi),wr.vadd(t.rj,wr),Er.vadd(t.ri,Er));const o=1/e;wr.scale(o,n.ri),Er.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),zi.normalize(),zi.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=l1,c=c1,h=o1,f=a1;for(let u=0,d=e.length;u!==d;u++){const m=e[u],v=t[u];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&ze.KINEMATIC&&v.type&ze.STATIC||m.type&ze.STATIC&&v.type&ze.KINEMATIC||m.type&ze.KINEMATIC&&v.type&ze.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],h),h.vadd(m.position,h);const x=m.shapes[_];for(let S=0;S<v.shapes.length;S++){v.quaternion.mult(v.shapeOrientations[S],c),v.quaternion.vmult(v.shapeOffsets[S],f),f.vadd(v.position,f);const T=v.shapes[S];if(!(x.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(f)>x.boundingSphereRadius+T.boundingSphereRadius)continue;let b=null;x.material&&T.material&&(b=n.getContactMaterial(x.material,T.material)||null),this.currentContactMaterial=b||p||n.defaultContactMaterial;const w=x.type|T.type,R=this[w];if(R){let G=!1;x.type<T.type?G=R.call(this,x,T,h,f,l,c,m,v,x,T,g):G=R.call(this,T,x,f,h,c,l,v,m,x,T,g),G&&g&&(n.shapeOverlapKeeper.set(x.id,T.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,h,f){if(f)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,h,f){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Do),u.ni.scale(u.ni.dot(Do),vf),Do.vsub(vf,u.rj),-Do.dot(u.ni)<=e.radius){if(f)return!0;const d=u.ri,m=u.rj;d.vadd(n,d),d.vsub(a.position,d),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,h,f){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,f)}sphereBox(e,t,n,i,r,o,a,l,c,h,f){const u=this.v3pool,d=F1;n.vsub(i,Io),t.getSideNormals(d,o);const m=e.radius;let v=!1;const p=O1,g=B1,_=z1;let x=null,S=0,T=0,b=0,w=null;for(let U=0,j=d.length;U!==j&&v===!1;U++){const H=U1;H.copy(d[U]);const X=H.length();H.normalize();const K=Io.dot(H);if(K<X+m&&K>0){const O=D1,N=I1;O.copy(d[(U+1)%3]),N.copy(d[(U+2)%3]);const Q=O.length(),z=N.length();O.normalize(),N.normalize();const k=Io.dot(O),ne=Io.dot(N);if(k<Q&&k>-Q&&ne<z&&ne>-z){const q=Math.abs(K-X-m);if((w===null||q<w)&&(w=q,T=k,b=ne,x=X,p.copy(H),g.copy(O),_.copy(N),S++,f))return!0}}}if(S){v=!0;const U=this.createContactEquation(a,l,e,t,c,h);p.scale(-m,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(x,p),g.scale(T,g),p.vadd(g,p),_.scale(b,_),p.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let R=u.get();const G=N1;for(let U=0;U!==2&&!v;U++)for(let j=0;j!==2&&!v;j++)for(let H=0;H!==2&&!v;H++)if(R.set(0,0,0),U?R.vadd(d[0],R):R.vsub(d[0],R),j?R.vadd(d[1],R):R.vsub(d[1],R),H?R.vadd(d[2],R):R.vsub(d[2],R),i.vadd(R,G),G.vsub(n,G),G.lengthSquared()<m*m){if(f)return!0;v=!0;const X=this.createContactEquation(a,l,e,t,c,h);X.ri.copy(G),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(m,X.ri),X.rj.copy(R),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(R),R=null;const y=u.get(),E=u.get(),I=u.get(),C=u.get(),L=u.get(),B=d.length;for(let U=0;U!==B&&!v;U++)for(let j=0;j!==B&&!v;j++)if(U%3!==j%3){d[j].cross(d[U],y),y.normalize(),d[U].vadd(d[j],E),I.copy(n),I.vsub(E,I),I.vsub(i,I);const H=I.dot(y);y.scale(H,C);let X=0;for(;X===U%3||X===j%3;)X++;L.copy(n),L.vsub(C,L),L.vsub(E,L),L.vsub(i,L);const K=Math.abs(H),O=L.length();if(K<d[X].length()&&O<m){if(f)return!0;v=!0;const N=this.createContactEquation(a,l,e,t,c,h);E.vadd(C,N.rj),N.rj.copy(N.rj),L.negate(N.ni),N.ni.normalize(),N.ri.copy(N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(n,N.ri),N.ri.normalize(),N.ri.scale(m,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}u.release(y,E,I,C,L)}planeBox(e,t,n,i,r,o,a,l,c,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,f)}convexConvex(e,t,n,i,r,o,a,l,c,h,f,u,d){const m=ew;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,m,u,d)){const v=[],p=tw;e.clipAgainstHull(n,r,t,i,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(f)return!0;const x=this.createContactEquation(a,l,e,t,c,h),S=x.ri,T=x.rj;m.negate(x.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,S),T.copy(v[_].point),S.vsub(n,S),T.vsub(i,T),S.vadd(n,S),S.vsub(a.position,S),T.vadd(i,T),T.vsub(l.position,T),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,r,o,a,l,c,h,f){const u=this.v3pool;n.vsub(i,k1);const d=t.faceNormals,m=t.faces,v=t.vertices,p=e.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],S=W1;o.vmult(x,S),i.vadd(S,S);const T=V1;if(S.vsub(n,T),T.lengthSquared()<p*p){if(f)return!0;g=!0;const b=this.createContactEquation(a,l,e,t,c,h);b.ri.copy(T),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(p,b.ri),S.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,x=m.length;_!==x&&g===!1;_++){const S=d[_],T=m[_],b=X1;o.vmult(S,b);const w=q1;o.vmult(v[T[0]],w),w.vadd(i,w);const R=Y1;b.scale(-p,R),n.vadd(R,R);const G=j1;R.vsub(w,G);const y=G.dot(b),E=K1;if(n.vsub(w,E),y<0&&E.dot(b)>0){const I=[];for(let C=0,L=T.length;C!==L;C++){const B=u.get();o.vmult(v[T[C]],B),i.vadd(B,B),I.push(B)}if(L1(I,b,n)){if(f)return!0;g=!0;const C=this.createContactEquation(a,l,e,t,c,h);b.scale(-p,C.ri),b.negate(C.ni);const L=u.get();b.scale(-y,L);const B=u.get();b.scale(-p,B),n.vsub(i,C.rj),C.rj.vadd(B,C.rj),C.rj.vadd(L,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(L),u.release(B),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let U=0,j=I.length;U!==j;U++)u.release(I[U]);return}else for(let C=0;C!==T.length;C++){const L=u.get(),B=u.get();o.vmult(v[T[(C+1)%T.length]],L),o.vmult(v[T[(C+2)%T.length]],B),i.vadd(L,L),i.vadd(B,B);const U=G1;B.vsub(L,U);const j=H1;U.unit(j);const H=u.get(),X=u.get();n.vsub(L,X);const K=X.dot(j);j.scale(K,H),H.vadd(L,H);const O=u.get();if(H.vsub(n,O),K>0&&K*K<U.lengthSquared()&&O.lengthSquared()<p*p){if(f)return!0;const N=this.createContactEquation(a,l,e,t,c,h);H.vsub(i,N.rj),H.vsub(n,N.ni),N.ni.normalize(),N.ni.scale(p,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let Q=0,z=I.length;Q!==z;Q++)u.release(I[Q]);u.release(L),u.release(B),u.release(H),u.release(O),u.release(X);return}u.release(L),u.release(B),u.release(H),u.release(O),u.release(X)}for(let C=0,L=I.length;C!==L;C++)u.release(I[C])}}}planeConvex(e,t,n,i,r,o,a,l,c,h,f){const u=Z1,d=J1;d.set(0,0,1),r.vmult(d,d);let m=0;const v=$1;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),d.dot(v)<=0){if(f)return!0;const _=this.createContactEquation(a,l,e,t,c,h),x=Q1;d.scale(d.dot(v),x),u.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(d),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,r,o,a,l,c,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,f)}sphereHeightfield(e,t,n,i,r,o,a,l,c,h,f){const u=t.data,d=e.radius,m=t.elementSize,v=dw,p=fw;at.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-d)/m)-1,_=Math.ceil((p.x+d)/m)+1,x=Math.floor((p.y-d)/m)-1,S=Math.ceil((p.y+d)/m)+1;if(_<0||S<0||g>u.length||x>u[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),S<0&&(S=0),g>=u.length&&(g=u.length-1),_>=u.length&&(_=u.length-1),S>=u[0].length&&(S=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const T=[];t.getRectMinMax(g,x,_,S,T);const b=T[0],w=T[1];if(p.z-d>w||p.z+d<b)return;const R=this.result;for(let G=g;G<_;G++)for(let y=x;y<S;y++){const E=R.length;let I=!1;if(t.getConvexTrianglePillar(G,y,!1),at.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,f)),f&&I||(t.getConvexTrianglePillar(G,y,!0),at.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,f)),f&&I))return!0;if(R.length-E>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,f)}convexHeightfield(e,t,n,i,r,o,a,l,c,h,f){const u=t.data,d=t.elementSize,m=e.boundingSphereRadius,v=hw,p=uw,g=cw;at.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/d)-1,x=Math.ceil((g.x+m)/d)+1,S=Math.floor((g.y-m)/d)-1,T=Math.ceil((g.y+m)/d)+1;if(x<0||T<0||_>u.length||S>u[0].length)return;_<0&&(_=0),x<0&&(x=0),S<0&&(S=0),T<0&&(T=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),T>=u[0].length&&(T=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const b=[];t.getRectMinMax(_,S,x,T,b);const w=b[0],R=b[1];if(!(g.z-m>R||g.z+m<w))for(let G=_;G<x;G++)for(let y=S;y<T;y++){let E=!1;if(t.getConvexTrianglePillar(G,y,!1),at.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(E=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,f,p,null)),f&&E||(t.getConvexTrianglePillar(G,y,!0),at.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(E=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,f,p,null)),f&&E))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,h,f){const u=sw;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(f)return!0;const m=this.createContactEquation(l,a,t,e,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(e.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,h,f){const u=nw;u.set(0,0,1),a.quaternion.vmult(u,u);const d=iw;if(i.vsub(a.position,d),u.dot(d)<=0){if(f)return!0;const v=this.createContactEquation(l,a,t,e,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=rw;u.scale(u.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,f)}convexParticle(e,t,n,i,r,o,a,l,c,h,f){let u=-1;const d=aw,m=lw;let v=null;const p=ow;if(p.copy(i),p.vsub(n,p),r.conjugate(_f),_f.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,_=e.faces.length;g!==_;g++){const x=[e.worldVertices[e.faces[g][0]]],S=e.worldFaceNormals[g];i.vsub(x[0],xf);const T=-S.dot(xf);if(v===null||Math.abs(T)<Math.abs(v)){if(f)return!0;v=T,u=g,d.copy(S)}}if(u!==-1){const g=this.createContactEquation(l,a,t,e,c,h);d.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),d.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,h,f){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,h,f)}particleCylinder(e,t,n,i,r,o,a,l,c,h,f){return this.convexParticle(t,e,i,n,o,r,l,a,c,h,f)}sphereTrimesh(e,t,n,i,r,o,a,l,c,h,f){const u=v1,d=_1,m=x1,v=y1,p=S1,g=M1,_=T1,x=g1,S=p1,T=A1;at.pointToLocalFrame(i,o,n,p);const b=e.radius;_.lowerBound.set(p.x-b,p.y-b,p.z-b),_.upperBound.set(p.x+b,p.y+b,p.z+b),t.getTrianglesInAABB(_,T);const w=m1,R=e.radius*e.radius;for(let C=0;C<T.length;C++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[T[C]*3+L],w),w.vsub(p,S),S.lengthSquared()<=R){if(x.copy(w),at.pointToWorldFrame(i,o,x,w),w.vsub(n,S),f)return!0;let B=this.createContactEquation(a,l,e,t,c,h);B.ni.copy(S),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(w),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let C=0;C<T.length;C++)for(let L=0;L<3;L++){t.getVertex(t.indices[T[C]*3+L],u),t.getVertex(t.indices[T[C]*3+(L+1)%3],d),d.vsub(u,m),p.vsub(d,g);const B=g.dot(m);p.vsub(u,g);let U=g.dot(m);if(U>0&&B<0&&(p.vsub(u,g),v.copy(m),v.normalize(),U=g.dot(v),v.scale(U,g),g.vadd(u,g),g.distanceTo(p)<e.radius)){if(f)return!0;const H=this.createContactEquation(a,l,e,t,c,h);g.vsub(p,H.ni),H.ni.normalize(),H.ni.scale(e.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),at.pointToWorldFrame(i,o,g,g),g.vsub(l.position,H.rj),at.vectorToWorldFrame(o,H.ni,H.ni),at.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const G=w1,y=E1,E=b1,I=d1;for(let C=0,L=T.length;C!==L;C++){t.getTriangleVertices(T[C],G,y,E),t.getNormal(T[C],I),p.vsub(G,g);let B=g.dot(I);if(I.scale(B,g),p.vsub(g,g),B=g.distanceTo(p),At.pointInTriangle(g,G,y,E)&&B<e.radius){if(f)return!0;let U=this.createContactEquation(a,l,e,t,c,h);g.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),at.pointToWorldFrame(i,o,g,g),g.vsub(l.position,U.rj),at.vectorToWorldFrame(o,U.ni,U.ni),at.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}T.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,h,f){const u=new A,d=h1;d.set(0,0,1),r.vmult(d,d);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,u);const v=new A;v.copy(u),at.pointToWorldFrame(i,o,v,u);const p=u1;if(u.vsub(n,p),d.dot(p)<=0){if(f)return!0;const _=this.createContactEquation(a,l,e,t,c,h);_.ni.copy(d);const x=f1;d.scale(p.dot(d),x),u.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const zi=new A,wr=new A,Er=new A,o1=new A,a1=new A,l1=new Ct,c1=new Ct,h1=new A,u1=new A,f1=new A,d1=new A,p1=new A;new A;const m1=new A,g1=new A,v1=new A,_1=new A,x1=new A,y1=new A,S1=new A,M1=new A,w1=new A,E1=new A,b1=new A,T1=new hn,A1=[],Do=new A,vf=new A,C1=new A,R1=new A,P1=new A;function L1(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=C1;s[(r+1)%i].vsub(o,a);const l=R1;a.cross(e,l);const c=P1;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Io=new A,U1=new A,D1=new A,I1=new A,F1=[new A,new A,new A,new A,new A,new A],N1=new A,O1=new A,B1=new A,z1=new A,k1=new A,G1=new A,H1=new A,V1=new A,W1=new A,X1=new A,q1=new A,Y1=new A,j1=new A,K1=new A;new A;new A;const Z1=new A,J1=new A,$1=new A,Q1=new A,ew=new A,tw=new A,nw=new A,iw=new A,rw=new A,sw=new A,_f=new Ct,ow=new A;new A;const aw=new A,xf=new A,lw=new A,cw=new A,hw=new A,uw=[0],fw=new A,dw=new A;class yf{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Sf(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Sf(t,h)}}}function Sf(s,e){s.push((e&4294901760)>>16,e&65535)}const bl=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class pw{constructor(){this.data={keys:[]}}get(e,t){const n=bl(e,t);return this.data[n]}set(e,t,n){const i=bl(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=bl(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class mw extends zd{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new MM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new QM,this.constraints=[],this.narrowphase=new s1(this),this.collisionMatrix=new of,this.collisionMatrixPrevious=new of,this.bodyOverlapKeeper=new yf,this.shapeOverlapKeeper=new yf,this.contactmaterials=[],this.contactMaterialTable=new pw,this.defaultMaterial=new ya("default"),this.defaultContactMaterial=new xa(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof ia?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=At.ALL,n.from=e,n.to=t,n.callback=i,Tl.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=At.ANY,n.from=e,n.to=t,n.result=i,Tl.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=At.CLOSEST,n.from=e,n.to=t,n.result=i,Tl.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ze&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Ut.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Ut.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Ut.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=yw,i=Sw,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,f=ze.DYNAMIC;let u=-1/0;const d=this.constraints,m=xw;l.length();const v=l.x,p=l.y,g=l.z;let _=0;for(c&&(u=Ut.now()),_=0;_!==r;_++){const C=o[_];if(C.type===f){const L=C.force,B=C.mass;L.x+=B*v,L.y+=B*p,L.z+=B*g}}for(let C=0,L=this.subsystems.length;C!==L;C++)this.subsystems[C].update();c&&(u=Ut.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ut.now()-u);let x=d.length;for(_=0;_!==x;_++){const C=d[_];if(!C.collideConnected)for(let L=n.length-1;L>=0;L-=1)(C.bodyA===n[L]&&C.bodyB===i[L]||C.bodyB===n[L]&&C.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(u=Ut.now());const S=_w,T=t.length;for(_=0;_!==T;_++)S.push(t[_]);t.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,m),c&&(h.narrowphase=Ut.now()-u),c&&(u=Ut.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const w=t.length;for(let C=0;C!==w;C++){const L=t[C],B=L.bi,U=L.bj,j=L.si,H=L.sj;let X;if(B.material&&U.material?X=this.getContactMaterial(B.material,U.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,B.material&&U.material&&(B.material.friction>=0&&U.material.friction>=0&&B.material.friction*U.material.friction,B.material.restitution>=0&&U.material.restitution>=0&&(L.restitution=B.material.restitution*U.material.restitution)),a.addEquation(L),B.allowSleep&&B.type===ze.DYNAMIC&&B.sleepState===ze.SLEEPING&&U.sleepState===ze.AWAKE&&U.type!==ze.STATIC){const K=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),O=U.sleepSpeedLimit**2;K>=O*2&&(B.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===ze.DYNAMIC&&U.sleepState===ze.SLEEPING&&B.sleepState===ze.AWAKE&&B.type!==ze.STATIC){const K=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),O=B.sleepSpeedLimit**2;K>=O*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,U,!0),this.collisionMatrixPrevious.get(B,U)||(vs.body=U,vs.contact=L,B.dispatchEvent(vs),vs.body=B,U.dispatchEvent(vs)),this.bodyOverlapKeeper.set(B.id,U.id),this.shapeOverlapKeeper.set(j.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ut.now()-u,u=Ut.now()),_=0;_!==r;_++){const C=o[_];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(x=d.length,_=0;_!==x;_++){const C=d[_];C.update();for(let L=0,B=C.equations.length;L!==B;L++){const U=C.equations[L];a.addEquation(U)}}a.solve(e,this),c&&(h.solve=Ut.now()-u),a.removeAllEquations();const R=Math.pow;for(_=0;_!==r;_++){const C=o[_];if(C.type&f){const L=R(1-C.linearDamping,e),B=C.velocity;B.scale(L,B);const U=C.angularVelocity;if(U){const j=R(1-C.angularDamping,e);U.scale(j,U)}}}this.dispatchEvent(vw),c&&(u=Ut.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,E=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,y,E);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ut.now()-u),this.stepnumber+=1,this.dispatchEvent(gw);let I=!0;if(this.allowSleep)for(I=!1,_=0;_!==r;_++){const C=o[_];C.sleepTick(this.time),C.sleepState!==ze.SLEEPING&&(I=!0)}this.hasActiveBodies=I}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Zn,Jn),e){for(let r=0,o=Zn.length;r<o;r+=2)_s.bodyA=this.getBodyById(Zn[r]),_s.bodyB=this.getBodyById(Zn[r+1]),this.dispatchEvent(_s);_s.bodyA=_s.bodyB=null}if(t){for(let r=0,o=Jn.length;r<o;r+=2)xs.bodyA=this.getBodyById(Jn[r]),xs.bodyB=this.getBodyById(Jn[r+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}Zn.length=Jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Zn,Jn),n){for(let r=0,o=Zn.length;r<o;r+=2){const a=this.getShapeById(Zn[r]),l=this.getShapeById(Zn[r+1]);$n.shapeA=a,$n.shapeB=l,a&&($n.bodyA=a.body),l&&($n.bodyB=l.body),this.dispatchEvent($n)}$n.bodyA=$n.bodyB=$n.shapeA=$n.shapeB=null}if(i){for(let r=0,o=Jn.length;r<o;r+=2){const a=this.getShapeById(Jn[r]),l=this.getShapeById(Jn[r+1]);Qn.shapeA=a,Qn.shapeB=l,a&&(Qn.bodyA=a.body),l&&(Qn.bodyB=l.body),this.dispatchEvent(Qn)}Qn.bodyA=Qn.bodyB=Qn.shapeA=Qn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new hn;const Tl=new At,Ut=globalThis.performance||{};if(!Ut.now){let s=Date.now();Ut.timing&&Ut.timing.navigationStart&&(s=Ut.timing.navigationStart),Ut.now=()=>Date.now()-s}new A;const gw={type:"postStep"},vw={type:"preStep"},vs={type:ze.COLLIDE_EVENT_NAME,body:null,contact:null},_w=[],xw=[],yw=[],Sw=[],Zn=[],Jn=[],_s={type:"beginContact",bodyA:null,bodyB:null},xs={type:"endContact",bodyA:null,bodyB:null},$n={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Qn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Mw=["the","and","for","you","that","with","have","this","they","from","what","were","when","your","said","each","time","will","about","there","their","would","make","like","into","them","other","more","come","some","than","then","look","only","over","also","back","after","work","first","well","even","want","because","these","give","most","find","here","thing","many","such","long","down","know","take","year","good","need","feel","three","state","never","become","high","really","night","point","today","bring","happen","next","without","before","large","call","move","live","believe","hold","water","room","write","mother","area","money","story","young","month","right","study","book","word","business","issue","side","kind","four","head","far","black","both","little","house","world","school","still","group","begin","seem","talk","turn","start","might","show","part","small","against","family","leave","while","mean","keep","student","great","same","another","begin","those","again","play","stand","increase","later","follow","around","city","since","change","light","watch","question","love","person","help","plant","close","power","reason","field","music","idea","body","color","hand","game","line","value","stay","level","ship","build","clean","quick","sound","dream","river","stone","green","metal"],ww=["work","call","look","want","need","help","play","talk","turn","show","watch","follow","start","point","clean"],Ew=["thing","year","word","book","room","group","point","reason","idea","game","line","field","river","stone","plant","color","level","dream"];function Mf(s){return/(?:s|x|z|ch|sh)$/.test(s)?s+"es":s+"s"}function bw(){const s=new Set(Mw);for(const e of ww)s.add(Mf(e)),s.add(e+"ed"),s.add(e+"ing");for(const e of Ew)s.add(Mf(e));return[...s]}const Tw=bw();function Tc(s){const e=[];let t=[];for(;e.length<s;)t.length===0&&(t=Aw(Tw.slice())),e.push(t.pop());return e}function Aw(s){for(let e=s.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}return s}const Cw=["may the force be with you","i have a bad feeling about this","do or do not there is no try","never tell me the odds","the force will be with you always","in my experience there is no such thing as luck","i am your father","these are not the droids you are looking for","help me you are my only hope","let the wookiee win","stay on target","the garbage will do","i find your lack of faith disturbing","it is a trap","the force is strong with this one"],Rw=["a thin rebellion smolders in the outer dark","the old republic is ash and the throne sits empty","across a thousand quiet systems the beacons wake","somewhere past the last charted star a fleet is gathering","the empire counts its worlds and finds one missing","on a moon of salt the couriers trade in whispers","the fallen capital still burns beneath its glass","far outposts blink their coded lamps into the void","a smuggler runs the blockade with the plans aboard","the twin suns set on a planet that remembers nothing","in the ruined shipyards the resistance builds again","a single freighter carries the hope of a dying order","the senate is silent and the stars keep their secrets","beyond the veil of dust the old fleets wait to rise","the garrison sleeps while the outer moons conspire","a coded signal crosses the gulf between two empires","the last archive drifts unguarded above a broken world","rebels scatter their cells among the frontier stations","the dark fleet folds space and vanishes from the maps","a princess hides the truth inside a wandering machine","the desert keeps the bones of a hundred lost patrols","somewhere a farm boy watches the horizon and waits","the council fractures over a war it cannot win","across the rim the old alliances quietly reform","a stolen cruiser limps toward the neutral systems","the emperor tightens his grip and worlds slip free","in the frozen wastes a base hums beneath the ice","the trade routes fall silent one convoy at a time","a lone pilot threads the asteroid field toward home","the ancient order leaves its temples to the sand","far from the core a new rebellion learns to breathe","the blockade holds but the couriers always find a gap","a dead star marks the grave of the third fleet","the outer colonies raise their banners in the dark","a message older than the war reaches the wrong hands","the shipwrights of the rim forge engines for the fight","across the black a single transponder answers back","the empire burns the maps that lead to the free worlds","a quiet moon becomes the heart of the resistance","the long night ends where the first beacon is lit"],jd=[...Cw,...Rw];function Kd(s){const e=[];let t=[],n="";for(;e.length<s;){t.length===0&&(t=Pw(jd.slice()),t.length>1&&t[t.length-1]===n&&([t[t.length-1],t[0]]=[t[0],t[t.length-1]]));const i=t.pop();n=i;for(const r of i.split(" "))e.push(r)}return e}function Pw(s){for(let e=s.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}return s}const Zd=[15,30,60],Jd=[10,25,50],$d=["time","words","zen","rush","sudden"],Lw={time:"time",words:"words",zen:"zen",rush:"rush",sudden:"sudden death"},Qd=["crawl","paragraph","stream"],Uw={crawl:"star wars",paragraph:"paragraph",stream:"stream"},ep=["1","1.4","1.9","2.5","auto"],Dw={1:"1x","1.4":"1.4x","1.9":"1.9x","2.5":"2.5x",auto:"auto"},tp=["space","auto"],Iw={space:"space",auto:"auto"},Ac=["fall","explode","disintegrate","vortex","launch","shatter"],np=[...Ac,"surprise"],Fw={fall:"fall",explode:"explode",disintegrate:"disintegrate",vortex:"vortex",launch:"launch",shatter:"shatter",surprise:"surprise"},ip="typefall.settings.v1",Nn={view:"crawl",mode:"words",time:30,words:25,effect:"fall",speed:"1",advance:"space",sound:!1};function Nw(){try{const s=matchMedia("(pointer: coarse)").matches,e=window.innerWidth<700;return s||e?{view:"stream"}:{view:"crawl",speed:"2.5"}}catch{return{}}}function Ow(){try{const s=localStorage.getItem(ip);if(!s)return{...Nn,...Nw()};const e=JSON.parse(s),t={...Nn,...e};return Qd.includes(t.view)||(t.view=Nn.view),$d.includes(t.mode)||(t.mode=Nn.mode),Zd.includes(t.time)||(t.time=Nn.time),Jd.includes(t.words)||(t.words=Nn.words),np.includes(t.effect)||(t.effect=Nn.effect),ep.includes(t.speed)||(t.speed=Nn.speed),tp.includes(t.advance)||(t.advance=Nn.advance),t.sound=!!t.sound,t}catch{return{...Nn}}}function rp(s){try{localStorage.setItem(ip,JSON.stringify(s))}catch{}}const wf=new Ye(15263978),Ef=new Ye(14264131),Bw=new Ye(10133670);class zw{constructor(e){Ze(this,"scene");Ze(this,"camera");Ze(this,"world");Ze(this,"pCount");Ze(this,"pPos");Ze(this,"pCol");Ze(this,"pVel");Ze(this,"pLife");Ze(this,"pMax");Ze(this,"pGrav");Ze(this,"points");Ze(this,"cursor",0);Ze(this,"shards",[]);Ze(this,"shardGeo");Ze(this,"anims",[]);Ze(this,"fall",[]);Ze(this,"fallCap");Ze(this,"fallPerFrame");Ze(this,"fallQueue",[]);Ze(this,"fallSpawnedThisFrame",0);Ze(this,"surpriseTick",0);Ze(this,"mobile");this.scene=e.scene,this.camera=e.camera,this.world=e.world,this.mobile=e.mobile,this.pCount=e.mobile?1200:3500,this.fallCap=e.mobile?70:150,this.fallPerFrame=e.mobile?4:8,this.pPos=new Float32Array(this.pCount*3),this.pCol=new Float32Array(this.pCount*3),this.pVel=new Float32Array(this.pCount*3),this.pLife=new Float32Array(this.pCount),this.pMax=new Float32Array(this.pCount),this.pGrav=new Float32Array(this.pCount);for(let i=0;i<this.pCount;i++)this.pPos[i*3+1]=-9999;const t=new cn;t.setAttribute("position",new an(this.pPos,3)),t.setAttribute("color",new an(this.pCol,3));const n=new _d({size:e.mobile?.14:.12,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Pl,sizeAttenuation:!0});this.points=new iy(t,n),this.points.frustumCulled=!1,this.scene.add(this.points),this.shardGeo=new rr(.42,.42,.42)}resolve(e){if(e!=="surprise")return e;const t=Ac[this.surpriseTick%Ac.length];return this.surpriseTick++,t}play(e,t,n,i=1){switch(this.resolve(e)){case"fall":return this.doFall(t,n);case"explode":return this.doExplode(t,n,i);case"disintegrate":return this.doDisintegrate(t,n,i);case"vortex":return this.doVortex(t);case"launch":return this.doLaunch(t);case"shatter":return this.doShatter(t,n)}}doFall(e,t){if(this.fallSpawnedThisFrame>=this.fallPerFrame){this.fallQueue.length<this.fallCap*2?this.fallQueue.push({mesh:e,opts:t}):this.removeMesh(e);return}this.fallSpawnedThisFrame++;const n=e.position,i=new ze({mass:1,shape:new _a(t.half),position:new A(n.x,n.y,n.z),linearDamping:.02,angularDamping:.06,sleepSpeedLimit:.6,sleepTimeLimit:1});i.quaternion.set(e.quaternion.x,e.quaternion.y,e.quaternion.z,e.quaternion.w),i.velocity.set((Math.random()-.5)*3,-3,2+Math.random()*2),i.angularVelocity.set((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),this.world.addBody(i),this.fall.push({mesh:e,body:i,born:performance.now(),fading:!1,fadeStart:0}),this.capFall()}doExplode(e,t,n=1){const i=e.position,r=Math.max(4,Math.round((this.mobile?22:44)*n));for(let o=0;o<r;o++){const a=Al(),l=4+Math.random()*7,c=Math.random()<.35?Ef:t.color;this.emit(i.x,i.y,i.z,a.x*l,a.y*l,a.z*l,c,.55+Math.random()*.25,9)}this.removeMesh(e)}doDisintegrate(e,t,n=1){const i=e.position,r=t.half,o=Math.max(4,Math.round((this.mobile?26:52)*n));for(let a=0;a<o;a++){const l=(Math.random()-.5)*r.x*2,c=(Math.random()-.5)*r.y*2,h=(Math.random()-.5)*r.z*2,f=.8+Math.random()*1.6;this.emit(i.x+l,i.y+c,i.z+h,(Math.random()-.5)*1.2,f,(Math.random()-.5)*1.2,Bw,1.1+Math.random()*.5,-1.5)}this.removeMesh(e)}doVortex(e){const t=this.camera.position.clone(),n=e.position.clone().sub(t);this.anims.push({mesh:e,kind:"vortex",age:0,life:.9,vel:new W,target:t,baseAngle:Math.atan2(n.x,n.z)})}doLaunch(e){this.anims.push({mesh:e,kind:"launch",age:0,life:.85,vel:new W((Math.random()-.5)*2,20,(Math.random()-.5)*2),target:new W,baseAngle:0})}doShatter(e,t){const n=e.position,i=5;for(let r=0;r<i;r++){const o=this.acquireShard(),a=o.mesh,l=a.material;l.color.copy(t.color),l.opacity=1,a.visible=!0,a.position.set(n.x+(Math.random()-.5)*.8,n.y+(Math.random()-.5)*.8,n.z),a.scale.setScalar(.6+Math.random()*.6),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const c=Al();o.vel.set(c.x*6,3+Math.random()*5,c.z*6),o.spin.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),o.age=0,o.life=1.1,o.active=!0}this.removeMesh(e)}emit(e,t,n,i,r,o,a,l,c){const h=this.cursor;this.cursor=(this.cursor+1)%this.pCount;const f=h*3;this.pPos[f]=e,this.pPos[f+1]=t,this.pPos[f+2]=n,this.pVel[f]=i,this.pVel[f+1]=r,this.pVel[f+2]=o,this.pCol[f]=a.r,this.pCol[f+1]=a.g,this.pCol[f+2]=a.b,this.pLife[h]=l,this.pMax[h]=l,this.pGrav[h]=c}acquireShard(){for(const i of this.shards)if(!i.active)return i;const e=new Vs({color:wf.clone(),roughness:.5,metalness:.05,emissive:wf.clone(),emissiveIntensity:.12,transparent:!0,opacity:1}),t=new Dt(this.shardGeo,e);t.castShadow=!0,this.scene.add(t);const n={mesh:t,vel:new W,spin:new W,age:0,life:0,active:!1};return this.shards.push(n),n}update(e){for(this.fallSpawnedThisFrame=0;this.fallQueue.length>0&&this.fallSpawnedThisFrame<this.fallPerFrame;){const t=this.fallQueue.shift();this.doFall(t.mesh,t.opts)}this.stepParticles(e),this.stepShards(e),this.stepAnims(e),this.stepFall(e)}stepParticles(e){let t=!1;for(let n=0;n<this.pCount;n++){const i=this.pLife[n];if(i<=0)continue;t=!0;const r=i-e,o=n*3;if(r<=0){this.pLife[n]=0,this.pPos[o+1]=-9999;continue}this.pLife[n]=r,this.pVel[o+1]-=this.pGrav[n]*e,this.pPos[o]+=this.pVel[o]*e,this.pPos[o+1]+=this.pVel[o+1]*e,this.pPos[o+2]+=this.pVel[o+2]*e;const a=r/this.pMax[n];this.pCol[o]*=.94+a*.06,this.pCol[o+1]*=.94+a*.06,this.pCol[o+2]*=.94+a*.06}t&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}stepShards(e){for(const t of this.shards){if(!t.active)continue;t.age+=e,t.vel.y-=26*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.x+=t.spin.x*e,t.mesh.rotation.y+=t.spin.y*e,t.mesh.rotation.z+=t.spin.z*e;const n=t.age/t.life,i=t.mesh.material;i.opacity=Math.max(0,1-n),(n>=1||t.mesh.position.y<-6)&&(t.active=!1,t.mesh.visible=!1)}}stepAnims(e){for(let t=this.anims.length-1;t>=0;t--){const n=this.anims[t];n.age+=e;const i=n.age/n.life,r=n.mesh.material;if(n.kind==="launch"){n.vel.y+=8*e,n.mesh.position.addScaledVector(n.vel,e),n.mesh.rotation.z+=e*4;const o=n.mesh.position;this.emit(o.x,o.y-.6,o.z,(Math.random()-.5)*.6,-1,(Math.random()-.5)*.6,Ef,.4,2),r.opacity=Math.max(0,1-i*i)}else{const o=n.baseAngle+i*14,a=(1-i)*n.mesh.position.distanceTo(n.target)*0+(1-i)*8,l=n.target;n.mesh.position.set(l.x+Math.sin(o)*a,ui.lerp(n.mesh.position.y,l.y,.12)+Math.sin(i*20)*.2,l.z+Math.cos(o)*a),n.mesh.rotation.y+=e*12,n.mesh.scale.setScalar(Math.max(.01,1-i)),r.opacity=Math.max(0,1-i)}i>=1&&(this.removeMesh(n.mesh),this.anims.splice(t,1))}}stepFall(e){if(this.fall.length===0)return;const t=performance.now();for(let n=this.fall.length-1;n>=0;n--){const i=this.fall[n],r=i.body.position;if(i.mesh.position.set(r.x,r.y,r.z),i.mesh.quaternion.set(i.body.quaternion.x,i.body.quaternion.y,i.body.quaternion.z,i.body.quaternion.w),i.fading){const o=(t-i.fadeStart)/600,a=i.mesh.material;a.opacity=Math.max(0,1-o),i.mesh.scale.setScalar(Math.max(.001,1-o*.4)),o>=1&&(this.disposeFall(i),this.fall.splice(n,1))}else r.y<-8&&(this.disposeFall(i),this.fall.splice(n,1))}}capFall(){const e=this.fall.filter(n=>!n.fading),t=e.length-this.fallCap;for(let n=0;n<t;n++)e[n].fading=!0,e[n].fadeStart=performance.now()}disposeFall(e){this.scene.remove(e.mesh),e.mesh.material.dispose(),this.world.removeBody(e.body)}removeMesh(e){e.parent&&e.parent.remove(e),e.material.dispose()}rain(e,t){this.doFall(e,t)}burst(e,t,n,i){const r=this.mobile?28:54;for(let o=0;o<r;o++){const a=Al(),l=5+Math.random()*6;this.emit(e,t,n,a.x*l,a.y*l*.8,a.z*l,i,.7+Math.random()*.3,5)}}get fallCount(){return this.fall.filter(e=>!e.fading).length}reset(){for(const e of this.fallQueue)this.removeMesh(e.mesh);this.fallQueue.length=0,this.fallSpawnedThisFrame=0;for(const e of this.fall)this.disposeFall(e);this.fall.length=0;for(const e of this.anims)this.removeMesh(e.mesh);this.anims.length=0;for(const e of this.shards)e.active=!1,e.mesh.visible=!1;for(let e=0;e<this.pCount;e++)this.pLife[e]=0,this.pPos[e*3+1]=-9999;this.points.geometry.getAttribute("position").needsUpdate=!0}}function Al(){const s=Math.random()*2-1,e=Math.random()*Math.PI*2,t=Math.sqrt(1-s*s);return new W(t*Math.cos(e),Math.abs(s)*.7+.15,t*Math.sin(e))}const ki="http://www.w3.org/2000/svg";class kw{constructor(e=document.body,t=!1){Ze(this,"root");Ze(this,"stars");Ze(this,"parA");Ze(this,"parB");Ze(this,"streaks");Ze(this,"para");Ze(this,"stream");Ze(this,"flash");Ze(this,"starPts",[]);Ze(this,"streakEls",[]);Ze(this,"view","crawl");this.root=document.createElement("div"),this.root.id="backdrop",this.stars=document.createElementNS(ki,"svg"),this.stars.setAttribute("class","tf-stars"),this.stars.setAttribute("viewBox","0 0 1000 1000"),this.stars.setAttribute("preserveAspectRatio","xMidYMid slice");const n=document.createElementNS(ki,"defs");n.innerHTML='<linearGradient id="tf-streak-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#eef3f8" stop-opacity="0"/><stop offset="0.7" stop-color="#eef3f8" stop-opacity="0.85"/><stop offset="1" stop-color="#ffffff" stop-opacity="1"/></linearGradient>',this.stars.appendChild(n),this.parA=document.createElementNS(ki,"g"),this.parA.setAttribute("class","tf-parA"),this.parB=document.createElementNS(ki,"g"),this.parB.setAttribute("class","tf-parB"),this.streaks=document.createElementNS(ki,"g"),this.streaks.setAttribute("class","tf-streaks");const i=t?72:96;for(let c=0;c<i;c++){const h=Math.random()*1e3,f=Math.random()*1e3;this.starPts.push({x:h,y:f});const u=Math.random(),d=Math.random()<.12;let m,v,p;u<.6?(m=.5+Math.random()*.4,v=.15,p=.5):u<.9?(m=.9+Math.random()*.4,v=.25,p=.75):(m=1.1+Math.random()*.4,v=.35,p=.9);const g=document.createElementNS(ki,"circle");g.setAttribute("class","tf-star"),g.setAttribute("cx",h.toFixed(1)),g.setAttribute("cy",f.toFixed(1)),g.setAttribute("r",m.toFixed(2)),g.setAttribute("fill",d?"#d9a743":"#e9eef5");const _=(3+Math.random()*4).toFixed(2),x=(-Math.random()*7).toFixed(2);g.setAttribute("style",`--lo:${v};--hi:${d?Math.min(p,.6):p};--d:${_}s;--delay:${x}s`),(c%2===0?this.parA:this.parB).appendChild(g)}this.stars.append(this.parA,this.parB,this.streaks),this.para=document.createElement("div"),this.para.className="tf-para";const r=document.createElement("div");r.className="tf-vignette",this.para.appendChild(r);const o=t?8:11;for(let c=0;c<o;c++){const h=document.createElement("div");h.className="tf-mote";const f=(2+Math.random()*4).toFixed(1),u=(26+Math.random()*22).toFixed(1);h.setAttribute("style",`left:${(Math.random()*100).toFixed(1)}%;top:${(Math.random()*100).toFixed(1)}%;width:${f}px;height:${f}px;opacity:${(.04+Math.random()*.04).toFixed(3)};--fd:${u}s;--fdelay:${(-Math.random()*40).toFixed(1)}s;--fx:${(Math.random()*40-20).toFixed(0)}px;--fy:${(-30-Math.random()*40).toFixed(0)}px`),this.para.appendChild(h)}this.stream=document.createElement("div"),this.stream.className="tf-stream";const a=document.createElement("div");a.className="tf-haze",this.stream.appendChild(a);const l=t?5:7;for(let c=0;c<l;c++){const h=document.createElement("div");h.className="tf-mote tf-mote-gold";const f=(2+Math.random()*3).toFixed(1),u=(22+Math.random()*18).toFixed(1);h.setAttribute("style",`left:${(Math.random()*100).toFixed(1)}%;top:${(30+Math.random()*55).toFixed(1)}%;width:${f}px;height:${f}px;opacity:${(.05+Math.random()*.04).toFixed(3)};--fd:${u}s;--fdelay:${(-Math.random()*30).toFixed(1)}s;--fx:${(Math.random()*30-15).toFixed(0)}px;--fy:${(-40-Math.random()*50).toFixed(0)}px`),this.stream.appendChild(h)}this.flash=document.createElement("div"),this.flash.className="tf-flash",this.root.append(this.stars,this.para,this.stream,this.flash),e.appendChild(this.root),this.setView("crawl")}setView(e){this.view=e,this.root.setAttribute("data-view",e),this.reset()}reset(){this.stars.classList.remove("jump"),this.root.classList.remove("flash"),this.streaks.replaceChildren(),this.streakEls=[]}hyperspace(){if(this.view!=="crawl")return;this.streaks.replaceChildren(),this.streakEls=[];const e=500,t=500;for(const n of this.starPts){let i=n.x-e,r=n.y-t;const o=Math.hypot(i,r)||.001;i/=o,r/=o;const a=document.createElementNS(ki,"line");a.setAttribute("class","tf-streak");const l=.6+o/707*2.2+Math.random()*.6;a.setAttribute("style",`--sw:${l.toFixed(2)}`),this.streaks.appendChild(a),this.streakEls.push({el:a,ux:i,uy:r,d:o,sw:l})}this.stars.classList.add("jump"),this.root.classList.add("flash"),this.hyperStep(0)}hyperStep(e){if(this.streakEls.length===0)return;const t=500,n=500,i=Math.min(1,Math.max(0,e)),r=i*i,o=1.7,a=.18,l=1.8,c=i<.82?Math.min(1,i*6)*.92:Math.max(0,(1-i)/.18)*.92;for(const h of this.streakEls){const f=r*h.d*o,u=h.d*(a+r*l),d=h.d+f,m=d+u;h.el.setAttribute("x1",(t+h.ux*d).toFixed(1)),h.el.setAttribute("y1",(n+h.uy*d).toFixed(1)),h.el.setAttribute("x2",(t+h.ux*m).toFixed(1)),h.el.setAttribute("y2",(n+h.uy*m).toFixed(1)),h.el.style.opacity=c.toFixed(3),h.el.style.strokeWidth=(h.sw*(1-.35*r)).toFixed(2)}}}function Gw(s){const e=document.createElement("div");e.id="ui",document.body.appendChild(e);const t=nt("div","hud"),n=nt("span","hud-mode"),i=nt("span","hud-progress"),r=nt("span","hud-sep");r.textContent="·";const o=nt("span","hud-metric hud-wpm"),a=nt("span","hud-sep");a.textContent="·";const l=nt("span","hud-metric"),c=nt("span","hud-sep");c.textContent="·";const h=nt("span","hud-metric");t.append(n,i,r,o,a,l,c,h);const f=nt("button","gear");f.textContent="⚙",f.setAttribute("aria-label","settings"),f.addEventListener("click",()=>X());const u=nt("div","focus-lost hidden"),d=nt("div","focus-line");d.textContent="click to focus",u.appendChild(d),u.addEventListener("click",()=>s.onFocusRestore());const m=nt("div","prompt hidden"),v=nt("div","red-flash");e.append(t,f,u,m,v);const p=nt("div","overlay results hidden"),g=nt("div","r-title hidden"),_=nt("div","r-wpm"),x=nt("div","r-label");x.textContent="wpm";const S=nt("div","r-pb"),T=nt("div","r-grid"),b=nt("div","r-history"),w=nt("div","r-hint"),R='restart <span class="k">tab</span> + <span class="k">enter</span> · or click';w.innerHTML=R;const G=nt("div","r-footer");p.append(g,_,x,S,T,b,w,G),p.addEventListener("click",()=>s.restart());const y=nt("div","overlay menu hidden"),E=nt("div","panel");y.appendChild(E),y.addEventListener("click",N=>{N.target===y&&K()}),e.append(p,y);let I=!1,C=[],L=0;function B(){const N=s.getSettings();E.innerHTML="",C=[];const Q=nt("div","p-title");Q.textContent="typefall",E.appendChild(Q);const z=U("restart","p-restart",()=>s.restart());E.appendChild(j("",[z]));const k=Qd.map(ce=>U(Uw[ce],N.view===ce?"sel":"",()=>s.applySettings({view:ce})));if(E.appendChild(j("view",k)),N.view==="crawl"){const ce=ep.map(Se=>U(Dw[Se],N.speed===Se?"sel":"",()=>s.applySettings({speed:Se})));E.appendChild(j("speed",ce))}if(N.view==="stream"){const ce=nt("span","p-na");ce.textContent="auto (n/a in stream)",E.appendChild(j("advance",[ce]))}else{const ce=tp.map(Se=>U(Iw[Se],N.advance===Se?"sel":"",()=>s.applySettings({advance:Se})));E.appendChild(j("advance",ce))}if(N.view!=="crawl"){const ce=$d.map(Se=>U(Lw[Se],N.mode===Se?"sel":"",()=>s.applySettings({mode:Se})));if(E.appendChild(j("mode",ce)),N.mode==="time"||N.mode==="words"){const Se=N.mode==="time"?Zd:Jd,ve=N.mode==="time"?N.time:N.words,Y=N.mode==="time"?"seconds":"words",F=Se.map(de=>U(String(de),ve===de?"sel":"",()=>s.applySettings(N.mode==="time"?{time:de}:{words:de})));E.appendChild(j(Y,F))}}const ne=np.map(ce=>U(Fw[ce],N.effect===ce?"sel":"",()=>s.applySettings({effect:ce})));E.appendChild(j("effect",ne));const q=[U("off",N.sound?"":"sel",()=>s.applySettings({sound:!1})),U("on",N.sound?"sel":"",()=>s.applySettings({sound:!0}))];E.appendChild(j("sound",q));const se=nt("div","p-hint");se.innerHTML='<span class="k">↑↓←→</span> move · <span class="k">enter</span> pick · <span class="k">esc</span> close',E.appendChild(se),L=Math.min(L,C.length-1)}function U(N,Q,z){const k=document.createElement("button");return k.className="opt"+(Q?" "+Q:""),k.textContent=N,k.tabIndex=-1,k.addEventListener("click",()=>{z(),B(),H()}),C.push(k),k}function j(N,Q){const z=nt("div","p-row");if(N){const ne=nt("span","p-rowlabel");ne.textContent=N,z.appendChild(ne)}const k=nt("span","p-group");return k.append(...Q),z.appendChild(k),z}function H(){C.forEach((N,Q)=>N.classList.toggle("cursor",Q===L)),C[L]?.focus()}function X(){I||(I=!0,B(),y.classList.remove("hidden"),L=0,H(),s.onMenuOpen())}function K(){I&&(I=!1,y.classList.add("hidden"),s.onMenuClose())}function O(N){return I?N==="Escape"||N==="Tab"?(K(),!0):N==="Enter"||N===" "?(C[L]?.click(),!0):N==="ArrowRight"||N==="ArrowDown"?(L=(L+1)%C.length,H(),!0):N==="ArrowLeft"||N==="ArrowUp"?(L=(L-1+C.length)%C.length,H(),!0):!1:!1}return{getResultsElement:()=>p,setPanelLabel(N){G.textContent=`panel: ${N}`},setHud(N,Q,z,k,ne,q="",se="normal"){n.textContent=N,i.textContent=Q,o.textContent=z,l.textContent=k,h.textContent=q,c.style.display=q?"":"none",t.classList.toggle("active",ne),i.classList.toggle("clock",se!=="normal"),i.classList.toggle("urgent",se==="clockUrgent")},setHudVisible(N){t.style.opacity=N?"":"0"},showPrompt(N){m.textContent=N,m.classList.remove("hidden")},hidePrompt(){m.classList.add("hidden")},flashRed(){v.classList.remove("run"),v.offsetWidth,v.classList.add("run")},showFocusLost(){u.classList.remove("hidden")},hideFocusLost(){u.classList.add("hidden")},showResults(N){N.title?(g.textContent=N.title,g.classList.remove("hidden")):g.classList.add("hidden");const Q=N.headline??N.wpm;_.textContent=String(Q),_.classList.toggle("pb",N.isNewPb),x.textContent=N.headlineLabel??"wpm",N.isNewPb?(S.classList.add("is-new"),S.textContent=N.deltaPb!=null?`new personal best  +${N.deltaPb}`:"new personal best"):(S.classList.remove("is-new"),S.textContent=N.pb!=null?`best ${N.pb}`:"no best yet"),T.innerHTML="";const z=N.cells??[["acc",N.acc+"%"],["raw",String(N.raw)],["chars",`${N.correct}/${N.incorrect}`],["time",`${N.timeSec.toFixed(1)}s`]];!N.cells&&N.missed!=null&&z.push(["missed",String(N.missed)]);for(const[k,ne]of z){const q=nt("div","r-cell"),se=nt("div","r-k");se.textContent=k;const ce=nt("div","r-v");ce.textContent=ne,q.append(se,ce),T.appendChild(q)}if(b.innerHTML="",N.history.length>1)for(let k=0;k<N.history.length;k++){const ne=N.history[k],q=nt("div","r-hrow"+(k===0?" now":"")),se=nt("span","r-hwpm");se.textContent=String(ne.wpm);const ce=nt("span","r-hacc");ce.textContent=ne.acc+"%",q.append(se,ce),b.appendChild(q)}w.innerHTML=N.hint??R,p.classList.remove("hidden")},hideResults(){p.classList.add("hidden")},openMenu:X,closeMenu:K,toggleMenu(){I?K():X()},isMenuOpen:()=>I,handleMenuKey:O}}function nt(s,e){const t=document.createElement(s);return t.className=e,t}function sp(){const s={supported:!1,drawMethod:null,layoutAttr:!1,layoutMethod:!1};try{const e=window.CanvasRenderingContext2D?.prototype,t=window.HTMLCanvasElement?.prototype;if(!e||!t)return s;"drawElement"in e?s.drawMethod="drawElement":"drawElementImage"in e&&(s.drawMethod="drawElementImage"),s.layoutAttr="layoutsubtree"in t,s.layoutMethod=typeof t.layoutSubtree=="function",s.supported=s.drawMethod!==null}catch{return s}return s}function Cc(s,e,t,n,i){s.clearRect(0,0,n,i),s[e](t,0,0)}class Hw{constructor(e,t,n){Ze(this,"support");Ze(this,"active",!1);Ze(this,"canvas",null);Ze(this,"ctx",null);Ze(this,"method","drawElement");Ze(this,"texture",null);Ze(this,"mesh",null);Ze(this,"drift",0);this.scene=e,this.el=t,this.support=n??sp()}get label(){return this.active&&this.support.drawMethod?this.support.drawMethod:"dom"}tryShow(){if(!this.support.supported||!this.support.drawMethod)return!1;try{this.method=this.support.drawMethod;const e=Math.min(window.devicePixelRatio||1,2),t=Math.max(1,this.el.clientWidth||window.innerWidth),n=Math.max(1,this.el.clientHeight||window.innerHeight),i=document.createElement("canvas");i.width=Math.floor(t*e),i.height=Math.floor(n*e),this.support.layoutAttr&&i.setAttribute("layoutsubtree","");const r=i.getContext("2d");if(!r)throw new Error("no 2d context");r.setTransform(e,0,0,e,0,0),Cc(r,this.method,this.el,t,n);const o=new ry(i);o.colorSpace=Tn,o.minFilter=$t;const a=t/n,l=9,c=new pi(l*a,l),h=new da({map:o,transparent:!0,depthWrite:!1}),f=new Dt(c,h);return f.renderOrder=20,this.scene.add(f),this.canvas=i,this.ctx=r,this.texture=o,this.mesh=f,this.active=!0,!0}catch{return this.hide(),!1}}drawFrame(e,t){if(!(!this.active||!this.ctx||!this.canvas||!this.mesh||!this.texture))try{const n=this.el.clientWidth||window.innerWidth,i=this.el.clientHeight||window.innerHeight;Cc(this.ctx,this.method,this.el,n,i),this.texture.needsUpdate=!0,this.drift+=t;const r=new W;e.getWorldDirection(r);const o=e.position.clone().addScaledVector(r,15);o.x+=Math.sin(this.drift*.5)*.4,o.y+=Math.sin(this.drift*.37)*.25,this.mesh.position.copy(o),this.mesh.quaternion.copy(e.quaternion),this.mesh.rotation.z+=Math.sin(this.drift*.3)*.02,this.mesh.rotation.x+=-.05+Math.sin(this.drift*.4)*.015}catch{this.hide()}}hide(){this.active=!1,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()),this.texture?.dispose(),this.mesh=null,this.texture=null,this.ctx=null,this.canvas=null}}const Vw=657930,Us=15263978,ra=14264131,Ww=15515754,Xw=9071146,op=15680580,sa=8883609,qw=10179925,Bs=1.55,oa=.1,Yw=.42,jw=.5,ap=.07,Kw=.06,lp=1,zs=.6,cp=.42,Zw=3.85,Jw=5.4,$w=.42,Qw=.85,Fo=7,eE=.34,rh=-5.5,tE=30,nE=.78,iE=1e3,hp=.55,rE=1.42,ws=3,sE=.08,sh="/typefall/fonts/SpaceMono-Regular.ttf";let oh=.6;const up=new W(0,5.6,13.5),fp=new W(0,4,-4),dp=50,pp=new W(0,3.6,30),mp=new W(0,3.6,0),gp=28,oE=new W(0,3.7,14.5),aE=new W(0,1.4,-3),vp=52,bf=.7,lE=7.6,cE=1.5,hE=-1.6,Cl=2.6,Tf=7.5,uE=5,aa=.22,_p={1:1,"1.4":1.4,"1.9":1.9,"2.5":2.5},fE=6,dE=.88,Af=.09,Cf=.65,pE=1.5,Xs=matchMedia("(hover: none) and (pointer: coarse)").matches,xp=15,mE=1.2,gE=30,yp=.82,vE=.26,Zr=document.getElementById("scene"),Pn=new $x({canvas:Zr,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Pn.setPixelRatio(Math.min(window.devicePixelRatio,2));Pn.setClearColor(0,0);Pn.setSize(window.innerWidth,window.innerHeight);Pn.shadowMap.enabled=!0;Pn.shadowMap.type=If;Pn.toneMapping=Nf;Pn.toneMappingExposure=1.15;const Rt=new Qx;Rt.background=null;Rt.fog=new jc(Vw,26,62);const kn=new on(dp,window.innerWidth/window.innerHeight,.1,200),Sp=up.clone(),Mp=fp.clone(),ks=new W;function ah(){kn.position.copy(Sp).add(ks),kn.lookAt(Mp)}ah();Rt.add(new Gy(3816e3,1447450,.75));Rt.add(new Xy(16777215,.22));const tn=new Ad(16777215,1.55);tn.position.set(5,16,12);tn.target.position.set(0,3,0);Rt.add(tn.target);tn.castShadow=!0;tn.shadow.mapSize.set(2048,2048);tn.shadow.camera.near=1;tn.shadow.camera.far=60;tn.shadow.camera.left=-18;tn.shadow.camera.right=18;tn.shadow.camera.top=18;tn.shadow.camera.bottom=-18;tn.shadow.bias=-4e-4;tn.shadow.radius=4;Rt.add(tn);const wp=new Ad(6333946,.8);wp.position.set(-10,6,-12);Rt.add(wp);const Ep=new Vy(ra,.4,44,2);Ep.position.set(-4,3,8);Rt.add(Ep);const Sa=new Dt(new pi(120,120),new Vs({color:1052690,roughness:.95,metalness:0}));Sa.rotation.x=-Math.PI/2;Sa.position.y=rh;Sa.receiveShadow=!0;Rt.add(Sa);const Ma=new jy(120,60,1315863,986898);Ma.position.y=rh+.01;Ma.material.transparent=!0;Ma.material.opacity=.22;Rt.add(Ma);const mi=new mw({gravity:new A(0,-32,0)});mi.allowSleep=!0;mi.defaultContactMaterial.friction=.4;mi.defaultContactMaterial.restitution=.12;mi.solver.iterations=12;const lh=new ze({type:ze.STATIC,shape:new Yd});lh.quaternion.setFromEuler(-Math.PI/2,0,0);lh.position.set(0,rh,0);mi.addBody(lh);function wa(s,e,t,n){const i=new ze({type:ze.STATIC,shape:new Yd});i.quaternion.setFromVectors(new A(0,0,1),new A(s,0,e)),i.position.set(t,0,n),mi.addBody(i)}wa(1,0,-11,0);wa(-1,0,11,0);wa(0,1,0,-6);wa(0,-1,0,10);const er=new zw({scene:Rt,camera:kn,world:mi,mobile:Xs}),Rf=new Map;let bp=null;function Gs(s){let e=Rf.get(s);if(e)return e;const t=new eS(s,{font:bp,size:Bs,depth:Bs*.16,curveSegments:5,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:2});t.computeBoundingBox();const n=t.boundingBox,i=n.max.x-n.min.x,r=(n.max.x+n.min.x)/2,o=(n.max.y+n.min.y)/2,a=(n.max.z+n.min.z)/2;t.translate(-r,-o,-a),t.computeVertexNormals();const l=new A(Math.max(i/2,.16),Math.max((n.max.y-n.min.y)/2,.16),Math.max((n.max.z-n.min.z)/2,.16));return e={geo:t,half:l,width:Math.max(i,.4),cy:o},Rf.set(s,e),e}const Es=new fi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:.9},uRed:{value:0},uDim:{value:new Ye(Xw)},uCore:{value:new Ye(ra)},uBright:{value:new Ye(Ww)},uErr:{value:new Ye(op)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float uTime; uniform float uOpacity; uniform float uRed;
    uniform vec3 uDim; uniform vec3 uCore; uniform vec3 uBright; uniform vec3 uErr;
    varying vec2 vUv;
    void main() {
      // Molten flow: a gold band travels up the bar every ~3s. Two mixes give a
      // dim trough → core → bright crest ramp so it reads as flowing metal.
      float t = vUv.y * 1.3 - uTime * 0.33;
      float s = 0.5 + 0.5 * sin(t * 6.28318);
      vec3 gold = mix(uDim, uCore, smoothstep(0.0, 0.6, s));
      gold = mix(gold, uBright, smoothstep(0.6, 1.0, s));
      vec3 col = mix(gold, uErr, uRed);
      gl_FragColor = vec4(col, uOpacity);
    }
  `}),Jt=new Dt(new rr(1,1,.04),Es);Jt.visible=!1;Jt.renderOrder=10;Rt.add(Jt);const No=new W,_E=.045,Pf=1,xE=1;let Rc=!0,Zi=0,Pc=-10;function ch(){Pc=Zi}function yE(s,e=!0){const t=new si,n=[...s].map(a=>Gs(a).width),i=n.reduce((a,l)=>a+l,0)+oa*(s.length-1);let r=-i/2;const o=[];return[...s].forEach((a,l)=>{const c=Gs(a),h=new Vs({color:sa,roughness:.5,metalness:.02,emissive:sa,emissiveIntensity:ap,transparent:!0,opacity:1}),f=new Dt(c.geo,h);f.castShadow=e;const u=r+n[l]/2;f.position.set(u,c.cy,0),t.add(f),o.push({ch:a,object3d:f,localX:u,halfWidth:n[l]/2,state:"untyped",vis:1,visTarget:1,applyColor(d,m){h.color.setHex(d),h.emissive.setHex(d),h.emissiveIntensity=m},setOpacity(d){h.opacity=d},dispose(){t.remove(f),h.dispose()}}),r+=n[l]+oa}),{group:t,letters:o,width:i}}function Tp(s,e,t){const n=new si,i=t*s.length,r=e/Bs;let o=-i/2;const a=[];return[...s].forEach(l=>{const c=new eh;c.text=l,c.font=sh,c.fontSize=e,c.anchorX="center",c.anchorY="middle",c.color=sa,c.fillOpacity=zs,c.material.transparent=!0,c.material.fog=!1;const h=o+t/2;c.position.set(h,0,0),c.sync(),n.add(c),a.push({ch:l,object3d:c,localX:h,halfWidth:t/2,state:"untyped",vis:1,visTarget:1,cloneScale:r,applyColor(f){c.color=f},setOpacity(f){c.fillOpacity=f},dispose(){n.remove(c),c.dispose()}}),o+=t}),{group:n,letters:a,width:i}}function ai(s,e){for(const t of e)t.dispose();s.removeFromParent()}function Ap(s){s.applyColor(sa,ap),s.visTarget=1}function hh(s){s.applyColor(Us,Yw),s.visTarget=1}function Gr(s){s.visTarget=0}function Ea(s){s.applyColor(op,jw),s.visTarget=1}function Cp(s){s.applyColor(qw,Kw+.04),s.visTarget=1}const SE=.028;function uh(s,e,t){s.vis+=(s.visTarget-s.vis)*(1-Math.exp(-e/SE)),s.setOpacity(t*s.vis)}function ME(s,e){const t=s.object3d;t.updateWorldMatrix(!0,!1);const n=new W,i=new qr,r=new W;t.matrixWorld.decompose(n,i,r);const o=s.cloneScale??r.x,a=Gs(s.ch),l=new Vs({color:Us,roughness:.5,metalness:.02,emissive:Us,emissiveIntensity:.12,transparent:!0,opacity:1}),c=new Dt(a.geo,l);c.castShadow=!0,c.position.copy(n),c.position.z+=.5,c.quaternion.copy(i),c.scale.setScalar(o),Rt.add(c);const h=new A(a.half.x*o,a.half.y*o,a.half.z*o);er.play(e,c,{color:new Ye(Us),half:h})}let yt=[],ct=0,wt=0,en=[],la=[],Dr=0,it,ni=aa,Cr=[];function fh(s){for(;yt.length<s;)Xe.view==="crawl"?yt.push(...Kd(80)):yt.push(...Tc(60))}function wE(s){let e=s.metrics(),t=[],n=0,i=0,r=0;function o(u){return e.topY-(u-n)*e.lineH}function a(u){const d=new si;d.position.set(0,o(u)-e.lineH,0),Rt.add(d);const m=[],v=i;let p=i,g=-e.colHalf;for(;Xe.mode!=="words"&&fh(p+1),!(p>=yt.length);){const _=s.wordWidth(yt[p],e);if(m.length>0&&g+_>e.colHalf)break;const{group:x,letters:S}=s.makeWord(yt[p],e);x.position.set(g+_/2,0,0),d.add(x),m.push({seqIndex:p,group:x,letters:S,worldW:_,opacity:zs}),g+=_+e.gap,p++}i=p,r=u+1,t.push({index:u,group:d,words:m,start:v,end:p,fade:u<ws?1:0})}function l(u){for(;r<=u&&!(Xe.mode==="words"&&i>=yt.length);)a(r)}function c(u){for(const d of t)if(u>=d.start&&u<d.end)return d.index;for(;i<=u&&(Xe.mode!=="words"||i<yt.length);)a(r);for(const d of t)if(u>=d.start&&u<d.end)return d.index;return n}function h(){for(const u of t)for(const d of u.words)if(d.seqIndex<ct){d.opacity=cp;for(const m of d.letters)m.state==="incorrect"||m.state==="skipped"?Cp(m):Gr(m)}else if(d.seqIndex>ct){d.opacity=zs;for(const m of d.letters)Ap(m)}else{d.opacity=lp;for(let m=0;m<d.letters.length;m++){const v=d.letters[m];m<wt?en[m]==="correct"?Gr(v):Ea(v):hh(v)}}}function f(){for(const u of t){for(const d of u.words)ai(d.group,d.letters);u.group.removeFromParent()}t=[],i=ct,r=0,n=0,l(ws-1);for(const u of t)u.group.position.y=o(u.index);h();for(const u of t)for(const d of u.words)for(const m of d.letters)m.vis=m.visTarget}return f(),{camBase:s.camBase,camLook:s.camLook,camFov:s.camFov,lockCamera:!0,tiltX:0,currentWord(){for(const u of t)if(u.index===n){for(const d of u.words)if(d.seqIndex===ct)return{group:d.group,letters:d.letters}}for(const u of t)for(const d of u.words)if(d.seqIndex===ct)return{group:d.group,letters:d.letters};return null},paint:h,advance(){const u=c(ct);u!==n&&(n=u,l(n+ws-1)),h()},retreat(){const u=c(ct);if(u===n&&!t.some(d=>ct>=d.start&&ct<d.end)){f();return}n=u,h()},boundaryGap(){return s.boundaryGapLocal(e)},interLetterGap(){return s.interLetterGapLocal()},caretDims(){return{w:e.caretW,h:s.caretH(e)}},update(u){const d=1-Math.pow(9e-4,u),m=1-Math.pow(.0025,u);for(let v=t.length-1;v>=0;v--){const p=t[v],g=p.index-n,_=e.topY-g*e.lineH;p.group.position.y=ui.lerp(p.group.position.y,_,d);const x=g>=0&&g<ws?1:0;p.fade=ui.lerp(p.fade,x,m);for(const S of p.words)for(const T of S.letters)uh(T,u,S.opacity*p.fade);if(g<0&&p.fade<.02){for(const S of p.words)ai(S.group,S.letters);p.group.removeFromParent(),t.splice(v,1)}}},relayout(){e=s.metrics(),f()},dispose(){for(const u of t){for(const d of u.words)ai(d.group,d.letters);u.group.removeFromParent()}t=[]},info(){const u=t.find(m=>m.index===n),d=[];for(const m of t){const v=m.index-n,p=m.group.position.y;for(const g of m.words){const _=g.group.position.x;d.push({seqIndex:g.seqIndex,row:v,x0:_-g.worldW/2,x1:_+g.worldW/2,y0:p-e.em/2,y1:p+e.em/2})}}return{view:s.view,topLine:n,lines:t.length,colHalf:e.colHalf,em:+e.em.toFixed(4),lineH:+e.lineH.toFixed(4),activeWords:u?u.words.map(m=>m.seqIndex):[],boxes:d,rows:t.slice().sort((m,v)=>m.index-v.index).map(m=>({index:m.index,y:+m.group.position.y.toFixed(3),words:m.words.map(v=>v.seqIndex)}))}}}}function EE(){const s=new W;let e=[];function t(l,c){return c.set(0,Zw+l*$w,-l*Jw)}function n(l){return Math.pow(Qw,l)}function i(l){return l<=0?1:ui.clamp(.5*Math.pow(.72,l-1),.1,1)}function r(l,c){const{group:h,letters:f}=yE(yt[l]);return t(c,h.position),h.scale.setScalar(n(c)),Rt.add(h),{group:h,letters:f,targetSlot:c}}function o(){const l=e[0];if(l)for(let c=0;c<l.letters.length;c++){const h=l.letters[c];c<wt?en[c]==="correct"?Gr(h):Ea(h):hh(h)}}const a=Math.min(Fo,yt.length);for(let l=0;l<a;l++)e.push(r(ct+l,l));return o(),{camBase:up,camLook:fp,camFov:dp,lockCamera:!1,tiltX:0,currentWord(){const l=e[0];return l?{group:l.group,letters:l.letters}:null},paint:o,advance(){const l=e.shift();l&&ai(l.group,l.letters);for(let h=0;h<e.length;h++)e[h].targetSlot=h;const c=ct+Fo-1;if(Xe.mode!=="words"&&fh(c+2),c<yt.length){const h=r(c,Fo);h.targetSlot=e.length,e.push(h)}o()},retreat(){if(e.length>=Fo){const c=e.pop();c&&ai(c.group,c.letters)}const l=r(ct,0);e.unshift(l);for(let c=0;c<e.length;c++)e[c].targetSlot=c;o()},boundaryGap(){return oa},interLetterGap(){return oa},caretDims(){return{w:.09,h:Bs*1.04,cy:Bs*eE}},update(l){const c=1-Math.pow(.0015,l);for(const h of e){t(h.targetSlot,s),h.group.position.lerp(s,c);const f=n(h.targetSlot);h.group.scale.setScalar(ui.lerp(h.group.scale.x,f,c));const u=i(h.targetSlot);for(const d of h.letters)uh(d,l,u)}},relayout(){},dispose(){for(const l of e)ai(l.group,l.letters);e=[]},info(){const l=e[0],c=l?l.letters.map(h=>{const f=new W;h.object3d.getWorldPosition(f);const u=l.group.scale.x;return{ch:h.ch,x:+f.x.toFixed(4),baseline:+(f.y-Gs(h.ch).cy*u).toFixed(4)}}):[];return{view:"stream",visible:e.length,groupY:l?+l.group.position.y.toFixed(4):0,active:c}}}}function bE(){const e=2*pp.z*Math.tan(gp*Math.PI/180/2),t=window.innerWidth/window.innerHeight,n=e*t,i=n/window.innerWidth,r=window.innerWidth<640,o=r?34:tE,a=r?.92:nE,l=o*i,c=l*oh,h=Math.min(a*n,iE*i),f=rE*l,d=mp.y+sE*e+f*(ws-1)/2;return{em:l,advance:c,colHalf:h/2,gap:hp*l,lineH:f,topY:d,caretW:Math.max(.02,2*i)}}const TE={view:"paragraph",camBase:pp,camLook:mp,camFov:gp,metrics:bE,wordWidth(s,e){return e.advance*s.length},makeWord(s,e){const{group:t,letters:n}=Tp(s,e.em,e.advance);return{group:t,letters:n}},boundaryGapLocal(s){return s.gap},interLetterGapLocal(){return 0},caretH(s){return s.em*1.05}};function AE(){return wE(TE)}function Lf(){const s=window.innerWidth/window.innerHeight,t=16*Math.tan(vp*Math.PI/180/2)*s,n=s<1?.66:.86,i=Math.min(lE,t*n),r=i<5?bf*1.12:bf,a=s<1?3.3:3;return{em:r,advance:r*oh,colHalf:i,gap:hp*r,lineH:cE*r,lift:a}}function CE(){let s=Lf();const e=new si;e.rotation.x=-.55,e.position.y=s.lift,Rt.add(e);let t=[],n=0,i=0,r=0,o=Cl*s.lineH,a=Tf*s.lineH;function l(g){return(n-g)*s.lineH}function c(g){return g<=o?1:ui.clamp(1-(g-o)/(a-o),0,1)}function h(g){const _=new si;_.position.set(0,l(g),0),e.add(_);const x=[],S=i;let T=i,b=-s.colHalf;for(;Xe.mode!=="words"&&fh(T+1),!(T>=yt.length);){const w=s.advance*yt[T].length;if(x.length>0&&b+w>s.colHalf)break;const{group:R,letters:G}=Tp(yt[T],s.em,s.advance);R.position.set(b+w/2,0,0),_.add(R),x.push({seqIndex:T,group:R,letters:G,opacity:zs}),b+=w+s.gap,T++}i=T,r=g+1,t.push({index:g,group:_,words:x,start:S,end:T})}function f(g){for(;r<=g&&!(Xe.mode==="words"&&i>=yt.length);)h(r)}function u(g){for(const _ of t)if(g>=_.start&&g<_.end)return _.index;for(;i<=g&&(Xe.mode!=="words"||i<yt.length);)h(r);for(const _ of t)if(g>=_.start&&g<_.end)return _.index;return t.length?t[t.length-1].index:0}function d(){const g=Math.ceil(n-hE)+1,_=u(ct);f(Math.max(g,_+uE))}function m(){for(const g of t)for(const _ of g.words)if(_.seqIndex<ct){_.opacity=cp;for(const x of _.letters)x.state==="incorrect"||x.state==="skipped"?Cp(x):Gr(x)}else if(_.seqIndex>ct){_.opacity=zs;for(const x of _.letters)Ap(x)}else{_.opacity=lp;for(let x=0;x<_.letters.length;x++){const S=_.letters[x];x<wt?en[x]==="correct"?Gr(S):Ea(S):hh(S)}}}d(),m();function v(){for(const g of t){for(const _ of g.words)ai(_.group,_.letters);g.group.removeFromParent()}t=[],s=Lf(),e.position.y=s.lift,o=Cl*s.lineH,a=Tf*s.lineH,i=ct,r=0,n=0,d(),m();for(const g of t)for(const _ of g.words)for(const x of _.letters)x.vis=x.visTarget}function p(){if(!yt[ct])return null;const g=u(ct);return n-g}return{camBase:oE,camLook:aE,camFov:vp,lockCamera:!0,tiltX:-.55,currentWord(){for(const g of t)for(const _ of g.words)if(_.seqIndex===ct)return{group:_.group,letters:_.letters};return null},paint:m,advance(){d(),m()},retreat(){m()},boundaryGap(){return s.gap},interLetterGap(){return 0},caretDims(){return{w:Math.max(.03,s.em*.05),h:s.em*1.05}},update(g){if(He.phase==="running"&&(n+=ni*g),d(),He.phase==="running"){const _=p();_!==null&&_>=Cl&&kE()}for(let _=t.length-1;_>=0;_--){const x=t[_],S=l(x.index);x.group.position.y=S;const T=c(S);for(const b of x.words)for(const w of b.letters)uh(w,g,b.opacity*T);if(S>a){for(const b of x.words)ai(b.group,b.letters);x.group.removeFromParent(),t.splice(_,1)}}},streakAway(g){const _=g*g;e.position.z=_*24,e.scale.setScalar(1+_*1.5)},relayout(){v()},dispose(){for(const g of t){for(const _ of g.words)ai(_.group,_.letters);g.group.removeFromParent()}t=[],e.removeFromParent()},info(){e.updateWorldMatrix(!0,!1);const g=e.localToWorld(new W(0,o,0)).y,_=t.find(x=>ct>=x.start&&ct<x.end);return{view:"crawl",lineProgress:+n.toFixed(3),missLineY:+g.toFixed(3),currentSpeed:+ni.toFixed(4),missed:He.missed,lines:t.length,activeWords:_?_.words.map(x=>x.seqIndex):[],rows:t.slice().sort((x,S)=>x.index-S.index).map(x=>({index:x.index,y:+x.group.position.y.toFixed(3),words:x.words.map(S=>S.seqIndex)}))}}}}const Xe=Ow(),He={phase:"ready",correct:0,incorrect:0,wordsDone:0,missed:0,elapsed:0};let li=0,Hr=!1,Ir=0;function Gn(){return Xe.view==="crawl"?"survival":Xe.mode}function RE(){return Xe.view==="stream"?"auto":Xe.advance}function dh(){const s=Gn();return s==="survival"||s==="rush"||s==="sudden"?"words":s==="zen"?null:"wpm"}const Rp="typefall.pb.v1:",Pp="typefall.hist.v1:";function Lp(s){return dh()==="words"?s.words??0:s.wpm}function Lc(){if(Xe.view==="crawl")return`survival:∞:crawl:${Xe.speed}`;if(Xe.mode==="rush")return`rush:∞:${Xe.view}`;if(Xe.mode==="sudden")return`sudden:∞:${Xe.view}`;const s=Xe.mode==="time"?Xe.time:Xe.mode==="words"?Xe.words:0;return`${Xe.mode}:${s}:${Xe.view}`}function Up(s){try{const e=localStorage.getItem(Rp+s);return e?JSON.parse(e):null}catch{return null}}function PE(s,e){try{localStorage.setItem(Rp+s,JSON.stringify(e))}catch{}}function LE(s){try{const e=localStorage.getItem(Pp+s);return e?JSON.parse(e):[]}catch{return[]}}function UE(s,e){const t=LE(s);t.unshift(e),t.length=Math.min(t.length,5);try{localStorage.setItem(Pp+s,JSON.stringify(t))}catch{}return t}let Dp=null;function DE(){return Xe.mode==="words"?Xe.words:0}function Jr(){return He.elapsed}function ph(){const s=Jr();return s<=0?0:Math.round(He.correct/5/(s/60))}function Uc(){const s=Jr();return s<=0?0:Math.round((He.correct+He.incorrect)/5/(s/60))}function qi(){const s=He.correct+He.incorrect;return s===0?100:Math.round(He.correct/s*100)}function Yo(){He.phase==="ready"&&(He.phase="running",He.elapsed=0,Gn()==="rush"&&(li=xp),dt.hidePrompt())}function IE(){for(const s of en)if(s!=="correct")return!1;return!0}function ca(s){if(He.phase==="finished"||dt.isMenuOpen()||s===" ")return;ch();const e=it.currentWord();if(!e)return;const t=e.letters[wt];if(!t){Yo(),He.incorrect++,Dr=1,it.lockCamera||Dc(.32),it.paint();return}s.toLowerCase()===t.ch.toLowerCase()?(Yo(),ME(t,Xe.effect),t.state="correct",Gr(t),en[wt]="correct",He.correct++,Cr.push(Zi),wt++,RE()==="auto"&&wt>=e.letters.length&&IE()?Ip():it.paint()):(Xe.view!=="crawl"&&Yo(),t.state="incorrect",Ea(t),en[wt]="incorrect",He.incorrect++,wt++,it.lockCamera||Dc(.32),it.paint(),Gn()==="sudden"&&Vr("sudden"))}function ba(){if(He.phase==="finished"||dt.isMenuOpen())return;if(ch(),wt===0){if(ct===0)return;const t=la[ct-1];if(!(!!t&&t.some(r=>r==="incorrect"||r==="skipped")))return;ct--,He.wordsDone=Math.max(0,He.wordsDone-1),en=t.slice(),wt=t.length,delete la[ct],it.retreat();const i=it.currentWord();if(i)for(let r=0;r<i.letters.length;r++)i.letters[r].state=en[r]??"untyped";it.paint();return}const s=it.currentWord();if(!s)return;wt--,en.pop();const e=s.letters[wt];e&&(e.state="untyped"),it.paint()}function ha(){if(He.phase==="finished"||dt.isMenuOpen()||(ch(),wt===0))return;const s=it.currentWord();if(!s)return;Yo();const e=wt<s.letters.length;for(let t=wt;t<s.letters.length;t++){const n=s.letters[t];n.state="skipped",en[t]="skipped",He.incorrect++}if(wt=s.letters.length,Gn()==="sudden"&&e){it.paint(),Vr("sudden");return}Ip()}function Ip(){FE()}function FE(s){if(He.correct++,He.wordsDone++,Gn()==="rush"&&(li=Math.min(gE,li+mE)),la[ct]=en.slice(),en=[],Gn()==="words"&&He.wordsDone>=Xe.words){Vr("complete");return}ct++,wt=0,it.advance()}function NE(){const e=Zi;for(;Cr.length&&e-Cr[0]>10;)Cr.shift();const t=Math.min(10,Math.max(.5,He.elapsed));return Cr.length/5/(t/60)}function OE(s){if(Xe.speed!=="auto"){ni=aa*(_p[Xe.speed]??1);return}const t=NE()/5/60/fE,n=ui.clamp(t*dE,Af,Cf);ni+=(n-ni)*(1-Math.exp(-s/pE)),ni=ui.clamp(ni,Af,Cf)}function Dc(s){ks.x+=(Math.random()-.5)*s*2,ks.y+=(Math.random()-.5)*s*2}function BE(){Xe.view==="crawl"?yt=Kd(160):Xe.mode==="words"?yt=Tc(Xe.words):yt=Tc(120)}function zE(){it&&it.dispose(),it=Xe.view==="stream"?EE():Xe.view==="crawl"?CE():AE(),mh.setView(Xe.view),Rc=!0,Sp.copy(it.camBase),Mp.copy(it.camLook),kn.fov=it.camFov,kn.updateProjectionMatrix(),ah()}function di(){He.phase="ready",He.correct=0,He.incorrect=0,He.wordsDone=0,He.missed=0,He.elapsed=0,li=0,Hr=!1,Ir=0,er.reset(),ci.hide(),ks.set(0,0,0),Zr.classList.remove("hyper"),dt.hideResults(),dt.closeMenu(),dt.setHudVisible(!0),ct=0,wt=0,en=[],la=[],Dr=0,Cr=[],ni=Xe.speed==="auto"?aa:aa*(_p[Xe.speed]??1),BE(),zE(),Op(),Xe.view==="crawl"?dt.showPrompt("type to begin"):dt.hidePrompt(),Xs&&oi.focus({preventScroll:!0})}let Ic=null;function kE(){Vr("survival")}function Vr(s){He.phase!=="finished"&&(He.phase="finished",dt.setHudVisible(!1),dt.hidePrompt(),Ic=GE(s),s==="survival"?(mh.hyperspace(),Zr.classList.add("hyper"),Dc(.1),Hr=!0,Ir=yp):s==="sudden"?(dt.flashRed(),Hr=!0,Ir=vE):Fp())}function GE(s){const e=ph(),t=He.wordsDone,n=dh(),i=n==="words"?t:e,r=Lc(),o=Up(r),a=o?Lp(o):null,l=a==null||i>a||n==="words"&&i===a&&o!=null&&e>o.wpm,c={wpm:e,acc:qi(),raw:Uc(),words:t,date:Date.now()};l&&PE(r,c);const h=UE(r,c),f=l&&a!=null?i-a:null;Dp={key:r,wpm:i,pb:l?i:a,prevPb:a,isNewPb:l,historyLen:h.length};const u=Jr();let d,m="wpm",v,p;return s==="survival"?(d="lost to hyperspace",m="survived",v=[["wpm",String(e)],["acc",qi()+"%"],["time",`${u.toFixed(1)}s`]],p="enter — run it again · or tap"):s==="rush"?(d="time's up",m="words",v=[["wpm",String(e)],["acc",qi()+"%"],["lasted",`${u.toFixed(1)}s`]],p="enter — run it again · or tap"):s==="sudden"&&(d="sudden death",m="words",v=[["wpm",String(e)],["acc",qi()+"%"],["chars",`${He.correct}/${He.incorrect}`]],p="enter — run it again · or tap"),{wpm:e,acc:qi(),raw:Uc(),correct:He.correct,incorrect:He.incorrect,timeSec:u,missed:null,pb:a,isNewPb:l,deltaPb:f,history:h.map(g=>({wpm:g.wpm,acc:g.acc})),headline:i,headlineLabel:m,title:d,cells:v,hint:p}}function Fp(){if(!Ic)return;const s=Ic;dt.showResults(s);const e=ci.tryShow();dt.getResultsElement().classList.toggle("panel-mirrored",e),dt.setPanelLabel(ci.label),HE(s.isNewPb)}function HE(s){const e=s?ra:Us,t="typefall".split("");for(let n=0;n<t.length;n++){const i=Gs(t[n]),r=new Vs({color:e,roughness:.5,metalness:.02,emissive:e,emissiveIntensity:s?.28:.08,transparent:!0,opacity:1}),o=new Dt(i.geo,r);o.castShadow=!0,o.scale.setScalar(.6),o.position.set((Math.random()-.5)*16,10+Math.random()*6,-3-Math.random()*4),Rt.add(o);const a=new A(i.half.x*.6,i.half.y*.6,i.half.z*.6);er.rain(o,{color:new Ye(e),half:a})}s&&er.burst(0,4.2,1,new Ye(ra))}const dt=Gw({getSettings:()=>Xe,applySettings:s=>{Object.assign(Xe,s),rp(Xe),di()},restart:di,onMenuOpen:()=>{},onMenuClose:()=>{Xs&&oi.focus({preventScroll:!0})},onFocusRestore:()=>gh()}),ci=new Hw(Rt,dt.getResultsElement()),mh=new kw(document.body,Xs),oi=document.getElementById("capture");window.addEventListener("keydown",s=>{if(!(s.metaKey||s.ctrlKey||s.altKey)){if(dt.isMenuOpen()){dt.handleMenuKey(s.key)&&s.preventDefault();return}if(s.key==="Tab"){s.preventDefault(),He.phase==="finished"?di():dt.openMenu();return}if(s.key==="Escape"){s.preventDefault(),dt.openMenu();return}if(s.key==="Enter"){s.preventDefault(),He.phase==="finished"&&di();return}if(s.key==="Backspace"){s.preventDefault(),ba();return}if(s.key===" "){s.preventDefault(),ha();return}s.key.length===1&&s.key.charCodeAt(0)>=32&&(s.preventDefault(),ca(s.key))}});oi.addEventListener("input",s=>{if(s.inputType==="deleteContentBackward"){ba(),oi.value="";return}const e=oi.value;for(const t of e)t===" "?ha():t.charCodeAt(0)>=32&&ca(t);oi.value=""});oi.addEventListener("keydown",s=>{s.key==="Backspace"&&ba()});if(Xs){const s=()=>oi.focus({preventScroll:!0});Zr.addEventListener("pointerdown",()=>{He.phase==="finished"?di():s()}),window.addEventListener("touchstart",s,{passive:!0}),window.addEventListener("load",s,{once:!0})}let Wr=!1;function VE(){Wr||dt.isMenuOpen()||He.phase==="finished"||(Wr=!0,dt.showFocusLost(),Zr.classList.add("blurred"))}function gh(){Wr&&(Wr=!1,dt.hideFocusLost(),Zr.classList.remove("blurred"),oi.focus({preventScroll:!0}))}window.addEventListener("blur",VE);window.addEventListener("focus",gh);window.addEventListener("pointerdown",()=>{Wr?gh():He.phase==="finished"&&ci.active&&!dt.isMenuOpen()&&di()});const Np=new Yy;let jo=!0,Rl=0;const ti={visible:!1,x:0,y:0,z:0,targetX:0,opacity:0};function WE(s){const e=it.currentWord();if(!e||He.phase==="finished"){Jt.visible=!1,ti.visible=!1;return}const t=it.caretDims(),n=e.letters[wt];let i;if(n)i=n.localX-n.halfWidth-it.interLetterGap()*.5;else{const a=e.letters[e.letters.length-1];if(!a){Jt.visible=!1,ti.visible=!1;return}i=a.localX+a.halfWidth+it.boundaryGap()*.5}e.group.localToWorld(No.set(i,t.cy??0,0)),!Jt.visible||Rc?(Jt.position.copy(No),Rc=!1):Jt.position.lerp(No,1-Math.exp(-s/_E)),Jt.visible=!0;const r=Dr;Jt.scale.set(t.w*(1+.9*r),t.h,1),Jt.rotation.set(it.tiltX,0,0);let o;if(r>.05)Es.uniforms.uRed.value=1,o=1;else if(Es.uniforms.uRed.value=0,Zi-Pc<xE)o=1;else{const a=(Zi-Pc)%Pf/Pf;o=.12+.88*(.5+.5*Math.cos(a*Math.PI*2))}Es.uniforms.uTime.value=Zi,Es.uniforms.uOpacity.value=o,ti.visible=!0,ti.x=+Jt.position.x.toFixed(3),ti.y=+Jt.position.y.toFixed(3),ti.z=+Jt.position.z.toFixed(3),ti.targetX=+No.x.toFixed(3),ti.opacity=+o.toFixed(3)}function Fc(s){if(mi.step(1/60,s,3),He.phase==="running"&&(He.elapsed+=s),Zi+=s,He.phase==="running"&&Gn()==="rush"&&(li=Math.max(0,li-s),li<=0&&Vr("rush")),Xe.view==="crawl"&&OE(s),it.update(s),Hr){if(Ir-=s,Xe.view==="crawl"){const e=ui.clamp(1-Ir/yp,0,1);it.streakAway?.(e),mh.hyperStep(e)}Ir<=0&&(Hr=!1,Fp())}WE(s),ci.active&&ci.drawFrame(kn,s),ks.multiplyScalar(Math.pow(.0025,s)),Dr>0&&(Dr=Math.max(0,Dr-s*4)),ah(),er.update(s),He.phase==="running"&&Gn()==="time"&&Jr()>=Xe.time&&Vr("complete"),Rl+=s,Rl>.1&&(Rl=0,Op())}function Op(){let s="",e="",t="",n="normal";const i=Gn();if(i==="survival")s="survival",e=String(He.wordsDone),t="survived";else if(i==="rush"){s="rush";const r=He.phase==="ready"?xp:li;e=r<5?r.toFixed(1):String(Math.ceil(r)),n=r<5&&He.phase==="running"?"clockUrgent":"clock",t=`${He.wordsDone} words`}else if(i==="sudden")s="sudden death",e=String(He.wordsDone),t="words";else if(i==="time"){s="time";const r=Math.max(0,Xe.time-Jr());e=He.phase==="ready"?String(Xe.time):String(Math.ceil(r))}else i==="words"?(s="words",e=`${He.wordsDone}/${Xe.words}`):(s="zen",e=String(He.wordsDone));dt.setHud(s,e,`${ph()} wpm`,`${qi()}%`,He.phase==="running",t,n)}function Ko(){Pn.render(Rt,kn)}function vh(){if(!jo)return;requestAnimationFrame(vh);const s=Math.min(Np.getDelta(),1/30);Fc(s),Ko()}document.addEventListener("visibilitychange",()=>{document.hidden?jo=!1:jo||(jo=!0,Np.getDelta(),vh())});let Uf;window.addEventListener("resize",()=>{kn.aspect=window.innerWidth/window.innerHeight,kn.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight),Pn.setPixelRatio(Math.min(window.devicePixelRatio,2)),clearTimeout(Uf),Uf=window.setTimeout(()=>{it&&it.relayout()},150)});function ys(){return{view:Xe.view,phase:He.phase,wpm:ph(),raw:Uc(),acc:qi(),correct:He.correct,incorrect:He.incorrect,wordsDone:He.wordsDone,wordsTotal:DE(),elapsed:Jr(),current:yt[ct]??"",wordIndex:ct,letterIdx:wt,letterStates:en.slice(),caret:{...ti},bodies:er.fallCount,menuOpen:dt.isMenuOpen(),resultsShown:He.phase==="finished",focusLost:Wr,layout:it?it.info():{},missed:He.missed,currentSpeed:+ni.toFixed(4),lineProgress:Xe.view==="crawl"?it?.info().lineProgress??0:0,missLineY:Xe.view==="crawl"?it?.info().missLineY??0:0,panel:{supported:ci.support.supported,drawMethod:ci.support.drawMethod,label:ci.label},configKey:Lc(),pb:(()=>{const s=Up(Lc());return s?Lp(s):null})(),kind:Gn(),metric:dh(),rushClock:+li.toFixed(3),losing:Hr,backdropView:Xe.view,fromCorpus:Xe.view==="crawl"&&yt.slice(0,60).every(s=>XE.has(s)),seqSample:yt.slice(0,12),lastResult:Dp}}const XE=new Set(jd.join(" ").split(" "));window.typefall={get scene(){return Rt},get renderer(){return Pn},get camera(){return kn},get world(){return mi},get settings(){return Xe},get state(){return ys()},startTest(s={}){return Object.assign(Xe,s),rp(Xe),di(),ys()},typeChar(s){ca(s)},space(){ha()},backspace(){ba()},typeWord(s){for(const e of s)e===" "?ha():ca(e)},relayout(){return it&&it.relayout(),ys()},frame(s=1/60){Fc(s),Ko()},render:Ko,reset:di,blur(){return window.dispatchEvent(new Event("blur")),ys()},refocus(){return window.dispatchEvent(new Event("focus")),ys()},settle(s=90){for(let e=0;e<s;e++)Fc(1/60);return Ko(),er.fallCount},panelDrawProbe(s="drawElement"){const e=[],t=new Proxy({},{get:(i,r)=>(...o)=>e.push({fn:r,args:o})}),n=dt.getResultsElement();return Cc(t,s,n,800,600),{calls:e,drewElement:e.some(i=>i.fn===s&&i.args[0]===n)}},panelSupport(){return sp()}};function qE(s){const e=new eh;e.text="MMMMMMMMMM",e.font=sh,e.fontSize=1,e.anchorX="left",e.anchorY="middle",e.sync(()=>{const t=e.textRenderInfo?.caretPositions;if(t&&t.length>=8){const n=t.length/4;let i=0;for(let o=0;o<n;o++)i+=t[o*4+1]-t[o*4];const r=i/n;r>.3&&r<.9&&(oh=r)}e.dispose(),s()})}new Zy().load("/typefall/fonts/helvetiker_bold.typeface.json",s=>{bp=s,DS({font:sh,characters:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"},()=>{qE(()=>{di(),vh()})})});
