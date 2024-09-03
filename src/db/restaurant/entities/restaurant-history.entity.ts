import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'restaurant_history' })
export class RestaurantHistory {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ name: 'user_id', type: 'uuid' })
  @Index('user_id_index')
  userId: string;

  @Column({ name: 'radius', type: 'int', nullable: false, default: 5000 })
  radius?: number;

  @Column({ name: 'latitude', type: 'varchar', nullable: false })
  latitude: string;

  @Column({ name: 'longitude', type: 'varchar', nullable: false })
  longitude: string;

  @CreateDateColumn({
    name: 'search_at',
    type: 'timestamp',
    nullable: true,
    default: () => 'now()::timestamp',
  })
  createdAt?: string;

  @CreateDateColumn({
    name: 'search_at_utc',
    type: 'timestamp',
    nullable: true,
    default: () => "(now() at time zone 'utc')",
  })
  createdAtUTC?: Date;
}
