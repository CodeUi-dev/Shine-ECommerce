import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Product from "./product"

@Entity({
    name: 'product_price'
})
class ProductPrice {
    @PrimaryGeneratedColumn()
    product_price_id: number

    @Column()
    price_model: string

    @Column()
    amount: number

    @Column()
    currency: string

    @ManyToOne(() => Product, p => p.images)
    @JoinColumn({ name: 'product_id' })
    product: Product
}

export default ProductPrice