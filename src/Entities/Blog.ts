import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  body!: string;

  @Column()
  user_id!: number;

  @Column()
  timestamp!: string;

  @Column()
  thumbnail?: string;

  @Column()
  category?: string;
}