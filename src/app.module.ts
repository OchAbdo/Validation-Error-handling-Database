import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseModule } from './horse/horse.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('HOSTDB'),
      port: configService.get<number>('PORTDB'),
      username: configService.get<string>('USERNAMEDB'),
      password: configService.get<string>('PASSWORDDB'),
      database: configService.get<string>('DATABASENAME'),
      autoLoadEntities: true,
      synchronize: true,
      
    })
  }),
  HorseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }