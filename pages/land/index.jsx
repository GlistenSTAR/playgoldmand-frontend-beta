import {useState} from 'react'
import cb from 'classnames';

import Header from '../../components/common/header/Header';
import FooterMenu from '../../components/common/menu/menu'
import LandContent from '../../components/content/LandContent'

const Land = (props) => {
  let [status, setStatus] = useState(0); 

  return (
    <div className={cb(
      'w-screen h-full bg-cover bg-opacity-50',
      'items-center'
    )}>

      {/* dashboard header */}
      <Header {...props} /> 

      {/* dashboard content */}
      <div className="tab_content h-content overflow-y-auto">
        <LandContent />
      </div>

      {/* dashboard footer */}
      <FooterMenu />
    </div>
  )
}

export default Land
