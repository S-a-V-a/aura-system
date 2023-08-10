import { FC, PropsWithChildren, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

type TSlideProps = {
  onActiveSlideChange: (activeIdx: number) => void;
} & PropsWithChildren;

const Slide: FC<TSlideProps> = ({ onActiveSlideChange, children }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (typeof swiper?.activeIndex === 'undefined') {
      return;
    }

    onActiveSlideChange(swiper.activeIndex);
  }, [swiper?.activeIndex]);

  return <>{children}</>;
};

export default Slide;
