/* JavaScript Utilities (Custom Functions) */

const getRandomCount = (min = 0, max = 10) => {
    return Math.floor(Math.random() * (max - min) + min);
};

// getRandomCount(5,30)


const throwError = (message) => {
    throw new Error(message)
};

/* 데이터 타입 체크 유틸리티 ----------------------------------------------------------- */

// - isUndefined()
// - isNull()
// - isNothing()
// - isString()
// - isNumber()
// - isNaN()
// - isBoolean()
// - isTruthy()
// - isFalsy()
// - isFunction()
// - isArray()
// - isObject()
// - isDate()
// - isEqual()
// - isNotEqual()

const isUndefined = (data) => data === undefined;
const isNull = (data) => data === null;
const isNothing = (data) => isUndefined(data) || isNull(data);
const isString = (data) => typeof data === 'string';
const isNumber = data => typeof data === 'number' && !isNaN(data);
const isBoolean = (data) => typeof data === 'boolean';
const isFunction = (data) => typeof data === 'function';
const isArray = (data) => Array.isArray(data);
const isObject = (data) => data.constructor === Object;

// const isObject = (data) => typeof data === 'object';

const isDate = (data) => data.constructor === Date;
/* 데이터 타입 변경 유틸리티 ----------------------------------------------------------- */

// - makeArray()
const makeArray = (likeArrayObject) => {
    if (Array.from) {
        return Array.from(likeArrayObject);
    } else if ('length' in likeArrayObject) {
        // 반환 값: 배열
        // 반환할 값을 선언
        const returnValue = [];
        for (let i = 0, l = 4; i < l; ++i) {
            returnValue.push(likeArrayObject[i]);
        }
        return returnValue;
    } else {
        // 오류 출력: 유사 배열이 아님을 경고!
        throwError('전달받은 데이터는 유사배열(like Array Object)가 아님!')
    }
}

/* DOM 접근/조작 유틸리티 ------------------------------------------------------------ */

// - getNode(), $()
// - getNodeList(), $$()
function getNodeList(selector, context = document) {
    return makeArray(context.querySelectorAll(selector));
}


function getNode(selector, context = document) {
    return getNodeList(selector, context)[0];
}


const $$ = getNodeList;
const $ = getNode;

// - getAttr()
// - setAttr()
// - attr()

function getAttr(node, attrName) {
    return node.getAttribute(attrName);
}

function setAttr(node, attrName, value) {
    node.setAttribute(attrName, value);
}

function attr(node, attrName, value) {
    return !value ? getAttr(node, attrName) : setAttr(node, attrName, value);
}

/*


function getData(node, dataName){
    return node.dataset.dataName
}

// undefined
*/


const elem = $('li > a');

// - getData()
// - setData()
// - data()


function getData(node, attrName) {
    return getAttr(node, attrName);
}


function setData(node, attrName, value) {
    setAttr(node, attrName, value);
}


function data(node, attrName, value) {
    return !value ? getData(node, attrName) : setData(node, attrName, value);
}



// - addClass()
// - removeClass()
// - hasClass()
// - toggleClass()


function addClass(node, value) {
    node.classList.add(value);
}


function removeClass(node, value) {
    node.classList.remove(value);
}


function hasClass(node, value) {
    return node.classList.contains(value);
}


function toggleClass(node, value) {
    node.classList.toggle(value);
}


console.log();

// console.log(getComputedStyle(elem).color);

function getStyle(node, styleName) {

    if(!styleName || styleName === ''){
        throwError(`해당 ${styleName}스타일은 적용되어있지 않습니다`);
    }

    return node.style.getPropertyValue(styleName);
}

// console.log(getStyle(elem, 'background'));

// elem.getPropertyValue()

function setStyle(node, styleName, value) {


    // node.style.color = 'blue';  // 이렇게 쓰면 되는데
    // node.style.styleName = value // 얘는 왜 안돼?

    // node.attrName.styleName = value;
    // setAttr(node,styleName,value);

    node.style.setProperty(styleName,value);

}




// - getStyle()
// - setStyle()
// - css()

function css(node,styleName,value){
    return !value ? getStyle(node,styleName) : setStyle(node,styleName,value);
}

css(elem,'color','blue')




/* DOM 이벤트 유틸리티 -------------------------------------------------------------- */

// - on()
// - off()
// - once()
// - bind() → unbind()
// - bindAll() → unbindAll()

/* 테스트 유틸리티 ------------------------------------------------------------------ */

// - expect(received)
//   - .toBe(expected)
//   - .not.toBe(expected)
// - test(description, callback)
// - describe(title, callback)