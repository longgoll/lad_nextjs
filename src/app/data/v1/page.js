'use client'
import useSWR from 'swr'
// const fetcher = url => fetch(url).then(res => res.json())

const page = () => {


  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, mutate } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return (
    <div>
      <h1>My name is {data[0].name}.</h1>
      <button onClick={async () => {
        const newName = data[0].name.toUpperCase()
        mutate({ ...data, name: newName })
      }}>Uppercase my name!</button>
    </div>
  )
}

export default page