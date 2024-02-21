import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from './styles.module.css'
import logoLetraU from '../../assets/images/Logo-u.svg'
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate()

  const handleRedirectToHome = () => {
    navigate('/home')
  }

  return ( 
    <div className={styles.homePage}>
      <img 
        src={logoLetraU}
        alt="Logo simplificado da Unisinos, contendo apenas a letra U"
        onClick={handleRedirectToHome}
      />       
      <Stack>
        <IconButton aria-label="delete">
        <SettingsOutlinedIcon />
        </IconButton>
      </Stack>  
    </div>
  )
}