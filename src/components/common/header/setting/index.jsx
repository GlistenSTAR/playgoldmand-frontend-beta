import Image from 'next/image'
import cb from 'classnames'

const Setting = () => {
  return (
    <div className="cursor-pointer ml-2 mt-3">
      <Image
        src="/img/icons/setting.png"
        width="22"
        height="22"
        alt="setting"
      />
    </div>
  );
}

export default Setting;