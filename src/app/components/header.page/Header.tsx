"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss'; 

const Header = ({ username }: { username: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const date = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className={`${styles.header} ${loaded ? 'loaded' : ''}`}>
      <div className={styles.logo}>
        <Image src="/Logomark.png" alt="FocalPoint" width={150} height={36} />
      </div>
      <div className={styles.welcomeText}>
        <h2>Bem-vindo, {username}</h2>
      </div>
      <div className={styles.dateText}>
        <p>{date}</p>
      </div>
    </header>
  );
};

export default Header;
