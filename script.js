const adviceId = document.getElementById('adviceId');
const btnGo = document.getElementById('btn-go');
const btn2Go = document.getElementById('btn2-go');
const content = document.getElementById('content');
const numberAdvice = document.getElementById('numberAdvice');
const divIdMessage = document.getElementById('divIdMessage');

const fetchApi = () => {
    const result = fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Perfeito você conseguiu");
            //console.log(data);
            return data;
        })
        .catch((error) => {
            console.error('Ocorreu um erro ao buscar os dados:', error);
            throw error; // Rejeita a promessa com o erro
        });
        return result;
}

const fetchApiId = (value) => {
    const result = fetch(`https://api.adviceslip.com/advice/${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Perfeito você conseguiu");
            //console.log(data);
            return data;
        })
        .catch((error) => {
            console.error('Ocorreu um erro ao buscar os dados:', error);
            throw error; // Rejeita a promessa com o erro
        });
    return result;
};

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const recebeId = await fetchApi();
    content.textContent = `${JSON.stringify(recebeId.slip.advice)}`;
    numberAdvice.textContent = `"Advice ${JSON.stringify(recebeId.slip.id)}"`;
});

btn2Go.addEventListener('click', async (event) => {
    event.preventDefault();
    if (adviceId.value === '' || adviceId.value < 1 || adviceId.value > 224) {
        divIdMessage.textContent = "Não pode estar vazio ou este número não esta na lista";
    } else {
        divIdMessage.textContent = "";
        const recebeId = await fetchApiId(adviceId.value);
        content2.textContent = JSON.stringify(recebeId.slip.advice);
    }
});
