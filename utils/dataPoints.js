import { formatDate } from "./formatDate";

// reusable data points
export const emptyWorkExp = {
    title: "",
    company: "",
    location: "",
    description: "",
    isCurrent: false,
    start_date: new Date(),
    end_date: new Date(),
};

export const emptyProject = {
    title: "",
    description: "",
    url: "",
    start_date: new Date(),
    end_date: new Date(),
};

export const emptyEducation = {
    institution: "",
    studyType: "",
    degree: "",
    gpa: "",
    description: "",
    start_date: new Date(),
    end_date: new Date(),
};

export const emptyLang = {
    name: "",
    proficiency: "",
};
