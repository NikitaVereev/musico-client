import { FC, ReactNode } from 'react';
import Header from '@/src/components/layout/header/Header';
import Footer from '@/src/components/layout/footer/Footer';
import { TChildren } from '@/src/components/interfaces/option.interface';

const Layout: FC<TChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
