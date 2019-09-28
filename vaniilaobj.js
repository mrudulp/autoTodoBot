var autoTodo = new function (){
    this.clickOdd = function (){
        chkboxs = document.querySelectorAll("input.toggle");
        for(var i=0; i<chkboxs.length; i++){
            if(i%2){
                chkboxs[i].click();
                }
            }
        }
    
    this.toggleAll = function (){
        chkboxs = document.querySelectorAll("input.toggle");
        for(var i=0; i<chkboxs.length; i++){
            chkboxs[i].click();
        }
    }
    
    this.createTodo = function (val){
        editTodo = document.querySelector("input.new-todo")
        editTodo.value = val
        editTodo.dispatchEvent(new Event("change", {"bubble":true}))
    }
    
    this.selectTodoAt = function (_idx) {
        document.querySelector("ul.todo-list > li:nth-child("+(_idx + 1)+") input").click();
    }
    
    this.removeTodoAt = function(_idx) {
        document.querySelector("ul.todo-list > li:nth-child("+(_idx + 1) + ") button.destroy").click();
    }

    this.updateTodoAt = function (_idx, value){
        editL = document.querySelector(" ul > li:nth-child(" + (_idx + 1) + ")  label");
        editL.dispatchEvent(new Event("dblclick",{"bubbles":true}));
        editI = document.querySelector(" ul > li:nth-child(" + (_idx + 1) + ") input.edit");
        editI.value = value;
        editI.dispatchEvent(new Event("blur"));
    }
    
    this.clearCompleted = function (){
        document.querySelector("button.clear-completed").click()
    }
    
    this.showActive = function (){
        document.querySelector("a[href='#/active']").click()
    }
    
    this.showAll = function (){
        document.querySelector("a[href='#/']").click()
    }
    
    this.showCompleted = function (){
        document.querySelector("a[href='#/completed']").click()
    }
}