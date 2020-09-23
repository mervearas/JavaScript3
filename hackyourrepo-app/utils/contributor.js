"use strict";
import { fetchData } from "./fetchData.js";
import { createPagination } from './pagination.js';
import { contributors_url } from './repository.js';

export function setContributors (currentPage) {
    fetchData(contributors_url)
        .then((contributors) => {
            const totalPage = Math.ceil(contributors.length / 5);
            const paginatedData = contributors.slice((currentPage - 1) * 5, currentPage * 5);
            createContributorsDom(paginatedData);
            createPagination(currentPage,totalPage);
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