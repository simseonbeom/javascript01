
// -------------------------------------------------
// 01. 변수, 상수 & 스코프
// -------------------------------------------------
// var vs. let
// let vs. const
// scope (function / block)
// -------------------------------------------------

function getNode (selector){
    return document.querySelector('body');
}


const sum = function(a,b){
    return a + b;
}


const multiply = (a) =>  a + b;

// 화살표 함수는 return을 사용하지 않아도 된다.

const bodyNode = getNode('body');





