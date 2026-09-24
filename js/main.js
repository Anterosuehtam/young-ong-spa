// Importa as funções isoladas dos outros ficheiros
import { renderizarProjetos } from './ui.js';
import { configurarFormulario } from './form.js';

const rotas = {
    '#inicio': 'inicio.html',
    '#projetos': 'projetos.html',
    '#cadastro': 'cadastro.html'
};

const rotear = async () => {
    const hashAtual = window.location.hash || '#inicio';
    const arquivoTemplate = rotas[hashAtual];
    const containerPrincipal = document.getElementById('conteudo-principal');

    if (arquivoTemplate) {
        try {
            const resposta = await fetch(arquivoTemplate);
            const conteudoHTML = await resposta.text();
            
            containerPrincipal.innerHTML = conteudoHTML;
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Invoca as funções importadas com base na rota
            if (hashAtual === '#projetos') renderizarProjetos();
            if (hashAtual === '#cadastro') configurarFormulario();

        } catch (erro) {
            containerPrincipal.innerHTML = '<h2>Erro ao carregar a página.</h2>';
        }
    }
};

window.addEventListener('load', rotear);
window.addEventListener('hashchange', rotear);