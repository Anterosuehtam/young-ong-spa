export const configurarFormulario = () => {
    const form = document.getElementById('form-cadastro');
    
    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            
            const inputNome = document.getElementById('nome').value;
            const inputEmail = document.getElementById('email').value;
            const inputCpf = document.getElementById('cpf');
            const valorCpf = inputCpf.value;
            
            const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

            const erroAntigo = document.getElementById('msg-erro-cpf');
            if (erroAntigo) erroAntigo.remove();
            
            if (!regexCpf.test(valorCpf)) {
                inputCpf.style.borderColor = 'red';
                inputCpf.insertAdjacentHTML('afterend', '<span id="msg-erro-cpf" style="color: red; font-size: 12px; display: block; margin-top: 4px;">Formato inválido. Use 000.000.000-00</span>');
            } else {
                inputCpf.style.borderColor = 'green';
                
                const novoVoluntario = { nome: inputNome, email: inputEmail, cpf: valorCpf };
                const cadastrosAntigos = localStorage.getItem('voluntariosONG');
                let listaVoluntarios = cadastrosAntigos ? JSON.parse(cadastrosAntigos) : [];
                listaVoluntarios.push(novoVoluntario);
                localStorage.setItem('voluntariosONG', JSON.stringify(listaVoluntarios));

                Swal.fire({
                    title: 'Cadastro Realizado!',
                    text: 'Os seus dados foram guardados com sucesso na plataforma.',
                    icon: 'success',
                    confirmButtonText: 'Fantástico!',
                    confirmButtonColor: '#0056b3'
                });

                form.reset();
                inputCpf.style.borderColor = '#ccc'; 
            }
        });
    }
};