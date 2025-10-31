import styles from "./Footer.module.css";

interface FooterProps {
    authorName: string;
}

export default function Footer({authorName}: FooterProps){
    return(
        <p className={styles.footer}>Thiết kế bởi: {authorName}</p>
    );
}