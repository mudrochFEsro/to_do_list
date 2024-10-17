import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                marginTop: 'auto',
                padding: '1rem',
                textAlign: 'center',
                backgroundColor: '#e7e7e7',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                Created by MUDROCH.FE s.r.o. <br/>
                E-mail: <a href="mailto:juraj.mudroch@protonmail.com">juraj.mudroch@protonmail.com</a>
            </Typography>
        </Box>
    );
}

export default Footer;
