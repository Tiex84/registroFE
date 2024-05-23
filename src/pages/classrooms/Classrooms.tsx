import axios, { AxiosResponse } from 'axios'
import { Checkbox, List, Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface ClassroomProps {
  id: string
  name: string
  size: string
}

const Classrooms: React.FC = () => {

  const [data, setData] = useState<ClassroomProps[]>([])
  const [currentPage, setCurrentPage] = useState(1);

  const getClassrooms = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/classrooms`).then((res: any) => 
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
    getClassrooms();
  }, []);
  


  return (
    <>
    <h1>Classrooms</h1>


 
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableHeadCell className="p-4">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell>Id</TableHeadCell>
          <TableHeadCell>Nome</TableHeadCell>
          <TableHeadCell>Size</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
        {currentItems.map((item: ClassroomProps, index: number) => (
          <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell className="p-4">
            <Checkbox />
          </TableCell>
          <TableCell>{item.id}</TableCell>
          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.name}
          </TableCell>
          <TableCell>{item.size}</TableCell>
          <TableCell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
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

export default Classrooms