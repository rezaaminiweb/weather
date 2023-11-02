let _inp = document.getElementById('input')
let _select =document.getElementById('icon')
let imgaval = document.getElementById('imgaval')
// console.log(city);
const APIKEY = 'd5a60d0948fdbb96eef14c19d1ff408b';
_select.addEventListener('click',()=>{
    
    
    fetchdata()
    
})
async function fetchdata(){
    const city = _inp.value;
    const x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
    const y = await x.json()
    const yname = y.name
    console.log(yname);
    xop = yname.toUpperCase()
    console.log(xop);
    // console.log(city == 'usa');
    // console.log(city.toUpperCase() === xop);

    // let wheath = y.weather[0].main
    if(city.toUpperCase() === xop){
        switch(y.weather[0].main){
            case 'Clouds' : imgaval.src='images/Clouds.png';break;
            case 'Rain' : imgaval.src = 'images/rain.png';break;
            case 'clear' : imgaval.src = 'images/clear.png'; break;
            case 'Drizzle':imgaval.src = 'images/drizzle.png';break;
            case 'Mist' : imgaval.src = 'images/mist.png';break;
            case 'Snow' : imgaval.src = 'images/snow.png';break;
            // case 
        }
        const berlin = document.getElementById('berlin')
        const dama = document.getElementsByTagName('h1')[0]
        const bad = document.getElementsByTagName('h1')[2]
        const sorat = document.getElementsByTagName('h1')[3]
        const humid = document.getElementsByTagName('h4')[0]
        const windspeed = document.getElementsByTagName('h4')[1]
        console.log(bad);
        berlin.innerHTML = `${city}`
        dama.innerHTML = `${y.main.temp}`
        bad.innerHTML=`${y.main.humidity}`
        sorat.innerHTML = `${y.wind.speed}`

    }
         if (city == 'usa'){
        switch(y.weather[0].main){
            case 'Clouds' : imgaval.src='images/Clouds.png';break;
            case 'Rain' : imgaval.src = 'images/rain.png';break;
            case 'clear' : imgaval.src = 'images/clear.png'; break;
            case 'Drizzle':imgaval.src = 'images/drizzle.png';break;
            case 'Mist' : imgaval.src = 'images/mist.png';break;
            case 'Snow' : imgaval.src = 'images/snow.png';break;
            // case 
        }
        const berlin = document.getElementById('berlin')
        const dama = document.getElementsByTagName('h1')[0]
        const bad = document.getElementsByTagName('h1')[2]
        const sorat = document.getElementsByTagName('h1')[3]
        const humid = document.getElementsByTagName('h4')[0]
        const windspeed = document.getElementsByTagName('h4')[1]
        console.log(bad);
        berlin.innerHTML = `${city}`
        dama.innerHTML = `${y.main.temp}`
        bad.innerHTML=`${y.main.humidity}`
        sorat.innerHTML = `${y.wind.speed}`

    }
    
    else if(city != xop){

        
    }
    // if(city != )
console.log(imgaval.src);


}
function inpuut(e){
    // console.log(e);
    if(e.keyCode == 13 ){
        fetchdata()
    }
}
    
//    if(city=='')
//    return;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
   
//    .then(res => res.json).then(json =>{
//     console.log(json.weather[0].main);
//    })

// async function fetchdata(){
//     const x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
//     const y = await x.json()
//     console.log(y)
    
