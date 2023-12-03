// src/components/Table.tsx
import React from 'react'
import { useTable, useSortBy, Column } from 'react-table'
import { Sales } from '../utils/productData'

interface TableProps {
  salesData: Sales[]
}

const Table: React.FC<TableProps> = ({ salesData }) => {
  const columns: Column<Sales>[] = React.useMemo(
    () => [
      {
        Header: 'Week Ending',
        accessor: 'weekEnding', // Property name from Sales type
      },
      {
        Header: 'Retail Sales',
        accessor: 'retailSales', // Property name from Sales type
      },
      {
        Header: 'Wholesale Sales',
        accessor: 'wholesaleSales', // Property name from Sales type
      },
      {
        Header: 'Units Sold',
        accessor: 'unitsSold', // Property name from Sales type
      },
      {
        Header: 'Retailer Margin',
        accessor: 'retailerMargin', // Property name from Sales type
      },
    ],
    [],
  )

  const data = React.useMemo(() => salesData, [salesData])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy) as any

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''
                }
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
