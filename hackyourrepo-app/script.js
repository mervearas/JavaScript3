import { fetchData } from './utils/fetchData.js';
import { setSelectedRepositoryByName } from './utils/repository.js';
import { createDomElements } from './utils/createDomElements.js';
/*
  Write here your JavaScript for HackYourRepo!
*/
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

createDomElements();

const select = document.getElementById('selectRepository');
select.addEventListener('change', function(event){
  setSelectedRepositoryByName(event.target.value);
});

function main () {
  fetchData(url)
    .then((repositories) => {
      repositories.forEach(function(repository) {
        const option = document.createElement('option');
        option.innerText = repository.name;
        option.value = repository.url;
        select.appendChild(option);
      });
      setSelectedRepositoryByName(repositories[0].url);
    })
}

window.onload = main();