import Image from 'next/image'
import cb from 'classnames'

const UserAvatar = (props) => {
  const ual = props['ual'] ? props['ual'] : {'activeUser': null};
  const activeUser = ual['activeUser'];
  const accountName = activeUser ? activeUser['accountName'] : null;
  return (
    <div className={cb(
      'flex column',
      'pl-10'
    )}>
      <div className={cb(
        'border-white border-4 rounded-full',
        'w-20 h-20 relative',
        'flex column'
      )}>
        <Image
          src={'/img/avatars/person.png'}
          alt="useravart"
          width="90"
          height="90"
          className={cb(
            'rounded-full '
          )}
        />
        <div className={cb(
          'absolute -bottom-2 -right-3 rounded-full border-white border-2',
          'w-10 h-10 bg-black bg-opacity-75'
        )}>
          <Image
            src={'/img/icons/strangth.png'}
            width="42"
            height="42"
            alt="kind"
          />
        </div>
      </div>
      <div>
        <div className={cb(
          'w-48 h-12 -ml-4 pl-6 mt-1',
          'text-left text-white', 
          'rounded-r-3xl bg-gray-900',
          'flex flex-col items-left justify-center',
        )}>
          <div className="text-lg">Bastum</div>
          <div className="text-sm">{accountName}</div>
        </div>
        <div
          className={cb(
            'mt-2 ml-4 text-white text-sm',
            'flex justify-left'
        )}>
          Mountain fields
        </div>
      </div>
    </div>
  );
}

export default UserAvatar;