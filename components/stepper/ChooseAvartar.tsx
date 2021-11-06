import {useState} from 'react'
import Image from 'next/image'
import cb from 'classnames'

const ChooseAvartar = () => {
  const [show, setShow] = useState(false);

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
        'flex row mt-14  text-center text-white'
      )}>
        <div className={cb(
            'card_box transition transform ease-in-out duration-300'
          )} 
          onMouseEnter={()=>setShow(true)}
          onMouseLeave={()=>setShow(false)}
        >
          <div className={cb(
            'p-2 bg-item_box_color rounded-lg mx-10',
            'hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/avartar.png')}
              alt="item"
              width="268"
              height="359"
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
            'p-2 bg-item_box_color rounded-lg mx-10',
            'hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/avartar.png')}
              alt="item"
              width="268"
              height="359"
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
            'p-2 bg-item_box_color rounded-lg mx-10',
            'hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/avartar.png')}
              alt="item"
              width="268"
              height="359"
            />
          </div>
          <p className="mt-2 text-lg uppercase">Venom&apos;s</p>
        </div>
        <div className={cb(
            'card_box transition transform ease-in-out duration-300'
          )} 
          onMouseEnter={()=>setShow(true)}
          onMouseLeave={()=>setShow(false)}
        >
          <div className={cb(
            'p-2 bg-item_box_color rounded-lg mx-10',
            'hover:bg-green-400',
          )}>
            <Image 
              src={require('../../assets/img/avartar.png')}
              alt="item"
              width="268"
              height="359"
            />
          </div>
          <p className="mt-2 text-lg uppercase">Venom&apos;s</p>
        </div>
      </div>

      <div className={cb('relative text-center text-white w-full mt-20 mb-4')}>
      {
        show?(
            <p className="description absolute w-full left-0 bottom-0 px-20 sm:px-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        ):''
      }
      </div>
    </div>
  );
}

export default ChooseAvartar;
