import { useEffect, useState } from 'react'
import Image from 'next/image'
import cb from 'classnames'
import BuyCardButton from '../../components/common/buyCardBtn'
import Inuse from '../../components/common/inuse'

const InventoryContent = () => {
  const items = [
    { url: '/img/wrapper/inventory/bg(1).png', use: true },
    { url: '/img/wrapper/inventory/bg(2).png', use: false },
    { url: '/img/wrapper/inventory/bg(3).png', use: true },
    { url: '/img/wrapper/inventory/bg(4).png', use: false },
    { url: '/img/wrapper/inventory/bg(5).png', use: false },
    { url: '/img/wrapper/inventory/bg(6).png', use: false },
    { url: '/img/wrapper/inventory/bg(7).png', use: false },
    { url: '/img/wrapper/inventory/bg(8).png', use: false },
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
          )}>Inventory</div>
        </div>
      </div>
      <div className={cb("grid grid-flow-row gap-7 m-8 lg:grid-cols-5 md:grid-cols-5",
        "sm:grid-cols-4 grid-cols-2"
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
            {item.use && <Inuse />}
          </div>
        ))}
      </div>
      <BuyCardButton />
    </div>
  );
}

export default InventoryContent;