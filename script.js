let inputELE=document.getElementById('LocationInput')
let tempELE=document.getElementById('temp-value')
let locateELE= document.getElementById('location')
let weatherELE= document.getElementById('weather-desc')
let b1=document.getElementById('btn')
let iconEle= document.getElementById('logo')
 const apiKey='ee5ad20b071c05706c0caa8bda613c17';
 
 b1.onclick = function(){
    if(inputELE.value==""){
        alert("Please enter the Correct Location:")
    }
    else{
        loca= inputELE.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${apiKey}`
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempELE.innerText=Math.floor(feels_like-273)
            locateELE.innerText=name
            weatherELE.innerText=description
        })
        .catch(()=>{
            alert("Enter Valid Adress")
        })
        inputELE.value= ""
    }
 }