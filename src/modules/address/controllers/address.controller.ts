import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressService } from '../services/address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
