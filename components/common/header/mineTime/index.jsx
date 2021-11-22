import cb from 'classnames'

const MineTime = () => {
  return (
    <div className={cb(
      'text-center pt-4 items-center',
      'block md:block sm:hidden'
    )}>
      <p className="text-primary">Next mine attempt in:</p>
      <h1 className={cb(
        'text-xl text-yellow',
        'text-shadow font-bold',
      )}>24:38:11</h1>
    </div>
  );
}

export default MineTime;