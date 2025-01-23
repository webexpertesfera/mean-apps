import { Component, OnInit } from '@angular/core';
import Swiper, {
  A11y,
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';


@Component({
  selector: 'app-chakra',
  templateUrl: './chakra.component.html',
  styleUrls: ['./chakra.component.css'],
})
export class ChakraComponent {
  responsiveOptions!: any[];
  images = [
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png',
  'assets/landing/product.png'
  ];

  ngOnInit() { }

  public config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: { delay: 1 },
    breakpoints: {
      400: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
    speed: 5000,
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    modules: [Autoplay, Navigation, Pagination, /*A11y, Mousewheel*/],
    autoHeight: true,
    spaceBetween: 20,
    navigation: true,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 3,
    centeredSlides: true,
    speed: 3000,
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 1000,
    disableOnInteraction: false,
    }
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
    breakpoints: {
      400: {
        slidesPerView: 3,
        centeredSlides: false
      },
    }
  };

   

}
