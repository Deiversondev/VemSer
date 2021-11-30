import React from 'react'
import load from './loading.svg'
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loading_svg}>
            <img src={load} alt="" />
        </div>
    )
}

export default Loading
