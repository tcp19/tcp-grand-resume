import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CVProvider from "../context/CVContext";


const theme = extendTheme({
  colors: {
    grand: {
      black: "#181C27",
    },
  },
})


function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} >
            <CVProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </CVProvider>
        </ChakraProvider>
    );
}

export default MyApp;
