import Image from 'next/image'

import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-800'>
      <Button>Hello World!</Button>
      <Image src='/logo.svg' alt='shine logo' width={60} height={60} />
    </div>
  )
}

export default HomePage
