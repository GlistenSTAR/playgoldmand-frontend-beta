import Image from 'next/image'
import cb from 'classnames'

const DashboardContent = () => {
  return (
    <div
      className={cb('mt-10 mb-10')}
    >
      <div className="content_header flex flex-row justify-between">
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
          )}>Inventory</div>
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
      <div className="mining_option text-white">
        <h2 className="text-center pt-4">Mining option</h2>
        <div className="text-center pt-4">
          <label className="switch">
            <input type="checkbox" id="togBtn" />
            <div className="slider round">
              <span className="NFTS">NFTS</span>
              <span className="Currency">Currency</span>
            </div>
          </label>
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

export default DashboardContent;