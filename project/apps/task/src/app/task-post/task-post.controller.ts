import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TaskPostService } from './task-post.service';
import { fillObject } from '@project/util/util-core';
import { PostRdo } from './rdo/post.rdo';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class TaskPostController {
  constructor(
    private readonly taskPostService: TaskPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    const post = await this.taskPostService.getPost(postId);
    return fillObject(PostRdo, post);
  }

  @Get('/')
  async index() {
    const posts = await this.taskPostService.getPosts();
    return fillObject(PostRdo, posts);
  }

  @Post('/')
  async create(@Body() dto: CreatePostDto) {
    const newPost = await this.taskPostService.createPost(dto);
    return fillObject(PostRdo, newPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    this.taskPostService.deletePost(postId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const postId = parseInt(id, 10);
    const updatedPost = await this.taskPostService.updatePost(postId, dto);
    return fillObject(PostRdo, updatedPost)
  }
}
