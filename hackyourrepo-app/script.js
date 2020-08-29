"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const select = document.getElementById('selectRepository');
select.addEventListener('change', function(event){
  setSelectedRepositoryByName(event.target.value);
});

placeholderRepos.forEach(function(repository) {
  const option = document.createElement('option');
  option.innerText = repository.name;
  option.value = repository.name;
  select.appendChild(option);
});

function setSelectedRepositoryByName (repositoryName) {
  const selectedRepository = placeholderRepos.filter(function(repository) {
    if(repository.name === repositoryName) {
      return true;
    } else {
      return false;
    }
  });

  document.getElementById('repository-name').innerText = selectedRepository[0].name;
  document.getElementById('repository-description').innerText = selectedRepository[0].description;
  document.getElementById('repository-forks').innerText = selectedRepository[0].forks;
  document.getElementById('repository-updated').innerText = selectedRepository[0].updated;
}

window.onload = setSelectedRepositoryByName(placeholderRepos[0].name);