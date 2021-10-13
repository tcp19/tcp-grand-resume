import { Box, Flex, Text, Stack, Divider, VStack, Textarea, Checkbox, Button, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import { formatDate } from '../../utils/formatDate';

export default function CVForm() {
    // reusable data points
    let emptyWorkExp = {
        title: "",
        company: "",
        location: "",
        description: "",
        isCurrent: false,
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date()),

    };

    let emptyProject = {
        title: "",
        description: "",
        url: "",
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date()),
    };

    let emptyEducation = {
        institution: "",
        studyType: "",
        degree: "",
        gpa: "",
        description: "",
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date()),
    };

    let emptyLang = {
        name: '',
        proficiency: ''
    }


    // user records containing all CV information
    const [record, setRecord] = useState({
        firstName: null,
        lastName: null,
        headLine: null,
        summary: null,
        city: null,
        websiteUrl: null,
        country: null,
        email: null,
        phoneNumber: null,
        projects: [emptyProject],
        workExperiences: [emptyWorkExp],
        education: [emptyEducation],
        socialLinks: {
            linkedin: "",
            twitter: "",
            github: "",
            stackoverflow: ""
        },
        skills: [],
        languages: [emptyLang]
    });

    const handleInputChange = (name) => (event) => {
        setRecord({
            ...record,
            [name]: event.target.value
        })
    };

    const handleFieldChange = (name, field, idx, isChecked) => (event) => {
        let prevData = record[name];
        prevData[idx][field] = isChecked ? event.target.checked : event.target.value;

        setRecord({
            ...record,
            [name]: prevData
        })
    }

    const addWorkExperience = () => {
        setRecord({
            ...record,
            workExperiences: [...record.workExperiences, emptyWorkExp]
        })
    }

    return (
        <Box minH={'100vh'} w={'100%'} my="4" >
            <Flex direction={{ base: 'column-reverse', xl: 'row' }} color="white" >
                <Box w={{ base: '100%', xl: "25vw" }} minH="80vh" bg="green.500">
                    {/* <Text>Box 1</Text> */}
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="space-between" align="stretch" flex="1" minH="80vh" p="4">
                    <VStack spacing="24px" align="stretch" mb={4}>
                        <>
                            <Text color="#181C27" fontWeight="bold" >About</Text>
                            <Divider />
                        </>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput placeholder="First name" value={record.firstName} onChange={handleInputChange('firstName')} />
                            <FormInput placeholder="Last name" value={record.lastName} onChange={handleInputChange('lastName')} />

                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput placeholder="Headline e.g Software Engineer" value={record.headLine} onChange={handleInputChange('headLine')} />
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <Textarea focusBorderColor="#181C27" color="#181C27" placeholder="Summary" value={record.summary} onChange={handleInputChange('summary')} />
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput placeholder="City" value={record.city} onChange={handleInputChange('city')} />
                            <FormInput placeholder="Country" value={record.country} onChange={handleInputChange('country')} />

                        </Stack>

                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput type="email" placeholder="Email" onChange={handleInputChange('email')} />
                            <FormInput type="tel" placeholder="Phone number" onChange={handleInputChange('phoneNumber')} />
                        </Stack>
                    </VStack>

                    <VStack mt={6} align="start">
                        <Text color="#181C27" fontWeight="bold" >Work Experience</Text>
                        <Divider />
                    </VStack>
                    {record.workExperiences && record.workExperiences.map((work, idx) => (

                        <VStack key={idx} spacing="24px" mt={"40px"} align="stretch">

                            <Stack direction={["column", "row"]} spacing="24px">
                                <FormInput placeholder="Company" value={work.company} onChange={handleFieldChange('workExperiences', 'company', idx)} />
                                <FormInput placeholder="Job Title" value={work.title} onChange={handleFieldChange('workExperiences', 'title', idx)} />

                            </Stack>
                            <Stack direction={["column", "row"]} spacing="24px">
                                <FormInput placeholder="Start date" value={work.start_date} type="date" onChange={handleFieldChange('workExperiences', 'start_date', idx)} />
                                {
                                    !work.isCurrent &&
                                    <FormInput placeholder="End date" value={work.end_date} type="date" onChange={handleFieldChange('workExperiences', 'end_date', idx)} />
                                }

                            </Stack>
                            <Stack direction={["column", "row"]} spacing="24px" px="3">
                                <Checkbox color="#181C27" value={work.isCurrent} onChange={handleFieldChange('workExperiences', 'isCurrent', idx, true)}>
                                    Current
                                </Checkbox>
                            </Stack>
                            <Stack direction={["column", "row"]} spacing="24px">
                                <Textarea focusBorderColor="#181C27" placeholder="Job Summary" onChange={handleFieldChange('workExperiences', 'description', idx)} value={work.description} />
                            </Stack>

                        </VStack>
                    ))
                    }
                    {/* <HStack spacing="24px">
                    <Button bg={"#181C27"} _hover={{ bg: "#181C27" }} mt={4} onClick={() => addWorkExperience()}>Add Work Experience</Button>
                    <Button bg={"#181C27"} _hover={{ bg: "#181C27" }} mt={4} onClick={() => addWorkExperience()}>Remove Work Experience</Button>

                    </HStack> */}
                    <VStack mt={6} align="start">
                        <Text color="#181C27" fontWeight="bold" >Education</Text>
                        <Divider />
                    </VStack>
                    {record.education && record.education.map((edu, idx) => (

                        <VStack key={idx} spacing="24px" mt={"40px"} align="stretch">

                            <Stack direction={["column", "row"]} spacing="24px">
                                <FormInput placeholder="Institution" value={edu.institution} onChange={handleFieldChange('education', 'institution', idx)} />
                                <FormInput placeholder="Degree" value={edu.studyType} onChange={handleFieldChange('education', 'studyType', idx)} />

                            </Stack>
                            <Stack direction={["column", "row"]} spacing="24px">
                                <FormInput placeholder="Start date" type="date" onChange={handleFieldChange('education', 'start_date', idx)} value={edu.start_date} />

                                <FormInput placeholder="Graduation date" type="date" onChange={handleFieldChange('education', 'end_date', idx)} value={edu.end_date} />


                            </Stack>

                            <Stack direction={["column", "row"]} spacing="24px">
                                <Textarea focusBorderColor="#181C27" placeholder="Summary" onChange={handleFieldChange('education', 'description', idx)} value={edu.description} />
                            </Stack>

                        </VStack>
                    ))
                    }
                </Box>
            </Flex>

        </Box>
    )
}
