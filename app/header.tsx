import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <nav className={styles.nav}>
        <Link href="/">Trang Chủ</Link>
        <Link href="/about">Về Chúng Tôi</Link>
        <Link href="/users">Danh sách Người dùng</Link>
        <Link href="/courses">Danh sách Khóa học</Link>
      </nav>
    </header>
  );
}