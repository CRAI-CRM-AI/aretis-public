import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero/Hero'
import { Problem } from '../components/Problem/Problem'
import { Founders } from '../components/Founders/Founders'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Founders />
    </main>
  )
}
