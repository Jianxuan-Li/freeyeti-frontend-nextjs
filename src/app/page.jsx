"use client"
import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getBlogs } from '@/modules/Home/requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    try {
      getBlogs().then((res) => {
        setBlogs(res)
      })
    } catch (error) {
      console.log(error)
    }

  }, []);

  return (
    <main className={styles.main}>
      <h1>Freeyeti&apos;s blog</h1>
      {blogs && blogs.items && blogs.items.map((blog) => {
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
