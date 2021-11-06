import {useState} from 'react'
import Image from 'next/image'
import cb from 'classnames'

const ChooseRace = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={cb('w-full')}>
      <div className={cb(
        'mt-8 text-white w-full'
      )}>
        <p className={cb(
          'text-center text-yellow text-2xl uppercase',
          'text-shadow font-bold'
        )}>Choose a race</p>
      </div>
      <div className={cb(
        'flex row text-center text-white',
        'mt-4'
      )}>
        <div className={cb(
            'card_box transition transform ease-in-out duration-300'
          )} 
          onMouseEnter={()=>setShow(true)}
          onMouseLeave={()=>setShow(false)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/race.png')}
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
          onMouseEnter={()=>setShow(true)}
          onMouseLeave={()=>setShow(false)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/race.png')}
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
          onMouseEnter={()=>setShow(true)}
          onMouseLeave={()=>setShow(false)}
        >
          <div className={cb(
            'rounded-lg mx-10 pt-3.5 pb-5 px-5',
            'bg-none hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/race.png')}
              alt="item"
              width="270"
              height="400"
            />
          </div>
          <p className="mt-2 text-lg uppercase">Venom&apos;s</p>
        </div>
      </div>

      <div className={cb('relative text-center text-white mt-20 mb-4')}>
      {
        show?(
            <p className="description absolute left-0 bottom-0 px-20 sm:px-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        ):''
      }
      </div>
    </div>
  );
}

export default ChooseRace;