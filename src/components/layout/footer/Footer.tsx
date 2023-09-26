import {FC, useEffect, useState} from 'react';
import styles from './Footer.module.scss'
import Link from "next/link";
import {catalogList} from "@/src/components/screens/catalog/catalog-list";
import Image from "next/image";
import Logo from '@/src/assets/logo.png'
import {SlSocialVkontakte} from "react-icons/sl";
import {SiInstagram, SiWhatsapp} from "react-icons/si";

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return <div className='bg-gray-300 py-16 mt-32 z-0 ' style={{opacity: isVisible ? 1 : 0}}>
    <div className="wrapperHeader">
      <div className='flex items-start justify-between'>
        <div className={styles.column}>
         <div>
           <Image src={Logo} alt='logo' width={50} />
         </div>
          <ul>
            <li>
              <Link href='https://vk.com/musnco_ru'>
                <SlSocialVkontakte />
              </Link>
            </li>
            <li>
              <Link href='https://www.whatsapp.com/'>
                <SiWhatsapp />
              </Link>
            </li>
            <li>
              <Link href='https://instagram.com'>
                <SiInstagram />
              </Link>
            </li>
          </ul>
          <div>
            <h2>г. Пермь, ул Революции, 22</h2>
            <h3>пн-вс 10:00 - 20:00</h3>
            <p>+7 (922) 330-20-04</p>
            <p>ИНН 592012369679</p>
            <p>КПП 590443002</p>
            <p>ОГРН (ОГРНИП) 32059800029387</p>
            <p>Банк Публичное Акционерное Общество «Уральский Банк Реконструкций и Развития»</p>
            <p>Р/С40802810349770085654</p>
            <p>БИК 042202603</p>
            <p>к/с 30101810900000000603</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Каталог</h3>
          <ul>
            {catalogList.map(item => (
                <li key={item.title}>
                  <Link href={`/catalog/${item.link}`}>{item.title}</Link>
                </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>
            Покупателю
          </h3>
          <ul>
            <li><Link href='ddd'>
              Гарантия
            </Link></li>
            <li><Link href='ddd'>
              Оплата
            </Link></li>
            <li><Link href='ddd'>
              Кредит
            </Link></li>
            <li><Link href='ddd'>
              Подарочные сертификаты
            </Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>
            Компания
          </h3>
          <ul>
            <li><Link href='ddd'>
              О нас
            </Link></li>
            <li><Link href='ddd'>
              Отзывы
            </Link></li>
            <li><Link href='ddd'>
              Политика конфиденциальности
            </Link></li>
            <li><Link href='ddd'>
              Пользовательское соглашение
            </Link></li>
            <li><Link href='public-offer'>
              Публичная оферта
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
