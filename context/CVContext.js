import React, { createContext, useState, useContext, useEffect } from "react";
import {
    emptyEducation,
    emptyLang,
    emptyProject,
    emptyWorkExp,
} from "../utils/dataPoints";

const CVContext = createContext({
    globalRecord: {},
    setGlobalRecord: () => {},
});

export const useCVContext = () => {
    return useContext(CVContext);
};

function CVProvider({ children }) {
    const [globalRecord, setGlobalRecord] = useState({
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
            stackoverflow: "",
        },
        skills: ["html", "css", "reactjs"],
        languages: [emptyLang],
    });

    const persistToLocalStorage = (data) => {
        setGlobalRecord(data);
        localStorage.setItem("record", JSON.stringify(data));
        return;
    };

    const getLocalStorage = () => {
        const localRecord = localStorage.getItem("record");

        if (localRecord) {
            setGlobalRecord(JSON.parse(localRecord));
        }
        return null;
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    return (
        <CVContext.Provider
            value={{
                setGlobalRecord: persistToLocalStorage,
                globalRecord,
            }}
        >
            {children}
        </CVContext.Provider>
    );
}

export default CVProvider;
