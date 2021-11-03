import type { NextPage } from 'next'
import cb from 'classnames';
import FooterMenu from '../../components/menu/menu';

const Dashboard: NextPage = () => {
  return (
    <div className={cb(
      'w-screen h-screen bg-cover bg-opacity-50',
    )}>
        <div className={cb(
          'absolute h-screen w-full p-5',
          'flex flex-col items-center justify-center',
        )}>
          <div className="text-white text-2xl">
            Welcome to Dashboard
          </div>
          <FooterMenu />
        </div>
    </div>
  )
}

export default Dashboard
