function display(item){
    output.value += item
}

function clearAll(){
    output.value = ""
}

function removeLast(){
    curr = output.value
    output.value = curr.slice(0,-1)
}

function evalExp(){
    output.value = eval(output.value)
}