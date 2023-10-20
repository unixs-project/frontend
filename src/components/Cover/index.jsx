import styles from './styles.module.css'
import unisinosLogo from '../../assets/images/logo-unisinos.svg'

export function Cover() {
  return (
    <div className={styles.loginPage}>
        <img 
          src={unisinosLogo}
          alt="Logo da Unisinos contendo uma letra U, o nome da universidade e a frase desafie o amanhã"
        />
    </div>
  )
}