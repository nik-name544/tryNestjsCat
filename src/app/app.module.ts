import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.kviwi.mongodb.net/music-test?retryWrites=true&w=majority'),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
