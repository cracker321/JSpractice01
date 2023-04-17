/*
< 비동기(asychronous) >
어떠한 요청을 보내면, 그 요청이 끝날 때까지 기다리는 것이 아니라, 
응답에 관계없이 바로 다음 동작이 실행되는 방식


< 동기(sychronous) >
한 작업이 실행되는 동안 다른 작업은 멈춤 상태를 유지하고 자신의 차례를 기다리는 것

< 프로미스의 상태(Promise States) >
- pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
- fulfilled(이행): 비동기 처리가 완료되어, 프로미스가 결과 값을 반환해준 상태
- rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태

new Promise((resolve, reject) => {
        if(성공) resolve(정보);
        if(실패) reject(이유);
        })

*/

