import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1658445181454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cep',
            type: 'varchar(200)',
          },
          {
            name: 'street',
            type: 'varchar(200)',
          },
          {
            name: 'district',
            type: 'varchar(200)',
          },
          {
            name: 'city',
            type: 'varchar(200)',
          },
          {
            name: 'uf',
            type: 'varchar(2)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
