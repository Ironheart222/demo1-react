import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { CardActionArea } from '@mui/material';
import { useGlobleContext } from "../context";


const Tile = () => {
    const [currUserDetails, setCurrUserDetails] = useState()
    const [openModel, setOpenModel] = useState()

    const { results, isLoading } = useGlobleContext()

    // const isLoading = true;
    const tabStyle = { margin: "20px auto" }
    if (isLoading) {
        return <>
            <Box sx={{ display: 'flex'}}>
                <CircularProgress style={tabStyle} />
            </Box>
        </>
    }
    const userDetails = (currData) => {
        setCurrUserDetails(currData)
        setOpenModel(true)
    }
    console.log("currUserDetails ", currUserDetails);

    const handleClose = () => {
        setOpenModel(false)
    }
    return (
        <>
            {results.map((currData) => {
                return <Card onClick={()=> userDetails(currData)} sx={{ maxWidth: 200,maxHeight:300 }} style={tabStyle} key={currData.login.uuid}>
                    <CardActionArea>
                        {/* <Avatar
                            alt="Remy Sharp"
                            src={currData.picture.large}
                            sx={{ width: 100, height: 100 }}
                        /> */}
                        <CardMedia
                            component="img"
                            height="180"
                            width="180"
                            image={currData.picture.large}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {currData.name.first + " " + currData.name.last}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currData.gender}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions> */}
                </Card>
            })}

            {openModel && currUserDetails && (<Dialog
                open={openModel}
                onClose={handleClose}
            >
                <DialogTitle>User Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <CardMedia
                            component="img"
                            height="180"
                            width="180"
                            image={currUserDetails.picture.large}
                            alt="green iguana"
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {currUserDetails.name.first + " " + currUserDetails.name.last}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>gender: {currUserDetails.gender}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Phone:{currUserDetails.phone}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Cell:{currUserDetails.cell}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <h3>Address:
                                {currUserDetails.location.street.number + " " + currUserDetails.location.street.name + " " + currUserDetails.location.city + " " + currUserDetails.location.state + " " + currUserDetails.location.country + " " + currUserDetails.location.postcode}
                            </h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3> Age:{currUserDetails.dob.age}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {currUserDetails.dob.net}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {currUserDetails.registered.age}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>)}
        </>
    );
}
export default Tile
