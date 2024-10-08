import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import Joi from 'joi';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
@Entity()
class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ nullable: false })
  rating: number;

  @Column({ nullable: false, type: 'longtext' })
  comment: string;

  @ManyToOne(() => Customer, (customer) => customer.feedbacks, {
    onDelete: 'CASCADE',
  })
  customer: Customer;

  @ManyToOne(() => CustomerService, (customerService) => customerService.id, {
    onDelete: 'CASCADE',
  })
  service: CustomerService;

  // Generic Fields
  @Column({ nullable: true, type: 'datetime', default: () => 'NOW()' })
  createdAt: Date;

  // typeORM listeners (HOOKS)

  @BeforeInsert()
  beforeinsert() {
    this.createdAt = new Date();
  }
}

// Validation Schema
const feedbackSchema = Joi.object({
  rating: Joi.number().required(),
  comment: Joi.string().required(),
  customer: Joi.number().required(),
  service: Joi.number().required(),
});
export { Feedback, feedbackSchema };
