import type { NextPage } from 'next'
import cb from 'classnames';
import SocialGroupIcon from '../../components/socials/SocailGroupIcon'

const Dashboard: NextPage = () => {
  return (
    <div className={
        cb('w-screen h-screen bg-cover bg-opacity-50', 
           'flex justify-around')
      }>
        <div className="absolute h-screen flex flex-col items-center justify-center">
          <div className="text-white text-2xl">
            Welcome to Dashboard
          </div>
          <SocialGroupIcon />
        </div>
    </div>
  )
}

export default Dashboard
