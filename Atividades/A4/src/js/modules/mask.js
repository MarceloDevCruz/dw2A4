
export default document.querySelectorAll('input').forEach($input => {
    const cepInput = $input.dataset.js
    $input.addEventListener('input', e => {
        e.target.value = cepInputMask[cepInput](e.target.value)
    }, false)
})


const cepInputMask = {

    cep(value) {
        return value
            .replace(/\D+/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    }
}