import React from "react";
import "./_personalInfo.scss";

const Row = ({
    label,
    value
}) => {
    return (
        <div className="cnt-info">
            <div className="info-label">{label}</div>
            <div className="info-value">{value}</div>
        </div>
    );
}

const PersonalInfo = () => {
    const email = "vbesschetnov@yandex.ru",
          linkedInUrl = "www.linkedin.com/in/vasilii-besschetnov",
          phone = "650-495-23-88";
    return (
        <div className="cnt-personal-info">
            <Row label="Phone"
                value={<a href={"tel:" + phone}>{phone}</a>} />
            <Row label="Email"
                value={<a href={"mailto:" + email}>{email}</a>}/>
            <Row label="LinkedIn"
                value={<a target="_blank" href={"https://" + linkedInUrl}>{linkedInUrl}</a>}/>
            <Row label="Address"
                value={<span>San Jose CA 95134<br></br>
                    185 Estancia Dr.</span>}/>
        </div>
    );
}

export default PersonalInfo;