import {useState} from 'react'
import cb from 'classnames';

import Header from '../../components/common/header/Header';
import FooterMenu from '../../components/common/menu/menu'
import BusinessContent from '../../components/content/BusinessContent'

const MyBusiness = (props) => {
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
        <BusinessContent />
      </div>

      {/* dashboard footer */}
      <FooterMenu />
    </div>
  )
}

export default MyBusiness
