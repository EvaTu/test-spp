import './ProductStyles.scss';

function Product({data}){
    const {id, category, name, image, price} = data
    return(
    <div key={id} className="product-container" >
      <h3>{category}</h3>
      <p>{name}</p>
      <img src={image} className="product-image"/> 
      <p>{price}</p>
    </div>
  
    )
}

export default Product