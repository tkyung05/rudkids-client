import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';

import { ImageType } from '@/@types/image';

import * as S from './Carousel.style';

interface CarouselPropsType {
  images: ImageType[];
  name: string;
  autoplay: boolean;
  imagePosition: string;
}

function Carousel(props: CarouselPropsType) {
  return (
    <S.CustomSwiper
      slidesPerView={1}
      pagination
      loop
      speed={1000}
      autoplay={props.autoplay ? { delay: 3000 } : false}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {props.images?.map((image, idx) => (
        <SwiperSlide key={idx}>
          <S.SwiperImage
            src={image.url}
            alt={props.name + '배너 이미지'}
            width={2000}
            height={2000}
            imagePosition={props.imagePosition}
          />
        </SwiperSlide>
      ))}
    </S.CustomSwiper>
  );
}

export default Carousel;
