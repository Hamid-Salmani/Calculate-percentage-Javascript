let inputs = document.querySelectorAll('input')
let total = document.getElementById('total')
let True = document.getElementById('true')
let False = document.getElementById('false')
let button = document.getElementById('calculate')
let p = document.getElementById('p')
let Percent;

function  isEveryInputEmpty(){
    
        if(inputs[0].value == ''){
            return false
        }else if(inputs[1].value == ''){
            return false
        }else if(inputs[2].value == ''){
            return false
        }else{
            return true
        }
     }


function calculate() {
    Percent = (True.value - False.value) / total.value *100
    return Percent
}

button.addEventListener('click' , ()=>{
    if(isEveryInputEmpty()){
        if((Number(True.value) + Number(False.value)) > total.value){
            alert("مجموع سوالات درست و غلط بیشتر از کل سوالات است")
        }else{
            p.innerHTML = calculate() + '%'
            
        }
        
    }else{
        alert("لطفا تمام فیلد هارو پر کنید ")
    }
})

