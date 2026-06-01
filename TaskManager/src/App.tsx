import './App.css';
import { BrowserRouter } from "react-router-dom";
import Layout from './layout/Layout';
import { ThemeContextProvider } from './providers/ProjectThemeProvider';

function App() {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <Layout />
            </ThemeContextProvider>
        </BrowserRouter>
    );
}


export default App
