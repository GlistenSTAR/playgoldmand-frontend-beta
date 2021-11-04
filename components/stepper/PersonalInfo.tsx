import { useState } from 'react';
import cb from 'classnames'
import Input from '../common/input/Input'

const PersonalInfo = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [check1, setCheck1] = useState(false);
  let [check2, setCheck2] = useState(false);

  return (
    <div className={cb('w-full')}>
      <div className={cb(
        'mt-14 text-white w-full mb-10'
      )}>
        <p className={cb(
          'text-center text-yellow text-3xl uppercase'
        )}>Add personal information</p>
        <div className={cb(
          'mt-16'
        )}>
          <p>USERNAME</p>
          <Input 
            type="text" 
            onChange={(e)=> setName(e.target.value)} 
            value={name} 
            required={true}
            className={cb(
              'text-yellow bg-black bg-opacity-25 w-full mt-2'
            )}
          />
        </div>
        <div className={cb(
          'mt-8'
        )}>
          <p>EMAIL</p>
          <Input 
            type="text" 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email} 
            required={true}
            className={cb(
              'text-yellow bg-black bg-opacity-25 w-full mt-2'
            )}
          />
        </div>

        <div className={cb(
          'mt-8 flex row items-end checkbox'
        )}>
          <Input 
            type="checkbox" 
            className={cb(
              'text-yellow bg-black bg-opacity-25 mt-2 w-6 h-6'
            )}
            checked={check1}
            onChange={(e)=> setCheck1(!check1)}
          />
          <p className="ml-3 uppercase">I am 18+ years of age</p>
        </div>

        <div className={cb(
          'mt-2 flex row items-end checkbox'
        )}>
          <Input 
            type="checkbox" 
            className={cb(
              'text-yellow bg-black bg-opacity-25 mt-2 w-6 h-6'
            )}
            checked={check2}
            onChange={(e)=> setCheck2(!check2)}
          />
          <p className="ml-3 uppercase">I Agree to the Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;