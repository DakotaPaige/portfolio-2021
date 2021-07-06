import { useEffect, useState } from 'react';

export const useImage = (url) => {
  const [image, setImage] = useState(undefined);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!url) return;

    let image = new Image();

    const onLoad = () => {
      setImage(image);
      setStatus('loaded');
    };

    const onError = () => {
      setImage(undefined);
      setStatus('error');
    };

    image.onload = onLoad;
    image.onerror = onError;

    image.src = url;

    return () => {
      setImage(undefined);
      setStatus('loading');
    };
  }, [url]);

  // return array because it it better to use in case of several useImage hooks, ex:
  // const [background, backgroundStatus] = useImage(url1);
  // const [pattern] = useImage(url2);
  return [image, status];
};
