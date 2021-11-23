import React from 'react';
import style from '../components/Card.module.css'




interface IProps {
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

const Card: React.FC<IProps> = ({user}) => {
    return (
        <div>
            {
                user.map(u=> (
                   <div>
                        <h1>{u.login}</h1>
                   <div className={style.card} >
                       
                        <div className={style.card_img}>
                          <img src={u.avatar_url} alt="" />
                        </div>
                     
                        <div className={style.card_info}>
                        <p><span>GitHub Account:</span> <a href={u.html_url}>{u.html_url}</a></p>
                        <p><span>Repositories: </span><a href={u.repos_url}>{u.repos_url}</a></p>
                        <p><span>My email: </span>{u.email}</p>
                        <p><span>When it all started: </span>{u.created_at.split('',10)}</p>
                        <p><span>Followers: </span>{u.followers}</p>
                        </div>
                   </div>
                   </div>
                ))
            }
        </div>
    )
}

export default Card
