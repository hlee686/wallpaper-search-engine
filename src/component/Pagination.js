import styled from 'styled-components';
import { ReactComponent as PrevIcon } from '../asset/prev.svg';
import { ReactComponent as NextIcon } from '../asset/next.svg';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px;
    color: var(--text); ;
`;

const PageSelect = styled.select`
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    font-size: 16px;
    color: var(--highlight);
    font-weight: bold;
    font-family: inherit;
    &:focus {
        outline: none;
    }
`;

const Pagination = ({ page, setPage, numOfPages }) => {
    return (
        <Nav>
            <PrevIcon width="24" cursor="pointer" fill="var(--text)" />
            {`총 ${numOfPages} 중 `}
            <PageSelect name="page" value={page} onChange={e => setPage(parseInt(e.target.value))}>
                {Array(numOfPages).fill().map((data, idx) => {
                    <option value={idx + 1} key={idx + 1} >
                        {idx + 1}
                    </option>
                })}
            </PageSelect>
            페이지
            <NextIcon width="24" cursor="pointer" fill="var(--text)" />
        </Nav>
    );
};

export default Pagination;
