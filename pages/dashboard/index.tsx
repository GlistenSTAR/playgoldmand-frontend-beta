import type { NextPage } from 'next'
import cb from 'classnames';

import UserAvartar from '../../components/useravatar'
import FooterMenu from '../../components/menu/menu'
import MineTime from '../../components/minetime'
import Status from '../../components/status'

const Dashboard: NextPage = () => {
  return (
    <div className={cb(
      'w-screen h-screen bg-cover bg-opacity-50',
      'pt-10 items-center'
    )}>
      {/* dashboard header */}
      <div className={cb(
        'flex column justify-between'
      )}>
        <UserAvartar />
        <MineTime />
        <Status />
      </div>

      {/* dashboard content */}
      <div>world</div>

      {/* dashboard footer */}
      <FooterMenu />
    </div>
  )
}

export default Dashboard
