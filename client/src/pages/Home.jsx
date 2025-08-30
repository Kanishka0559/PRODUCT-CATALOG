import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../api'
import ProductCard from '../components/ProductCard'


export default function Home() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
fetchProducts()
.then(data => {
if (!mounted) return
setProducts(data)
})
.catch(err => setError(err.message))
.finally(() => setLoading(false))


return () => (mounted = false)
}, [])


if (loading) return <p className="center">Loading products...</p>
if (error) return <p className="center error">Error: {error}</p>


return (
<div className="grid">
{products.map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>
)
}