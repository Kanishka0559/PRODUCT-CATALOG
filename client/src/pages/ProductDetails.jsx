import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProduct } from '../api'


export default function ProductDetails() {
const { id } = useParams()
const [product, setProduct] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let m = true
fetchProduct(id)
.then(data => m && setProduct(data))
.catch(e => setError(e.message))
.finally(() => setLoading(false))


return () => (m = false)
}, [id])


if (loading) return <p className="center">Loading...</p>
if (error) return <p className="center error">Error: {error}</p>


if (!product) return <p>Product not found</p>


return (
<div className="detail">
<img src={product.image} alt={product.title} className="detail-img" />
<div className="detail-info">
<h2>{product.title}</h2>
<p className="brand-link">{product.brand}</p>
<p>{product.description}</p>
<div className="price-row">
<div className="price">${product.price.toFixed(2)}</div>
<div className="badge">{product.discountPercentage}%</div>
</div>
<Link to="/" className="btn outline">Back</Link>
</div>
</div>
)
}