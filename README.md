# Young ONG - Single Page Application (SPA)

## 📖 Visão Geral do Projeto
A **Young ONG** é uma plataforma web desenvolvida sob a arquitetura de *Single Page Application* (SPA). O projeto foi construído para fornecer uma navegação fluida e rápida, eliminando a necessidade de recarregamento do navegador a cada interação. Através da interceção da navegação e do uso da *Fetch API*, os fragmentos de código HTML são injetados dinamicamente no DOM, oferecendo uma experiência de utilização semelhante à de um aplicativo nativo.

## 🚀 Tecnologias Utilizadas
A aplicação foi construída visando a separação de responsabilidades e o baixo acoplamento, utilizando as seguintes tecnologias:
* **HTML5:** Estruturação semântica e criação de *templates* de fragmentos.
* **CSS3:** Estilização responsiva utilizando *CSS Grid* e *Flexbox* para adaptação a múltiplos dispositivos.
* **Vanilla JavaScript (ES6+):** Lógica central da aplicação, modularizada através de *ES6 Modules* (`import`/`export`).
* **SweetAlert2:** Biblioteca externa integrada via CDN para fornecimento de *feedback* visual (alertas e notificações) elegante e não obstrutivo.
* **Web Storage API:** Utilização do `localStorage` para a persistência de dados no lado do cliente.

## ✨ Funcionalidades Principais
* **Roteamento Assíncrono:** O motor da SPA interceta alterações no *Hash* da URL e utiliza a *Fetch API* para injetar o conteúdo correspondente na interface principal de forma programática.
* **Renderização Dinâmica:** Geração de componentes visuais (como cartões de projetos) a partir de *arrays* de dados, utilizando *Template Literals* e métodos de iteração (`.map()`).
* **Validação Preventiva de Formulários:** Sistema de consistência de dados em tempo real, utilizando Expressões Regulares (*RegEx*) para validar o formato do CPF e manipulação do DOM para injetar mensagens de erro e alterar estilos visuais.
* **Persistência de Dados:** Gravação, recuperação e conversão de registos de voluntários utilizando `JSON.stringify()` e `JSON.parse()` em conjunto com o `localStorage`.

## ⚙️ Como Executar o Projeto (Instalação Local)
Como a aplicação utiliza a *Fetch API* para requisitar ficheiros locais, é **obrigatório** correr o projeto através de um servidor local para evitar bloqueios de segurança do navegador (erros de CORS).

### 1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SeuUsuario/young-ong-spa.git](https://github.com/SeuUsuario/young-ong-spa.git)
   ```
### 2. **Abra o diretório no seu editor de código:**
   ```bash
   cd young-ong-spa
   ```
   (Recomenda-se o uso do Visual Studio Code).
   
### 3. **Inicie um Servidor Local:**
  
* Se utilizar o VS Code, instale a extensão Live Server.

* Clique com o botão direito do rato no ficheiro index.html e selecione "Open with Live Server".

* A aplicação será aberta automaticamente no seu navegador padrão (geralmente na porta 5500).


## 🌿 Práticas de Versionamento e Gestão
Este repositório foi gerido seguindo rigorosos padrões de mercado para garantir a rastreabilidade e a qualidade do código:

GitFlow: Adoção de uma estratégia de ramificação estruturada. A branch main está estritamente reservada para código de produção estável, enquanto a develop funciona como o ambiente de integração contínua. As novas lógicas foram desenvolvidas em branches do tipo feature/ e integradas via Pull Requests.

Conventional Commits: O histórico do projeto foi padronizado utilizando mensagens semânticas (ex: feat:, fix:, docs:) para facilitar a legibilidade e a revisão técnica.

Versionamento Semântico (SemVer): O ciclo de vida da aplicação está documentado através de tags de release, culminando na entrega do Produto Mínimo Viável (MVP) identificado pela versão v1.0.0.
