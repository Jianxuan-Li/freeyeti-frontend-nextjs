"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getBlogs } from '@/modules/Home/requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    try {
      getBlogs().then((res) => {
        setBlogs(res)
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }

  }, []);

  return (
    <main className={styles.main}>
      <h1>Freeyeti's blog</h1>
    </main>
  )
}
