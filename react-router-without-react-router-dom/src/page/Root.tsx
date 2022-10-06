import Heading from '../components/Heading';
import Link from "../components/Link";
import Container from '../components/Container';

const Root = () => {
    return (
        <Container>
            <Heading text="root" />
            <Link href="/about">about</Link>
        </Container>
    )
};

export default Root;