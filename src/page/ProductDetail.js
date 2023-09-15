import React, {useEffect, useState} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import '../App.css'
import { useParams } from 'react-router-dom'
import Form from "react-bootstrap/Form"


const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductsDetail = async() => {
      //let url = `http://localhost:5000/products/${id}`
      let url = `http://my-json-server.typicode.com/yoaniss/cos-mall/products/${id}`
      let response = await fetch(url)
      let data = await response.json()
      setProduct(data)
  }

  useEffect(() => {
    getProductsDetail()
  }, [])

  return (
    <>
      <Row className='product-detail'>
        <Col className='productDetail-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className='detail-info'>
          <div className='new'>
            {product?.new===true?'[신상품]':''}
          </div>
          <div className='title'>{product?.title}</div>
          <div className='content'>{product?.content}</div>
          <div className='price'>{product?.price}</div>
          <div className='choice'>
            {product?.choice===true?'Conscious Choice':''}
          </div>
          <Form.Select>
            <option>Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </Form.Select>
          <Button variant='dark'>dark</Button>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail