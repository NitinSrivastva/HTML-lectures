import React from 'react'
import { useParams } from 'react-router-dom'

function UserCompo() {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 text-white text-4xl p-5'>UserCompo : {id}</div>
  )
}

export default UserCompo
