import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UploadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'Crud-Users',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
