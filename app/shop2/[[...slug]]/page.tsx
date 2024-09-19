interface PageProps {
  params: {
    slug: string[]
  }
}

export default function Page({ params: { slug } }: PageProps) {
  return <div>Shop2: {slug.join('/')}</div>
}
