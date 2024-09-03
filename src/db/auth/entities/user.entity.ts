import {
  Column,
  Entity,
  Check,
  UpdateDateColumn,
  PrimaryColumn,
  Index,
} from 'typeorm';

@Entity({ name: 'users' })
//Status
// 1 => Activo
// 2 => Cancelado
// 3 => Bloqueado
// 4 => Congelado
@Check(
  `
        "status" = '1'  OR
        "status" = '2'  OR
        "status" = '3'  OR
        "status" = '4'
        `,
)
export class User {
  @PrimaryColumn()
  @Column({ primary: true, unique: true, type: 'uuid' })
  @Index('id_index')
  id: string;

  @Column({ name: 'first_name', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', length: 50, nullable: false })
  lastName: string;

  @Column({ name: 'email', length: 100, unique: true, nullable: false })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

  @Column()
  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'status', type: 'int', nullable: false, default: '1' })
  status?: number;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    nullable: true,
    default: () => 'now()::timestamp',
  })
  createdAt?: string;

  @UpdateDateColumn({
    name: 'update_at_utc',
    type: 'timestamp',
    nullable: true,
    default: () => "(now() at time zone 'utc')",
  })
  createdAtUTC?: Date;
}
