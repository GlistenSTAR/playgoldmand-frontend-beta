import cb from 'classnames'
import Input from '../common/input/Input'
import Link from '../common/input/Link';

const PersonalInfo = (
  { username, setUsername, email, setEmail, checkAge, setCheckAge, checkTerms, setCheckTerms}
) => {

  return (
    <div className={cb('w-full')}>
      <div className={cb(
        'mt-4 md:mt-14 text-white w-full mb-10'
      )}>
        <p className={cb(
          'text-center text-yellow text-2xl uppercase',
          'text-shadow font-bold'
        )}>Add personal information</p>
        <div className={cb(
          'mt-4 md:mt-16'
        )}>
          <p>USERNAME</p>
          <Input 
            type="text" 
            onChange={(e)=> setUsername(e.target.value)} 
            value={username} 
            required={true}
            className={cb(
              'text-yellow bg-black bg-opacity-25'
              ,'w-full mt-2 border-2 border-white'
            )}
          />
        </div>
        <div className={cb(
          'mt-2 md:mt-8'
        )}>
          <p>EMAIL</p>
          <Input 
            type="text" 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email} 
            required={true}
            className={cb(
              'text-yellow bg-black bg-opacity-25',
              'w-full mt-2 border-2 border-white'
            )}
          />
        </div>

        <div className={cb(
          'mt-8 flex row items-end checkbox'
        )}>
          <Input 
            type="checkbox" 
            className={cb(
              'text-yellow bg-black bg-opacity-25 mt-2 w-6 h-6',
              'outline-white',
            )}
            checked={checkAge}
            onChange={(e)=> setCheckAge(!checkAge)}
            id="18over"
          />
          <label className="ml-3 uppercase" htmlFor="18over">I am 18+ years of age</label>
        </div>

        <div className={cb(
          'mt-2 flex row items-end checkbox'
        )}>
          <Input 
            type="checkbox" 
            className={cb(
              'text-yellow bg-black bg-opacity-25 mt-2 w-6 h-6',
              'outline-white',
            )}
            checked={checkTerms}
            onChange={(e)=> setCheckTerms(!checkTerms)}
            id="policy"
          />
          <label className="ml-3 uppercase" htmlFor="policy">
            I Agree to the&nbsp; 
            <Link href="#" className="underline"><span>Terms &amp; Conditions</span></Link>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;