import Image from 'next/image'
import cb from 'classnames'
import Chance from '../../components/common/chance'

const LandContent = () => {
  const items = [
    { url: '/img/wrapper/land/bg_1.png', chance: true },
    { url: '/img/wrapper/land/bg_2.png', chance: false },
    { url: '/img/wrapper/land/bg_3.png', chance: true },
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
      <div className={cb("grid grid-flow-row gap-12 ml-32 mr-32 mt-10 lg:grid-cols-3 md:grid-cols-3",
        "sm:grid-cols-3 grid-cols-2"
      )}>
        {items.map((item, key) => (
          <div key={key}
            className={cb(
              'transition transform ease-in-out duration-300',
              'relative'
            )}
          >
            <img
              className='cursor-pointer'
              src={item.url}
              alt="item"
              width="100%"
            />
            {item.chance && <Chance />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandContent;