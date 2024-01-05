import styles from '../page.module.css';
import './stream-context.css';
import dayjs from 'dayjs';
import { findBlogsBySlug, getBlogById } from '@/modules/blog/requests';
import { notFound } from 'next/navigation';
import { WebVitals } from '@/components/web-vitals';

export default async function BlogPage({ params }) {
  if (!params || !params.slug) {
    return notFound();
  }

  const result = await findBlogsBySlug(params.slug);

  if (!result || !result.items || result.items.length === 0) {
    return notFound();
  }

  const { id } = result.items[0];
  const blog = await getBlogById(id);

  if (!blog) {
    return notFound();
  }

  return (
    <main className={styles.blogBody}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {blog.title}
      </h1>
      <p className={styles.blogPageDate}>
        {dayjs(blog.meta.first_published_at).format('YYYY-MM-DD')}
      </p>
      <div
        className="body-context"
        dangerouslySetInnerHTML={{ __html: blog.context }}
      />
      <WebVitals />
    </main>
  );
}
