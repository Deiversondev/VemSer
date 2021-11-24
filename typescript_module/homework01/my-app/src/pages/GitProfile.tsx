import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Card from '../components/Card'

// login, avatar_url, html_url, repos_url, email, create_at, followers

interface IUser {
    user : {
        login: string,
        avatar_url:string,
        html_url:string,
        repos_url:string,
        email:string,
        created_at:string,
        followers:string
    }[]
}

const GitProfile = () => {

    const [user, setUser] = useState<IUser['user']>([])
    useEffect(() =>{

        (   async () => {
                const {data} = await axios.get('https://api.github.com/users/Deiversondev')
                setUser([
                    {
                        login:data.login,
                        avatar_url:data.avatar_url,
                        html_url: data.html_url,
                        repos_url: data.repos_url,
                        email:data.email ? data.email : 'dcruzbhha2@gmail.com',
                        created_at: data.created_at,
                        followers:data.followers
                    }
                ])
            })()
    },[])

    return (
        <div>
            <Card user={user}/>
        </div>
    )
}

export default GitProfile
