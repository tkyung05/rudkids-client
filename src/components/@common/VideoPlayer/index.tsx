import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { CSSProperties } from 'styled-components';

interface VideoPlayerPropsType {
  url: string;
  autoPlay: boolean;
  muted: boolean;
  handleOffVideo: () => void;
  style?: CSSProperties;
}

function VideoPlayer(props: VideoPlayerPropsType) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(props.autoPlay);
  }, [props.autoPlay]);

  return (
    <ReactPlayer
      url={props.url}
      muted={props.muted}
      playing={isPlaying}
      width="100%"
      height="100%"
      onEnded={props.handleOffVideo}
      style={props.style}
    />
  );
}

export default VideoPlayer;
