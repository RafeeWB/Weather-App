function button (){
    const text = document.getElementById("input").value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+text+'&appid=859caf58fadd76e21b8e5e10ed2cc338')
    .then(res => res.json())
    .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15
        const description = data.weather[0].description
        const id = data.weather[0].id

        document.getElementById("city").innerText = cityName
        document.getElementById("tem").innerText = temp.toFixed(2)
        document.getElementById("des").innerText = description
        let temicon = document.getElementById("icon")

        if(id<=321 && id>=199){
            temicon.src="images/strom.svg"
        }
        else if(id<=531 && id>=500){
            temicon.src="images/rain.svg"
        }
        else if(id<=622 && id>=600){
            temicon.src="images/snow.svg"
        }
        else if(id<=781 && id>=701){
            temicon.src="images/haze.svg"
        }
        else if(id==800){
            temicon.src="images/clear.svg"
        }
        else if(id<=804 && id>=801){
            temicon.src="images/cloud.svg"
        }
    })
    .catch(res => alert("Please enter a valid city name. Or check your spelling."))
}