
export default function covidPesquisaPorCEP() {
    const cep = document.querySelector('#cep')
    const state = document.querySelector('#state')
    const uf = document.querySelector('#uf')
    const uid = document.querySelector('#uid')
    const cases = document.querySelector('#cases')
    const death = document.querySelector('#death')
    const suspects = document.querySelector('#suspects')
    const refuses = document.querySelector('#refuses')
    const datetime = document.querySelector('#datetime')

    try {
        cep.addEventListener('blur', evento => {
            const CEP = evento.target.value
            let UF = ''

            fetch(`https://viacep.com.br/ws/${CEP}/json/`)
                .then(function (respostaCEP) {
                    return respostaCEP.json()
                })
                .then(function (dadosCEP) {
                    UF = dadosCEP.uf

                    fetch(`https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${UF}`)
                        .then(function (respostaCovid) {
                            return respostaCovid.json()
                        })
                        .then(function (dadosCovid) {
                            uid.value = dadosCovid.uid
                            uf.value = dadosCovid.uf
                            state.value = dadosCovid.state
                            cases.value = dadosCovid.cases
                            death.value = dadosCovid.deaths
                            suspects.value = dadosCovid.suspects
                            refuses.value = dadosCovid.refuses
                            datetime.value = dadosCovid.datetime
                        })
                })
        })

    } catch (e) {
        console.log('ERRO!')
    }
}
