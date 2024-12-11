import "./styles.css";

async function getLocation(location){
    
    const locationGet = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`)
    location = await locationGet.json()
    console.log(location)
}

getLocation("paris")