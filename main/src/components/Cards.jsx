

const Cards = (props) => {
    console.log(props)
    return (
      <>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={props.img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Wall Board
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>What one do you want?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
            </div>
            
      </>
    );
};

export default Cards;