import React from 'react';
import Review from '../../components/review/Review';

const Reviews = () => {
    const reviewList = [
        {uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg', score: 3.5, age: '20', filter: '남녀', text: '울트라 저의 최애입니다. 근데 이런점은 별로에요. 참고하세요~ 뭐가 좋고 뭐가 안좋았어요.. ', date: '2020.05.09', like: '1'},
        {uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', score: 2.5, age: '30', filter: '남녀', text: '최악....!!! 쓰지마세요ㅠㅠ 비싸기만해요ㅠㅠㅠ', date: '2020.05.08', like: '3'},
        {uri: 'https://www.w3schools.com/w3css/img_lights.jpg', score: 4.5, age: '20', filter: '남녀', text: '와우와우..와우!!!와우?와우!!와우!!~!~~!!!쓰세요!!~!!~!~!!!!!와우~!!', date: '2020.05.06', like: '5'}
    ];
    return(
        <>
            {reviewList.map((review) => {
                return <Review review={review}/>;
            })}
        </>
    );
};

export default Reviews;