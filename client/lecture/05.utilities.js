// -------------------------------------------------
// 05. 유틸리티
// -------------------------------------------------
// - isUndefined()
// - isNull()
// - isNothing()
// - isString()
// - isNumber()
// - isNaN()
// - isBoolean()
// - isFunction()
// - isArray()
// - isObject()
// - isDate()
// - makeArray()
// -------------------------------------------------



const isUndefined = (data) => data === undefined;
const isNull = (data) => data === null;
const insNothing = (data) => isUndefined || isNull;
const isString = (data) => typeof data === 'string';
const isNumber = (data) => typeof data === 'number' && !isNaN(data);


const isDate = (data) => data.constructor === Date;


function notInTheDocument(node){

    return isNull(node);

}

notInTheDocument(document.querySelector('.hey'));


function InTheDocument(node){

    return isNull(node);
    
}




