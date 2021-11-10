import Image from 'next/image'
import cb from 'classnames'

const index = () => {
  return (
    <div className={cb(
      'flex column',
      'pl-10'
    )}>
      <div className={cb(
        'border-white border-2 rounded-full',
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
          'w-52 h-12 -ml-6 mt-1',
          'bg-mark_button cover bg-inactive_button',
          'text-center text-white', 
          'rounded border-white border-2',
          'flex block md:block sm:hidden items-center justify-center',
        )}>
          <span>Bastum</span>
        </div>
        <div
          className={cb(
            'mt-2 text-white',
            'flex column justify-center'
        )}>
          <Image 
            src={'/img/svg/land.png'}
            width="25"
            height="25"
            alt="land"
          />
          <p className="ml-1">Lanladle</p>
        </div>
      </div>
    </div>
  );
}

export default index;