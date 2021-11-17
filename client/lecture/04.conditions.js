// -------------------------------------------------
// 04. 조건 처리
// -------------------------------------------------
// - if, else if, else
// - switch case, default
// - expression, tertiary
// - try, catch
// -------------------------------------------------

// 주사위 굴리기 함수를 작성하세요.


// 1 - 6 까지의 정수 반환 


// function rollingDice(){

//     return Math.floor(Math.random() * 6) + 1;;
// }


function rollingDice(min = 1, max = 6){
    return Math.floor(Math.random() * (max - min)) + min;
}



// console.log(rollingDice());
// console.log(rollingDice());
// console.log(rollingDice());
// console.log(rollingDice());




// 굴려서 나온 주사위 값의 홀수인지 여부를 반환하는 함수를 작성하세요.
// 1,3,5
// 2,4,5

const isOdd = (value)=>{

    // if(value % 2 === 1 ){
    //     return true;
    // }else{
    //     return false;
    // }

    
    // value = value % 2 === 1 ? true : false; 
    // return value;
    // 해도 되지만 
    
    
    
    // return value % 2 === 1 ? true : false; 
    //해도 되지만


    return value % 2 === 1; 
    
    
    
}

const isEven = (value)=> !isOdd(value);



// 주사위를 굴립니다.
// 주사위의 값이 홀수인지 여부를 확인합니다.

let value = rollingDice(); // 1 - 6 까지의 정수 

// 주사위 값이 홀수라면?
// Console 패널에 주사위 값이 '홀수'임을 출력하세요.
// 그렇지 않다면?
// Console 패널에 주사위 값이 '홀수'가 아님을 오류 메시지로 출력하세요.


// if(isOdd(value)){
//     console.log(value , ' : 홀수입니다.');
// }else{
//     throw new Error(`${value} : 짝수입니다.`);
// }

// throw는 return이 되지 않기 때문에  블럭을 감싸줍니다. 
const throwError = (message)=>{
    throw new Error(message);
}

isOdd(value) ? 
 console.log(value , ' : 홀수입니다.') :
 throwError(`${value} : 짝수입니다.`);



// 주루마블 게임을 하는 중입니다.
// 던져서 나온 주사위 값에 따라 벌칙이 무엇인지 반환하는 페널티 함수를 작성하세요.
// - "1잔 원샷"
// - "지목 원샷"
// - "여성 원샷"
// - "남성 원샷"
// - "다 같이 원샷"
// - "나 빼고 원샷"


// function displaypenalty(value){

//     let result;
//     switch(value){
//         case  1: result =  '1잔 원샷'; break;
//         case  2: result =  '지목 원샷'; break;
//         case  3: result =  '여성 원샷'; break;
//         case  4: result =  '남성 원샷'; break;
//         case  5: result = ' 다 같이 원샷'; break;
//         case  6: result = ' 나 빼고 원샷'; break;
//     }

//     return result;
// }

function displaypenalty2(value){
    // switch(window.parseInt(Number(value))){
    // switch(Number(value)){
    switch(value){
        case  1: return '1잔 원샷';
        case  2: return '지목 원샷';
        case  3: return '여성 원샷';
        case  4: return '남성 원샷';
        case  5: return '다 같이 원샷';
        case  6: return '나 빼고 원샷';
        default :
        throwError('6을 초과했으며 1보다 작은 값을 사용하였습니다.');
    }
}

// case는 하나의 값이 아닌 여러개의 값도 내보낼 수 있습니다. 


console.log(displaypenalty2(10));



// 앞서 작성한 코드에서 `문`을 `식`으로 변경 가능한 부분을 찾아 수정해봅니다.


// 벌칙 카드에서 처리 가능하지 않은 값이 전달될 경우, 오류를 출력하는 구문을 작성해봅니다.
