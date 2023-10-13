import { Erro404 } from '@/components/error-404/error-404'

export async function generateMetadata() {
  return {
    title: 'Page introuvable',
    description: 'Page introuvable'
  }
}

async function NotFound() {
  return <Erro404 />
}
export default NotFound
