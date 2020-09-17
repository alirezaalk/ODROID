(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},ca=ba(this),da=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var e=0;e<
a.length-1;e++){var f=a[e];if(!(f in c))break a;c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};da("Array.from",function(a){return a?a:function(b,c,e){c=null!=c?c:function(fa){return fa};var f=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var m=0;!(l=b.next()).done;)f.push(c.call(e,l.value,m++))}else for(l=b.length,m=0;m<l;m++)f.push(c.call(e,b[m],m));return f}});
var d=this||self,ea=/^[\w+/_-]+[=]{0,2}$/,g=null,h=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ea.test(a)?a:""},k=function(a){return a};var ha=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in e&&b.call(void 0,e[f],f,a))return!0;return!1};var n;var q=function(a,b){this.c=b===p?a:""},p={};var r;a:{var t=d.navigator;if(t){var u=t.userAgent;if(u){r=u;break a}}r=""};var v=function(a,b){if(!ia()){var c=Math.random();if(c<b)return c=ja(),a[Math.floor(c*a.length)]}return null},ja=function(){if(!d.crypto)return Math.random();try{var a=new Uint32Array(1);d.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},ia=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return ha(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],ka)||1E-4>Math.random()}),ka=function(a){return-1!=r.indexOf(a)};var la=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(e){}return!0}(d,!1)?"https:":"http:";var w={j:1,g:4,h:5,f:7,l:8,i:9},x={b:"40004006",a:"40004007"};function ma(){return{1:.5,4:.02,5:.001,7:.2,8:.2,9:.001}}function na(){var a=y,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in w)if(b=a[w[c]],"number"!==typeof b||0>b||1<b)return!1;return!0};function oa(){var a=d.dcmads;if(null!=a.eids)return a.eids;var b=d.navigator;return b.connection&&b.connection.saveData?(a=v([x.b,x.a],a.expts[4]))?"4|"+a:"":""};try{d.dcmads=d.dcmads||{};d.dcmads.startTime=(new Date).getTime();var pa=d.dcmads,z=d.dcmads.version,A={loader:175};if(z)if(A.experiment=z.experiment,63==z.number||"p"==z.number)A.number=63;else if(63==z.number||"c"==z.number)A.number=63;if(!A.number){var B=v([63,63],0);A.experiment=!!B;A.number=B||63}pa.version=A;var qa=d.dcmads,C,y=d.dcmads.expts,D;D=void 0===D?ma:D;C=na()?y:D();qa.expts=C;d.dcmads.eids=oa();var ra="4|"+x.a,E,F=d.dcmads.version,G=F.number,H="";F.experiment&&63==G&&(H="?rxp=63x63");
var sa="impl_v"+G+".js"+H,I=d.document,J=I.currentScript||Array.from(I.getElementsByTagName("script")).pop();E=(0==(J&&J.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+sa;if(d.dcmads.eids===ra){var K=d.document;if(void 0===n){var L=null,M=d.trustedTypes;if(M&&M.createPolicy){try{L=M.createPolicy("goog#html",{createHTML:k,createScript:k,createScriptURL:k})}catch(a){d.console&&d.console.error(a.message)}n=L}else n=L}var N=n,ta=N?N.createScriptURL(E):E,O=K.createElement("script"),
P=new q(ta,p);O.src=P instanceof q&&P.constructor===q?P.c:"type_error:TrustedResourceUrl";var Q;var R=O.ownerDocument&&O.ownerDocument.defaultView;R&&R!=d?Q=h(R.document):(null===g&&(g=h(d.document)),Q=g);Q&&O.setAttribute("nonce",Q);var S=K.getElementsByTagName("script")[0];S&&S.parentNode&&S.parentNode.insertBefore(O,S)}else d.document.write('<script src="'+E+'">\x3c/script>')}catch(a){if(.01>Math.random()){var T="";try{var U,V=a.toString();a.name&&-1==V.indexOf(a.name)&&(V+=": "+a.name);a.message&&
-1==V.indexOf(a.message)&&(V+=": "+a.message);if(a.stack){var W=a.stack,X=V;try{-1==W.indexOf(X)&&(W=X+"\n"+W);for(var Y;W!=Y;)Y=W,W=W.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");V=W.replace(/\n */g,"\n")}catch(b){V=X}}U=V;U=U.substring(0,1024);T=encodeURIComponent(U)}catch(b){T="extr"}var Z=d.dcmads.eids,ua=document.createElement("img");ua.src=la+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=175&context=554"+((Z?"&eids="+Z:"")+"&msg="+T);(d.google_image_requests=
d.google_image_requests||[]).push(ua)}};}).call(this);