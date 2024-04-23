import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = 'product_price'

export class CreateProductPriceTable1713836869948 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const table = new Table({
			name: tableName,
			columns: [
				{
					name: 'product_price_id',
					type: 'varchar',
					isPrimary: true
				},
				{
					name: 'price_model',
					type: 'varchar(15)',
				},
				{
					name: 'amount',
					type: 'integer',
				},
				{
					name: 'currency',
					type: 'varchar(3)',
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
