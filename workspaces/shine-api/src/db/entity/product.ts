import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import EFormalityLevel from "../../enum/EFormalityLevel"
import ProductImage from "./productImage"

@Entity()
class Product {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column({
        type: 'enum',
        enum: EFormalityLevel
    })
    formality_level: EFormalityLevel

    @Column()
    is_menswear: boolean

    @Column()
    is_womenswear: boolean

    @Column()
    is_kidswear: boolean

    @Column()
    created_at: string

    @OneToMany(() => ProductImage, (pImage) => pImage.product)
    images: ProductImage[]
}

export default Product