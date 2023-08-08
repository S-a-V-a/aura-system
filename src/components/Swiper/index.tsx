import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css/bundle';
import { FC } from 'react';

const SwiperSlider: FC<SwiperProps> = (props) => {
  return <Swiper {...props} />;
};

export default SwiperSlider;
