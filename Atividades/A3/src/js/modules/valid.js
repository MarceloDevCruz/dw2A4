export default nomeUsuario.addEventListener('keyup', () => {
    if (nomeUsuario.value != "" && nomeUsuario.value.length > 5) {
    labelNome.setAttribute('style', 'color: green')
    validNome = true
    } else {
        labelNome.setAttribute('style', 'color: red')
        validNome = false
    }
})


cpfUsuario.addEventListener('keyup', () => {
    if (cpfUsuario.value.length == 14 ) {
    labelCPF.setAttribute('style', 'color: green')
    validCPF = true
    } else {
        labelCPF.setAttribute('style', 'color: red')
        validCPF = false
    }
})

emailUsuario.addEventListener('keyup', () => {
    if(emailUsuario.value.indexOf('@') != -1 && emailUsuario.value.indexOf('.com') != -1) {
    labelEmail.setAttribute('style', 'color: green')
    validEmail = true
    } else {
        labelEmail.setAttribute('style', 'color: red')
        validEmail = false
    }
})

cepUsuario.addEventListener('keyup', () => {
    if (cepUsuario.value.length == 9) {
    labelCEP.setAttribute('style', 'color: green')
    validCEP = true
    } else {
        labelCEP.setAttribute('style', 'color: red')
        validCEP = false
    }
})

telefoneUsuario.addEventListener('keyup', () => {
    if (telefoneUsuario.value.length == 15 || telefoneUsuario.value.length == 14) {
    labelTelefone.setAttribute('style', 'color: green')
    validTelefone = true 
    } else {
    labelTelefone.setAttribute('style', 'color: red')
    validTelefone = false
    }
})