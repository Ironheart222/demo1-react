import React from "react";
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ bgcolor: 'background.paper', width: 1350 }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="employee"  />
                    </Tabs>
                </AppBar>
            </Box>
            {/* <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" style={tabStyle}>
                <Tab label="employee" />
            </Tabs> */}

        </>
    )
}
export default Navbar
