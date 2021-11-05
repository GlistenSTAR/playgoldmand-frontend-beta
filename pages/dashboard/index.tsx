import type { NextPage } from 'next'
import cb from 'classnames';

import UserAvartar from '../../components/useravatar'
import FooterMenu from '../../components/menu/menu';

const Dashboard: NextPage = () => {
  return (
    <div className={cb(
      'w-screen h-screen bg-cover bg-opacity-50',
    )}>
      {/* dashboard header */}
      <div>
        <UserAvartar />
      </div>

      {/* dashboard content */}
      <div>world</div>

      {/* dashboard footer */}
      <FooterMenu />
    </div>
  )
}

export default Dashboard
