import React from 'react';
import ReviewFilterContainer from '../../components/review/ReviewFilterContainer';

const ReviewFilter = () => {
    const reviewCnt = 125;
    const filterStandard = {first: '최근 등록순', second: '모든 나이', third: '남녀'};

    return(
        <>
            <ReviewFilterContainer reviewCnt={reviewCnt} filterStandard={filterStandard}/>
        </>
    );
};

export default ReviewFilter;