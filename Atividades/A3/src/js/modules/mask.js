
// cpf      000.000.000-00
// cep      00000-000
// date     00/00/0000
// fone     (00) 00000-0000

/* Neste trecho de código está selecionando todos os inputs do html e 
adicionando eventos do tipo 'input' para mostrar a mascara de formatação */ 
// ---------------------------------------------------------------
export default document.querySelectorAll('input').forEach($input => {
    const inputField = $input.dataset.js
    $input.addEventListener('input', e => {
      e.target.value = inputMasks[inputField](e.target.value)
    }, false)
  })
// -----------------------------------------------------------------

/*Aplicando a formatação nos campos data-js relacionados do index.html
para cep, cpf, date e fone*/ 
// ---------------------------------------------------
const inputMasks = {
    cpf (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

    cep (value) {
        return value
        .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },

    date (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{4})\d+?$/, '$1')
    },

    fone (value) {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
          .replace(/(-\d{4})\d+?$/, '$1')
      }
}
// ---------------------------------------------------
