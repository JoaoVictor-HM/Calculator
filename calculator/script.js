function insert(num){
    document.form.textview.value = document.form.textview.value + num
}

function clean(){
    document.form.textview.value = ""
}

function equal(){
    let conta = document.form.textview.value 
    if(conta){
        document.form.textview.value = eval(conta)
    }
    
}

function changeS(){
    document.form.textview.value *= -1
}