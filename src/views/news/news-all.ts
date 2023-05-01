import { News } from '../../news/news.service';

export function renderNewsAll(news: News[]): string {
  let newsListHtml = '';
  for (const newsItem of news) {
    newsListHtml += renderNewsBlock(newsItem);
  }
  return `
  <h1>Список новостей</h1>

  <div class="row">
     ${newsListHtml}
  </div>
  `;
}

export function renderNewsBlock(news: News): string {
  return `
 <div class="col-lg-4">
     <div class="card" style="width: 100%; margin-bottom: 2px;">
    ${
      news.cover
        ? `<img src="${news.cover}" style="height: 200px; object-fit: cover" class="card-img-top" alt="...">`
        : ''
    }
  <div class="card-body">
  <h5 class="card-title">${news.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${news.author}</h6>
    <p class="card-text">${news.description}</p>
  </div>
</div>
</div>
`;
}
