
// latitude
// : 
// 24.9498356
// longitude
// : 
// 66.9849889


// navigator.geolocation.getCurrentPosition(
//     position =>console.log(position),
//     err => console.error(err)
// )



// const whereIam = function(latitude,longitude){
//     fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=17820895859891369103x55756`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
//         console.log(`you are in ${data.city} and ${data.country}`)
//     })
//     .catch((err)=>console.log(err))

// }

// whereIam(24.9498356,66.9849889)


// const country = function(countryName){
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }

// country("Canada")

// let getGeoCode = (latitude,longitude)=>{
//     return new Promise ((resolve,reject)=>{
//         fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=17820895859891369103x55756`)
//         .then((res)=>res.json())
//         .then((res)=>
//         resolve(res))
//         .catch(err => reject(err))
//     })
// }


let countryInput = document.getElementById("countryInput")
let search = document.getElementById("search")
let searchResult =document.getElementById("searchResult")
let flag =document.getElementById("flag")
let name =document.getElementById("name")
let capital =document.getElementById("capital")
let Continent =document.getElementById("Continent")
let population =document.getElementById("population")
let currency =document.getElementById("currency")
let CurrencyShort = document.getElementById("CurrencyShort")
let Language =document.getElementById("Language")

search.addEventListener("click",()=>{
    let countryName = countryInput.value
    let countryUrl = (`https://restcountries.com/v3.1/name/${countryName}`)
    fetch(countryUrl)
    .then((res)=>res.json())
    .then((data)=>{
        searchResult.style.display = 'block'
        countryData = data[0]
        console.log(countryData)

        flag.src = countryData.flags.svg
        name.innerHTML = countryData.name.common
        capital.innerHTML = countryData.capital
        Continent.innerHTML = countryData.continents
        population.innerHTML = countryData.population
        currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
        CurrencyShort.innerHTML =Object.keys(countryData.currencies)
        Language.innerHTML = Object.values(countryData.languages)
        

    })
    .catch((err)=>{
        console.log(err)
    })
})




// let getData = async function(){
//     try {
//         let geoCodeData = await getGeoCode(24.9498356,66.9849889)
//         let  countryData = await getCountry(geoCodeData.country)
//         console.log(geoCodeData)
//         console.log(countryData[0])
//         document.querySelector(".card-title").innerHTML = countryData[0].altSpellings[1]
//         document.querySelector("#city").innerHTML = countryData[0].altSpellings[1]
//         document.querySelector("#country").innerHTML = countryData[0].capital[0]
//         let borders = []
//         countryData[0].borders.forEach((item)=>{
//             borders.push(`<a href="#" class="btn btn-primary">${item}</a>`)
//         })
//         let borderMain = borders.join("")
//         document.querySelector(".border").innerHTML = borderMain
//         console.log(borderMain)
        
//     } catch (err) {
//         console.log(err)
        
//     }
// }

// getData()