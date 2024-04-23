import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = 'product_image'

export class CreateProductImages1713261183135 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const table = new Table({
			name: tableName,
			columns: [
				{
					name: 'product_image_id',
					type: 'varchar',
					isPrimary: true
				},
				{
					name: 'url',
					type: 'varchar',
				},
				{
					name: 'product_id',
					type: 'varchar'
				},
			],
			foreignKeys: [{
				columnNames: ['product_id'],
				referencedTableName: 'product',
				referencedColumnNames: ['product_id'],
				onDelete: 'cascade'
			}]
		})

		queryRunner.createTable(table)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable(tableName)
	}
}
