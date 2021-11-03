import cb from 'classnames'
import MenuItem from './menu-item';

const links = [{
  text: 'Inventory',
  href: '/',
  imageUrl: 'inventory.svg',
}, {
  text: 'Land',
  href: '/',
  imageUrl: 'land.svg',
}, {
  text: 'Mining Hub',
  href: '/',
  imageUrl: 'mining-hub.svg',
}, {
  text: 'My Business',
  href: '/',
  imageUrl: 'my-business.svg',
}, {
  text: 'Laboratory',
  href: '/',
  imageUrl: 'laboratory.svg',
}]

const Menu = () => {
  return (
    <div className={cb(
      'absolute bottom-10 w-full p-5',
      'flex justify-around flex-wrap',
    )}>
      {links.map((link, idx) => <div key={idx} className="m-1">
        <MenuItem text={link.text} href={link.href} imageUrl={link.imageUrl} />
      </div>)}   
    </div>
  );
}

export default Menu;