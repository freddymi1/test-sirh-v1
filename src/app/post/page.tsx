import PostAbsence from '@/components/post-absence/post-absence'

export async function generateMetadata() {
  return {
    title: 'Ajouter absence',
    description: "Page ajout d'absence"
  }
}

async function Post() {
  return <PostAbsence />
}
export default Post
