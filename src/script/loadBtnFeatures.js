const loadMoreBtn = document.querySelector('.load-more');

export function addHiddenClassToLoadBtn() {
  if (!loadMoreBtn.classList.contains('hidden')) {
    loadMoreBtn.classList.add('hidden');
  }
}
export function removeHiddenClassLoadBtn() {
  if (loadMoreBtn.classList.contains('hidden')) {
    loadMoreBtn.classList.remove('hidden');
  }
}
