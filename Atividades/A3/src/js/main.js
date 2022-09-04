
import mascaraDeFormulario from './modules/mask.js'
//import validarUsuario from '.modules/mask.js'

const nomeUsuario = document.getElementById('nome')
const cpfUsuario = document.getElementById('cpf')
const datNascimentoUsuario = document.getElementById('dt_nasc')
const emailUsuario = document.getElementById('email')
const telefoneUsuario = document.getElementById('fone')
const cepUsuario = document.getElementById('cep')
let validNome = false
let validCPF = false
let validDatNascimento = false
let validEmail = false
let validTelefone = false
let validCEP = false
let labelNome = document.getElementById('labelNome')
let labelCPF = document.getElementById('labelCPF')
let labeldt = document.getElementById('labeldt')
let labelEmail = document.getElementById('labelEmail')
let labelTelefone = document.getElementById('labelTelefone')
let labelCEP = document.getElementById('labelCEP')

nomeUsuario.addEventListener('keyup', () => {
    if (nomeUsuario.value != "" && nomeUsuario.value.length > 5) {
    labelNome.setAttribute('style', 'color: green')
    validNome = true
    } else {
        labelNome.setAttribute('style', 'color: red')
        validNome = false
    }
}),

cpfUsuario.addEventListener('keyup', () => {
    if (cpfUsuario.value.length == 14 ) {
    labelCPF.setAttribute('style', 'color: green')
    validCPF = true
    } else {
        labelCPF.setAttribute('style', 'color: red')
        validCPF = false
    }
}),

emailUsuario.addEventListener('keyup', () => {
    if(emailUsuario.value.indexOf('@') != -1 && emailUsuario.value.indexOf('.com') != -1) {
    labelEmail.setAttribute('style', 'color: green')
    validEmail = true
    } else {
        labelEmail.setAttribute('style', 'color: red')
        validEmail = false
    }
}),

cepUsuario.addEventListener('keyup', () => {
    if (cepUsuario.value.length == 9) {
    labelCEP.setAttribute('style', 'color: green')
    validCEP = true
    } else {
        labelCEP.setAttribute('style', 'color: red')
        validCEP = false
    }
}),

telefoneUsuario.addEventListener('keyup', () => {
    if (telefoneUsuario.value.length == 15 || telefoneUsuario.value.length == 14) {
    labelTelefone.setAttribute('style', 'color: green')
    validTelefone = true 
    } else {
    labelTelefone.setAttribute('style', 'color: red')
    validTelefone = false
    }
})
