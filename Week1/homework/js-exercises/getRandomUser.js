function getRandomUserWithXmlHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.randomuser.me/api");

    xhr.onload = function() {
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response))
        }
    }

    xhr.onerror = function() {
        console.log('An error occured!' + xhr.responseText);
    }

    xhr.send();
}

function getRandomUserWithAxios() {
    axios.get('https://www.randomuser.me/api')
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(err) {
            console.log('An error occured!' + err);
        })
}

getRandomUserWithXmlHttpRequest();
getRandomUserWithAxios();