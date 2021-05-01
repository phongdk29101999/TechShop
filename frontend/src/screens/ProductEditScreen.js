import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails } from '../actions/productActions'

const ProductEditScreen = ({ match, history }) => {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        if (!product.name || product._id !== productId) {
            dispatch(listProductDetails(productId))
        } else {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setDescription(product.description)
        }
    }, [dispatch, history, product, productId])

    const submitHandler = (e) => {
        e.preventDefault()
        // UPDATE PRODUCT
    }

    return (
        <>
            <Link to='/admin/productList' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <FormGroup controlId='name'>
                            <FormLabel>Name</FormLabel>
                            <FormControl
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='price'>
                            <FormLabel>Price</FormLabel>
                            <FormControl
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='image'>
                            <FormLabel>Image</FormLabel>
                            <FormControl
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='brand'>
                            <FormLabel>Brand</FormLabel>
                            <FormControl
                                type='text'
                                placeholder='Enter brand'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='countInStock'>
                            <FormLabel>Count In Stock</FormLabel>
                            <FormControl
                                type='number'
                                placeholder='Enter countInStock'
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='category'>
                            <FormLabel>Category</FormLabel>
                            <FormControl
                                type='text'
                                placeholder='Enter category'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <FormGroup controlId='description'>
                            <FormLabel>Description</FormLabel>
                            <FormControl
                                type='text'
                                placeholder='Enter description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></FormControl>
                        </FormGroup>

                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
}

export default ProductEditScreen
