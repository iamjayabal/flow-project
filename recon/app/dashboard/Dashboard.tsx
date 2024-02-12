import Header from '@/app/_layout/header/Header';
import TabSelectionBody from '@_shared/tab/TabSelectionBody';
import User from '../pages/user/page';
import StatusCard from '@/app/_components/status_card/index';

const DashboardWorkFlow = () => {
  return (
    <>
      <div className='flex flex-col w-11/12'>
        <Header />
        {/* <TabSelectionBody /> */}
        {/* <User /> */}
        <StatusCard />
      </div>
    </>
  );
};

export default DashboardWorkFlow;
