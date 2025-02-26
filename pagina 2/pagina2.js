document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para autenticação
    console.log('Email:', email);
    console.log('Senha:', password);

    // Exemplo de mensagem de sucesso
    alert('Login realizado com sucesso!');
});
