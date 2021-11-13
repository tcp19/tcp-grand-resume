import React from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";

export function DeletePopOver({ triggerPopover, children, onChooseYes }) {
    return (
        <>
            {triggerPopover === true ? (
                <Popover
                    returnFocusOnClose={false}
                    color="#181C27"
                    placement="left"
                    closeOnBlur={true}
                >
                    {({ isOpen, onClose }) => (
                        <>
                            <PopoverTrigger>{children}</PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader
                                    color="#181C27"
                                    fontWeight="semibold"
                                >
                                    Confirmation
                                </PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody color="#181C27">
                                    Are you sure you want to delete?
                                </PopoverBody>
                                <PopoverFooter
                                    d="flex"
                                    justifyContent="flex-end"
                                >
                                    <ButtonGroup size="sm">
                                        <Button
                                            variant="outline"
                                            color="#181C27"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            colorScheme="red"
                                            onClick={onChooseYes}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </PopoverFooter>
                            </PopoverContent>
                        </>
                    )}
                </Popover>
            ) : (
                <span onClick={onChooseYes}>{children}</span>
            )}
        </>
    );
}
