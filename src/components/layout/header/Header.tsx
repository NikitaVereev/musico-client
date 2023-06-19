import { FC, useState } from 'react';
import Image from 'next/image';
import Cart from '@/src/components/layout/header/cart/Cart';
import cn from 'classnames';
import { FaSearch } from 'react-icons/fa';
import Button from '@/src/components/ui/button/Button';
import Link from 'next/link';
import Logo from '@/src/assets/logo.png';
import styles from './Header.module.scss';
import { useAuth } from '@/src/hooks/useAuth';

import dynamic from 'next/dynamic';

const DynamicAuth = dynamic(() => import('./auth/AuthItems'), { ssr: false });
const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/product/search/${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Ошибка при выполнении запроса поиска:', error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(); // Выполняем поиск после каждого изменения значения в поле ввода
  };

  const { user } = useAuth();

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
                  <li key={idx} className={cn(link.icon ? styles.logo : null)}>
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
                  onChange={handleChange} // Обновленный обработчик onChange
              />
              <button onClick={handleSearch}>
                <FaSearch />
              </button>

              <ul>
                {searchResults.map((result, index) => (
                    <li key={result.id}>
                      <span href={`/product/${result.slug}`}>
                        <a>{result.title}</a>
                      </span>
                    </li>
                ))}
              </ul>
            </div>

            <div className={styles.btns}>
              <DynamicAuth />
              <Cart />
            </div>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
