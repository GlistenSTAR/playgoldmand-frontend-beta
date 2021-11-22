import React, { useEffect, useState } from 'react'
import { StatusOfflineIcon, StatusOnlineIcon, UserGroupIcon } from '@heroicons/react/solid'
import MyTable from '../../components/table';
import { fetchGetUsers } from '../../services/AuthService';

const Statistics = ({ numbers }) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-2 bg-purple-200">
            <StatusOnlineIcon className="h-5 w-5 text-onLineColor" />
          </span>
          <p className="text-md text-black dark:text-white ml-2">
            Online Users
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {numbers?.online}
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>5.5%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-2 bg-purple-200">
            <StatusOfflineIcon className="h-5 w-5 text-offLineColor" />
          </span>
          <p className="text-md text-black dark:text-white ml-2">Offline Users</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {numbers?.total - numbers?.online}
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>0.3%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-2 bg-purple-200">
            <UserGroupIcon className="h-5 w-5 text-onLineColor" />
          </span>
          <p className="text-md text-black dark:text-white md:ml-4">Total Users</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {numbers?.total}
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>7%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState({
    online: 0,
    total: 0,
  });

  const initUsers = (data) => {
    let fetchUsers = [];
    let inc = 0
    data.forEach(user => {
      const { _id, accountName, created_at, email, isConnected, username, updatedAt } = user;
      fetchUsers = [
        ...fetchUsers,
        {
          id: _id,
          accountName,
          email,
          username,
          isConnected: isConnected ? (<StatusOnlineIcon className="h-5 w-5 text-onLineColor" />) :
            (<StatusOfflineIcon className="h-5 w-5 text-offLineColor" />),
        }
      ]
      isConnected && inc++;
    });
    setUsers(fetchUsers);
    setNumbers({
      online: inc,
      total: data.length,
    });
  }
  useEffect(async () => {
    let users = await fetchGetUsers();
    initUsers(users.data.users);
  }, [])

  const columns = [
    {
      field: "email",
      use: "Email",
      use_in_search: false
    },
    {
      field: "username",
      use: "Name",
    },
    {
      field: "accountName",
      use: "Wallet Name",
    },
    {
      field: "isConnected",
      use: "Status",
      use_in_search: false
    }
  ];
  return (
    <>
      <Statistics numbers={numbers} />
      <MyTable
        title="Users"
        rows={users}
        columns={columns}
      />
    </>
  )
}
