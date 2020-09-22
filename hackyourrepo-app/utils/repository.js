"use strict";
import { setContributors } from './contributor.js';
import { fetchData } from './fetchData.js';

export let contributors_url = '';

export function setSelectedRepositoryByName (url) {
    fetchData(url)
      .then((repository) => {
        contributors_url = repository.contributors_url;
        setContributors(1);
        document.getElementById('repository-name').innerText = repository.name;
        document.getElementById('repository-name').href = repository.html_url;
        document.getElementById('repository-description').innerText = repository.description;
        document.getElementById('repository-forks').innerText = repository.forks;
        document.getElementById('repository-updated').innerText = repository.updated_at;
      })
  }