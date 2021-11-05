import cb from 'classnames'

const index = () => {
  return (
    <div className="text-center pt-4 items-center">
      <p className="text-primary">Next mine attempt in:</p>
      <h1 className={cb(
        'text-xl text-yellow',
        'text-shadow font-bold'
      )}>24:38:11</h1>
    </div>
  );
}

export default index;