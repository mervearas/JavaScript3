import { setContributors } from './contributor.js';

export function createPagination(pageNumber, totalPage) {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = "pagination-container";
    paginationContainer.id = "pagination"
    document.body.appendChild(paginationContainer);

    const previousButton = document.createElement('div');
    previousButton.innerText = "<";
    previousButton.id = "previous-button";
    previousButton.className = "pagination-item";
    paginationContainer.appendChild(previousButton);

    for(let i = 1; i <= totalPage; i++) {
        const paginationItem = document.createElement('div');
        paginationItem.className = "pagination-item";
        paginationItem.innerHTML = i;
        paginationItem.id = `page${i}`;
        if(i === pageNumber) {
            paginationItem.className = "active";
            paginationItem.id = "active";
        }
        paginationContainer.appendChild(paginationItem);
    }

    const nextButton = document.createElement('div');
    nextButton.innerText = ">";
    nextButton.id = "next-button";
    nextButton.className = "pagination-item";
    nextButton.addEventListener('click', function() {
        nextPage(totalPage);
    });
    paginationContainer.appendChild(nextButton);
}

function nextPage (totalPageNumber) {
    console.log(totalPageNumber);
    const currentPage = document.getElementById('active');
    const nextPageNumber = Number(currentPage.innerText) + 1;

    if(nextPageNumber > totalPageNumber) {
        return;
    }

    currentPage.className = "pagination-item";
    const newPageNumber = document.getElementById(`page${nextPageNumber}`);
    newPageNumber.className = "active";

    setContributors(nextPageNumber);
}

function previousPage (start, end, totalPageNumber) {
    const currentPage = document.getElementById('active');

    if(currentPage === 1) {
        return;
    }

    const nextPageNumber = parseInt(currentPage) - 1;
}