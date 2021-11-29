import React from 'react'
import { PessoaContext } from '../context/PessoaContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './Home.module.css'

const Home = () => {

    const {news,setNews} = useContext(PessoaContext);

    useEffect(() =>{
        (async() =>{
            const {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=013a444496ff4d77915a8bc68abee7f9')
            const articles = data.articles
            console.log(articles)
            // setNews()
            setNews(articles)
        })()
    },[])

    return (
        <div>
           <h1>Home</h1> 
           <div className={styles.newsContainer}>
            {
                (news && news.map(n => {
                    return (
                      
                            <div className={styles.news}>
                           <div className={styles.news_img}>
                           <img src={n.urlToImage ? n.urlToImage : "https://d28fs0o8ewdlxv.cloudfront.net/compare-assets/placeholders/news-placeholder-c9151d7daa43a7dd0777b24d88d29110233c7a8ec955185e02c43534abf36172.png"} alt="" />
                           </div>
                          <div className={styles.news_content}>
                            <h3>{n.title}</h3>
                            <p><span>By: </span>{n.author ? n.author : 'Unknown'}</p>
                            <p><span>Description: </span>{n.description ? n.description : 'Not avaliable, click on Read More , to know about it' }</p>
                          </div>
                            <p className={styles.link}><a href={n.url}>Read More</a></p>
                        </div>
                      
                    )
                }))
            }
             </div>
        </div>
    )
}

export default Home;
