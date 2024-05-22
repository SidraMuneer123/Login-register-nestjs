import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema , User } from 'src/Schemas/users.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name , schema : UserSchema}])],
  providers: [UsersService],
  controllers:[UsersController],
  exports:[UsersService]

})
export class UsersModule {};
