import React from 'react'
// import { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData( )
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setdata(data)
    //     })
    
    // }, [])

  return (
    <div className=' bg-gray-600 text-white text-3xl p-4'>
    <div className='bg-gray-600 text-white text-3xl p-4'>Github Follower:{data.followers}</div>
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}