import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard({ product }) {
const { id, title, brand, description, price, discountPercentage, image } = product
return (
<div className="card">
<img src={image} alt={title} className="card-image" />
<div className="card-body">
<h3 className="card-title">{title}</h3>
<Link to="#" className="brand-link">{brand}</Link>
<p className="description">{description}</p>


<div className="price-row">
<div className="price">${price.toFixed(2)}</div>
<div className="badge">{discountPercentage}%</div>
</div>


<Link to={`/product/${id}`} className="btn">View Details</Link>
</div>
</div>
)
}