import React, {useEffect, useState} from 'react';
import {TextField, Button, Modal, Box, IconButton, MenuItem} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {addOrder, fetchClients} from "../services/api";
import {toast} from "react-toastify";

function OrderForm({ onClientAdded, open, handleClose }) {
    const [clientsList, setClientsList] = useState([]);
    const [clientId, setClientId] = useState('');
    const [orderName, setOrderName] = useState('');

    useEffect(() => {
        const getClientsList = async () => {
            try {
                const data = await fetchClients();
                setClientsList(data?.clients);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        if (open) {
            getClientsList();
        }
    }, [open]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newOrder = { client_id: clientId, order_name: orderName };
        await addOrder(newOrder);
        onClientAdded();
        setClientId('');
        setOrderName('');
        handleClose()
        toast("Successfully added!");
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
               className="form-box"
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Client Name"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                        select
                        fullWidth
                        margin="normal"
                    >
                        {clientsList?.length > 0
                            && clientsList?.map((client) => (
                            <MenuItem key={client.id} value={client.id}>
                                {client.client_name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Order Name"
                        value={orderName}
                        onChange={(e) => setOrderName(e.target.value)}
                        required
                        fullWidth
                        size="medium"
                        margin="normal"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
}

export default OrderForm;
