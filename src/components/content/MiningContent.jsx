import Image from 'next/image'
import cb from 'classnames'

const MiningContent = () => {
  const items = [
    { url: '/img/wrapper/mining/bg_1.png' },
    { url: '/img/wrapper/mining/bg_2.png' },
    { url: '/img/wrapper/mining/plus.png' },
    { url: '/img/wrapper/mining/bg_4.png' },
    { url: '/img/wrapper/mining/plus.png' },
  ];

  return (
    <div
      className={cb('mt-10 mb-10')}
    >
      <div className="flex flex-row justify-between">
        <div className={cb(
          'p-2 pl-16 pr-16',
          'bg-black bg-opacity-50 text-white',
          'rounded'
        )}>
          <h1 className="text-primary">Mining Power:200</h1>
          <p>Extra bonus: 3%</p>
        </div>
        <div>
          <div className={cb(
            'text-yellow text-2xl',
            'text-shadow font-bold uppercase'
          )}>MINING HUB</div>
        </div>
        <div className={cb(
          'p-2 pl-16 pr-16',
          'bg-black bg-opacity-50 text-white',
          'rounded text-right'
        )}>
          <h1 className="text-primary">Multiplaier:0.1291829%</h1>
          <p>Avg. mining time:: 8 mins</p>
        </div>
      </div>
      <div className={cb("grid grid-flow-row gap-5 m-8 lg:grid-cols-5 md:grid-cols-5",
        "sm:grid-cols-4 grid-cols-2"
      )}>
        {items.map((item, key) => (
          <div key={key}
            className={cb(
              'transition transform ease-in-out duration-300',
            )}
          >
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

export default MiningContent;