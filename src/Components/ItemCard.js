import React, { useEffect } from "react";
const ItemCard = ({ item, btnType }) => {
  // useEffect(()=>{
  //     console.log(item)
  // },[])

  return (
    <div className="item__card">
      <div className="card__image_container">
          <img src={item.thumbnail} alt={`${item.title} image`} />
      </div>
      <div className="card__body">
        <h1 className="page__txt bold">{item.title}</h1>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <span className="page__txt">Price: {item.price}₹</span>
            <span className="page__txt">⭐{item.rating}</span>
        </div>
        {
          btnType === "addBtn" && <button className="btn page__txt dark">Add To Cart</button> 
        }
        {
          btnType === "removeBtn" && <button className="btn page__txt dark">Remove From Cart</button>
        }
        
      </div>
    </div>
  );
};

export default ItemCard;

//       <div className="card__body">
//         <div>

//         <p className="page__txt">Title: {item.title}</p>
//         <p className="page__txt">Price: {item.price}</p>
//         </div>
//         <button className="btn dark">Add To Cart</button>
//       </div>