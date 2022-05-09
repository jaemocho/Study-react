//rsc 누르고 엔터면 자동완성 

import React from 'react';

let num = 10;

// 자식을 다시 그릴지 안그릴 지 함수 제공 해줌.. sub가 계속 있을 수록 퍼포먼스가 안좋아진다. 

const Sub = () => { // fucnction sub 랑 같다

    return (
        <div>
            <h1>Sub 입니다.</h1>
        </div>
    );
};
export {num}; // export 가능 하나 default 는 하나라서 중괄호로 
export default Sub; // 외부에 노출하겠다 