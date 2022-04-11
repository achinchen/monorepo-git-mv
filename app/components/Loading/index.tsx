import { useEffect } from 'react';
import type { LottiePlayer } from '@lottiefiles/lottie-player';
import source from './loading.json';

export default function Loading() {
  useEffect(() => {
    require('@lottiefiles/lottie-player');
    const player = document.querySelector('lottie-player') as LottiePlayer;
    player.addEventListener('rendered', () => player.load(source));
  }, []);

  return <lottie-player w="40" h="40" mx="auto" autoplay loop />;
}
