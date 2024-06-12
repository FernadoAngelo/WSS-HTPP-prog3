import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.hashPass(createdUser.password);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.cre();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
