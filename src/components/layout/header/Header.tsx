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
  const [isShow, setIsShow] = useState(false);
  const [isLastScrollY, setIsLastScrollY] = useState(200);
  const [openBasket, setOpenBasket] = useState(false);
  const { user } = useAuth();

  // const controlNavbar = useCallback(() => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY < isLastScrollY) {
  //       setIsShow(false);
  //       setOpenBasket(false);
  //     } else {
  //       setIsShow(true);
  //       setOpenBasket(false);
  //     }
  //     setIsLastScrollY(window.scrollY);
  //   }
  // }, [isLastScrollY]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  // }, [controlNavbar]);

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
      <header className={cn(styles.header, isShow && styles.active)}>
        <nav className={cn(styles.nav, 'wrapperHeader')}>
          <ul>
            <div className={styles.links}>
              {links.map((link, idx) => (
                  <li key={idx} className={cn(link.icon ? styles.logo : null, router.pathname === link.link && styles.active)}>
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

            <div className={styles.btns}>
              <DynamicAuth />
              <Cart //@ts-ignore
                  setOpenBasket={setOpenBasket} openBasket={openBasket} />
            </div>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
