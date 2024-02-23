'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
	return (
		<div className={className}>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
			</Swiper>
		</div>
	);
};
