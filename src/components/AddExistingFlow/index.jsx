import React, { useState } from 'react';
import { TextField, List, Button, ListItemButton, ListItemText, Box, Modal } from '@mui/material';
import { FlowData } from '../../services/flowData';

const modalBox = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    gap: '30px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 2,
};

const searchContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...(window.innerWidth < 450 && {
        flexDirection: 'column',
    }),
}

const changePageBox = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    p: 1,
    ...(window.innerWidth < 450 && { flexDirection: 'column' })
}

const AddExistingFlow = ({ isOpen, handleClose, openSaveModal, selectedFlow, setSelectedFlow  }) => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    const FlowList = FlowData.filter((flow) => {
        return flow.name.toLowerCase().includes(search.toLowerCase())
    });
    const flowsPerPage = 4;
    const startIndex = (currentPage - 1) * flowsPerPage;
    const finalIndex = currentPage * flowsPerPage;
    const pageFlows = FlowList.slice(startIndex, finalIndex);
    const totalPages = Math.ceil(FlowList.length / flowsPerPage);
    
    const resetStatesAndClose = () => {
        setSelectedFlow(null);
        setSearch('');
        setCurrentPage(1);
        handleClose();
    }

    const checkFlowSelection = () => {
        if (selectedFlow === null) {
            alert('Você precisa selecionar um fluxo')
        } else {
            openSaveModal()
        }

    }

    const handleSelect = (object) => {
        if (selectedFlow === object.id) {
            setSelectedFlow(null);
        } else {
            setSelectedFlow(object.id);
        }
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    }
    
    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={resetStatesAndClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalBox}>
                    <Box sx={{ fontFamily: 'Roboto' }}>
                        <h1>Adicionar um fluxo existente</h1>
                        <p>Selecione um fluxo já criado para fazer parte deste processo</p>
                    </Box>
                    <Box sx={searchContainer}>
                        <TextField id="outlined-search" label="Pesquisa de fluxo" value={search} type="search" onChange={(e) => handleSearch(e)} />
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Button variant='outlined' onClick={checkFlowSelection}>Adicionar</Button>
                            <Button variant='contained' onClick={resetStatesAndClose}>Cancelar</Button>
                        </Box>
                    </Box>
                    <Box >
                        <Box sx={{ height: '192px' }}>
                            <List component="nav" aria-label="secondary mailbox folder">
                                {pageFlows.map((object, index) => (

                                    <ListItemButton key={index} selected={selectedFlow === object.id} onClick={() => handleSelect(object)}>
                                        <ListItemText sx={{ display: 'flex', justifyContent: 'center' }} primary={object.name} />
                                        <ListItemText sx={{ display: 'flex', justifyContent: 'center' }} primary={object.teams} />
                                    </ListItemButton>

                                ))}
                            </List>
                        </Box>
                        <Box sx={changePageBox}>
                            <span>{pageFlows.length > 0 ? startIndex + 1 : startIndex } - {finalIndex > FlowList.length ? FlowList.length : finalIndex} de {FlowList.length}</span>
                            <Box>
                                <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>&lt;</Button>
                                <Button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
            </Modal>
        </div>

    );
};

export default AddExistingFlow;