import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './controllers/address.controller';
import { AddressRepository } from './infra/typeorm/repositories/address.repository';
import { AddressService } from './services/address.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([AddressRepository])],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
