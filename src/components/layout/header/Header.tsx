import { FC, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Cart from '@/src/components/layout/header/cart/Cart';
import cn from 'classnames';
import Link from 'next/link';
import Logo from '@/src/assets/logo.png';
import styles from './Header.module.scss';
import { useAuth } from '@/src/hooks/useAuth';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Search from '@/src/components/layout/header/search/Search';

const DynamicAuth = dynamic(() => import('./auth/AuthItems'), { ssr: false });

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openBasket, setOpenBasket] = useState(false);
  const { user } = useAuth();



  const router = useRouter();

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
      name: 'Доставка',
      link: '/delivery',
    },
    {
      name: 'О нас',
      link: '/about',
    },
  ];

  return (
      <header className={cn(styles.header)}>
        <nav className={cn(styles.nav, 'wrapperHeader')}>
          <ul>
            <div className={cn(styles.links)}>
              {links.map((link, idx) => (
                  <li key={idx} className={cn(link.icon ? styles.logo : null, router.pathname === link.link && styles.active, openMenu && !link.icon  && styles.linksOpen )}>
                    <Link href={link.link}>
                      {link.icon !== undefined ? (
                          <Image src={link.icon} alt={link.name} className={styles.logo} />
                      ) : (
                          link.name
                      )}
                    </Link>
                  </li>
              ))}
            </div>

            <div className={styles.search}>
              <Search />
            </div>

             <div className={cn(styles.btns, openMenu && styles.openMenu)}>
              <DynamicAuth/>
              <Cart //@ts-ignore
                  setOpenBasket={setOpenBasket} openBasket={openBasket}/>
            </div>
            <div className={cn(openMenu && styles.open, styles.menu)} onClick={() => setOpenMenu(!openMenu)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ul>
        </nav>

      </header>
  );
};

export default Header;
