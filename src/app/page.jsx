import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { getBlogs } from "@/modules/blog/requests";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  return await getBlogs();
}

export default async function Home() {
  const { items, meta } = await getData();

  return (
    <main className={styles.main}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Yeti&apos;s blog
      </h1>
      <div className={styles.blogList}>
        <ul className="list-none">
          {items &&
            items.map((blog) => {
              return (
                <li key={blog.id}>
                  <Link
                    href={blog.meta.slug}
                    className="text-blue-600 visited:text-purple-600"
                  >
                    {blog.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}
