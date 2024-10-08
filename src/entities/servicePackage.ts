import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import Joi from 'joi';
import { Package } from './package';
import { Service } from './service';
@Entity()
class ServicePackage extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ nullable: false })
  isPopular: boolean;

  @Column({ nullable: true })
  rank: number;

  @ManyToOne(() => Package, (_package) => _package.id, {
    onDelete: 'CASCADE',
  })
  package: Package;

  @ManyToOne(() => Service, (service) => service.id, {
    onDelete: 'CASCADE',
  })
  service: Service;

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
const servicePackageSchema = Joi.object({
  package: Joi.number().required(),
  service: Joi.number().required(),
  isPopular: Joi.boolean(),
  rank: Joi.number(),
});
export { ServicePackage, servicePackageSchema };
