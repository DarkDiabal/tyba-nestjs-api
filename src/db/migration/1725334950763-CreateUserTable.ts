import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1725334950763 implements MigrationInterface {
  name = 'CreateUserTable1725334950763';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "phone_number" character varying(20), "password" character varying NOT NULL, "status" integer NOT NULL DEFAULT '1', "update_at" TIMESTAMP DEFAULT now()::timestamp, "update_at_utc" TIMESTAMP DEFAULT (now() at time zone 'utc'), CONSTRAINT "UQ_a3ffb1c0c8416b9fc6f907b7433" UNIQUE ("id"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "CHK_b701171a9a5751a6e099173e5c" CHECK (
        "status" = '1'  OR
        "status" = '2'  OR
        "status" = '3'  OR
        "status" = '4'
        ), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE INDEX "id_index" ON "users" ("id") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."id_index"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
