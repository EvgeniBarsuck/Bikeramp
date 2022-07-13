import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'stats' })
export class StatsEntity {
  constructor(props: Partial<StatsEntity>) {
    if (props) {
      const { createdAt, totalDistance, totalPrice } = props;

      this.totalDistance = totalDistance;
      this.totalPrice = totalPrice;
      this.createdAt = createdAt;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('double precision', { name: 'total_distance' })
  totalDistance: number;

  @Column('double precision', { name: 'total_price' })
  totalPrice: number;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
