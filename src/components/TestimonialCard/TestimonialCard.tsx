import type { Testimonial } from '../../types/testimonial';
import './TestimonialCard.scss';

type CardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard: React.FC<CardProps> = ({ testimonial }) => {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-card__logo'>
        <img src={testimonial.logo} alt='logo' className='testimonial-card__logo-img' />
      </div>
      <p className='testimonial-card__text'>
        {testimonial.text}
        <span className='testimonial-card__quote'>“</span>
      </p>
      <div className='testimonial-card__person'>
        <img src={`/${testimonial.photo}`} alt='photo' className='testimonial-card__photo' />
        <div>
          <div className='testimonial-card__name'>{testimonial.name}</div>
          <div className='testimonial-card__position'>{testimonial.position}</div>
        </div>
      </div>
    </div>
  );
};
