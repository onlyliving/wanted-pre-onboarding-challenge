import Heading from '../components/Heading';
import Link from "../components/Link";
import Container from '../components/Container';

const About = () => {
    return (
        <Container>
            <Heading text="about" />
            <Link href="/">go main</Link>
        </Container>
    )
};

export default About;