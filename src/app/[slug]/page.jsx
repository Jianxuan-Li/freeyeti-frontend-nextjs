import styles from "../page.module.css";
import moment from "moment";
import { findBlogsBySlug, getBlogById } from "@/modules/blog/requests";

export default async function BlogPage(context) {
  if (!context.params || !context.params.slug) {
    return <div>Blog not found</div>;
  }

  const result = await findBlogsBySlug(context.params.slug);
  const { id } = result.items[0];
  const blog = await getBlogById(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className={styles.blogBody}>
      <h1 className={styles.blogPageTitle}>{blog.title}</h1>
      <p className={styles.blogPageDate}>{moment(blog.meta.first_published_at).format("Y-M-D")}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.context }} />
    </main>
  );
}
