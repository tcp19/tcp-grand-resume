import {
    Box,
    Flex,
    Text,
    Stack,
    Divider,
    VStack,
    Textarea,
    Checkbox,
    Tag,
    Button,
    TagLabel,
    TagCloseButton,
    HStack,
    SimpleGrid,
    Icon,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import FormInput from "../../components/FormInput";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GiSpellBook } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { MdComputer, MdDeleteOutline } from "react-icons/md";
import { useCVContext } from "../../context/CVContext";
import {
    emptyWorkExp,
    emptyEducation,
    emptyLang,
    emptyProject,
} from "../../utils/dataPoints";

export default function CVForm() {
    const workExperienceRef = useRef();
    const EducationRef = useRef();
    const LanguageRef = useRef();
    const SkillRef = useRef();
    const ProjectRef = useRef();


    // user globalRecords containing all CV information
    const { globalRecord, setGlobalRecord } = useCVContext();
    const [skill, setSkill] = useState("");

    const addSkill = (data) => {
        if (data) {
            let skills = globalRecord.skills;
            skills.push(data);
            setGlobalRecord({ ...globalRecord, skills });
            setSkill("");
        }
    };

    const removeSkill = (idx) => {
        if (typeof idx === "number") {
            let skills = globalRecord.skills;
            skills.splice(idx, 1);
            setGlobalRecord({ ...globalRecord, skills });
            setSkill("");
        }
    };

    const handleInputChange = (name) => (event) => {
        setGlobalRecord({
            ...globalRecord,
            [name]: event.target.value,
        });
    };

    const handleFieldChange = (name, field, idx, isChecked) => (event) => {
        let prevData = globalRecord[name];
        prevData[idx][field] = isChecked
            ? event.target.checked
            : event.target.value;

        setGlobalRecord({
            ...globalRecord,
            [name]: prevData,
        });
    };

    const manageProject = (action, id = null) => {
        if (action === "add") {
            let projects = [...globalRecord.projects];
            let newProject = Object.assign({}, emptyProject);
            projects.push(newProject);

            setGlobalRecord({
                ...globalRecord,
                projects
            });

            window.scrollTo(0, ProjectRef.current.offsetTop);
        } else {
            setGlobalRecord({
                ...globalRecord,
                projects: globalRecord.projects.filter(
                    (project, idx) => idx !== id
                ),
            });
        }
    };

    const manageWorkExperience = (action, id = null) => {
        if (action === "add") {
            let newWorkExp = Object.assign({}, emptyWorkExp);

            setGlobalRecord({
                ...globalRecord,
                workExperiences: [
                    ...globalRecord.workExperiences,
                    newWorkExp,
                ],
            });

            window.scrollTo(0, workExperienceRef.current.offsetTop);
        } else {
            setGlobalRecord({
                ...globalRecord,
                workExperiences: globalRecord.workExperiences.filter(
                    (experience, idx) => idx !== id
                ),
            });
        }
    };

    const manageLanguage = (action, id = null) => {
        if (action === "add") {
            let newLanguage = Object.assign({}, emptyLang);

            setGlobalRecord({
                ...globalRecord,
                languages: [...globalRecord.languages, newLanguage],
            });

            window.scrollTo(0, LanguageRef.current.offsetTop);
        } else {
            setGlobalRecord({
                ...globalRecord,
                languages: globalRecord.languages.filter(
                    (language, idx) => idx !== id
                ),
            });
        }
    };

    const manageEducation = (action, id = null) => {
        if (action === "add") {
            let newEducation = Object.assign({}, emptyEducation);

            setGlobalRecord({
                ...globalRecord,
                education: [...globalRecord.education, newEducation],
            });

            window.scrollTo(0, EducationRef.current.offsetTop);
        } else {
            setGlobalRecord({
                ...globalRecord,
                education: globalRecord.education.filter(
                    (education, idx) => idx !== id
                ),
            });
        }
    };

    const VisitSkills = () => {
        setGlobalRecord({
            ...globalRecord,
            skills: [...globalRecord.skills],
        });

        window.scrollTo(0, SkillRef.current.offsetTop);
    };

    const sectionList = [
        {
            onClick: () => manageWorkExperience("add"),
            text: "Add Work Experience",
            icon: BsFillBriefcaseFill,
        },
        {
            onClick: () => manageEducation("add"),
            text: "Add Education",
            icon: GiSpellBook,
        },
        {
            onClick: () => manageProject("add"),
            text: "Add Project",
            icon: GoProject,
        },
        {
            onClick: () => manageLanguage("add"),
            text: "Add Language",
            icon: BiWorld,
        },
        {
            onClick: VisitSkills,
            text: "Add Skills",
            icon: MdComputer,
        },
    ];

    return (
        <Box minH={"100vh"} w={"100%"} my="4">
            <Flex
                direction={{ base: "column-reverse", xl: "row" }}
                color="white"
            >
                <Box
                    boxShadow="xs"
                    mr="5px"
                    p="6"
                    rounded="md"
                    w={{ base: "100%", xl: "25vw" }}
                    bg="#ffffff"
                >
                    <Text color="#181C27" fontWeight="bold">
                        Fill Section
                    </Text>

                    {/* section selection container */}
                    <Box p="0" m="30px 0px">
                        <SimpleGrid minChildWidth="120px" spacing="10px">
                            {sectionList.map((val, index) => (
                                <Flex
                                    key={val.text + index}
                                    as="button"
                                    _hover={{
                                        boxShadow: "outline",
                                    }}
                                    onClick={val.onClick}
                                    cursor="pointer"
                                    justifyContent="center"
                                    flexDirection={"column"}
                                    alignItems="center"
                                    boxShadow="xs"
                                    rounded="md"
                                    height="120px"
                                >
                                    <Icon
                                        as={val.icon}
                                        color="#000000"
                                        fontSize="40px"
                                    />
                                    <Text
                                        color="#181C27"
                                        fontSize="13px"
                                        fontWeight="semibold"
                                        textAlign={"center"}
                                    >
                                        {val.text}
                                    </Text>
                                </Flex>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    align="stretch"
                    flex="1"
                    minH="80vh"
                    p="4"
                >
                    <VStack spacing="24px" align="stretch" mb={4}>
                        <>
                            <Text color="#181C27" fontWeight="bold">
                                About
                            </Text>
                            <Divider />
                        </>

                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput
                                placeholder="First name"
                                value={globalRecord.firstName}
                                onChange={handleInputChange("firstName")}
                            />
                            <FormInput
                                placeholder="Last name"
                                value={globalRecord.lastName}
                                onChange={handleInputChange("lastName")}
                            />
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput
                                placeholder="Headline e.g Software Engineer"
                                value={globalRecord.headLine}
                                onChange={handleInputChange("headLine")}
                            />
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <Textarea
                                focusBorderColor="#181C27"
                                color="#181C27"
                                placeholder="Summary"
                                value={globalRecord.summary}
                                onChange={handleInputChange("summary")}
                            />
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput
                                placeholder="City"
                                value={globalRecord.city}
                                onChange={handleInputChange("city")}
                            />
                            <FormInput
                                placeholder="Country"
                                value={globalRecord.country}
                                onChange={handleInputChange("country")}
                            />
                        </Stack>

                        <Stack direction={["column", "row"]} spacing="24px">
                            <FormInput
                                type="email"
                                placeholder="Email"
                                value={globalRecord.email}
                                onChange={handleInputChange("email")}
                            />
                            <FormInput
                                type="tel"
                                placeholder="Phone number"
                                value={globalRecord.phoneNumber}
                                onChange={handleInputChange("phoneNumber")}
                            />
                        </Stack>
                    </VStack>

                    <VStack mt={6} ref={workExperienceRef} align="start">
                        <Text color="#181C27" fontWeight="bold">
                            Work Experience
                        </Text>
                        <Divider />
                    </VStack>
                    {globalRecord.workExperiences &&
                        globalRecord.workExperiences.map((work, idx) => (
                            <VStack
                                borderRadius={"lg"}
                                bg="gray.100"
                                padding="35px 30px"
                                key={idx}
                                spacing="24px"
                                mt={"40px"}
                                align="stretch"
                            >
                                {idx === 0 ? (
                                    ""
                                ) : (
                                    <Stack
                                        direction={["row"]}
                                        spacing="24px"
                                        justifyContent="end"
                                    >
                                        <Icon
                                            as={MdDeleteOutline}
                                            color="#000000"
                                            fontSize="22px"
                                            onClick={() =>
                                                manageWorkExperience(
                                                    "remove",
                                                    idx
                                                )
                                            }
                                            cursor="pointer"
                                        />
                                    </Stack>
                                )}
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <FormInput
                                        placeholder="Company"
                                        value={work.company}
                                        onChange={handleFieldChange(
                                            "workExperiences",
                                            "company",
                                            idx
                                        )}
                                    />
                                    <FormInput
                                        placeholder="Job Title"
                                        value={work.title}
                                        onChange={handleFieldChange(
                                            "workExperiences",
                                            "title",
                                            idx
                                        )}
                                    />
                                </Stack>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <FormInput
                                        placeholder="Start date"
                                        value={work.start_date}
                                        type="date"
                                        onChange={handleFieldChange(
                                            "workExperiences",
                                            "start_date",
                                            idx
                                        )}
                                    />
                                    {!work.isCurrent && (
                                        <FormInput
                                            placeholder="End date"
                                            value={work.end_date}
                                            type="date"
                                            onChange={handleFieldChange(
                                                "workExperiences",
                                                "end_date",
                                                idx
                                            )}
                                        />
                                    )}
                                </Stack>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                    px="3"
                                >
                                    <Checkbox
                                        color="#181C27"
                                        value={work.isCurrent}
                                        onChange={handleFieldChange(
                                            "workExperiences",
                                            "isCurrent",
                                            idx,
                                            true
                                        )}
                                    >
                                        Current
                                    </Checkbox>
                                </Stack>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <Textarea
                                        focusBorderColor="#181C27"
                                        placeholder="Job Summary"
                                        textColor="#181C27"
                                        onChange={handleFieldChange(
                                            "workExperiences",
                                            "description",
                                            idx
                                        )}
                                        value={work.description}
                                    />
                                </Stack>
                            </VStack>
                        ))}

                        <Text my="4" opacity="0.6" textColor="#181C27" fontSize="md"> NB: Use newlines for bullet points. </Text>

                    <VStack mt={6} ref={EducationRef} align="start">
                        <Text color="#181C27" fontWeight="bold">
                            Education
                        </Text>
                        <Divider />
                    </VStack>
                    {globalRecord.education &&
                        globalRecord.education.map((edu, idx) => (
                            <VStack
                                borderRadius={"lg"}
                                bg="gray.100"
                                padding="35px 30px"
                                key={idx}
                                spacing="24px"
                                mt={"40px"}
                                align="stretch"
                            >
                                {idx === 0 ? (
                                    ""
                                ) : (
                                    <Stack
                                        direction={["row"]}
                                        spacing="24px"
                                        justifyContent="end"
                                    >
                                        <Icon
                                            as={MdDeleteOutline}
                                            color="#000000"
                                            fontSize="22px"
                                            onClick={() =>
                                                manageEducation("remove", idx)
                                            }
                                            cursor="pointer"
                                        />
                                    </Stack>
                                )}
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <FormInput
                                        placeholder="Institution"
                                        value={edu.institution}
                                        onChange={handleFieldChange(
                                            "education",
                                            "institution",
                                            idx
                                        )}
                                    />
                                    <FormInput
                                        placeholder="Degree"
                                        value={edu.studyType}
                                        onChange={handleFieldChange(
                                            "education",
                                            "studyType",
                                            idx
                                        )}
                                    />
                                </Stack>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <FormInput
                                        placeholder="Start date"
                                        type="date"
                                        onChange={handleFieldChange(
                                            "education",
                                            "start_date",
                                            idx
                                        )}
                                        value={edu.start_date}
                                    />

                                    <FormInput
                                        placeholder="Graduation date"
                                        type="date"
                                        onChange={handleFieldChange(
                                            "education",
                                            "end_date",
                                            idx
                                        )}
                                        value={edu.end_date}
                                    />
                                </Stack>

                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <Textarea
                                        focusBorderColor="#181C27"
                                        placeholder="Summary"
                                        onChange={handleFieldChange(
                                            "education",
                                            "description",
                                            idx
                                        )}
                                        value={edu.description}
                                    />
                                </Stack>
                            </VStack>
                        ))}

                    <VStack mt={6} ref={ProjectRef}  align="start">
                        <Text color="#181C27" fontWeight="bold">
                            Projects
                        </Text>
                        <Divider />
                    </VStack>
                    {globalRecord.projects.length > 0 &&
                        globalRecord.projects.map((project, idx) => (

                            <VStack
                                key={idx}
                                spacing="24px"
                                mt={"40px"}
                                align="stretch"
                            >
                                {idx === 0 ? (
                                ""
                            ) : (
                                <Stack
                                    direction={["row"]}
                                    spacing="24px"
                                    justifyContent="end"
                                >
                                    <Icon
                                        as={MdDeleteOutline}
                                        color="#000000"
                                        fontSize="22px"
                                        onClick={() =>
                                            manageProject("remove", idx)
                                        }
                                        cursor="pointer"
                                    />
                                </Stack>
                            )}
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                    textColor="brand.black"
                                >
                                    <FormInput
                                        placeholder="Title"
                                        value={project.title}

                                        onChange={handleFieldChange(
                                            "projects",
                                            "title",
                                            idx
                                        )}
                                    />
                                    <FormInput
                                        placeholder="Project URL"
                                        value={project.url}
                                        onChange={handleFieldChange(
                                            "projects",
                                            "url",
                                            idx
                                        )}
                                    />
                                </Stack>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <FormInput
                                        placeholder="Start date"
                                        type="date"
                                        onChange={handleFieldChange(
                                            "projects",
                                            "start_date",
                                            idx
                                        )}
                                        value={project.start_date}
                                    />

                                    <FormInput
                                        placeholder="End date"
                                        type="date"
                                        onChange={handleFieldChange(
                                            "projects",
                                            "end_date",
                                            idx
                                        )}
                                        value={project.end_date}
                                    />
                                </Stack>

                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                >
                                    <Textarea
                                        focusBorderColor="#181C27"
                                        placeholder="Description"
                                        textColor="#181C27"
                                        onChange={handleFieldChange(
                                            "projects",
                                            "description",
                                            idx
                                        )}
                                        value={project.description}
                                    />
                                </Stack>
                            </VStack>
                        ))}

                    <VStack ref={SkillRef} mt={6} align="start">
                        <Text color="#181C27" fontWeight="bold">
                            Skills
                        </Text>
                        <Divider />
                    </VStack>
                    <HStack spacing="24px" mt={"40px"}>
                        {globalRecord.skills.length > 0 ? (
                            globalRecord.skills.map((skill, idx) => (
                                <Tag
                                    size={"lg"}
                                    key={idx}
                                    borderRadius="full"
                                    variant="solid"
                                    bg="#181C27"
                                    color="white"
                                >
                                    <TagLabel>{skill}</TagLabel>
                                    <TagCloseButton
                                        onClick={() => removeSkill(idx)}
                                    />
                                </Tag>
                            ))
                        ) : (
                            <Text>No skills available</Text>
                        )}
                    </HStack>
                    <HStack spacing="24px" mt={"40px"}>
                        <Stack
                            direction={["column", "row"]}
                            spacing="24px"
                            w="100%"
                        >
                            <FormInput
                                placeholder="Enter a skill"
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                            />
                            <Button
                                w="100%"
                                _hover={{ bg: "#181C27" }}
                                _active={{ bg: "#181C27" }}
                                color="#fff"
                                onClick={() => addSkill(skill)}
                                bg="#181C27"
                            >
                                {" "}
                                Add a new skill
                            </Button>
                        </Stack>
                    </HStack>

                    <VStack ref={LanguageRef} mt={6} align="start">
                        <Text color="#181C27" fontWeight="bold">
                            Languages
                        </Text>
                        <Divider />
                    </VStack>

                    {globalRecord.languages.length > 0 ? (
                        globalRecord.languages.map((lan, idx) => (
                            <HStack key={idx} spacing="24px" mt={"40px"}>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="24px"
                                    w="100%"
                                >
                                    <FormInput
                                        placeholder="Enter a Language"
                                        value={lan.name}
                                        onChange={handleFieldChange(
                                            "languages",
                                            "name",
                                            idx
                                        )}
                                    />

                                    <FormInput
                                        placeholder="Enter a Language Proficiency"
                                        value={lan.proficiency}
                                        onChange={handleFieldChange(
                                            "languages",
                                            "proficiency",
                                            idx
                                        )}
                                    />
                                </Stack>

                                <Stack>
                                    <Icon
                                        as={MdDeleteOutline}
                                        color="#000000"
                                        fontSize="22px"
                                        onClick={() =>
                                            manageLanguage("remove", idx)
                                        }
                                        cursor="pointer"
                                    />
                                </Stack>
                            </HStack>
                        ))
                    ) : (
                        <Text color="#000000">No languages available</Text>
                    )}
                    {/* <Button w="100%" _hover={{ bg: "#181C27" }} _active={{ bg: "#181C27" }} color="#fff" onClick={() => addLanguage()} bg="#181C27"> Add a new skill</Button> */}
                </Box>
            </Flex>
        </Box>
    );
}
