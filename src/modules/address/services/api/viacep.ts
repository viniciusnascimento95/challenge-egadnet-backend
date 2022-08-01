import { lastValueFrom } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

export type RequestViaCep = {
  cep: string;
  street: string;
  district: string;
  city: string;
  uf: string;
};

type GetResponse = {
  data: any;
  status: number;
  erro?: boolean;
};

export async function getCep(cep: string): Promise<RequestViaCep> {
  const axios = new HttpService();
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response: GetResponse = await lastValueFrom(axios.get(url));

  if (response.data.erro) {
    throw new HttpException(
      'Error comunication via cep',
      HttpStatus.BAD_REQUEST,
    );
  }

  const results: RequestViaCep = {
    cep: response.data.cep,
    street: response.data.logradouro,
    district: response.data.bairro,
    city: response.data.localidade,
    uf: response.data.uf,
  };

  return results;
}
