import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
const entites = [
  ...databaseProviders,
];

@Module({
  providers: entites,
  exports: entites,
})
export class DatabaseModule {}
