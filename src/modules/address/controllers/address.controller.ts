import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';

import { AddressService } from '../services/address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @Post()
  async create(@Body() data: CreateAddressDto): Promise<Address> {
    const addressCreated = await this.addressService.create(data);
    return addressCreated;
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
