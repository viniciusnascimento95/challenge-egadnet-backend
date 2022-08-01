import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AddressModule],
})
export class AppModule { }
