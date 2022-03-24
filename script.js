var intervaId = window.setInterval(()=>{carregar(),1000})
function carregar(){
    var msg = document.getElementById('msg')
    var imag = document.getElementById('imagem')
    var data = new Date()  
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if (minuto < 10){
        minuto = "0"+minuto    
    } 
    if (segundo < 10){
        segundo = "0"+segundo
    }
    msg.innerHTML = `${hora}:${minuto}:${segundo}`
    if (hora < 12 && hora > 4){
        imag.src = 'imagens/manhacrop.png'
        document.body.style.background = 'linear-gradient(to top, var(--cor4), var(--cor0) 90%)'
        document.body.style.backgroundAttachment = 'fixed'        
        msg.innerHTML += '<br>Bom Dia'  
        document.body.style.color = 'var(--cor1fonte)'   
    } else if (hora > 11 && hora < 19){
        imag.src = 'imagens/tardecrop.png'
        document.body.style.background = 'linear-gradient(to bottom, var(--cor5) 30%, var(--cor1))'
        document.body.style.backgroundAttachment = 'fixed'
        msg.innerHTML += '<br>Boa Tarde'
        document.body.style.color = 'var(--cor5fonte)' 
    } else {
        imag.src = 'imagens/noitecrop.png'
        document.body.style.background = 'linear-gradient(to top, var(--cor3), var(--cor2) 90%)'
        document.body.style.backgroundAttachment = 'fixed'
        msg.innerHTML += '<br>Boa Noite'
        document.body.style.color = 'var(--cor2fonte)'
    }
}