import {
  DeepPartial,
  FindOptionsWhere,
  Repository as Entity,
  QueryRunner,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export type ClassConstructor<T> = {
  new (...args: any[]): T;
};

interface UpdateRelationFilter {
  _id: string;
}

export class Repository<T> {
  baseEntity: Entity<T>;
  transactionMap: Map<string, QueryRunner>;

  constructor(entity: Entity<T>) {
    this.baseEntity = entity;
    this.transactionMap = new Map<string, QueryRunner>();
  }

  public async count (filter: FindOptionsWhere<T>) {
    return this.baseEntity.count({ where: filter });
  };

  public async create (entity: DeepPartial<T>): Promise<T> {
    return this.baseEntity.save(entity);
  };

  public async createMany (entity: DeepPartial<T>[]): Promise<T[]> {
    return this.baseEntity.save(entity);
  },

  public async delete (filter: FindOptionsWhere<T>){
    return this.baseEntity.delete(filter);
  };

  public async deleteAndGet (filter: FindOptionsWhere<T> | FindOptionsWhere<T>[] = []) {
    const entity = await this.baseEntity.findOne({ where: filter });

    if (!entity) {
      // throw new NotFoundException();
      // return
    }

    await this.baseEntity.remove(entity);

    return entity;
  };

  public async exists (filter: FindOptionsWhere<T>) {
    const count = await this.baseEntity.count({ where: filter });

    return count > 0;
  };

  public async find (filter?: FindOptionsWhere<T>): Promise<T[]> {
    return this.baseEntity.find({ where: filter || {} });
  };

  public async findOne (filter: FindOptionsWhere<T>): Promise<T> {
    return this.baseEntity.findOne({ where: filter });
  };

  public async updateOne (filter: FindOptionsWhere<T>, entity: QueryDeepPartialEntity<T>) {
    return this.baseEntity.update(filter, entity);
  };

  public async updateOneAndGet (filter: FindOptionsWhere<T>, entity: QueryDeepPartialEntity<T>) {
    await this.baseEntity.update(filter, entity);

    return this.baseEntity.findOne({ where: filter });
  };

  public async updateRelation (updateRelationFilter: UpdateRelationFilter, updateEntity: DeepPartial<T>) {
    return this.baseEntity.save({ ...updateRelationFilter, ...updateEntity });
  };
}
