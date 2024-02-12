import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
  Progress,
  Spacer,
} from '@nextui-org/react';
const cardData = [
  {
    id: 1,
    name: 'Armedu Demo Jan 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    matched: 2068,
    unmatched: 32,
    value: 95,
  },
  {
    id: 2,
    name: 'Armedu Demo Feb 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Pending',
    matched: 2068,
    unmatched: 32,
    value: 75,
  },
  {
    id: 3,
    name: 'Armedu Demo Mar 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    matched: 2068,
    unmatched: 32,
    value: 45,
  },
  {
    id: 4,
    name: 'Armedu Demo Apr 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Pending',
    matched: 2068,
    unmatched: 32,
    value: 99,
  },
  {
    id: 5,
    name: 'Armedu Demo May 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Pending',
    matched: 2068,
    unmatched: 32,
    value: 82,
  },
  {
    id: 6,
    name: 'Armedu Demo Jun 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    matched: 2068,
    unmatched: 32,
    value: 95,
  },
  {
    id: 7,
    name: 'Armedu Demo Jul 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Pending',
    matched: 2068,
    unmatched: 32,
    value: 99,
  },
  {
    id: 8,
    name: 'Armedu Demo Aug 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    matched: 2068,
    unmatched: 32,
    value: 65,
  },
  {
    id: 9,
    name: 'Armedu Demo Jun 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    matched: 2068,
    unmatched: 32,
    value: 95,
  },
  {
    id: 10,
    name: 'Armedu Demo Jul 2023',
    caption: 'Lorem ipsum dolor sit amet',
    status: 'Pending',
    matched: 2068,
    unmatched: 32,
    value: 99,
  },
];

export default function StatusCardList() {
  const chipCall = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <Chip className='capitalize' color='success' size='sm' variant='flat'>
            {status}
          </Chip>
        );
      case 'Pending':
        return (
          <Chip className='capitalize' color='warning' size='sm' variant='flat'>
            {status}
          </Chip>
        );
    }
  };

  return (
    <>
      <div className='flex flex-wrap'>
        {cardData.map((res: any) => (
          <>
            <Card key={res.id} className='min-w-[300px] my-4'>
              <CardHeader className='flex gap-3'>
                <div className='flex flex-col'>
                  <p className='text-md'>{res.name}</p>
                  <p className='text-small text-default-500'>{res.caption}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                {chipCall(res.status)}
                <div className='flex flex-col'>
                  <div className='flex justify-between my-1.5'>
                    <div>
                      <h4>{res.matched}</h4>
                      <small className='text-small text-default-500'>
                        Matched
                      </small>
                    </div>
                    <div className='flex flex-col text-right'>
                      <h4>{res.unmatched}</h4>
                      <small className='text-small text-default-500'>
                        Unmatched
                      </small>
                    </div>
                  </div>
                  <div className='my-1.5'>
                    <Progress
                      size='sm'
                      radius='sm'
                      value={res.value}
                      maxValue={100}
                      color='success'
                      classNames={{
                        base: 'max-w-md',
                        track: 'drop-shadow-md bg-red-500',
                      }}
                    />
                  </div>
                  <div className='flex justify-between my-1.5'>
                    <div>
                      <h4 className='text-green-500'>{res.value}%</h4>
                    </div>
                    <div className='text-right'>
                      <h4 className='text-red-500'>{100 - res.value}%</h4>
                    </div>
                  </div>
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                {/* <Link isExternal showAnchorIcon href='https://www.google.com'>
                For more info
              </Link> */}
                <div className='flex flex-row justify-between w-full'>
                  <div>
                    <small className='text-small text-xs text-default-500'>
                      Last edited by
                    </small>
                    <h6 className='text-sm'>Jayabal M</h6>
                  </div>
                  <div className='text-right'>
                    <small className='text-small text-xs text-default-500'>
                      Total No. Of Records
                    </small>
                    <h6 className='text-sm'>1342434</h6>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Spacer x={4} />
          </>
        ))}
      </div>
    </>
  );
}
