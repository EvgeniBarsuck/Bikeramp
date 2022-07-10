import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @CreateDateColumn({ name: 'updated_on' })
  updatedOn: Date;

  @CreateDateColumn({ name: 'created_on' })
  createdOn: Date;
}
