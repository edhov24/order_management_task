import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse, IconButton} from '@mui/material';
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import {getClientsAndOrders} from "../services/api";

function ClientTable() {
    const [clientsData, setClientsData] = useState([]);
    const [expandedRows, setExpandedRows] = useState({});

    useEffect(() => {
        const getClientsAndOrdersList = async () => {
            try {
                const data = await getClientsAndOrders();
                setClientsData(data?.clients);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        getClientsAndOrdersList()
    }, []);

    const toggleRow = (clientId) => {
        setExpandedRows((prev) => ({
            ...prev,
            [clientId]: !prev[clientId],
        }));
    };


    return (
        <TableContainer className="data-table">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Client ID</TableCell>
                        <TableCell>Client Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientsData && clientsData?.map((client) => (
                        <React.Fragment key={client.id}>
                            <TableRow>
                                <TableCell>
                                    <IconButton onClick={() => toggleRow(client.id)}>
                                        {expandedRows[client.id] ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                                    </IconButton>
                                    {client.id}
                                </TableCell>
                                <TableCell>
                                    {client.client_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={3}>
                                    <Collapse in={expandedRows[client.id]} timeout="auto" unmountOnExit>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell/>
                                                    <TableCell>Order ID</TableCell>
                                                    <TableCell>Order Name</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {client.orders.length > 0  ? client?.orders?.map((order) => (
                                                    <TableRow key={order.id}>
                                                        <TableCell/>
                                                        <TableCell>{order.id}</TableCell>
                                                        <TableCell>{order.order_name}</TableCell>
                                                    </TableRow>
                                                )) :(
                                                    <TableRow>
                                                        <TableCell/>
                                                        <TableCell/>
                                                        <TableCell>No orders</TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ClientTable;
