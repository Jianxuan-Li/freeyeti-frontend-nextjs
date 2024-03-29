"use client";
import React from 'react'
import { getHomepageBg } from "@/modules/home/requests";
import styles from "./page.module.css";

type Props = {}
let timer: any = null;
let currIndex = 0;

function cache(url: string){
  const img = new Image();
  img.src = url;
}

export default function Index({ }: Props) {
  const [curr, setCurr] = React.useState<string | null>(null);

  React.useEffect(() => {
    getHomepageBg().then((images) => {
      if (!images || !images.meta || !images.meta.total_count) return;

      const bg = images.items.map((item) => {
        return item.meta.download_url;
      });
      setCurr(bg[0]);
      currIndex = 0;

      timer = setInterval(() => {
        if (currIndex === bg.length - 1) {
          currIndex = 0;
          setCurr(bg[0]);
          return;
        }
        currIndex++;
        setCurr(bg[currIndex]);
      }, 4000);

      bg.forEach((url) => {
        cache(url);
      });
    })

    return () => {
      if (timer) clearInterval(timer);
    }

  }, []);

  if (!curr) return null;
  return (
    <div className={styles.bg} style={{ backgroundImage: `url(${curr})` }}></div>
  )
}