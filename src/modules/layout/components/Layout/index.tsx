import React from 'react';

import Header from 'src/modules/layout/components/Header';
import Footer from 'src/modules/layout/components/Footer';

import styles from './Layout.module.scss';

interface IProps {
  title?: string;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
