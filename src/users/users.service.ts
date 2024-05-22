import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/Schemas/users.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  async register(email:string , password:string):Promise<User>{
    const hashedPassword = await bcrypt.hash(password , 10);
    const user = new this.userModel({email , password : hashedPassword})
    return user.save();

  }
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  
  
}}
