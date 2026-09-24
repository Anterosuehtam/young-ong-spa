const dadosProjetos = [
    { titulo: "Educação para Todos", descricao: "Oferecemos aulas de reforço e atividades extracurriculares para crianças." },
    { titulo: "Alimentando Esperanças", descricao: "Distribuição mensal de cestas básicas para famílias em vulnerabilidade." },
    { titulo: "Mutirão da Limpeza", descricao: "Ações de revitalização e limpeza de praças e espaços públicos locais." }
];

export const renderizarProjetos = () => {
    const container = document.getElementById('projetos-container');
    if (!container) return; 

    const htmlProjetos = dadosProjetos.map(projeto => `
        <article style="grid-column: span 12;">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `).join(''); 

    container.innerHTML = htmlProjetos;
};