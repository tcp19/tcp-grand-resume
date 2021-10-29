
import { formatDate } from "./formatDate";

// reusable data points
export const emptyWorkExp = {
    title: "",
    company: "",
    location: "",
    description: "",
    isCurrent: false,
    start_date: formatDate(new Date()),
    end_date: formatDate(new Date()),
};

export const emptyProject = {
    title: "",
    description: "",
    url: "",
    start_date: formatDate(new Date()),
    end_date: formatDate(new Date()),
};

export const emptyEducation = {
    institution: "",
    studyType: "",
    degree: "",
    gpa: "",
    description: "",
    start_date: formatDate(new Date()),
    end_date: formatDate(new Date()),
};

export const emptyLang = {
    name: "",
    proficiency: "",
};
