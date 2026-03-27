document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const mensagem = document.getElementById('message');

    if (usuario === "Kayky" && senha === "123") {
        mensagem.style.color = "green";
        mensagem.innerText = "Login realizado com sucesso! Redirecionando...";
        
        // Redireciona para a página de sucesso após 1.5 segundos
        setTimeout(function() {
            window.location.href = "success.html";
        }, 1500);
    } else {
        mensagem.style.color = "red";
        mensagem.innerText = "Usuário ou senha incorretos.";
    }
});