import React from 'react';
import {Card  } from '@mui/material';
import Product from './Product';
function Cart() {
  return (
    <div>
      {/* TABLE */}
        <Card>
            <Product/>
        </Card>
    </div>
  )
}

export default Cart