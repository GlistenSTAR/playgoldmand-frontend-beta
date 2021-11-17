import cb from 'classnames';
import { useRouter } from 'next/router'
import UserAvartar from './userAvatar'
import Setting from './setting'
import MineTime from './mineTime'
import Status from './status'

const Header = (props) => {
  const router = useRouter();

  return (
    <div className={cb(
      'flex column justify-between sm:justify',
      'h-28',
      'py-4 border-b border-gray-400'
    )}>
      <UserAvartar {...props} />
      {router.pathname === 'mining' && <div className="sm:ml-28">
        <MineTime />
      </div>}
      <Status />
    </div>
  )
}

export default Header
