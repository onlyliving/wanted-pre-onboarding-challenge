import styled from 'styled-components';

interface Props {
    text: string;
}
const Heading: React.FC<Props> = ({
    text
}) => {
    return (
        <Head>{text}</Head>
    )
};

export default Heading;

const Head = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;