"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function createDomElements () {
  // app bar
  const appBar = document.createElement("section");
  appBar.className = "app-bar";

  const appTitle = document.createElement("p");
  appTitle.className = "app-title";
  appTitle.innerText = "HYF Repositories"
  appBar.appendChild(appTitle);

  const selectRepository = document.createElement("select");
  selectRepository.id = "selectRepository";
  selectRepository.setAttribute("name", "hyf-repositories");
  appBar.appendChild(selectRepository);
  document.body.appendChild(appBar);

  // content
  const main = document.createElement("main");
  main.className = "app-content";
  main.id = "content";
  document.body.appendChild(main);

  // repository info section
  const repositoryInfo = document.createElement("section");
  repositoryInfo.id = "repo";
  repositoryInfo.className = "repository-info";
  main.appendChild(repositoryInfo);

  // repostiory info table
  const table = document.createElement("table");
  table.id = "repo-details";
  repositoryInfo.appendChild(table);

  // repository name
  const repositoryNameRow = document.createElement("tr");
  const repositoryNameTitle = document.createElement("td");
  repositoryNameTitle.className = "title";
  repositoryNameTitle.innerText = "Repository:"
  const repositoryName = document.createElement("td");
  const anchorElement = document.createElement("a");
  anchorElement.id = "repository-name";
  repositoryName.appendChild(anchorElement);
  repositoryNameRow.appendChild(repositoryNameTitle);
  repositoryNameRow.appendChild(repositoryName);
  table.appendChild(repositoryNameRow);

  // repository description
  const repositoryDescriptionRow = document.createElement("tr");
  const repositoryDescriptionTitle = document.createElement("td");
  repositoryDescriptionTitle.className = "title";
  repositoryDescriptionTitle.innerText = "Description:"
  const repositoryDescription = document.createElement("td");
  repositoryDescription.id = "repository-description";
  repositoryDescriptionRow.appendChild(repositoryDescriptionTitle);
  repositoryDescriptionRow.appendChild(repositoryDescription);
  table.appendChild(repositoryDescriptionRow);

  // repository forks
  const repositoryForksRow = document.createElement("tr");
  const repositoryForksTitle = document.createElement("td");
  repositoryForksTitle.className = "title";
  repositoryForksTitle.innerText = "Forks:";
  const repositoryForks = document.createElement("td");
  repositoryForks.id = "repository-forks";
  repositoryForksRow.appendChild(repositoryForksTitle);
  repositoryForksRow.appendChild(repositoryForks);
  table.appendChild(repositoryForksRow);

  // repository updated
  const repositoryUpdatedRow = document.createElement("tr");
  const repositoryUpdatedTitle = document.createElement("td");
  repositoryUpdatedTitle.className = "title";
  repositoryUpdatedTitle.innerText = "Updated:"
  const repositoryUpdated = document.createElement("td");
  repositoryUpdated.id = "repository-updated";
  repositoryUpdatedRow.appendChild(repositoryUpdatedTitle);
  repositoryUpdatedRow.appendChild(repositoryUpdated);
  table.appendChild(repositoryUpdatedRow);

  // contributors info
  const contributorsInfo = document.createElement("section");
  contributorsInfo.className = "contributors-info";
  contributorsInfo.id = "contributors";
  main.appendChild(contributorsInfo);
}

createDomElements();

const select = document.getElementById('selectRepository');
select.addEventListener('change', function(event){
  setSelectedRepositoryByName(event.target.value);
});

function setSelectedRepositoryByName (url) {
  fetchData(url)
    .then((repository) => {
      setContributors(repository.contributors_url)
      document.getElementById('repository-name').innerText = repository.name;
      document.getElementById('repository-name').href = repository.html_url;
      document.getElementById('repository-description').innerText = repository.description;
      document.getElementById('repository-forks').innerText = repository.forks;
      document.getElementById('repository-updated').innerText = repository.updated_at;
    })
}

function setContributors (url) {
  fetchData(url)
    .then((contributors) => {
      createContributorsDom(contributors);
    })
}

function createContributorsDom(contributors) {
  const contributorsContainer = document.getElementById("contributors");
  contributorsContainer.innerHTML = '';
  const contributorsTitle = document.createElement("h2");
  contributorsTitle.innerText = "Contributors";
  contributorsContainer.appendChild(contributorsTitle);
  contributors.map((contributor) => {
    const contributorsItem = document.createElement("div");
    contributorsItem.className = "contributors-item";
    const avatar = document.createElement("img");
    avatar.src = contributor.avatar_url;
    const anchorLink = document.createElement("a");
    anchorLink.href = contributor.html_url;
    anchorLink.innerText = contributor.login;
    const contributions = document.createElement("div");
    contributions.className = "contributions";
    contributions.innerText = contributor.contributions;
    contributorsItem.appendChild(avatar)
    contributorsItem.appendChild(anchorLink);
    contributorsItem.appendChild(contributions);
    contributorsContainer.appendChild(contributorsItem);
  })
}

// fetch data
function fetchData(url) {
  return fetch(url)
      .then((res) => {
          return res.json();
      })
      .catch(() => {
        const selectRepository = document.getElementById("selectRepository");
        selectRepository.innerHTML = "";
        const appContent = document.getElementById("content");
        appContent.innerHTML = "";
        const errorContainer = document.createElement("div");
        errorContainer.className = "errorContainer";
        const errorText = document.createElement("p");
        errorText.innerText = "Network request failed";
        errorContainer.appendChild(errorText);
        appContent.appendChild(errorContainer);
      })
}

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