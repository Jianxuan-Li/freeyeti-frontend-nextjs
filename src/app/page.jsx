import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getBlogs } from '@/modules/Home/requests'

const inter = Inter({ subsets: ['latin'] })

async function getData() {
  return await getBlogs();
}

export default async function Home() {
  const {items, meta} = await getData();

  return (
    <main className={styles.main}>
      <h1>Freeyeti&apos;s blog</h1>
      {items && items.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
          </div>
        )
      })
      }
    </main>
  )
}

