import React from 'react';
import styles from '../page.module.css';
import './stream-context.css';
import { findBlogsBySlug, getBlogById } from '@/modules/blog/requests';

type Props = {};

export default async function JuntAboutPage({}: Props) {
  const result = await findBlogsBySlug('about-junt');
  const { id } = result.items[0];
  const blog = await getBlogById(id);

  if (!blog) {
    return <div>Page not found</div>;
  }

  return (
    <main className={styles.blogBody}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {blog.title}
      </h1>
      <div
        className="body-context"
        dangerouslySetInnerHTML={{ __html: blog.context }}
      />
    </main>
  );
}
