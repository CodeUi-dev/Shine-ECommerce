import { ReactNode } from 'react'

interface CardsBaseProps {
    children: ReactNode
}

export const CardsBase = ({ children }: CardsBaseProps) => {
    return (
        <div className='bg-white-99 rounded-[1rem] p-1'>
            {children}
        </div>
    )
}