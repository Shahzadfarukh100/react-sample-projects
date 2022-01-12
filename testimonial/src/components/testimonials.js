import { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";

import { textimonialsList } from "../utils/data";
import SingleTestimonial from "./singleTestimonial";

const Testimonials = () =>{
    const [testimonial, setTestimonial] = useState([]);
    const [index, setIndex] = useState(0);

    const checkIndex = (index) =>{
        return index > textimonialsList.length-1 ? 0 : index <0 ? textimonialsList.length-1 : index
    }

    const previousTestimonial = (e) =>{
          e.preventDefault();
          setIndex(index => checkIndex(index -1))
    }

    const nextTestimonial = (e) =>{
        e.preventDefault();
        setIndex(index => checkIndex(index + 1))
    }

    useEffect(()=>{
        setTestimonial(testimonial => textimonialsList[index])
    }, [index])
      
    return (
        <>
            <h2>Testimonials</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <SingleTestimonial {...testimonial} key={testimonial.id} />
                
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" onClick={previousTestimonial}>
                    <FontAwesome className="fa-angle-left" name="arrow_left" />
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next" onClick={nextTestimonial}>
                    <FontAwesome className="fa-angle-right" name="arrow_right" />
                </a>

            </div>
        </>
    )

}

export default Testimonials;