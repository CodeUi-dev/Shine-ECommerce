import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import ProductImage from "./productImage"
import ProductPrice from "./productPrice"

@Entity()
class Product {
    @PrimaryColumn()
    product_id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    created_at: string

    @OneToMany(() => ProductImage, (pImage) => pImage.product, { cascade: ["remove"] })
    images: ProductImage[]

    @OneToMany(() => ProductPrice, (pPrice) => pPrice.product, { cascade: ["remove"] })
    prices: ProductPrice[]
}

export default Product