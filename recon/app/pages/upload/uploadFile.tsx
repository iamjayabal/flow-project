import { Card, CardBody, CardHeader } from '@nextui-org/react';
import CustomizedSteppers from './stepper';
import FileUpload from '@/app/_utils/FileUpload';

export default function UploadFile() {
  return (
    <>
      <div className='upload__block flex justify-center items-center gap-2.5'>
        <Card className='w-80 '>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-tiny uppercase font-bold'>File One</p>
          </CardHeader>
          <CardBody>
            <FileUpload />
          </CardBody>
        </Card>
        <Card className='w-80 '>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-tiny uppercase font-bold'>File Two</p>
          </CardHeader>
          <CardBody>
            <FileUpload />
          </CardBody>
        </Card>
        <Card className='w-80 '>
          <CardBody>
            <CustomizedSteppers />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
