import cb from 'classnames'
import Button from '../common/input/Button';
import { useRouter } from 'next/router'

const Navbar = (props) => {
  const router = useRouter();
  const ual = props['ual'] ? props['ual'] : {'activeUser': null};
  const activeUser = ual['activeUser'];
  const accountName = activeUser ? activeUser['accountName'] : null;

  const logout = () => {
    ual.logout();
    router.push('/')
  }

  return (
    <div className={cb(
      'absolute top-2 right-2',
      'text-white w-16 h-6',
    )}>
      {accountName?
      <Button className={cb(
          'border-4 border-green-500 rounded-full shadow-2xl', 
          'text-white text-sm bg-black bg-opacity-50'
        )}
        onClick={()=>logout()}>
        Logout
      </Button>
      : <></>
      }
    </div>
  );
}

export default Navbar;