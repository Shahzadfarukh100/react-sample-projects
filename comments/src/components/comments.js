import { useState } from "react";
import { commentsList } from "../utils/commentsData";

const Comments = () =>{

    const [comments, setComments] = useState(commentsList);
    const [commentMessage, setCommentMessage] = useState('');
    const totalComments = comments.length;

    const likeComment = (e, commentId) => {
        e.preventDefault();

        setComments((comments)=>{

            return comments.map((comment)=>{
                if(comment.id === commentId){
                    return {...comment, likes: comment.likes +1}
                }else{
                    return comment
                }
            })
        }) 

    }

    const deleteComment = (e, commentId) =>{
        e.preventDefault();
        setComments((comments)=>{
            return comments.filter((c)=> c.id !== commentId)
        })
    }

    const postNewCommentHandler = (e) =>{
        e.preventDefault();

        if(commentMessage){
            const newComment = {
                    id:new Date().getTime().toString(),
                    name:"You",
                    profile_image: "http://dummyimage.com/250x250.png/cc0000/ffffff",
                    likes:0,
                    comment:commentMessage,
                    post_date: new Date().toLocaleDateString()
                }
            
            setComments((comments)=>{
                return [...comments, newComment]
            })

            setCommentMessage('');
        }
    }



    return (
        <>
            <section className="content-item" id="comments">
                <div className="container">   
                    <div className="row">
                        <div className="col-sm-8">   
                            <form onSubmit={postNewCommentHandler}>
                                <h3 className="pull-left">New Comment</h3>
                                <button type="submit" className="btn btn-primary pull-right">Submit</button>
                                <fieldset>
                                    <div className="row">
                                        <div className="col-sm-3 col-lg-2 hidden-xs">
                                            <img className="img-responsive" src="http://dummyimage.com/250x250.png/cc0000/ffffff" alt="" />
                                        </div>
                                        <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                                            <textarea className="form-control" id="message" placeholder="Your message" onChange={(e)=> setCommentMessage(e.target.value)} value={commentMessage} ></textarea>
                                        </div>
                                    </div>  	
                                </fieldset>
                            </form>
                            
                            <h3>{totalComments} Comments</h3>

                            {comments.map((comment)=>{
                                return(
                                    <div className="media" key={comment.id}>
                                        <a className="pull-left" href="#">
                                            <img className="media-object" src={comment.profile_image} alt="" />
                                        </a>
                                        <div className="media-body">
                                            <h4 className="media-heading">{comment.name}</h4>
                                            <p>{comment.comment}</p>
                                            <ul className="list-unstyled list-inline media-detail pull-left">
                                                <li><i className="fa fa-calendar"></i>{comment.post_date}</li>
                                                <li><i className="fa fa-thumbs-up"></i>{comment.likes}</li>
                                            </ul>
                                            <ul className="list-unstyled list-inline media-detail pull-right">
                                                <li className=""><a href="#" onClick={(e) => likeComment(e, comment.id)}>Like</a></li>
                                                <li className=""><a href="#" onClick={(e) => deleteComment(e, comment.id)}>Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments;