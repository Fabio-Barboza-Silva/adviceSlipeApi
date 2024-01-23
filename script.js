const adviceId = document.getElementById('adviceId');
const adviceId2 = document.getElementById('adviceId2');
const btnGo = document.getElementById('btn-go');
const btn2Go = document.getElementById('btn2-go');
const content = document.getElementById('content');

const fetchApi = (value) => {
    const result = fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });
   return result;
}

const fetchApi2 = (value) => {
    const result = fetch(`https://api.adviceslip.com/advice/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });
   return result;
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const recebeId = await fetchApi();
    content.textContent = `${JSON.stringify(recebeId.slip.advice)}`;
});

btn2Go.addEventListener('click', async (event) => {
    event.preventDefault();
    const recebeId2 = await fetchApi2(adviceId2.value);
    content2.textContent = `${JSON.stringify(recebeId2.slip.advice)}`;
});