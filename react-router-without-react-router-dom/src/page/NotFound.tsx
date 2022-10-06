import styled from 'styled-components';
import Container from '../components/Container';

const NotFound = () => {
    return (
        <Container>
            <Content>페이지를 찾을 수 없습니다.</Content>
        </Container>
    )
};

export default NotFound;

const Content = styled.div`
    font-size: 26px;
    font-weight: 400;
    color: #fff;
`;