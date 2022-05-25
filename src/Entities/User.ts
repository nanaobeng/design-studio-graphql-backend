import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  dateCreated!: string;

  @Column()
  resetToken?: string;
}