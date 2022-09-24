import React, { useState } from "react";
import uniqid from "uniqid";

function Experience() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [tenure, setTenure] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      title: "Senior Frontend Developer",
      company: "Capsule Corp",
      tenure: "July 2021 - Current",
      location: "Atlanta, GA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.",
    },
    {
      id: uniqid(),
      title: "Frontend Developer",
      company: "Acme Corp",
      tenure: "May 2017 - July 2021",
      location: "Atlanta, GA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.",
    },
    {
      id: uniqid(),
      title: "Jr Frontend Developer",
      company: "Burger World Corp",
      tenure: "March 2015 - May 2017",
      location: "Atlanta, GA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae luctus magna. Pellentesque dapibus porttitor sapien, id bibendum massa finibus et. Maecenas non cursus mi. Aenean ut velit vitae orci cursus tristique nec vel ex. Aliquam et dolor ut neque feugiat lobortis sed sed lectus. Duis varius aliquam enim, et aliquet nunc volutpat sit amet. Suspendisse potenti. Maecenas pellentesque est nec mauris ultricies placerat. Aenean auctor lectus vitae mattis rutrum. Cras congue blandit lacus vitae lobortis. Etiam pharetra risus sit amet hendrerit tristique.",
    },
  ]);

  const [add, setAdd] = useState(false);

  const toggleAddExperience = () => {
    setAdd(!add);
  };

  const handleTitleChange = (e) => {
    title = e.target.value;
  };

  const handleCompanyChange = (e) => {
    company = e.target.value;
  };

  const handleTenureChange = (e) => {
    tenure = e.target.value;
  };

  const handleLocationChange = (e) => {
    location = e.target.value;
  };

  const handleDescriptionChange = (e) => {
    description = e.target.value;
  };

  const submitAddExperience = (e) => {
    e.preventDefault();
    setExperience({
      experience: experience.concat({
        id: uniqid(),
        title: title,
        company: company,
        tenure: tenure,
        location: location,
        description: description,
      }),
    });

    setTitle("");
    setCompany("");
    setTenure("");
    setLocation("");
    setDescription("");

    toggleAddExperience();
  };

  const handleRemove = (key) => {
    const newExperience = experience.filter(
      (experience) => experience.id !== key
    );

    setExperience({
      experience: newExperience,
    });
  };

  return (
    <div className="experienceContainer">
      <h2 className="experience">Work Experience</h2>
      {experience.map((job) => {
        return (
          <div
            className="job"
            key={job.id}
            onClick={() => handleRemove(job.id)}
          >
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>
              {job.tenure} / {job.location}
            </p>
            <p>{job.description}</p>
          </div>
        );
      })}
      <button
        onClick={() => toggleAddExperience()}
        className="experienceEditBtn"
        type="button"
      >
        Add
      </button>
      {add && (
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={() => handleTitleChange()}
            value={title}
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            onChange={() => handleCompanyChange()}
            value={company}
          />
          <label htmlFor="tenure">Tenure</label>
          <input
            type="text"
            onChange={() => handleTenureChange()}
            value={tenure}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            onChange={() => handleLocationChange()}
            value={location}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="textArea"
            onChange={() => handleDescriptionChange()}
            value={description}
          ></textarea>
          <div className="buttonContainer">
            <button type="button" onClick={() => submitAddExperience()}>
              Done
            </button>
            <button type="button" onClick={() => toggleAddExperience()}>
              Close
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Experience;
