

const fetchApi = (value) => {
    const result = fetch(`https://api.adviceslip.com/advice/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
    console.log(result);
}

fetchApi(2);