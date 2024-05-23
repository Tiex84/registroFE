import { Table, TableHead, TableHeadCell, Checkbox, TableBody, TableRow, TableCell, Pagination, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDateValue } from '../../utils/dateUtils';

export interface User {
  name: string;
  lastname: string;
  dateOfBirth: Date;
}

const Users: React.FC = () => {

  const [data, setData] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const {t} = useTranslation();
  const navigate = useNavigate();

  const getUsers = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users`).then((res: any) => 
      {        
        setData(res)
      }
    )
  }

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Funzione per cambiare pagina
  const setPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  }

  useEffect(() => {
    getUsers();
  }, []);
  


  return (
    <>
    <div className='flex justify-between items-center py-5'>
      <h1 className='text-xl font-bold'>Users</h1>
      <Button onClick={() => navigate('add')}>{t('add')}</Button>
    </div>

    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableHeadCell className="p-4">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell>{t('name')}</TableHeadCell>
          <TableHeadCell>{t('lastname')}</TableHeadCell>
          <TableHeadCell>{t('dateOfBirth')}</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
        {currentItems.map((item: User, index: number) => (
          <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell className="p-4">
            <Checkbox />
          </TableCell>
          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.name}
          </TableCell>
          <TableCell>{item.lastname}</TableCell>
          <TableCell>{formatDateValue(item.dateOfBirth)}</TableCell>
          <TableCell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              {t('edit')}
            </a>
          </TableCell>
        </TableRow>
          ))}
        </TableBody>
      </Table>
    </div> 

    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setPage} />
    </div>
    </>
  )
}

export default Users