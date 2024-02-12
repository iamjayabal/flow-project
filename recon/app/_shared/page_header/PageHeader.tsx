import { Card, CardBody } from '@nextui-org/react';

export default function PageHeader() {
  return (
    <>
      <Card fullWidth={true} radius='sm'>
        <CardBody>
          <p className='text-lg font-bold'>Dashboard</p>
        </CardBody>
      </Card>
    </>
  );
}
