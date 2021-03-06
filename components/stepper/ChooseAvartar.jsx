import { useState } from 'react'
import Image from 'next/image'
import cb from 'classnames'

const ChooseAvartar = () => {
  const [show, setShow] = useState(false);
  const [selectNum, setSelectNum] = useState(0);

  return (
    <div className={cb('w-full')}>
      <div className={cb(
        'mt-10 text-white w-full'
      )}>
        <p className={cb(
          'text-center text-yellow text-2xl uppercase',
          'text-shadow font-bold'
        )}>Choose your avatar</p>
      </div>
      <div className={cb(
        'flex flex-col md:flex-row text-center text-white',
        'mt-4'
      )}>
        <div className={cb(
          'card_box transition transform ease-in-out duration-300'
        )}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setSelectNum(1)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
            selectNum === 1 ? 'bg-green-400' : ''
          )}>
<<<<<<< HEAD:components/stepper/ChooseAvartar.jsx
            <Image 
              src={'/img/race.png'}
=======
            <Image
              src={require('../../assets/img/race.png')}
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/stepper/ChooseAvartar.tsx
              alt="item"
              width="270"
              height="400"
            />
          </div>
          <p className="mt-2 text-lg">ALF&apos;S</p>
        </div>
        <div className={cb(
          'card_box transition transform ease-in-out duration-300'
        )}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setSelectNum(2)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
            selectNum === 2 ? 'bg-green-400' : ''
          )}>
<<<<<<< HEAD:components/stepper/ChooseAvartar.jsx
            <Image 
              src={'/img/race.png'}
=======
            <Image
              src={require('../../assets/img/race.png')}
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/stepper/ChooseAvartar.tsx
              alt="item"
              width="270"
              height="400"
            />
          </div>
          <p className="mt-2 text-lg">PEOPLES</p>
        </div>
        <div className={cb(
          'card_box transition transform ease-in-out duration-300'
        )}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setSelectNum(3)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
            selectNum === 3 ? 'bg-green-400' : ''
          )}>
<<<<<<< HEAD:components/stepper/ChooseAvartar.jsx
            <Image 
              src={'/img/race.png'}
=======
            <Image
              src={require('../../assets/img/race.png')}
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/stepper/ChooseAvartar.tsx
              alt="item"
              width="270"
              height="400"
            />
          </div>
          <p className="mt-2 text-lg uppercase">Venom&apos;s</p>
        </div>
        <div className={cb(
          'card_box transition transform ease-in-out duration-300'
        )}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setSelectNum(4)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
            selectNum === 4 ? 'bg-green-400' : ''
          )}>
<<<<<<< HEAD:components/stepper/ChooseAvartar.jsx
            <Image 
              src={'/img/race.png'}
=======
            <Image
              src={require('../../assets/img/race.png')}
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/stepper/ChooseAvartar.tsx
              alt="item"
              width="270"
              height="400"
            />
          </div>
          <p className="mt-2 text-lg uppercase">Venom&apos;s</p>
        </div>
      </div>

      <div className={cb('relative text-center text-white w-full mt-10 mb-4')}>
        {
          show ? (
            <p className="description absolute w-full left-0 bottom-0 px-20 sm:px-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          ) : ''
        }
      </div>
    </div>
  );
}

export default ChooseAvartar;
