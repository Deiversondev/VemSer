import React from 'react'

interface IProps {
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

const Card: React.FC<IProps> = ({user}) => {
    return (
        <div>
            {
                user.map(u => (
                    <div>
                        <p>{u.login}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
