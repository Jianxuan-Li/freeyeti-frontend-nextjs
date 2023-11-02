import moment from 'moment';
import styles from '../page.module.css';
import { getBlogs } from '@/modules/blog/requests';
import Link from 'next/link';
import IndexBg from '@/components/IndexBackground';

export default async function Home() {
  const { items } = await getBlogs();

  return (
    <main className={styles.main}>
      <IndexBg />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
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
                    {moment(blog.meta.first_published_at).format('Y MM DD')}{' '}
                    {'>'} {blog.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}
