import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ producto }) => {
  const { id, img, name, description, price, stock, hashtags } = producto;

  return (
    <div className='div-container' style={{ paddingTop:'10px'}}>
    <div className="card" style={{backgroundColor: '#fff6bd', width: '20rem', margin: '5rem'}}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
        {}
      </div>

      <Link className="btn btn-outline-success" to={`item/${id}`}>
        Ver más
      </Link>
    </div>
    </div>
  );
};

export default Item;
