
export default function about ({params}) {
  return (
    <div>
      <h1>
        About Slugs 
      </h1>
      <h1>Slug Page :// {params.slug[0]}/{params.slug[1]}</h1>
    </div>
  )
}
