import { CircularLoadingBar } from '../components';
import { REQUESTS_URL, SOCKET_URL } from '../api/contrains';
import { toLocaleDateString } from '../helper/dateUtils';
import { useEffect, useState, forwardRef } from "react";
import Snackbar from '@mui/material/Snackbar';
import io from "socket.io-client";
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

import '../styles/pages.css';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RequestsList() {
    const [requests, setRequest] = useState({
        loading: true,
        data: null
    });
    const [myRequests, setMyRequests] = useState([]);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(REQUESTS_URL)
            .then((response) => {
                setRequest({
                    loading: false,
                    error: false
                });
                setMyRequests(response.data.constructionRequests);
            })
            .catch((error) => {
                setRequest({
                    loading: false,
                    data: [],
                    error: error.message
                });
            });



 

        const socket = io(SOCKET_URL);
        socket.on("requestUpdated", (message) => {
            setOpen(true);

            let updatedRequest = JSON.parse(message); 

            setMyRequests((prevState) => {
                let fArray = prevState.filter(e=>e._id !== updatedRequest._id);
                return [...fArray, updatedRequest]
            });

        });
        return () => socket.disconnect();

    }, []);
 


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (<>
        <div className="container">
            <p className="h8 py-3"><u>Submitted Requests</u></p>
            <div className='center-content'>
                {requests.error && <p>Error in server..!</p>}
                {requests.loading && <CircularLoadingBar />}
                {myRequests.length>0 &&
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Last Updated</th>
                                <th scope="col">License Number</th>
                                <th scope="col">Submitted By</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myRequests.map((request, key) =>
                                <tr key={key}>
                                    <td>{toLocaleDateString(request.updatedAt)}</td>
                                    <td>{request.licenseNumber}</td>
                                    <td>{request.name}</td>
                                    <td>{request.status}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                }
            </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your status has been updated!
            </Alert>
        </Snackbar>
    </>)
}