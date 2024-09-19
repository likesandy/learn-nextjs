interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params: { slug } }: PageProps) {
  return (
    <div>
      <h1>{slug}:Blog</h1>
    </div>
  )
}
