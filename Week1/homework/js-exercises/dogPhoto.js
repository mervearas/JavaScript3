const withXhr = document.getElementById("withXhr");
const withAxios = document.getElementById("withAxios");

withXhr.addEventListener("click", getDogPhotoWithXhr)
withAxios.addEventListener("click", getDogPhotoWithAxios)

function getDogPhotoWithXhr(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")

    xhr.onload = function(){
        if(xhr.status === 200){
            displayDog(JSON.parse(xhr.response).message);
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
            displayDog(response.data.message);
        })
        .catch(function(err){
            console.log('An error occured!' + err);
        })
}

function displayDog(imageUrl) {
    let list = document.createElement("li");
    let unorderedList = document.querySelector("ul");
    unorderedList.appendChild(list);
    let image = document.createElement("img");
    image.src = imageUrl;
    list.appendChild(image);
}