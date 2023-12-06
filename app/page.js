'use client';
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Go to  <Link href={`/products`} legacyBehavior>
          <a>products</a>
          </Link> page
        </p>
        
      </div>
    </main>
  )
}
