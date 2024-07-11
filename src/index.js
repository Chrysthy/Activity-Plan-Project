const atividade = {
    nome: 'Almoço',
    data: new Date("2024-07-08 10:00"),
}






const criarItemDeAtividade = () => {
    return `
    
     <div>

            <input type="checkbox">

            <span>Academia em grupo</span>

            <time>Sábado, 18 de abril às 08:00h</time>

        </div>
    
    
    `
}



const section = document.querySelector('section')

section.innerHTML = criarItemDeAtividade()