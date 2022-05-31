export function templateCard(array) {
  return array
    .map(res => {
      return `<a class='photo-link' href="${res.largeImageURL}"> <div class="photo-card"><img src="${res.webformatURL}" alt="${res.tags}" loading="lazy" width=300 height=200 />

              <div class="info">
                <p class="info-item">
                  <b>Likes: </b>
                  ${res.likes}
                </p>
                <p class="info-item">
                  <b>Views: </b>${res.views}
                </p>
                <p class="info-item">
                  <b>Comments: </b>${res.comments}
                </p>
                <p class="info-item">
                  <b>Downloads: </b>${res.downloads}
                </p>
              </div>
            </div>
            </a>
           `;
    })
    .join('');
}
