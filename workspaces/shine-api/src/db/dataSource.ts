import "reflect-metadata"
import { DataSource } from "typeorm"
import env from "../utils/env"
import Product from "./entity/product"

const dataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})

export default dataSource