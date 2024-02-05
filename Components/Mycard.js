import React from 'react'

const Mycard = (props) => {
  return (
    <>
   


    <div className="card mynewcard" style={{ width: "18rem" }}>
  <img src={props.image} className="cardimage" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> product name :{props.name}</h5>

    <p className="card-text"> price :  {props.price}$</p>
    <a href="#" className="btn productbtn ">
      buy now
    </a>
  </div>
</div>

    </>
  )
}

export default Mycard