import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = 'product'

export class CreateProductTable1713219955330 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const table = new Table({
			name: tableName,
			columns: [
				{
					name: 'product_id',
					type: 'varchar',
					isPrimary: true
				},
				{
					name: 'name',
					type: 'varchar'
				},
				{
					name: 'description',
					type: 'text'
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()'
				},
			]
		})

		queryRunner.createTable(table)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable(tableName)
	}
}
