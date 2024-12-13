import "./styles.css";

async function getLocation(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`
    const response = await fetch(url)
    return response.json()
  
    
}

function getObject(){
    getLocation("bucharest").then(function(data){
        const weather = {
            temperature: data.currentConditions.temp,
            feelsLike: data.currentConditions.feelsLike,
            snow: data.currentConditions.snow,
        }

        console.log(weather)
        return weather
    })
        
    
}

getObject()


// const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`
    
// const obj = JSON.parse(stuff)
    // console.log(obj)

// // getLocation("london")

// getObject()
// getLocation("bucharest")

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bucharest?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json")
//     .then(response => response.json())
//     .then(data => console.log(data.currentConditions.temp))