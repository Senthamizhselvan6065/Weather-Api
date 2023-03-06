async function urlshort(url){
   v = fetch(url)
   var data2 = await v 
   var data3 = await data2.json()
   return data3
}

async function apiCall(){
    result = await urlshort('https://restcountries.com/v3.1/all')
   //  console.log(result);
     for(let i of result){
        let data_all = document.querySelector('.weather')
        let div = document.createElement('div')
        div.classList.add('box')
        try{
    
            lat = i.latlng[0]
            lng = i.latlng[1]
            div.setAttribute('lat',lat)
            div.setAttribute('lng',lng)
            // console.log(i.latlng);

            // Name
        //    console.log(i.name.common);
           let h3 = document.createElement('h5')
           h3.innerText = i.name.common
           div.append(h3)
 
        // Flags
        // console.log(i.flags.png);
        let flags = document.createElement('img')
        flags.setAttribute('src',i.flags.png)
        div.append(flags)
            
        // Capital
        //   console.log(i.capital);
          let capital = document.createElement('p')
          capital.innerText = `Capital: ${i.capital}`
          div.append(capital)

          // Region
        //   console.log(i.region);
          let region = document.createElement('p')
          region.innerText = `Region: ${i.region}`
          div.append(region)

        // Country Code
        let code = document.createElement('p')
        code.innerText = `Country Code: ${i.area}`
        div.append(code)

        // Button 
        let btn_weather = document.createElement('button')
        btn_weather.setAttribute('onclick','weatherapi(this)')

        btn_weather.setAttribute('data-bs-target','#exampleModal')
        btn_weather.setAttribute('data-bs-toggle','modal')
        btn_weather.setAttribute('type','button')
        btn_weather.innerText = 'Click for Weather'
        div.append(btn_weather)


           data_all.append(div)
        }
        catch{
            console.log('error');
        }
     }
}
apiCall()

var API_key = '445681a5bd1f4a5fc00e7c0fc3d05726'

async function weatherapi(e){
   //  console.log(e);
   //  console.log(e.parentElement);
    let popUp = document.querySelector('#exampleModal .modal-body')
    var parent = e.parentElement
    var lat = parent.getAttribute('lat')
    var lon = parent.getAttribute('lng')
   //  console.log(lat);
   //  console.log(lon);
   //  console.log('getting');
    var weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

    out1 = await urlshort(weather)
     popUp.innerHTML = `<span>Description : ${out1.weather[0].description}</span><span>Main : ${out1.weather[0].main}</span><span>Icon : ${out1.weather[0].icon}</span><span>Id : ${out1.weather[0].id}</span>`
   //  console.log(out1.weather[0].description);
   //  console.log(out1);
}