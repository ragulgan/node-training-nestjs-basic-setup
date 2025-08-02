import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { CreateUserDto } from './dto/userCreate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdWelcome = new this.UserModel(createUserDto);
    return createdWelcome.save();
  }
}