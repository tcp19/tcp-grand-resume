import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
