import cb from 'classnames'
import MenuItem from './menu-item';

const links = [{
  text: 'Inventory',
  href: '#inventory',
  imageUrl: 'inventory.png',
}, {
  text: 'Land',
  href: '#land',
  imageUrl: 'land.png',
}, {
  text: 'Mining Hub',
  href: '#mining',
  imageUrl: 'mining-hub.png',
}, {
  text: 'My Business',
  href: '#busniess',
  imageUrl: 'my-business.png',
}, {
  text: 'Laboratory',
  href: '#laboratory',
  imageUrl: 'laboratory.png',
}]

const Menu = () => {
  return (
    <div className={cb(
      'w-full p-5',
      'flex justify-around flex-wrap',
    )}>
      {links.map((link, idx) => <div key={idx} className="m-1">
        <MenuItem text={link.text} href={link.href} imageUrl={link.imageUrl} />
      </div>)}
    </div>
  );
}

export default Menu;