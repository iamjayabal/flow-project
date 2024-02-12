import { useAppDispatch, useAppSelector } from '@/app/store/hook';
import { getUserData } from '@/app/store/user_slice';
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { ColumnElement } from '@react-types/table';

const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'email',
    label: 'EMAIL',
  },
  {
    key: 'website',
    label: 'WEBSITE',
  },
];

export default function UserTable() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: any) => state.user.data);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(data);

  return (
    <>
      <Table aria-label='Example table with dynamic content'>
        <TableHeader>
          {columns.map(
            (column: {
              key: Key | null | undefined;
              label:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | ColumnElement<unknown>
                | ColumnElement<unknown>[]
                | null
                | undefined;
            }) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )
          )}
        </TableHeader>
        <TableBody>
          {data.map((res: { id: Key | null | undefined }) => (
            <TableRow key={res.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(res, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
