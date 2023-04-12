import React from 'react';
import { useRouter } from 'next/router';

function ProductItem() {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div>ProductItem {id}</div>
  )
}

export default ProductItem