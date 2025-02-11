
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Comments = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('Feedback.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img
                       className="mx-auto h-20 mt-3 w-20 rounded-full object-cover"
                        src={review.photo}
                         alt={review.name}
                />
                            <h3 className="text-2xl mt-2 text-orange-400">{review.name}</h3>
                           <div className="flex items-center text-center">
                           <FaQuoteLeft className="mr-3 mb-2"></FaQuoteLeft>
                            <p className="py-8">{review.quote}</p>
                            <FaQuoteRight className="ml-3 mb-2"></FaQuoteRight>
                           </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Comments;