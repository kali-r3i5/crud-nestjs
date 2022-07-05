import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kali:0000@cluster0.83rdm.mongodb.net/test'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
