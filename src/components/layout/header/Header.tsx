import { FC, useState } from 'react';
import Image from 'next/image';
import Cart from '@/src/components/layout/header/cart/Cart';
import cn from 'classnames';
import { FaUserAlt } from 'react-icons/fa';
import Button from '@/src/components/ui/button/Button';
import Link from 'next/link';
import Logo from 'public/next.svg';
import styles from './Header.module.scss';

const Header: FC = () => {
  const [openFavorites, setOpenFavorites] = useState(false);

  const links = [
    {
      name: 'Главная',
      link: '/',
      icon: Logo,
    },
    {
      name: 'Каталог',
      link: '/catalog',
    },
    {
      name: 'О нас',
      link: '/about',
    },
  ];
  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, 'wrapper')}>
        <ul>
          <div className={styles.links}>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.link}>
                  {link.icon !== undefined ? (
                    <Image
                      src={link.icon}
                      alt={link.name}
                      className={styles.logo}
                    />
                  ) : (
                    link.name
                  )}
                </Link>
              </li>
            ))}
          </div>

          <div className={styles.btns}>
            <li>
              <Button>
                <FaUserAlt />
              </Button>
            </li>
            <Cart />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
