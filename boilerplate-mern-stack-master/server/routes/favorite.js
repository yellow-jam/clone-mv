const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => { // 이 콜백 함수를 통해서 데이터를 얻어올 수 있음


    // mongoDB에서  favorite 숫자를 가져오기
    Favorite.find({ "movieId": req.body.movieId })  // Favorite 모델에서 movieId 필드의 값이 req.body.movieId와 동일한 것을 가져오기
        .exec(( err, info ) => { 
            if(err) return res.status(400).send(err)  // 에러가 나면 클라이언트에게 에러 사항 전송
            
            // 그 다음에 프론트에 다시 숫자 정보를 보내주기
            res.status(200).json({ success: true, favoriteNumber: info.length }) // 어떤 사람이 좋아했는지 info 파라미터에 들어 있음 [A, B, C, ...]

        })

})
// Favorite.js에서 요청하는 방법이 post이므로
// '/api/favorite/favoriteNumber' 앞쪽 url 라우트는 index.js에서

module.exports = router;
