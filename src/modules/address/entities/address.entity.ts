import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @CreateDateColumn()
  created_at: Date;
}
