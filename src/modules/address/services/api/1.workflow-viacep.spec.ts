import { getCep } from './viacep';

describe('getCep() ', () => {
  it('Should return info cep from viacep', async () => {
    const cepBase = '76803614';
    const response = await getCep(cepBase);

    expect(response.cep).toBe('76803-614');
    expect(response.street).toBe('Rua Lajeado');
    expect(response.city).toBe('Porto Velho');
    expect(response.uf).toBe('RO');
  });

  it('Should not return info when for cep invalid', async () => {
    const cepInvalid = '00000000';

    try {
      await getCep(cepInvalid);
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.response).toBe('Error comunication via cep');
    }
  });
});
