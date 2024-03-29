import React from 'react';
import styles from '../../page.module.css';
import '../stream-context.css';
import { findBlogsBySlug, getBlogById } from '@/modules/blog/requests';

export default async function JuntIntroPage(context) {
  let slug = context.params.slug;

  if (slug === undefined) {
    return <div>Page not found</div>;
  }

  if (slug === 'privacy') {
    slug = 'junt-privacy-policy';
  }

  const result = await findBlogsBySlug(slug);

  if (!result || !result.items || result.items.length === 0) {
    return <div>Page not found</div>;
  }

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
