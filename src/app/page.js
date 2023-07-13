import Header from './components/Header/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <Header />
      </div>
    </main>
  )
}
