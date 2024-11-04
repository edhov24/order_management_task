import React, {useState} from 'react';
import {TextField, Button, Modal, Box, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {addClient} from "../services/api";
import {toast} from 'react-toastify';

function ClientForm({onClientAdded, open, handleClose}) {
    const [clientName, setClientName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newClient = {client_name: clientName};
        await addClient(newClient);
        onClientAdded();
        setClientName('');
        handleClose();
        toast("Successfully added!");
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                className="form-box"
            >
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Client Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
                        <Button type="submit" variant="contained" color="primary">
                           Submit
                        </Button>
                    </Box>

                </form>
            </Box>
        </Modal>
    );
}

export default ClientForm;
