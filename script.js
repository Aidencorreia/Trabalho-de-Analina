// Alternar entre modo claro e escuro
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

// Adicionando evento ao botão para alternar tema
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.innerText = 'Alternar Tema';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.top = '10px';
    themeToggleButton.style.right = '10px';
    document.body.appendChild(themeToggleButton);

    themeToggleButton.addEventListener('click', toggleTheme);
});

// Evento de submit do formulário
const form = document.getElementById('loginForm');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Aqui você pode adicionar lógica para validação ou envio dos dados
        console.log(`Usuário: ${username}, Senha: ${password}`);
        // Exibir mensagem de sucesso ou erro
        document.getElementById('loginError').innerText = "Login realizado com sucesso!";
    });
}

// Função para salvar tema no LocalStorage
const saveThemePreference = (theme) => {
    localStorage.setItem('theme', theme);
};

// Função para aplicar tema salvo
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
};

// Chame a função ao carregar a página
document.addEventListener('DOMContentLoaded', applySavedTheme);

// Função para armazenar informações do usuário na SessionStorage
const storeUserSession = (username) => {
    sessionStorage.setItem('username', username);
};

// Função para recuperar informações do usuário
const getUserSession = () => {
    return sessionStorage.getItem('username');
};

// Exemplo de uso após o login
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    storeUserSession(username);
    alert(`Bem-vindo, ${getUserSession()}!`);
});

// Função para criar um cookie
const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

// Função para ler um cookie
const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
};

// Exemplo de uso
setCookie('welcomeMessage', 'true', 1);
if (getCookie('welcomeMessage')) {
    alert('Bem-vindo de volta!');
}


let carros = [];

// Função para adicionar um carro
const addCarro = (carro) => {
    carros.push(carro);
    localStorage.setItem('carros', JSON.stringify(carros)); // Armazenar no LocalStorage
};

// Função para ler todos os carros
const getCarros = () => {
    return JSON.parse(localStorage.getItem('carros')) || [];
};

// Função para atualizar um carro
const updateCarro = (index, carroAtualizado) => {
    carros[index] = carroAtualizado;
    localStorage.setItem('carros', JSON.stringify(carros));
};

// Função para deletar um carro
const deleteCarro = (index) => {
    carros.splice(index, 1);
    localStorage.setItem('carros', JSON.stringify(carros));
};

// Inicializar a lista de carros ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carros = getCarros();
});

document.addEventListener("DOMContentLoaded", function() {
    const carrosDiv = document.getElementById("carros");

    const carros = [
        { modelo: "Fusca", ano: 1976 },
        { modelo: "Civic", ano: 2020 },
        { modelo: "Corolla", ano: 2021 },
    ];

    carros.forEach(carro => {
        const carroDiv = document.createElement("div");
        carroDiv.innerText = `${carro.modelo} - ${carro.ano}`;
        carrosDiv.appendChild(carroDiv);
    });
});
