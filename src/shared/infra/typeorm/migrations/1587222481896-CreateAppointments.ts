import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587222481896
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // executa acao da migration
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            comment: 'id da tabela',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // executa em caso de erro, ou desfazer o que fez no up

    await queryRunner.dropTable('appointments');
  }
}
/**
 * linha do tempo
 * 1 semana: Agendamentos
 * 2 semana: usuarios
 * (Novo DEV) 3 semana: edicao agendamentos
 * 4 semana: compras
 * migrations controlam as alterações no banco de dados.
 *
 */
