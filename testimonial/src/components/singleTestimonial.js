import FontAwesome from "react-fontawesome";
import { ListGroup } from "react-bootstrap";

const SingleTestimonial = ({id, avatar, testimonial, name, job_title, company_name, rating }) =>{

    let RatingItems = [];
    for (let i = 0; i < rating; i++) {
      RatingItems.push(<ListGroup.Item key={`rate-${i}`} as="li" bsPrefix="list-inline-item"><FontAwesome className="fa-star" name="rating_star" /></ListGroup.Item>);
    }

    let NoneRatingItems = [];
    for (let i = 0; i < 5-rating; i++) {
        NoneRatingItems.push(<ListGroup.Item key={`un-rate-${i}`} as="li" bsPrefix="list-inline-item"><FontAwesome className="fa-star-o" name="rating_star" /></ListGroup.Item>);
    }
    
    return (
        <div className="carousel-inner" key={id}>		
            <div className="carousel-item active">
                
                <div className="img-box"><img src={avatar} alt=""/></div>
                <p className="testimonial">{testimonial}.</p>
                <p className="overview"><b>{name}</b>{job_title} at <a href="#">{company_name}.</a></p>
                <div className="star-rating">

                <ListGroup as="ul" bsPrefix="list-inline">
                    {RatingItems}
                    {NoneRatingItems}
                </ListGroup>

                </div>
            </div>		
        </div>
    )
  
}

export default SingleTestimonial;