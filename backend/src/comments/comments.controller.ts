import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; message: string }) {
    return this.commentsService.create(body.name, body.message);
  }
}