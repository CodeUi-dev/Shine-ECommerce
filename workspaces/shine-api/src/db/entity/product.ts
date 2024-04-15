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
    is_menswear: boolean

    @Column()
    is_womenswear: boolean

    @Column()
    is_kidswear: boolean
}

export default Product