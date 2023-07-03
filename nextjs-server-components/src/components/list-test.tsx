async function getTest() {
  // cache baseado em tempo
  // const response = await fetch('http://localhost:8000/test', { next: { revalidate: 15 } })
  // return response.json()

  // const response = await fetch('http://localhost:8000/test')
  // return response.json()

  const response = await fetch('http://localhost:8000/test', { next: { tags: ['test'] } })
  return response.json()
}

export async function ListTest() {
  const tests = await getTest()
  return (
    <ul>
      {tests.map((test: any, index: number) => (
        <li key={index}>{test.name}</li>
      ))}
    </ul>
  )
}