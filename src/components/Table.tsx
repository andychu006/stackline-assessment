// src/components/Table.tsx
import React from 'react'
import { useTable, useSortBy, Column, CellProps } from 'react-table'
import { Sales } from '../utils/productData'
import './Table.css'

interface TableProps {
  salesData: Sales[]
}

const Table: React.FC<TableProps> = ({ salesData }) => {
  const columns: Column<Sales>[] = React.useMemo(
    () => [
      {
        Header: 'Week Ending',
        accessor: 'weekEnding',
        Cell: ({ value }: CellProps<Sales, string>) => {
          const dateOptions: Intl.DateTimeFormatOptions = {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          }
          const formattedDate = new Date(value).toLocaleDateString(
            'en-US',
            dateOptions,
          )
          return <span>{formattedDate.replace(/\//g, '-')}</span>
        },
      },
      {
        Header: 'Retail Sales',
        accessor: 'retailSales',
        Cell: ({ value }: CellProps<Sales, number>) => (
          <span>${value.toFixed(2)}</span>
        ),
      },
      {
        Header: 'Wholesale Sales',
        accessor: 'wholesaleSales',
        Cell: ({ value }: CellProps<Sales, number>) => (
          <span>${value.toFixed(2)}</span>
        ),
      },
      {
        Header: 'Units Sold',
        accessor: 'unitsSold',
        Cell: ({ value }: any) => value.toLocaleString(),
      },
      {
        Header: 'Retailer Margin',
        accessor: 'retailerMargin',
        Cell: ({ value }: CellProps<Sales, number>) => (
          <span>${value.toFixed(2)}</span>
        ),
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
                  column.isSorted
                    ? column.isSortedDesc
                      ? 'sort-desc'
                      : 'sort-asc'
                    : ''
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
                <td
                  {...cell.getCellProps()}
                  className={
                    cell.column.isSorted
                      ? cell.column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
