import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';       
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') 
    private readonly userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User>{
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

  async findAll(): Promise<User[]>{
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User>{
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUser: CreateUserDto): Promise<User>{
    return await this.userModel.findByIdAndUpdate(id, updateUser, { new: true });
  }

  async delete(id: string): Promise<User>{
    return await this.userModel.findByIdAndRemove(id);
  }
}