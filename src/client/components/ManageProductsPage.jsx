import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import { Card, LinearProgress   } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';



export default function ManageProductsPage(){
    const [products,setProducts]=useState([]);
    const [err,setErr]=useState('');
    useEffect(async()=>{
        const productsFromSever= await getAllProducts();
        setProducts(productsFromSever);
        console.log(products);

    },[]);
    async function getAllProducts(){
        try{
            const productsFromSever=await axios.get('http://localhost:3001/products');
            return productsFromSever.data;

        }
        catch(err){
            setErr(err.message);
            console.log(err.message);

        }
    }
    getAllProducts();
    return (
       <div>
           {err ?(<h3>{err}</h3>) : products.length===0?<CircularProgress/>:
           <Row>           
            {products.map((product)=>(
            <Col lg='3' className='my-3' key={product.id}>
                <Card>
                    <img src={product.image} height={250}/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </Card>  
            </Col>
            ))}
            </Row>}
            
       </div>
        
    )
}
