const button = document.getElementById('btn__submit');
const title = document.getElementById('advice__heading');
const quote = document.getElementById('advice__body');


button.addEventListener('click', () =>{
    fetchAPI();
})


const fetchAPI = async() =>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    title.textContent = `Advice #${data.slip.id}`;
quote.textContent = `" ${data.slip.advice} "`;
}