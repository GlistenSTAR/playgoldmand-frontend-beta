import Image from 'next/image'
import cb from 'classnames'
import { useRouter } from 'next/router'
import Setting from '../setting';
import Button from '../../input/Button';

const UserAvatar = (props) => {
  const router = useRouter();
  const ual = props['ual'] ? props['ual'] : { 'activeUser': null };
  const activeUser = ual['activeUser'];
  const accountName = activeUser ? activeUser['accountName'] : null;

  const logout = () => {
    ual.logout();
    router.push('/')
  }
  return (
    <div className={cb(
      'flex column',
      'header-user',
      'pl-10'
    )}>
      <div className={cb(
        'border-white border-4 rounded-full',
        'w-20 h-20 relative',
        'flex column'
      )}>
        <Image
          src={'/img/avatars/person.jpg'}
          alt="useravart"
          width="90"
          height="90"
          className={cb(
            'rounded-full '
          )}
        />
        <div className={cb(
          'absolute -bottom-2 -right-3 rounded-full border-white border-2',
          'w-10 h-10 bg-black bg-opacity-75 race-icon'
        )}>
          <Image
            src={'/img/icons/human-icon.svg'}
            width="42"
            height="42"
            alt="kind"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center">
          <div className={cb(
            'w-48 h-12 -ml-4 pl-6 mt-1',
            'text-left text-white',
            'rounded-r-3xl bg-gray-900',
            'flex flex-row justify-start',
          )}>
            <div className="w-1/2">
              <h3 className="username">Bastam</h3>
              <p className="wallet-name">{accountName}</p>
            </div>
            <Button
              className="w-1/2 flex justify-end items-center pr-2"
              onClick={logout}
            >
              <Image
                src={'/img/icons/logout.svg'}
                width="32"
                height="20"
                alt="logout"
                className="cursor-pointer"
              />
            </Button>
          </div>
          <Setting />
        </div>
        <div
          className={cb(
            'mt-1 ml-4 land-name',
            'flex justify-left'
          )}>
          Mountain fields
        </div>
      </div>
    </div>
  );
}

export default UserAvatar;