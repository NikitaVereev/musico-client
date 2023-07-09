import {FC, useEffect, useState} from 'react';
import Image from 'next/image';
import Cart from '@/src/components/layout/header/cart/Cart';
import cn from 'classnames';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Logo from '@/src/assets/logo.png';
import styles from './Header.module.scss';
import { useAuth } from '@/src/hooks/useAuth';


import dynamic from 'next/dynamic';
import {useRouter} from "next/router";

const DynamicAuth = dynamic(() => import('./auth/AuthItems'), { ssr: false });
const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShow, setIsShow] = useState(false)
  const [isLastScrollY, setIsLastScrollY] = useState(200)
  const [openBasket, setOpenBasket] = useState(false);

  const router = useRouter()

  const controlNavbar = () => {
    if(typeof window !== 'undefined'){
      if(window.scrollY < isLastScrollY){
        setIsShow(false)
        setOpenBasket(false)

      }else{
        setIsShow(true)
        setOpenBasket(false)
      }
      setIsLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [isLastScrollY])

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/product/search/${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
      localStorage.setItem('search' , data)

    } catch (error) {
      console.error('Ошибка при выполнении запроса поиска:', error);
    }
  };



  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  const { user } = useAuth()




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
      link: '/delivery'
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
              <input
                  className={styles.input}
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={handleChange}
              />
              <button className={styles.searchButton} onClick={() => {
                handleSearch
                router.push('/search-page')
              }}>
                <FaSearch />
              </button>

              <div className={styles.searchInfo}>
                {searchQuery !== '' ? searchResults.map((result: {id: string, slug: string, title: string}, index) => (
                    <div key={result.id}>
                      <Link onClick={() => {
                        setSearchQuery('');
                        setSearchResults([])
                      }} href={`/product/${result.slug}`}>
                        {result.title}
                      </Link>
                    </div>
                )) : null}
              </div>
            </div>

            <div className={styles.btns}>
              <DynamicAuth />
              <Cart
                  //@ts-ignore
                  setOpenBasket={setOpenBasket} openBasket={openBasket} />
            </div>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
