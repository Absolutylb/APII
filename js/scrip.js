function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

  
    if (username === 'vini' && password === 'vini') {
        alert('Login bem-sucedido!');
        
        
        window.location.href = 'index.html';

        return false; 
    } else {
        alert('Credenciais inválidas. Tente novamente.');
        return false; 
    }
}