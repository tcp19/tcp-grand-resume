import React from 'react'
import { Input } from '@chakra-ui/react';

export default function FormInput(props) {
    return (
        <>
               <Input {...props} focusBorderColor="#181C27" color="#181C27" />
        </>
    )
}
