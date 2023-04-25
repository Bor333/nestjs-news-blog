import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { News, NewsEdit, NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/detail/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    return this.newsService.find(idInt);
  }

  @Get('/all')
  getAll(): News[] {
    console.log('getAll');
    const news = this.newsService.getAll();
    return news;
  }

  @Post()
  create(@Body() news: News): News {
    return this.newsService.create(news);
  }

  @Put('/:id')
  edit(@Param('id') id: string, @Body() news: NewsEdit): News {
    const idInt = parseInt(id);
    return this.newsService.edit(idInt, news);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): string {
    const idInt = parseInt(id);
    const isRemoved = this.newsService.remove(idInt);
    return isRemoved ? 'Новость удалена' : 'Передан неверный итендификатор';
  }
}
