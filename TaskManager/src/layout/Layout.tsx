import { Box } from '@mui/material';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


function Layout() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
            <Header />
            <Main />
            <Footer />
        </Box>
    )
}

export default Layout
