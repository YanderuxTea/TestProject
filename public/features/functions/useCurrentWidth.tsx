import {useEffect, useState} from 'react'

export default function useCurrentWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize);}
  }, [])
  return width
}