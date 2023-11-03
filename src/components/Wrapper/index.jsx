import styles from './styles.module.css'

export function Wrapper({children, position}) {
  if(position === 'left') {
    return (
      <div className={styles.leftWrapper}>
        {children}
      </div>
    )
  }
  
  return (
    <div className={styles.rightWrapper}>
      {children}
    </div>
  )
}