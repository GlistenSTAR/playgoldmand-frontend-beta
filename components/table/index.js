import React, { Component } from 'react'

import Table from 'react-tailwind-table';
// import 'react-tailwind-table/dist/index.css';

const MyTable = ({columns, rows}) => {
    return <Table columns={columns} rows={rows} />
}

export default MyTable;