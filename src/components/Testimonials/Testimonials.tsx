import './Testimonials.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

//@ts-expect-error/ban-ts-comment
import 'swiper/css';
//@ts-expect-error/ban-ts-comment
import 'swiper/css/navigation';
//@ts-expect-error/ban-ts-comment
import 'swiper/css/pagination';

import testimonials from '../../api/testimonials.json';
import { TestimonialCard } from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials__slider-wrapper'>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className='testimonials__slider'
        >
          {[
            ...testimonials,
            ...testimonials.map(item => ({ ...item, id: item.id + testimonials.length })),
          ].map(item => (
            <SwiperSlide key={item.id}>
              <TestimonialCard testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className='testimonials__prev'>^</button>
        <button className='testimonials__next'>^</button>
      </div>
    </section>
  );
};

export default Testimonials;
