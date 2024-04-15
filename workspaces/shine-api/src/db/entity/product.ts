import { Column, Entity, PrimaryColumn } from "typeorm"
import EFormalityLevel from "../../enum/EFormalityLevel"

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
    is_menswear: string

    @Column()
    is_womenswear: string

    @Column()
    is_kidswear: string
}

export default Product