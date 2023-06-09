import { Injectable } from '@nestjs/common';
import { Comment } from './comments/comments.service';

export interface News {
  id?: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
  cover?: string;
  comments?: Comment[];
}

export interface NewsEdit {
  title?: string;
  description?: string;
  author?: string;
  countView?: number;
  cover?: string;
}

export function getRandomInt(min = 1, max = 9999) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

@Injectable()
export class NewsService {
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Наша первая новость',
      description: 'Урааа! Наша первая новость',
      author: 'Борис',
      countView: 12,
      cover:
        'https://avatars.mds.yandex.net/get-mpic/4881627/img_id9158368703716045728.jpeg/orig',
    },
  ];

  create(news: News): News {
    const id = getRandomInt(0, 999);
    const finalNews = {
      ...news,
      id: id,
    };
    this.news.push(finalNews);
    return finalNews;
  }

  find(id: News['id']): News | undefined {
    return this.news.find((news) => news.id === id);
  }

  getAll(): News[] {
    return this.news;
  }

  edit(id: number, news: NewsEdit): News | undefined {
    const indexEditNews = this.news.findIndex((news) => news.id === id);
    if (indexEditNews !== -1) {
      this.news[indexEditNews] = {
        ...this.news[indexEditNews],
        ...news,
      };
      return this.news[indexEditNews];
    }
    return undefined;
  }

  remove(id: News['id']): boolean {
    const indexRemoveNews = this.news.findIndex((news) => news.id === id);
    if (indexRemoveNews !== -1) {
      this.news.splice(indexRemoveNews, 1);
      return true;
    }
    return false;
  }
}
