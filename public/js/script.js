let presentButton = document.querySelector('#present')
let display       = document.querySelector('#display')

presentButton.addEventListener('click', async ()=> { 


    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(findLocation));
    } 
    else {
      console.log("Geolocation is not supported by this browser.");
    }

    function findLocation(position) {
        if(position.coords.latitude == "latitude" && position.coords.longitude == "longitude"){
            return getStatus()
        }
        else{
            display.innerHTML = 'you no dey class stop dey lie'
        }
      }  
  })

console.log(getLocation())


let getStatus = async () => {

    const data = {
        student_id : '',
        timeIn: '',
        status: '',
    }

    const setting = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try {
        
        const fetchResponse = await fetch(`http:localhost:8008/`, setting)
        const data = await fetchResponse.json()
        return data;

    } catch (error) {
        return error       
    }
}