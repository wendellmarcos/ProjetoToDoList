document.getElementById('nome').value();
document.getElementById('email').value();
document.getElementById('senha').value();
document.getElementById('telefone').value();
document.getElementById('confirmarSenha').value();

btnCadastrar.cadastrar();

function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var telefone = document.getElementById('telefone').value;
    var confirmarSenha = document.getElementById('confirmarSenha').com;

    if (nome == '' || email == '' || senha == '' || telefone == '' || confirmarSenha == '') {
        print('Preencha todos os campos!');
    }

    if(senha!= confirmarSenha) {
        alert(print('As senhas não conferem!'));
    }
    
    function addTarea( date, tarefa){
        var novaNarefa = document.createAttribute
        tarefa.value = tarefa;

    }

}