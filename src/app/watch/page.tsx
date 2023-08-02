'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getWatchList, deleteVideo } from '@/modules/watch/requests';
import DownloadBar from '@/components/watch/DownloadBar';
import Button from '@/components/common/Button';

type Props = {};

type WatchItem = {
  title: string;
  url: string;
  thumbnail: string;
};

export default function WatchPage({}: Props) {
  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState<WatchItem[]>([]);

  useEffect(() => {
    getWatchList().then((res) => {
      setWatchList(res.data);
      setLoading(false);
    });
  }, []);

  const updateWatchList = async () => {
    const res = await getWatchList();
    setWatchList(res.data);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6 mb-6">
        <DownloadBar onCachedNewVideo={updateWatchList} />
      </div>
      <div className="mt-20 mb-6">
        <div className="h-56 grid md:grid-cols-3 sm:grid-cols-2 gap-4 content-center">
          {watchList.map((item, index) => (
            <div key={index} className="bg-gray-100">
              <div>
                <a href={item.url}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
                <Button
                  type="primary"
                  onClick={() => {
                    window.open(item.url, '_blank');
                  }}
                >
                  Play
                </Button>
                <Button
                  type="danger"
                  onClick={() => {
                    deleteVideo(item.title).then(() => {
                      updateWatchList();
                    });
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
