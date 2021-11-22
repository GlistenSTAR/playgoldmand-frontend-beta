import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import Overlay from './provider/overlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import DashboardProvider from './provider/context';
import { adminCheckLogin } from '../../../services/AdminService';

const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `bg-body flex flex-col h-screen pl-0 w-full lg:w-99`,
  main: `bg-gray-100 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl`,
};

export default function DashboardLayout({ children }) {
  const router = useRouter();
  useEffect(()=>{
    adminCheckLogin(router, toast)
  }, []);

  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
        <ToastContainer />
      </div>
    </DashboardProvider>
  );
}
