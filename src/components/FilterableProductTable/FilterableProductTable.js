import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'
import { Card } from 'react-bootstrap';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = { filterText: '', inStockOnly: false }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText,
        })
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly,
        })
    }

    render() {
        return (
            <Card>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </Card>
        )
    }
}

export default FilterableProductTable
