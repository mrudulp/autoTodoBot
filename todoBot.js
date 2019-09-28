todoBot = new function(){
    function getRandomIdx(max){
        return Math.floor(Math.random()*max);
    }

    function getRandomTodoIdx(){
        var todos_len = document.querySelectorAll("ul.todo-list li").length;
        if (todos_len === 0){
            console.log("No items to choose")
            return -1;
        }else{
            return getRandomIdx(todos_len);
        }
    }

    this.selectRandomItem = function(){
        idx = getRandomTodoIdx();
        if (idx > -1){
            autoTodo.selectTodoAt(idx)
        }
    }

    this.createTodo = function(){
        autoTodo.createTodo("New Todo "+Date.now());
    }

    this.removeRandomItem = function(){
        idx = getRandomTodoIdx();
        if (idx > -1){
            autoTodo.removeTodoAt(idx)
        }
    }

    this.updateRandomItem = function(){
        idx = getRandomTodoIdx();
        if (idx > -1){
            autoTodo.updateTodoAt(idx, "Updated Todo " + Date.now())
        }
    }

}