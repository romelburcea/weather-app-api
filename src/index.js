import "./styles.css";

async function getLocation(location){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`
    const response = await fetch(url)
    return response.json()
  
    
}

function getObject(){
    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`
    getLocation("bucharest") 
    .then(data => console.log(data.latitude))
    // const obj = JSON.parse(stuff)
    // console.log(obj)
}

// // getLocation("london")

// getObject()
// getLocation("bucharest")

// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bucharest?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json")
//     .then(response => response.json())
//     .then(data => console.log(data.currentConditions.temp))