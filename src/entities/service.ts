import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import Joi from 'joi';
import { ServicePackage } from './servicePackage';
@Entity()
class Service extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  image: string;

  @OneToMany(() => ServicePackage, (servicePackage) => servicePackage.service)
  servicePackages: ServicePackage[];

  // Generic Fields
  @Column({ nullable: true, type: 'datetime', default: () => 'NOW()' })
  createdAt: Date;

  @Column({ nullable: true, type: 'datetime', default: () => 'NOW()' })
  updatedAt: Date;

  // typeORM listeners (HOOKS)
  @BeforeUpdate()
  beforeupdate() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  beforeinsert() {
    this.createdAt = new Date();
  }
}

// Validation Schema
const serviceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  servicePackages: Joi.array(),
});
export { Service, serviceSchema };
