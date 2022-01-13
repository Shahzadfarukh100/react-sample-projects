

const SingleProject = ({ image, title, category }) => {
  return (
    <div className="col-md-4">
      <div className="project">
        <img src={image}/>
        <p className="text-center">
          {title} ({category})
        </p>
      </div>
    </div>
  );
};

export default SingleProject;