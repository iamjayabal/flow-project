export default function ProductListDetails({
  params,
}: {
  params: { productId: string; productListId: string };
}) {
  return (
    <div>
      Product Details id is {params.productId} and Product List id is{' '}
      {params.productListId}{' '}
    </div>
  );
}
