import styles from 'styles/main/LandingPage.module.css'

const LandingPage: React.FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.betterTomorrowBetter}>
        Better tomorrow, Better Mind
      </div>
      <div className={styles.bitamim}>BItAMin은 당신을 응원합니다</div>
      <div className={styles.child} />
      <div className={styles.item} />
    </div>
  )
}

export default LandingPage