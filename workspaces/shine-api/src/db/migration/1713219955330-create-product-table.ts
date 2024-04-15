import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = 'product'

export class CreateProductTable1713219955330 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const table = new Table({
			name: tableName,
			columns: [
				{
					name: 'id',
					type: 'varchar',
					isPrimary: true
				},
				{
					name: 'name',
					type: 'varchar'
				},
				{
					name: 'formality_level',
					type: 'varchar'
				},
				{
					name: 'is_menswear',
					type: 'bool'
				},
				{
					name: 'is_womenswear',
					type: 'bool'
				},
				{
					name: 'is_kidswear',
					type: 'bool'
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
