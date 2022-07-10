import { UserEntity } from '@modules/user/infrastructure/entities';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'stats' })
export class StatsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinTable({ name: 'user_id' })
  userId: string;

  @Column('int', { name: 'total_distance' })
  totalDistance: number;

  @Column('int', { name: 'total_distance' })
  totalPrice: number;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
