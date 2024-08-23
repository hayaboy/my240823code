// import 'repl'

import repl from 'repl';
// console.log(repl);

repl.start({
    prompt : " 입력하세요",
    eval : (command, context, filename, callback) => {
        let number=Number(command);
        if(isNaN(number)){
            console.log('숫자가 아님');
        }else{
             console.log('숫자);
        }
         callback();
    }
   
})