import React from 'react'
import styles from './News.module.css'
import newsAva from '../../assets/images/news.jpg'

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.newsText}>
        <h1>News</h1> 
      </div>
      <div className={styles.newsAva}>
        <a href="https://www.bbc.com/" target="_blank" rel="noopener noreferrer">
          <img src={newsAva} />
        </a>
      </div>
    </div>
  )
}

export default News;