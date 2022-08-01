import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';

export interface IAddressRepository {
  listAddressAll(): Promise<Address[]>;
  findByCep(cep: string): Promise<Address>;
  createAddress(data: CreateAddressDto): Promise<Address>;
}
