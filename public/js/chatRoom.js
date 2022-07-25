const btn = document.getElementById('send-btn')
btn.addEventListener('click', function() {
    text=document.getElementById('chat')
    text.innerHTML+= `<p>${document.getElementById('input1').value}</p>`
    console.log(text.innerHTML)
    document.getElementById('input1').value=""
})
