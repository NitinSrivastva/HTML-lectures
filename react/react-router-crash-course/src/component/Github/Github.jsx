import React, { useEffect , useState } from 'react'

function Github() {

  const [data , setData] = useState([])

  useEffect(() => {
     fetch('https://api.github.com/users/NitinSrivastva')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-5 text-4xl'>Github Follower : {data.followers}
    <img src={data.avatar_url } alt=""  width={200}/>
    </div>
  )
}

export default Github
