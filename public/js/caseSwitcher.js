
const btn = document.getElementById('quiet-btn')
btn.addEventListener('click', function() {
    text=document.getElementById('patrick')
    text.innerText=text.innerText.toLowerCase()
})

const btn2=document.getElementById('loud-btn')
btn2.addEventListener('click',function(){
    text=document.getElementById('patrick')
    text.innerText=text.innerText.toUpperCase()
})

const btn3=document.getElementById('sarc-btn')
btn3.addEventListener('click',function(){
    text=document.getElementById('patrick')
    counter=
    str=''
    for(each in text.innerText){
        if(text.innerText[each] === ' '){
             str+=text.innerText[each]
        }else if ( counter%2==0){
            counter++
             str+=text.innerText[each].toUpperCase()
        }else{
            counter++
             str+=text.innerText[each].toLowerCase()

       }
    }
    text.innerText=str
})



