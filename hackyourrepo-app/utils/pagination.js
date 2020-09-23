import { setContributors } from './contributor.js';

export function createPagination(pageNumber, totalPage) {
    const pagination  = document.getElementById('pagination');
    
    if(pagination) {
        pagination.remove();
    }

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    paginationContainer.id = 'pagination'
    document.body.appendChild(paginationContainer);

    const previousButton = document.createElement('div');
    previousButton.innerText = '<';
    previousButton.id = 'previous-button';
    previousButton.className = 'pagination-item';
    previousButton.addEventListener('click', previousPage);
    paginationContainer.appendChild(previousButton);

    for(let i = 1; i <= totalPage; i++) {
        const paginationItem = document.createElement('div');
        paginationItem.addEventListener('click', function() {
            setContributors(i);
        });
        paginationItem.className = 'pagination-item';
        paginationItem.innerHTML = i;
        paginationItem.id = `page-${i}`;
        if(i === pageNumber) {
            paginationItem.className = 'active';
        }
        paginationContainer.appendChild(paginationItem);
    }

    const nextButton = document.createElement('div');
    nextButton.innerText = '>';
    nextButton.id = 'next-button';
    nextButton.className = 'pagination-item';
    nextButton.addEventListener('click', function() {
        nextPage(totalPage);
    });
    paginationContainer.appendChild(nextButton);
}

function nextPage (totalPageNumber) {
    const currentPage = document.getElementsByClassName('active');
    const nextPageNumber = Number(currentPage[0].innerText) + 1;

    if(nextPageNumber > totalPageNumber) {
        return;
    }

    currentPage.className = 'pagination-item';
    const newPageNumber = document.getElementById(`page-${nextPageNumber}`);
    newPageNumber.className = 'active';
    setContributors(nextPageNumber);
}

function previousPage () {
    const currentPage = document.getElementsByClassName('active');
    const previousPageNumber = Number(currentPage[0].innerText) - 1;

    if(previousPageNumber === 0) {
        return;
    }

    currentPage.className = 'pagination-item';
    const newPageNumber = document.getElementById(`page-${previousPageNumber}`);
    newPageNumber.className = 'active';
    setContributors(previousPageNumber);
}