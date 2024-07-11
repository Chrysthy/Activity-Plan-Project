//object
const atividade = {
    nome: 'Almoço',
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}


//array de objetos
const atividades = [

    atividade,

    {
        nome: 'Academia em grupo',
        data: new Date("2024-07-09 12:00"),
        finalizada: false
    }


]




const criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if (atividade.finalizada) {

        input = input + 'checked'

    }


    input = input + '>'



    return `
    
     <div>

            ${input}

            <span>${atividade.nome}</span>

            <time>${atividade.data}</time>

        </div>
    
    
    `
}



const section = document.querySelector('section')

section.innerHTML = criarItemDeAtividade(atividade)