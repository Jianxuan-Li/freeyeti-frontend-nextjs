'use client';
import React, { useState } from 'react';
import { downloadVideo } from '@/modules/watch/requests';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LoadingButton from '@mui/lab/LoadingButton';

type Props = {
  onCachedNewVideo: () => void;
};

export default function DownloadBar(props: Props) {
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState<string>('');

  const handleDownload = async (e: any) => {
    if (!videoId || loading || !videoId.trim()) {
      return;
    }
    if (!videoId.match(/^[a-zA-Z0-9_-]{11}$/)) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    try {
      await downloadVideo(videoId);
    } catch (error) {
      console.log(error);
    }
    props.onCachedNewVideo();
    setLoading(false);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Video ID"
        inputProps={{ 'aria-label': 'download by video id' }}
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <LoadingButton
        id={'download-button'}
        size="small"
        onClick={handleDownload}
        endIcon={<CloudDownloadIcon />}
        loading={loading}
        loadingPosition="end"
        variant="outlined"
      >
        <span>Download</span>
      </LoadingButton>
    </Paper>
  );
}
