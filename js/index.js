function Parcial() {
    let n1 = parseInt(document.getElementById('parcial1').value)
    let n2 = parseInt(document.getElementById('parcial2').value)
    let n3 = parseInt(document.getElementById('parcial3').value)
    
        
    if (isNaN(n1)) {
        alertify.error('Parcial 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Parcial 2 en blanco')
    } else if(isNaN(n3)) {
        alertify.error('Parcial 3 en blanco')
    }else 
        {if (n1 + n2 + n3 <60){
        let parcial = n1 + n2 + n3;
        document.getElementById('Resultado').value = parcial
        alertify.error('Esta reprobado')
    } else if(n1 + n2 + n3 <80){
        let parcial = n1 + n2 + n3;
        document.getElementById('Resultado').value = parcial
        alertify.error('Bueno')
    } else if (n1 + n2 + n3 <90){
        let parcial = n1 + n2 + n3;
        document.getElementById('Resultado').value = parcial
        alertify.error('Muy Bueno')   
     } else if (n1 + n2 + n3 <101){
        let parcial = n1 + n2 + n3;
        document.getElementById('Resultado').value = parcial
        alertify.error('Sobresaliente') 
    } else if (n1 + n2 + n3 >100){
        alertify.error('Error numero fuera del 0 a 100') 
    } 
    }

}

function limpiar() {
    document.getElementById('parcial1').value = ''
    document.getElementById('parcial2').value = ''
    document.getElementById('parcial3').value = ''
    document.getElementById('Resultado').value = ''
}