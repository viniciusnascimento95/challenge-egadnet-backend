import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  cep: string;

  @IsOptional()
  @IsString()
  street: string;

  @IsOptional()
  @IsString()
  district: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  uf: string;
}
