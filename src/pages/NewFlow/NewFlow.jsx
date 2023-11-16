import { useNavigate } from 'react-router-dom'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button, TextField } from '@mui/material';

import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Header } from '../../components/Header'
import style from './styles.module.css'


export function NewFlow() {
  const navigate = useNavigate()

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: 'Insira seu texto aqui...',
  })

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
           <TextField
            id="outlined-multiline-flexible"
            variant='standard'
            multiline
            maxRows={2}
            placeholder='Título do fluxo aqui...'
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              width: '100%',
              height: '2.875rem',
              margin: '2.375rem 0 0.875rem',
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            variant='standard'
            multiline
            maxRows={2}
            placeholder='Nome da(s) equipe(s)'
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              width: '100%',
              height: '2.875rem',
              marginBottom: '0.875rem'
            }}
          />
            {editor && (
              <div className={style.iconsContainer}>
                <div>
                  <ImageOutlinedIcon style={{ color: '#21409A', background: '#21409A15', padding: '0.5rem 1.125rem', borderRadius: '4px' }} />
                  <AttachFileOutlinedIcon
                    style={{
                      background: '#09E85E15',
                      padding: '0.5rem 1.125rem', 
                      borderRadius: '4px'
                    }} 
                  />
                  <FormatListBulletedIcon 
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <FormatBoldIcon 
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <FormatItalicIcon
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <FormatUnderlinedIcon
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    style={{ transform: 'scale(1.2)' }}
                  />
                </div>
                <div>
                  <DeleteOutlineOutlinedIcon variant="outlined" style={{ width: '30px', height: '30px', color: '#FE4900' }} />
                  <Button 
                    variant="outlined" 
                    style={{
                      color: '#FE4900',                 
                      border: '1px solid #FE4900'
                    }} 
                  >
                    Salvar fluxo
                  </Button>
                  <Button 
                    variant="outlined" 
                    style={{
                      color: '#FE4900',                 
                      border: '1px solid #FE4900'
                    }} 
                  >
                    Adicionar fluxo
                  </Button>
                </div>
              </div>
            )}
            <EditorContent editor={editor}  className={style.editorContainer}/>
        </div>
      </div>
    </>
  )
}
