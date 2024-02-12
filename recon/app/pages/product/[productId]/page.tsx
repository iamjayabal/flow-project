import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`any custom text ${params?.productId}`);
    }, 1000);
  });
  return {
    title: `product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <div>Product Details page {params.productId}</div>;
}
