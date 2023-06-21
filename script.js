const jokesContainer = document.getElementById('jokes-container')
const newJoke = document.querySelector('#new-joke')
async function displayOnTheScreen(res){
    jokesContainer.innerText = res.value;
}
async function callToAPI(){
    try{
    const req =  await fetch('https://api.chucknorris.io/jokes/random?name=Nursultan')
    const res =  await req.json()
    displayOnTheScreen(res)
    }catch(e){
        console.error()
    }
}
newJoke.addEventListener('click',function(){
    callToAPI()
})