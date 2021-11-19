import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from '../common/input/Link'
import cb from 'classnames'
import { fetchLinkGet } from '../../services/LinkService';

const SocialGroupIcon = () => {
  const [links, setLinks] = useState({
    link1: 'https://discord.com',
    link2: 'https://telegram.com',
    link3: 'https://regedit.com',
  })
  const [active, setActive] = useState({
    link1: false,
    link2: false,
    link3: false,
  })
  const initLinkData = (data) => {
    let preactivate = {
      link1: false,
      link2: false,
      link3: false,
    }
    let prelink = {
      link1: 'https://discord.com',
      link2: 'https://telegram.com',
      link3: 'https://regedit.com',
    }
    data.forEach(element => {
      const { title, link, isActivated } = element;
      switch (title) {
        case 'link1': {
          preactivate = {
            ...preactivate,
            link1: isActivated
          }
          prelink = {
            ...prelink,
            link1: link
          }
          break;
        }
        case 'link2': {
          preactivate = {
            ...preactivate,
            link2: isActivated
          }
          prelink = {
            ...prelink,
            link2: link
          }
          break;
        }
        case 'link3': {
          preactivate = {
            ...preactivate,
            link3: isActivated
          }
          prelink = {
            ...prelink,
            link3: link
          }
          break;
        }
        default:
          break;
      }
    });
    setActive(preactivate);
    setLinks(prelink);
  }
  useEffect(async () => {
    let predata = await fetchLinkGet();
    let linkData = predata.data.links;
    initLinkData(linkData);
  }, []);

  return (
    <div className="flex">
      <Link href={active.link1 ? links.link1 : '#'} className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/discord.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
      <Link href={active.link2 ? links.link2 : '#'} className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/telegram.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
      <Link href={active.link3 ? links.link3 : '#'} className={cb('mx-1.5 transform hover:scale-110 motion-reduce:transform-none')}>
        <Image
          src={'/img/icons/reddit.png'}
          width="32"
          height="32"
          alt="socail_icon"
        />
      </Link>
    </div>
  );
}

export default SocialGroupIcon;