const form = document.querySelector('form');
const input = document.querySelector('[name="searchQuery"]');
const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const elPerPage = 40;

let page = 1;

const simpleLightBox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', searchSubmit);
loadMoreBtn.addEventListener('click', loadMoreElements);

function loadMoreElements(e) {
  page += 1;
  renderCards();
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { templateCard } from './script/templateCard';
import { fetchedCards } from './script/fetchedCard';
import { addHiddenClassToLoadBtn } from './script/loadBtnFeatures';
import { removeHiddenClassLoadBtn } from './script/loadBtnFeatures';
import Notiflix from 'notiflix';

function searchSubmit(e) {
  e.preventDefault();
  galleryContainer.innerHTML = '';
  page = 1;

  renderCards();
}
function renderCards() {
  fetchedCards(input.value, elPerPage, page).then(({ data }) => {
    if (data.hits.length === 0) {
      Notiflix.Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      addHiddenClassToLoadBtn();
      return;
    }
    const allCards = templateCard(data.hits);

    galleryContainer.insertAdjacentHTML('beforeend', allCards);
    simpleLightBox.refresh();
    removeHiddenClassLoadBtn();
    const totalPage = Math.floor(data.totalHits / elPerPage);
    if (page > totalPage) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );

      addHiddenClassToLoadBtn();
    }
  });
}
