import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';
import { Address } from 'src/modules/address/entities/address.entity';
import { IAddressRepository } from 'src/modules/address/repositories/address.interface';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Address)
export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository
{
  async listAddressAll(): Promise<Address[]> {
    const address = await this.find({ order: { created_at: 'DESC' } });
    return address;
  }

  async findByCep(cep: string): Promise<Address> {
    const address = await this.findOne({ cep });
    return address;
  }

  async createAddress({
    cep,
    street,
    district,
    city,
    uf,
  }: CreateAddressDto): Promise<Address> {
    const addressCreated = this.create({ cep, street, district, city, uf });
    await this.save(addressCreated);
    return addressCreated;
  }
}
