document.addEventListener('DOMContentLoaded', ()=>{
    const display=document.getElementById('display'),
    numbers=document.querySelectorAll('.number'),
    operators=document.querySelectorAll('.operator'),
    equals=document.querySelector('.equals'),
    clear=document.querySelector('.clear');
    for(let i=0;i<numbers.length;i++){
        numbers[i].addEventListener('click',function(){
            display.value+=this.getAttribute('data-number');
        });}
        for(let i=0;i<operators.length;i++){
            operators[i].addEventListener('click',function(){
                display.value+=' '+this.getAttribute('data-operator')+' ';});}equals.addEventListener('click',function(){display.value=eval(display.value);});clear.addEventListener('click',function(){display.value='';});});
