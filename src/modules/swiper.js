import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const swiperCarousel = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
};
export default swiperCarousel;
