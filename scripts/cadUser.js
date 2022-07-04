
/*validaçao local do preenchimento do formulário de cadastro de usuario*/


/*email*/
function validacaoEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("resultadoEmail").innerHTML = "<font color='green'>&radic; Email ok</font>";
    }
    else {
        document.getElementById("resultadoEmail").innerHTML = "<font color='red'>Verifique seu Email</font>";
    }
}

/*senha*/

function validacaoSenha(senha1, senha2) {
    if (senha1.value === senha2.value && senha1.value != "" && senha1.value.length >= 6) {

        document.getElementById("resultadoSenha").innerHTML = "<font color='green'>&radic;</font>";
    }
    else {

        if (senha1.value !== senha2.value) {
            document.getElementById("resultadoSenha").innerHTML = "<font color='red'>Senhas não conferem</font>";
        }
        else {
            document.getElementById("resultadoSenha").innerHTML = "<font color='red'>Sua senha precisa ter mais de 5 caracteres</font>";
        }
    }
}

// /*conexão com a api*/  
// window.addEventListener("load", () => {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         var data = new FormData(form);
//         console.log(data);

//         var axious = require('axios');

//         axious.post('http://50.16.171.43:8080/v1/user/create'), { data: data }.then(function (response) {
//             console.log(response);
//         })
//             .catch(function (error) {
//                 console.error(error);
//             });
//     });
// }); 

import axios from "axios";

axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

