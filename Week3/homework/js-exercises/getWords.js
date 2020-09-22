// Exercise A with async await
async function getData(url){
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch{
        console.log("error",error)
    }
}

getData('https://randomfox.ca/floof/');

  
// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async (array) => {
    try {
        return await new Promise((resolve, reject) => {
            let capsArray = array.map(word => {
                if (typeof word === 'string') {
                return word.toUpperCase();
                } else {
                reject('Error: Not all items in the array are strings!');
                }
            });
            resolve(capsArray);
        });
    } catch (error) {
        console.log("error",error)
    }
};

makeAllCaps(arrayOfWords)
.then(result => console.log(result))
.catch(error => console.log(error));

