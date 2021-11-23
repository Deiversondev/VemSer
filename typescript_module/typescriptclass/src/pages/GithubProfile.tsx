import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../components/Card'

// login, avatar_url, html_url, repos_url, email, create_at, followers
interface IUser {
    user: {
        login:string,
        avatar_url:string,
        html_url: string,
        repos_url:string,
        email:string,
        created_at:string,
        followers:string
    }[]
}


const GithubProfile = () => {

    const [user , setUser] = useState<IUser['user']>([]);

useEffect( ()  =>{

    ( async ()  => {
        const response = await axios.get('https://api.github.com/users/joaoolivares')
        console.log(response)
        const Data = response.data;
        setUser(Data);
        console.log(Data)
        setUser([
        {
            login:Data.login,
            avatar_url:Data.avatar_url,
            html_url: Data.html_url,
            repos_url:Data.repos_url,
            email:Data.email,
            created_at:Data.created_at,
            followers:Data.followers
        }
        ])
    })()
    
},[])

console.log(user)
    return (
        <div>
                <Card user={user}/>
        </div>
    )
}

export default GithubProfile
