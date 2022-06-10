import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  job_id!: number;

  @Column()
  timestamp!: string;

  @Column()
  status?: string;

  @Column()
  email?: string;

  @Column()
  job?: string;



  @Column()
  cv?: string;



  @Column()
 comments?: string;


}

