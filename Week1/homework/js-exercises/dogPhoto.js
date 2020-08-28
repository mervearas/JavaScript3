const withXhr = document.getElementById("withXhr");
const withAxios = document.getElementById("withAxios");

withXhr.addEventListener("click", getDogPhotoWithXhr)
withAxios.addEventListener("click", getDogPhotoWithAxios)

function getDogPhotoWithXhr(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")

    xhr.onload = function(){
        if(xhr.status === 200){
            let list = document.createElement("li");
            let unorderedLidt = document.querySelector("ul");
            unorderedLidt.appendChild(list);
            let image = document.createElement("img");
            image.src = JSON.parse(xhr.response).message;
            list.appendChild(image);
        }
    }

    xhr.onerror = function() {
        console.log('An error occured!' + xhr.responseText);
    }

    xhr.send();
}

function getDogPhotoWithAxios(){
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            let list = document.createElement("li");
            let unorderedLidt = document.querySelector("ul");
            unorderedLidt.appendChild(list);
            let image = document.createElement("img");
            image.src = response.data.message;
            list.appendChild(image);
        })
        .catch(function(err){
            console.log('An error occured!' + err);
        })
}