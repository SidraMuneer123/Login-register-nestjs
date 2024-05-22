import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/nest_app-db"), UsersModule , AuthModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
