import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { getBlogs } from "@/modules/Home/requests";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  return await getBlogs();
}

export default async function Home() {
  const { items, meta } = await getData();

  return (
    <main className={styles.main}>
      <h1>Freeyeti&apos;s blog</h1>
      <div className={styles.blogList}>
        {items &&
          items.map((blog) => {
            return (
              <div key={blog.id}>
                <h2><Link href={blog.meta.slug}>{blog.title}</Link></h2>
              </div>
            );
          })}
      </div>
    </main>
  );
}
