import Link from 'next/link';
import styles from "../styles/postlink.module.css";

type Props = {
    title: string
    slug: string
}

export const PostLink = ({
    title,
    slug,
}: Props) => {
    return (
        <Link as={`/${slug}`} href="/[slug]">
            <button type="button" className={styles["link"]}>{title}</button>
        </Link>
    )
};

