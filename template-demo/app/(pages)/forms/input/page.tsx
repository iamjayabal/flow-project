import React from 'react';
import { Input } from '@nextui-org/react';
import EmailIcon from '@mui/icons-material/Email';

export default function InputType() {
  const variants = ['flat', 'bordered', 'underlined', 'faded'];
  return (
    <>
      <div className='container md mx-auto my-10'>
        {/* <div className='w-full flex flex-col gap-4 mb-5'>
          {variants.map((variant) => (
            <div
              key={variant}
              className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'
            >
              <Input type='email' variant={variant} label='Email' />
              <Input
                type='email'
                variant={variant}
                label='Email'
                placeholder='Enter your email'
              />
            </div>
          ))}
        </div> */}

        <div className='flex flex-col gap-4'>
          <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
            <Input
              type='mobile'
              label='Mobile'
              //   placeholder='you@example.com'
              labelPlacement='outside'
              startContent='+91-'
            />
            <Input
              type='number'
              label='Price'
              placeholder='0.00'
              labelPlacement='outside'
              startContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>$</span>
                </div>
              }
            />
            <Input
              type='url'
              label='Website'
              placeholder='google.com'
              labelPlacement='outside'
              startContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>https://</span>
                </div>
              }
            />
          </div>
          <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
            <Input
              type='email'
              label='Email'
              placeholder='you@example.com'
              labelPlacement='outside'
              endContent={
                <EmailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
            />
            <Input
              type='number'
              label='Price'
              placeholder='0.00'
              labelPlacement='outside'
              endContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>$</span>
                </div>
              }
            />
            <Input
              type='url'
              label='Website'
              placeholder='testing'
              labelPlacement='outside'
              endContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>.org/</span>
                </div>
              }
            />
          </div>
          <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
            <Input
              label='Email'
              placeholder='testing'
              labelPlacement='outside'
              startContent={
                <EmailIcon className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              endContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>
                    @gmail.com
                  </span>
                </div>
              }
            />
            <Input
              label='Price'
              placeholder='0.00'
              labelPlacement='outside'
              startContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>$</span>
                </div>
              }
              endContent={
                <div className='flex items-center'>
                  <label className='sr-only' htmlFor='currency'>
                    Currency
                  </label>
                  <select
                    className='outline-none border-0 bg-transparent text-default-400 text-small'
                    id='currency'
                    name='currency'
                  >
                    <option>USD</option>
                    <option>ARS</option>
                    <option>EUR</option>
                  </select>
                </div>
              }
              type='number'
            />
            <Input
              type='url'
              label='Website'
              placeholder='testing'
              labelPlacement='outside'
              startContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>https://</span>
                </div>
              }
              endContent={
                <div className='pointer-events-none flex items-center'>
                  <span className='text-default-400 text-small'>.org</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
