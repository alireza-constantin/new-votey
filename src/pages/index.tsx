import { trpc } from '@/utils/trpc'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const hello = trpc.greeting.useQuery({name: 'Alireza'})

  return (
    <div>
       {hello.data?.text} 
    </div>
  )
}
