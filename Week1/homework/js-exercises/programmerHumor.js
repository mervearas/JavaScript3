function requestWithXmlHttp(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://xkcd.now.sh/?comic=latest");

    xhr.onload = function(){
        if(xhr.status === 200){
            let image = document.createElement("img");
            image.src = JSON.parse(xhr.response).img;
            document.body.appendChild(image);
            console.log(JSON.parse(xhr.response));
        }
    }

    xhr.onerror = function(){
        console.log('An error ocuured!' + xhr.response);
    }

    xhr.send();
}

requestWithXmlHttp();


function requestWithAxios(){
    axios.get('https://xkcd.now.sh/?comic=latest')
      .then(function(response){
        let image = document.createElement("img");
        image.src = response.data.img;
        document.body.appendChild(image);
          console.log(response.data);
       })
       .catch(function(){
           console.log('An error ocuured!' + err)
       })
}

requestWithAxios();

let image = document.createElement("img")
