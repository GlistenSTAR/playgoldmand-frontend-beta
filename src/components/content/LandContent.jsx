import Image from 'next/image'
import cb from 'classnames'

const LandContent = () => {
  return (
    <div
      className={cb('mt-10 mb-10')}
    >
      <div className="flex flex-row justify-center">
        <div>
          <div className={cb(
            'text-yellow text-2xl',
            'text-shadow font-bold uppercase'
          )}>Land</div>
        </div>
      </div>
      <div className="card_group mt-10  flex flex-row">
        <div className={cb(
              'card_box transition transform ease-in-out duration-300'
            )} 
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
            // onClick={() => setSelectNum(1)}
          >
            <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===1?'bg-green-400':''
            )}>
              <Image 
                src={'/img/race.png'}
                alt="item"
                width="270"
                height="400"  
              />
            </div>
          </div>
          <div className={cb(
              'card_box transition transform ease-in-out duration-300'
            )} 
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
            // onClick={() => setSelectNum(2)}
          >
            <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===2?'bg-green-400':''
            )}>
              <Image 
                src={'/img/race.png'}
                alt="item"
                width="270"
                height="400"
              />
            </div>
          </div>
          <div className={cb(
              'card_box transition transform ease-in-out duration-300'
            )} 
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
            // onClick={() => setSelectNum(3)}
          >
            <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===3?'bg-green-400':''
            )}>
              <Image 
                src={'/img/race.png'}
                alt="item"
                width="270"
                height="400"
              />
            </div>
          </div>
          <div className={cb(
              'card_box transition transform ease-in-out duration-300'
            )} 
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
            // onClick={() => setSelectNum(4)}
          >
            <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===4?'bg-green-400':''
            )}>
              <Image 
                src={'/img/race.png'}
                alt="item"
                width="270"
                height="400"
              />
            </div>
          </div>
          <div className={cb(
              'card_box transition transform ease-in-out duration-300'
            )} 
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
            // onClick={() => setSelectNum(4)}
          >
            <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===4?'bg-green-400':''
            )}>
              <Image 
                src={'/img/race.png'}
                alt="item"
                width="270"
                height="400"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default LandContent;