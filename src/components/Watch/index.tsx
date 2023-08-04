'use client';
import React, { useState, useEffect } from 'react';
import { getWatchList, deleteVideo } from '@/modules/watch/requests';
import DownloadBar from './DownloadBar';
import Button from '@/components/common/Button';
import { Button as MuiButton } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import { logout } from '@/modules/auth/logout';

type Props = {};

type WatchItem = {
  title: string;
  url: string;
  thumbnail: string;
};

export default function WatchPage({}: Props) {
  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState<WatchItem[]>([]);
  const { user, setUser } = React.useContext(AuthContext);

  useEffect(() => {
    getWatchList().then((res) => {
      setWatchList(res.data.data);
      setLoading(false);
    });
  }, []);

  const updateWatchList = async () => {
    const res = await getWatchList();
    setWatchList(res.data.data);
  };

  const WatchList = () => {
    return (
      <div className="mt-6 mb-6">
        <div className="h-56 grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {watchList.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg">
              <div>
                <a href={item.url}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-lg shadow-xl dark:shadow-gray-800"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      maxHeight: '280px'
                    }}
                  />
                </a>
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
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
                </figcaption>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6 mb-6 flex">
        <div className="self-end">
          <span className="mr-2">{user?.name}</span>
          <MuiButton
            onClick={async () => {
              await logout();
              setUser(null);
            }}
            variant="outlined"
          >
            Logout
          </MuiButton>
        </div>
      </div>
      <div className="mt-6 mb-6">
        <DownloadBar onCachedNewVideo={updateWatchList} />
      </div>
      {loading ? <div>Loading...</div> : <WatchList />}
    </div>
  );
}
