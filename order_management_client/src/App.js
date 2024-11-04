import React, {useState} from 'react';
import {Box, Button, Container, IconButton, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClientTable from './components/ClientsTable';
import ClientForm from './components/ClientForm';
import OrderForm from "./components/OrderForm";
import "./App.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [showClientModal, setShowClientModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [refreshClientKey, setRefreshClientKey] = useState(0);

    const handleClientAdded = () => {
        setRefreshClientKey((oldKey) => oldKey + 1);
    };

    return (
        <>
            <Container>
                <Typography variant="h4"  className="table_title" gutterBottom>
                    Client & Order Management
                    <Box sx={{display: 'flex', justifyContent: 'flex-end',}}>
                        <Button onClick={() => setShowClientModal(true)} className="add-new-client-btn">
                            <IconButton className="add-icon">
                                <AddIcon/>
                            </IconButton>
                            Add Client
                        </Button>
                        <Button onClick={() => setShowOrderModal(true)} className="add-new-order-btn">
                            <IconButton className="add-icon">
                                <AddIcon/>
                            </IconButton>
                            Add Order
                        </Button>
                    </Box>
                </Typography>
                {showClientModal && (
                    <ClientForm open={showClientModal} handleClose={() => setShowClientModal(false)}
                                onClientAdded={handleClientAdded}/>
                )}
                {showOrderModal && (
                    <OrderForm open={showOrderModal} handleClose={() => setShowOrderModal(false)}
                               onClientAdded={handleClientAdded}/>
                )}
                <ClientTable key={refreshClientKey}/>
            </Container>
            <ToastContainer/>
        </>
    );
}

export default App;
