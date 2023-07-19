import styled from 'styled-components';
import ToggleThemeButton from './component/ToggleThemeButton';
import Hero from './component/Hero';
import ResultContainer from './component/ResultContainer';
import Footer from './component/Footer';
import './App.css';
import { useState, useEffect } from 'react'
import { getWallPaper } from './api/getWallPaper';

const Container = styled.div`
    position: relative;
    background-color: var(--primary);
    min-height: 100vh;
`;

function App() {
    const [data, setData] = useState({})
    const [query, setQuery] = useState('')
    const [order, setOrder] = useState('popular')
    const [orientation, setOrientation] = useState('all')
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0

    useEffect(() => {
        const fetch = async () => {
            const data = await getWallPaper({
                q: query,
                orientation,
                order,
                page,
                per_page: perPage
            })
            setData(data)
        }
        fetch()
    }, [query, orientation, order, page, perPage])
    return (
        <>
            <Container>
                <Hero setQuery={setQuery} setOrder={setOrder} setOrientation={setOrientation} setPerPage={setPerPage} />
                <ResultContainer data={data} page={page} setPage={setPage} numOfPages={numOfPages} />
                <Footer />
                <ToggleThemeButton />
            </Container>
        </>
    );
}

export default App;
