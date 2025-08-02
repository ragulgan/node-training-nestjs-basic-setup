import { Controller, Post, Body, Res, BadRequestException, UseGuards, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/userCreate.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
      const createdWelcome = await this.userService.create(createUserDto); 
}
}
