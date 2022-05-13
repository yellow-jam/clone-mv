import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(() => {
        let  variables = {
            userFrom,
            movieId
        }

        // 서버의 DB에 데이터 요청: fetch 또는 axios
        // 좋아요 개수
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log(response.data)

                if(response.data.success) {
                    
                } else {
                    alert('숫자 정보를 가져오는 데 실패했습니다.')
                }
            })

        // 좋아요 여부
        Axios.post('/api/favorite/favorited', variables)
            .then(response => {

                if(response.data.success) {
                    console.log('favorited', response.data)
                } else {
                    alert('정보를 가져오는 데 실패했습니다.')
                }
            })


    }, [])

    return (
        <div>
        <button>Favorite</button>
        </div>
    )
}

export default Favorite
