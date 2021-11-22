import Image from 'next/image'
import cb from 'classnames'

const LaboratoryContent = () => {
  const items = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div
      className={cb('mt-10 mb-10')}
    >
      <div className="flex flex-row justify-center">
        <div>
          <div className={cb(
            'text-yellow text-2xl',
            'text-shadow font-bold uppercase'
          )}>LABRATORY</div>
        </div>
      </div>
      <div className={cb("grid grid-flow-row gap-5 m-8 lg:grid-cols-5 md:grid-cols-5",
        "sm:grid-cols-4 grid-cols-2"
      )}>
        {items.map((key) => (
          <div key={key}
            // className={cb(
            //   'transition transform ease-in-out duration-300',
            // )}
          // onMouseEnter={()=>setShow(true)}
          // onMouseLeave={()=>setShow(false)}
          // onClick={() => setSelectNum(1)}
          >
            {/* <div className={cb(
              'rounded-lg mx-10 pt-3.5 pb-5 px-5',
              'bg-none hover:bg-green-400',
              // selectNum===1?'bg-green-400':''
            )}> */}
              <img
                className='cursor-pointer'
                src={'/img/race.png'}
                alt="item"
              />
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaboratoryContent;