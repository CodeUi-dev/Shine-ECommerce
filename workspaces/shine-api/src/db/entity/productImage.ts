import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Product from "./product"

@Entity({
    name: 'product_image'
})
class ProductImage {
    @PrimaryGeneratedColumn()
    product_image_id: number

    @Column()
    url: string

    @ManyToOne(() => Product, p => p.images)
    @JoinColumn({ name: 'product_id' })
    product: Product
}

export default ProductImage