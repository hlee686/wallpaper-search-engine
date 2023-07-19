import styled from 'styled-components';
import { useState } from 'react';
import DummyData from '../asset/dummyData';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import Pagination from './Pagination';
import EmptyResult from './EmptyResult';

const Container = styled.div`
    max-width: 1830px;
    margin: 8px auto;
    padding-right: 8px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const ResultContainer = ({ data, page, setPage, numOfPages }) => {

    const [currentImageDetail, setCurrentImageDetail] = useState(null)

    return (
        <Container>
            {currentImageDetail && < ImageModal currentImageDetail={currentImageDetail} setCurrentImageDetail={setCurrentImageDetail} />}
            {data.hits?.length > 0 && <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />}
            <ResultsWrapper>
                {data.hits?.map((imgData) => (
                    <ImageCard key={imgData.id} imgData={imgData} onClick={() => setCurrentImageDetail(imgData)} />
                ))}

            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;

