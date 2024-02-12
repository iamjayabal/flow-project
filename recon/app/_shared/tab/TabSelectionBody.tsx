import { useSelector } from 'react-redux';
import { Card, CardBody } from '@nextui-org/react';
import TableSimple from '../table/TableSimple';
import TableUi from '../table/TableUi';
import Upload from '@/app/pages/upload/page';

export default function Header() {
  const data = useSelector((state: any) => state.tabs.obj);

  return (
    <>
      <div className='container xl mx-auto my-5'>
        {data.id === 'tab1' && <TableSimple />}
        {data.id === 'tab2' && <TableUi />}
        {data.id === 'tab3' && <Upload />}
      </div>
      {/* <Card>
        <CardBody>{data.content}</CardBody>
      </Card> */}
    </>
  );
}
