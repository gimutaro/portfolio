import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SocialIcon } from '../components/SocialIcon';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <title>gimu | Game Creator</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>gimu｜AI Creator</h1>
      </header>
      
      <section>
        <h2 className={styles.sectionTitle}>PC GAMES</h2>
        <div className={styles.gamesGrid}>
          <div className={styles.gameCard}>
            <a href="https://visual-novel-game-scene.created.app/novel-game" target="_blank" rel="noopener noreferrer">
              <div className={styles.gameImage}>
                <img src="/images/Secrets of the AI Laboratory.png" alt="Secrets of the AI Laboratory" />
              </div>
              <div className={styles.gameInfo}>
                <h3 className={styles.gameTitle}>Secrets of the AI Laboratory</h3>
                <p className={styles.gameDesc}>AIボットノベルゲーム。ある殺人事件の容疑者(AIボット)に聞き取り調査をしながら犯人を見つけよう！</p>
              </div>
            </a>
          </div>
          
          <div className={styles.gameCard}>
            <a href="https://store.steampowered.com/app/3519770/Find_Clowns/" target="_blank" rel="noopener noreferrer">
              <div className={styles.gameImage}>
                <img src="/images/FindClowns.jpg" alt="Find Clowns" />
              </div>
              <div className={styles.gameInfo}>
                <h3 className={styles.gameTitle}>Find Clowns</h3>
                <p className={styles.gameDesc}>城に迷いこんだ20人のピエロを探すゲームです！ 広大なステージでピエロを見つけよう！</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className={styles.sectionTitle}>MOBILE GAMES</h2>
        <div className={styles.comingSoon}>
          COMING SOON...
        </div>
      </section>
      
      <div className={styles.socialLinks}>
        <a href="https://x.com/gimu_ai" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon type="twitter" />
        </a>
        <a href="https://note.com/gimu_ai" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon type="note" />
        </a>
      </div>
      
      <div className={styles.contact}>
        <p>CONTACT: <a href="https://x.com/gimu_ai" target="_blank" rel="noopener noreferrer">X(Twitter) DM</a></p>
      </div>
      
      <footer className={styles.footer}>
        <p>&copy; gimu, 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}