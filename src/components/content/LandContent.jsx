import Image from 'next/image'
import cb from 'classnames'

const LandContent = () => {
  const items = [
    { url: '/img/wrapper/land/bg_1.png' },
    { url: '/img/wrapper/land/bg_2.png' },
    { url: '/img/wrapper/land/bg_3.png' },
  ];
  return (
    <div
      className={cb('mt-10 mb-10')}
    >
      <div className="flex flex-row justify-center">
        <div>
          <div className={cb(
            'text-yellow text-2xl',
            'text-shadow font-bold uppercase'
          )}>LAND</div>
        </div>
      </div>
      <div className={cb("grid grid-flow-row gap-5 m-8 lg:grid-cols-3 md:grid-cols-3",
        "sm:grid-cols-3 grid-cols-2"
      )}>
        {items.map((item, key) => (
          <div key={key}>
            <img
              className='cursor-pointer'
              src={item.url}
              alt="item"
              width="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandContent;