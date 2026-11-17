// ==========================================
// Aula 14 - Manipulação do DOM com JavaScript
// Projeto: Formulário de cadastro com JavaScript
// ==========================================

// Passo 1: Selecionar o formulário e o container do alerta
const formCadastro = document.getElementById('registerForm');
const alertaContainer = document.getElementById('alertaContainer');

if (formCadastro) {
    // Passo 2: Adicionar ouvinte para o evento de envio (submit)
    formCadastro.addEventListener('submit', function (event) {
        // Passo 3: Impedir o comportamento padrão de recarregar a página
        event.preventDefault();

        // Passo 4: Ler os dados dos campos do formulário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const selectCategoria = document.getElementById('categoria');
        const categoriaTexto = selectCategoria.value 
            ? selectCategoria.options[selectCategoria.selectedIndex].text 
            : 'Não informada';
        const novidades = document.getElementById('novidades') ? document.getElementById('novidades').checked : false;
        const termos = document.getElementById('termos').checked;

        // Passo 5: Agrupar os dados lidos em um objeto
        const usuario = {
            nome: nome,
            email: email,
            categoria: categoriaTexto,
            novidades: novidades,
            termos: termos
        };

        console.log('Objeto do usuário cadastrado:', usuario);

        // Passo 6: Exibir alerta verde na tela (alert alert-success do Bootstrap)
        // com nome, e-mail e categoria escolhida, sem mostrar a senha
        if (alertaContainer) {
            alertaContainer.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <h5 class="alert-heading mb-2"><i class="bi bi-check-circle-fill me-2"></i>Cadastro realizado com sucesso!</h5>
                    <p class="mb-1"><strong>Nome:</strong> ${usuario.nome}</p>
                    <p class="mb-1"><strong>E-mail:</strong> ${usuario.email}</p>
                    <p class="mb-0"><strong>Categoria:</strong> ${usuario.categoria}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
                </div>
            `;
        }

        // Passo 7: Limpar o formulário depois do cadastro
        formCadastro.reset();
    });
}
