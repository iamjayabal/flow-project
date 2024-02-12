import PageHeader from '@_shared/page_header/PageHeader';
import StatusCardList from './StatusCardList';
import TabSelection from '@_shared/tab/TabSelection';

let tabs = [
  {
    id: 'latest',
    label: 'Latest',
    data: {},
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'all',
    label: 'All',
    data: {},
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 'matched',
    label: 'Matched',
    data: {},
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 'unmatched',
    label: 'Unmatched',
    data: {},
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function StatusCard() {
  return (
    <>
      <div className='my-8 mx-3'>
        <PageHeader />
        <TabSelection data={tabs} />
        <StatusCardList />
      </div>
    </>
  );
}
