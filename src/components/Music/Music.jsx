import React, { useState } from 'react'
import styles from './Music.module.css'
import { CloseCircleOutlined } from '@ant-design/icons';

const Music = () => {

    const [text, setText] = useState('')
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <h1 className={styles.musicText}>Music</h1>
            <span className={styles.input}>
                <input type="text"
                    placeholder='Search For A Song...'
                    className={styles.inputArea}
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value)}}
                    />
                <CloseCircleOutlined className={styles.clearButton} onClick={() => {
                    setInputText('')
                    setText('')}}/>
                <button onClick={() => {
                    setText('Plug Music API...')
                }}>Find</button>
            </span>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default Music

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://shazam.p.rapidapi.com/search',
//   params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
//   headers: {
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//     'X-RapidAPI-Key': '24bd79932cmsh4ccb86483c3c61bp1f40d2jsnfa6976b3039e'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// const musicApi = axios.create({
//     withCredentials: true,
//      baseURL: 'https://shazam.p.rapidapi.com/search',
//      headers:     {
//         'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//         'X-RapidAPI-Key': '24bd79932cmsh4ccb86483c3c61bp1f40d2jsnfa6976b3039e'
//      }
// })

// const musicAPI = {
//     getMusic(){
//         return musicApi()
//         .then(response => {
//             return response.data
//         })
//     }
// }