randoBot = setInterval(function(){
    var functions = [];
    for (var prop in todoBot){
        if(typeof todoBot[prop] == 'function' ){
            console.log(prop);
            functions.push(prop)
        }
    }

    var randomFuncIdx = Math.floor(Math.random()*functions.length);
    todoBot[functions[randomFuncIdx]]()
}, 500);