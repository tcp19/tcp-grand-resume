import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Button,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useCVContext } from "../../context/CVContext";
import templates from "../../templates";
import { printAsPdf } from "../../utils/printAsPdf";

export default function PreviewCV() {
    const { globalRecord } = useCVContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const [template, setTemplate] = useState("default");

    const { firstName, lastName } = globalRecord;

    const downloadAsPdf = () => {
        const pageElement = document.querySelector(`#resume`);

        printAsPdf({ pageElement, firstName, lastName });

        setTimeout(() => {
            toast({
            title: "Resume Downloaded Successfully 🎉🎉",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
        })
         })
    };

    const selectTemplate = (type) => {
        onClose();
        setTemplate(type);
        toast({
            title: "Changed template successfully",
            status: "success",
            duration: 9000,
            position: "top",
            isClosable: true,
        });
    };

    const CVTemplate =
        templates?.[template]?.component || templates?.["default"]?.component;

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                size="full"
                onClose={onClose}
            >
                <ModalOverlay bg={"grand.black"} color={"#ffff"} />
                <ModalContent bg={"grand.black"} color={"#ffff"}>
                    <ModalHeader>Choose a Template</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={6}>
                        <Flex flexWrap="wrap">
                            {Object.keys(templates).map((template, idx) => (
                                <Box
                                    mx="10"
                                    onClick={() => selectTemplate(template)}
                                    cursor="pointer"
                                    key={idx}
                                >
                                    <Image
                                        src={templates[template].image}
                                        width="200"
                                        height="250"
                                        alt={`template image ${idx}`}
                                    />
                                </Box>
                            ))}
                            <Box
                                mx="10"
                                height="200"
                                bg={"#ffff"}
                                width="200"
                                onClick={() => {}}
                                cursor="pointer"
                            ></Box>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="brand.black" mr={3}>
                            Save
                        </Button>
                        <Button
                            bg="#ffff"
                            textColor="#181C27"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box my="6">
                <Flex justifyContent="space-between">
                    <Button
                        rightIcon={<ViewIcon />}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        bg={"#181C27"}
                        href={"#"}
                        _focus={{
                            bg: "#181C27",
                        }}
                        _hover={{
                            bg: "#181C27",
                        }}
                        onClick={onOpen}
                    >
                        Choose Template
                    </Button>
                    <Button
                        rightIcon={<DownloadIcon />}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        bg={"#181C27"}
                        href={"#"}
                        _focus={{
                            bg: "#181C27",
                        }}
                        _hover={{
                            bg: "#181C27",
                        }}
                        onClick={() => downloadAsPdf()}
                    >
                        Download
                    </Button>
                </Flex>
            </Box>
            <div id="resume">
                <CVTemplate globalRecord={globalRecord} />
            </div>
        </>
    );
}
