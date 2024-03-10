import React from 'react';
import { useState } from 'react';
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Header } from '../../components/Header'
import style from './styles.module.css'
import QuestionModal from '../../components/QuestionModal'
import { createNewFlow } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import AddExistingFlow from '../../components/AddExistingFlow';

export function NewFlow() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [buttonLabel, setButtonLabel] = useState('')
  const [title, setTitle] = useState('')
  const [isAddExistingFlowOpen, setAddExistingFlowOpen] = useState(false)
  const { authToken } = useAuth()
  const [selectedFlow, setSelectedFlow] = useState(null);

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

  const handleOpenSaveFlowModal = () => {
    setModalTitle('Você deseja salvar esse fluxo?')
    setButtonLabel('Salvar')
    setModalOpen(true);
  }

  const handleAddFlowModal = () => {
    setModalTitle('Você Adicionar esse fluxo existente?')
    setButtonLabel('Adicionar')
    setModalOpen(true);
  }

  const handleDeleteFlowModal = () => {
    setModalTitle('Você tem certeza que deseja excluir esse fluxo?')
    setButtonLabel('Excluir')
    setModalOpen(true)
  }

  const [openToast, setOpenToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastSeverity, setToastSeverity] = React.useState('success');

  const handleOpenToast = (message, severity) => {
    setToastMessage(message);
    setToastSeverity(severity);
    setOpenToast(true);
  };

  const handleCloseToast = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  // Function to handle the button inside the modal
  const handleSaveFlow = async() => {
    const content = editor.getHTML()

    const newFlow = {
      title,
      fatherId: null,
      html: content
    }

    await createNewFlow(newFlow, authToken)
    setModalOpen(false)
    handleOpenToast('Fluxo salvo com sucesso!', 'success');

  };

  const handleAddExistingFlow = () => {
    console.log('teste AddNewFlow')

    setModalOpen(false)
    setAddExistingFlowOpen(false)

    handleOpenToast('Fluxo adicionado com sucesso!', 'success');
  };

  const deleteFlow = () => {
    console.log('teste delete')

    setModalOpen(false)


    handleOpenToast('Fluxo deletado com sucesso!', 'success');
  };


  const isEditorContentEmpty = editor?.getHTML() === '<p></p>'

  const saveButtonStyle =
    isEditorContentEmpty
      ?
      {
        color: '#fe4900b3',
        border: '1px solid #fe4900b3',
        backgroundColor: 'transparent',
        pointerEvents: 'auto',
        cursor: 'not-allowed',
      }
      :
      {
        color: '#FE4900',
        border: '1px solid #FE4900'
      }

  const addFlowButtonStyle =
    isEditorContentEmpty
      ?
      {
        color: '#fff',
        border: '1px solid #fe4900cc',
        backgroundColor: '#fe4900cc',
        pointerEvents: 'auto',
        cursor: 'not-allowed',
      }
      :
      {
        color: '#fff',
        border: '1px solid #FE4900',
        backgroundColor: '#FE4900',
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
              style: {
                fontSize: 38,

              }
            }}
            sx={{
              width: '100%',
              height: 'auto',
              margin: '2.375rem 0 0.875rem',
            }}
            InputLabelProps={{ style: { fontSize: 40 } }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            variant='standard'
            multiline
            maxRows={2}
            placeholder='Nome da(s) equipe(s)'
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 24
              }
            }}
            sx={{
              width: '100%',
              height: '2.875rem',
              marginBottom: '0.875rem',
            }}
          />
          {editor && (
            <>
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
                  <DeleteOutlineOutlinedIcon
                    variant="outlined"
                    style={{ width: '30px', height: '30px', color: '#FE4900' }}
                    onClick={handleDeleteFlowModal}
                  />
                  <Button
                    variant="outlined"
                    style={saveButtonStyle}
                    onClick={handleOpenSaveFlowModal}
                    disabled={isEditorContentEmpty}
                  >
                    Salvar fluxo
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setAddExistingFlowOpen(true)}
                    style={addFlowButtonStyle}
                    disabled={isEditorContentEmpty}
                  >
                    Adicionar fluxo
                  </Button>
                </div>
              </div>              
            </>
          )}
          <EditorContent
            editor={editor}
            className={style.editorContainer}
          />
        </div>
        <QuestionModal
          title={modalTitle}
          buttonName={buttonLabel}
          handleConfirmationButtonClick={
            buttonLabel === 'Salvar' ? handleSaveFlow :
              buttonLabel === 'Adicionar' ? handleAddExistingFlow : deleteFlow}
          isOpen={isModalOpen}
          handleClose={() => setModalOpen(false)}
        />

        <AddExistingFlow
          isOpen={isAddExistingFlowOpen}
          handleClose={() => setAddExistingFlowOpen(false)}
          openSaveModal={handleAddFlowModal}
          selectedFlow={selectedFlow}
          setSelectedFlow={setSelectedFlow}
        />
        <Snackbar
          open={openToast}
          autoHideDuration={6000}
          onClose={handleCloseToast}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseToast}
            severity={toastSeverity}
            sx={{ width: '100%' }}
          >
            {toastMessage}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  )
}

