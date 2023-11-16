import { useNavigate } from 'react-router-dom'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { TextField } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { Header } from '../../components/Header'
import style from './styles.module.css'

export function NewFlow() {
  const navigate = useNavigate()

  const handleRedirectToHome = () => {
    return navigate('/home')
  }

  return (
    <>
      <Header />
      <div className={style.newFlowContainer}>
        <ArrowBackOutlinedIcon
          onClick={handleRedirectToHome}
          style={{ cursor: 'pointer' }}
        />
        <div>
          {/* <TextField
            label=''
            type='email'
            variant='standard'
            margin='dense'
            // value={title}
            // onChange={(e) => handleEmailValidation(e.target.value)}
          /> */}
           <TextField
            id="outlined-multiline-flexible"
            variant='standard'
            multiline
            maxRows={2}
            placeholder='Título do fluxo aqui...'
            // sx={{border: 'none',"& fieldset": { border: 'none' },}}
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              width: '100%',
              height: '2.875rem',
              margin: '2.375rem 0 0.875rem',
            }}
            // className={styles['MuiTextField-root']}
          />
          <TextField
            id="outlined-multiline-flexible"
            variant='standard'
            multiline
            maxRows={2}
            placeholder='Nome da(s) equipe(s)'
            // sx={{border: 'none',"& fieldset": { border: 'none' },}}
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              width: '100%',
              height: '2.875rem',
              marginBottom: '0.875rem'
            }}
          />
            <div className={style.iconsContainer}>
              <ImageOutlinedIcon style={{color: '#21409A', background: '#21409A15', padding: '0.5rem 1.125rem', borderRadius: '4px'}} />
              <AttachFileIcon style={{background: '#09E85E15', padding: '0.5rem 1.125rem', borderRadius: '4px'}} />
              <FormatListBulletedIcon />
              <FormatBoldIcon />
              <FormatItalicIcon />
              <FormatUnderlinedIcon />
            </div>
            <div>
              Editor aqui
            </div>
        </div>
      </div>
    </>
  )
}
