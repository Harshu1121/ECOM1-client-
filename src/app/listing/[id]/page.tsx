"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import ProductDetailsSkeleton from "./productSkeleton";
import ProductDetailsContent from "./productDetails";

function ProductDetailsPage() {
  const params = useParams(); 
  const productId = params?.id?.toString(); // Convert id to a string

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetailsContent id={productId} />
    </Suspense>
  );
}

export default ProductDetailsPage;
