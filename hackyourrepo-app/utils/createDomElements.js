"use strict";

export function createDomElements () {
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