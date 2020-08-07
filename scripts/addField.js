document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    // console.log(fields[0].value = '') console.log é print, poderia fazer assim, mas pra q imprimir
    
    fields.forEach(function(field) { //limpeza dos campos na cópia
        field.value = ''
    })

    //ou 
    //fields.forEach(field => { 
    //     field.value = ''
    // }) funciona igual
    
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
}