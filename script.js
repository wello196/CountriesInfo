'use strict';

const btn = document.querySelector('.searchButton');
const input = document.querySelector('.searchInput');
const countriesContainer = document.querySelector('.countries');



function renderError(msg){
    countriesContainer.insertAdjacentText('beforeend',msg)
    
}
function renderCountry(data,className=''){
    const html=` <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(2)} Million People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`
        countriesContainer.insertAdjacentHTML('beforeend',html);
        
}


const whereAmI=async function (country){
    try{
    const response = await fetch(`https://restcountries.com/v2/name/${country}`);
    if(!response.ok) throw new Error(`Country not found ${country}`)
    const data=await response.json();
    renderCountry(data[0]);
    const neighbours=data[0].borders;
    if (!neighbours) return;
    await Promise.all(neighbours.map(async neighbour=>{
        const response=await fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        if(!response.ok) throw new Error(`neighbour not found ${neighbour}`)
        const data=await response.json()
        renderCountry(data,'neighbour')
    }))
}catch(err){
    renderError(`Something went wrong ${err.message}`)
}
finally{
    countriesContainer.style.opacity=1
}
}

btn.addEventListener('click', function() {
    
    
    const countryName=input.value;
    countriesContainer.innerHTML = '';
    countriesContainer.style.opacity = 0;
    setTimeout(() => {
        whereAmI(countryName);
       
    }, 500);
    input.value='';
    
});



