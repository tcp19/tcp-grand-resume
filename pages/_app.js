import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CVProvider from "../context/CVContext";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <CVProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
            </CVProvider>
        </ChakraProvider>
    );
}

export default MyApp;
