import cb from 'classnames'
import MenuItem from './menu-item';

const links = [{
  text: 'Inventory',
  href: '/inventory',
  imageUrl: 'inventory',
}, {
  text: 'Land',
  href: '/land',
  imageUrl: 'land',
}, {
  text: 'Mining Hub',
  href: '/mining',
  imageUrl: 'mining-hub',
}, {
  text: 'My Business',
  href: '/business',
  imageUrl: 'my-business',
}, {
  text: 'Laboratory',
  href: '/laboratory',
  imageUrl: 'laboratory',
}]

const Menu = () => {
  return (
    <div className={cb(
      'absolute bottom-0 ',
      'h-20 w-full p-2',
      'flex justify-center items-center overflow-y-hidden overflow-x-auto bottom-navigation',
    )}>
      {links.map((link, idx) => <div key={idx} className="m-1">
        <MenuItem text={link.text} href={link.href} imageUrl={link.imageUrl} />
      </div>)}
    </div>
  );
}

export default Menu;