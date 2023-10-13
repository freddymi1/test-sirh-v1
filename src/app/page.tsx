import { Homepage } from '@/components/homepage/homepage'

export async function generateMetadata() {
  return {
    title: 'Homepage',
    description: "Page d'accueil"
  }
}

async function Home() {
  return <Homepage />
}
export default Home
