import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import React from 'react'

function App() {
    const PRODUCTS = [
        {
            category: 'Sporting Goods',
            price: '$49.99',
            stocked: true,
            name: 'Football',
        },
        {
            category: 'Sporting Goods',
            price: '$9.99',
            stocked: true,
            name: 'Baseball',
        },
        {
            category: 'Sporting Goods',
            price: '$29.99',
            stocked: false,
            name: 'Basketball',
        },
        {
            category: 'Electronics',
            price: '$99.99',
            stocked: true,
            name: 'iPod Touch',
        },
        {
            category: 'Electronics',
            price: '$399.99',
            stocked: false,
            name: 'iPhone 5',
        },
        {
            category: 'Electronics',
            price: '$199.99',
            stocked: true,
            name: 'Nexus 7',
        },
    ]

    return (
        <div className="App">
            <div id="filterableProductTable">
                <FilterableProductTable products={PRODUCTS} />
            </div>
        </div>
    )
}

export default App
