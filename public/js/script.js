let presentButton = document.querySelector('#present')
let display       = document.querySelector('#display')

presentButton.addEventListener('click', async ()=> { 


    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(findLocation));
    } 
    // else {
    //   console.log("Geolocation is not supported by this browser.");
    // }

    function findLocation(position) {
        if(position.coords.latitude == 9.0570752 && position.coords.longitude == 7.471104){
            console.log('corerctcorrds')
            let getStatus = async () => {

                const data = {
                    status: 'present',
                    date:   '',
                    browser: ''
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
                    
                    const fetchResponse = await fetch(`http://localhost:8008/api/user/123/attendance`, setting)
                    const response = await fetchResponse.json()
                    return console.log(response);
            
                } catch (error) {
                    return error       
                }
            }
            return getStatus()
        }
        else{
            console.log = 'you no dey class stop dey lie'
        }
      }  
  })



