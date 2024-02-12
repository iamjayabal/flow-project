export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Product Details page {params.productId}</div>;
}
