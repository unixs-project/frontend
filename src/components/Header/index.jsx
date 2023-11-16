import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from './styles.module.css'
import logoLetraU from '../../assets/images/Logo-u.svg'

export function Header() {
  return ( 
    <div className={styles.homePage}>
      <img 
        src={logoLetraU}
        alt="Logo simplificado da Unisinos, contendo apenas a letra U"
      />       
      <Stack>
        <IconButton aria-label="delete">
        <SettingsOutlinedIcon />
        </IconButton>
      </Stack>  
    </div>
  )
}