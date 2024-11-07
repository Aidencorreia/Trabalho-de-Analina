$(document).ready(function() {
    $("#enviarDados").click(function() {
        const dados = { nome: "João", idade: 30 };
        $.post("https://api.exemplo.com/usuarios", dados, function(resposta) {
            alert("Dados enviados: " + resposta);
        })
        .fail(function() {
            alert("Erro ao enviar dados.");
        });
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar lógica para autenticar o usuário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lógica de validação de login (simulada)
    if (username === "admin" && password === "senha") {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para o dashboard
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Código jQuery para o evento de clique no botão "Enviar Dados"
$(document).ready(function() {
    $("#enviarDados").click(function() {
        const dados = { nome: "João", idade: 30 };
        $.post("https://api.exemplo.com/usuarios", dados, function(resposta) {
            alert("Dados enviados: " + resposta);
        })
        .fail(function() {
            alert("Erro ao enviar dados.");
        });
    });
});
