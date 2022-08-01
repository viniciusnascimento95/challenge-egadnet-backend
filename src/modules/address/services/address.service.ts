import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';
import { AddressRepository } from '../infra/typeorm/repositories/address.repository';
import { IAddressRepository } from '../repositories/address.interface';

import { getCep } from './api/viacep';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private readonly addressRepository: IAddressRepository,
  ) { }

  async create({ cep }: CreateAddressDto): Promise<Address> {
    const cepExists = await this.addressRepository.findByCep(cep);

    if (cepExists) {
      const addressExists = await this.addressRepository.createAddress({
        cep: cepExists.cep,
        street: cepExists.street,
        district: cepExists.district,
        city: cepExists.city,
        uf: cepExists.uf,
      });

      return addressExists;
    }

    const searchCep = await getCep(cep);

    const address = await this.addressRepository.createAddress({
      cep: searchCep.cep,
      street: searchCep.street,
      district: searchCep.district,
      city: searchCep.city,
      uf: searchCep.uf,
    });

    return address;
  }

  async findAll(): Promise<Address[]> {
    const address = await this.addressRepository.listAddressAll();
    return address;
  }
}
