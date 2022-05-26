import React, { useContext, useEffect, useState } from 'react'
import { Form, Input } from 'reactstrap'
import CatalogueItem from '../../components/CatalogueItem'
import styled from 'styled-components'
import { search } from '../../utils/utils'
import Title from '../../components/Title'
import Loading from '../../components/Loading'
import { Context } from '../../context/context'
import data from '../../data/data.json'

const Search = styled(Input)`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  max-width: 400px;
`

const Catalogue = () => {
  const { allProducts, setAllProducts } = useContext(Context)
  const [initialSearch, setInitialSearch] = useState('')
  const [searchParam] = useState(['title']) // search only by title
  const [loading, setLoading] = useState(false)

  const getProducts = () => {
    setLoading(true)
    setAllProducts(data.products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const searchedProducts = search(allProducts, initialSearch, searchParam).map((product) => {
    return <CatalogueItem key={product.id} {...product} />
  })

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Search
          type='search'
          name='search-input'
          id='search-input'
          placeholder='Search'
          value={initialSearch}
          onChange={(e) => setInitialSearch(e.target.value)}
        />
      </Form>
      {searchedProducts.length === 0 ? <Title text='Pēc Jūsu pieprasījuma nekadi produkti nebija atrasti.' /> : searchedProducts}
    </>
  )
}

export default Catalogue
