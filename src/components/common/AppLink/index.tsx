import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  href: string;
  title: string;
};

export default function AppLink({ href, title }: Props) {
  return (
    <Link href={href} className={styles.appLink}>
      {title}
    </Link>
  );
}
