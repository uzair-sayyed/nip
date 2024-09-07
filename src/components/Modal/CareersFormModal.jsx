import { useState } from "react";
import "./CareersFormModal.scss";

const CareersFormModal = ({ selectedPosition, closeModal }) => {
  const jobDescriptions = [
    {
      position: "Frontend Development",
      description:
        " As a Frontend Developer, you will be responsible for creating visually appealing web pages, ensuring responsive design, and working with frameworks like React or Angula",
      shortDes:
        " We are a lean team of high performing go-getters, we take ownership in our roles and lead with knowledge. Debates and discussions are an important part of our culture and we encourage people to bring unique perspectives to their conversations. Most importantly, we love solving problems. Each day is inspiring and we encourage you to apply for this role and experience it for yourself.",
      location:
        "Ghatkopar East, Mumbai, Maharashtra. Near the station (10-minute auto ride)",
      techstack: [
        "HTML",
        "CSS",
        "Javascript",
        "Jquery",
        "Bootstrap",
        "Tailwind",
        "React JS",
        "Angular",
        "Ionic",
      ],
      responsibilities: [
        "Design responsive web pages using HTML, CSS, and JavaScript",
        "Implement interactive features using JavaScript frameworks like React or Angular",
        "Use CSS preprocessors like SASS or LESS to enhance styling",
        "Handle user authentication and authorization",
        "Write clean, modular, and well-documented code",
        "Ensure the technical feasibility of UI/UX designs.",
        "Optimize applications for maximum speed and scalability.",
        "Work closely with the design team to ensure the technical feasibility of UI/UX designs.",
        "Participate in the entire development lifecycle, from concept and design to testing and deployment.",
        "Stay up-to-date with emerging technologies and industry trends to suggest new tools and methodologies.",
      ],
      skillqualifications: [
        "Proficiency in Angular, React JS, and Ionic.",
        "Strong knowledge of HTML, CSS, JavaScript, and jQuery.",
        "Experience in creating responsive and dynamic web pages.",
        "Ability to work collaboratively in a team environment.",
        "Excellent communication skills to interact with team members and understand project requirements.",
        "Strong problem-solving skills and attention to detail.",
        "Ability to work in a fast-paced environment and manage multiple tasks effectively.",
        "Graduation is mandatory.",
        "Certification courses in Angular, React JS,Ionic, HTML, CSS, JavaScript, jQuery are a plus.",
      ],
      experience: "1-2 Years",
      salary: "20k - 30k per month",
    },
    {
      position: "Backend Development",
      description:
        "As a Backend Developer, you will manage server-side logic, integrate databases, and ensure high performance and responsiveness to requests from the front-end.",
      shortDes:
        " We are a lean team of high performing go-getters, we take ownership in our roles and lead with knowledge. Debates and discussions are an important part of our culture and we encourage people to bring unique perspectives to their conversations. Most importantly, we love solving problems. Each day is inspiring and we encourage you to apply for this role and experience it for yourself.",
      location:
        "Ghatkopar East, Mumbai, Maharashtra.Near the station (10-minute auto ride)",
      techstack: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "API Development",
        "API Integration",
      ],
      responsibilities: [
        "Develop and maintain backend components of web applications.",
        "Work closely with front-end developers to integrate user-facing elements with server-side logic.",
        "Design and implement APIs for web services.",
        "Collaborate with the team to enhance and expand project scope, incorporating improvements and innovative solutions.",
        "Connect with customers to understand their requirements and provide technical support.",
        "Participate in all stages of the development lifecycle, from planning to deployment.",
        "Ensure the quality and functionality of the code through testing and debugging.",
        "Stay up-to-date with emerging technologies and industry trends to suggest new tools and methodologies.",
      ],
      skillqualifications: [
        "Proficiency in PHP and MySQL.",
        "Strong knowledge of HTML, CSS, JavaScript, and jQuery.",
        "Experience in API development and integration.",
        "Ability to work collaboratively in a team environment.",
        "Excellent communication skills to interact with customers and understand their needs.",
        "Problem-solving skills and a proactive approach to enhancing project scopes.",
        "Ability to work in a fast-paced environment and manage multiple tasks effectively.",
      ],
      experience: "1-3 Years",
      salary: "15k - 36k month",
    },
    {
      position: "Graphic Designer",
      description:
        "As a UI/UX Designer, you will create user-centered designs by understanding business requirements and user feedback, and developing UI mockups and prototypes.",
      shortDes:
        " We are seeking a talented and creative Graphic Designer with a strong focus on website design to join our dynamic team. The ideal candidate will have a keen eye for detail, a passion for design, and the ability to create visually stunning and user-friendly websites.",
      location:
        "Ghatkopar East, Mumbai, Maharashtra. Near the station (10-minute auto ride)",
      techstack: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "API Development",
        "API Integration",
      ],
      responsibilities: [
        "Collaborate with the development team to create engaging and intuitive website designs.",
        "Develop design concepts and wireframes based on project requirements.",
        "Design website layouts, graphics, and user interface elements.",
        "Ensure consistency in branding and design across all web projects.",
        "Optimize graphics and images for websites to ensure fast loading times.",
        "Stay updated with the latest design trends and technologies.",
        "Assist in creating visual content for social media, marketing materials, and other digital platforms as needed.",
        "Work closely with clients to understand their design preferences and provide mockups and prototypes for approval.",
        "Revise designs based on client and team feedback.",
      ],
      skillqualifications: [
        "Proven experience as a Graphic Designer, with a strong portfolio showcasing website design projects.",
        "Proficiency in design tools such as Adobe Photoshop, Illustrator, and Canva.",
        "Experience with web design tools such as Figma or Sketch is a plus.",
        "Strong visual design skills, including color theory, typography, and layout design.",
        "Ability to work collaboratively in a team environment.",
        "Excellent communication skills, both verbal and written.",
        "Attention to detail and a strong sense of aesthetics.",
        "Ability to manage multiple projects and meet deadlines.",
        "Experience with responsive and mobile-first design.",
        "Knowledge of UX/UI principles and best practices.",
        "Experience working with developers to implement designs.",
        "Graduation is mandatory",
      ],
    },
    {
      position: "Admin Generalist",
      description:
        "As a Digital Marketer, you will be responsible for developing, implementing, and managing marketing campaigns that promote a company’s products and/or services.",
      shortDes:
        "This is a full-time on-site role as an Admin Generalist at Nipralo Technologies, located in Ghatkopar East, Mumbai, just 10 minutes from Ghatkopar station. Your responsibilities include:",
      location:
        "Ghatkopar East, Mumbai, Maharashtra. Near the station (10-minute auto ride)",
      responsibilities: [
        "Calling and scheduling interviews with the right candidates for various roles.",
        "Issuing offer letters and salary slips to new hires.",
        "Daily attendance management and payroll processing.",
        "Managing and processing invoices, including timely follow-up with clients.",
        "Maintaining accurate records of bills, petty cash, and other financial documents.",
        "Handling banking tasks and ensuring the safe transport of cash as necessary.",
        "Contacting clients for payment collection and maintaining a list of pending payments.",
        "Registering with third-party websites for business and administrative purposes.",
        "Ensuring the smooth operation of the office by maintaining professional decorum and timely arrival.",
        "Recording and managing petty cash entries for office and housekeeping expenses.",
        "Preparing and submitting monthly GST returns, non-GST returns, and other expense reports.",
        "Coordinating with the Chartered Accountant (CA) for financial updates, organizing financial documents, and assisting in preparing bills and downloading PDFs for review.",
        "Performing general IT tasks and assisting with various office administrative duties.",
      ],
      skillqualifications: [
        "Strong organizational and time-management skills.",
        "Excellent communication and interpersonal skills.",
        "Proficiency in Microsoft Office and basic accounting software.",
        "Attention to detail and ability to multitask.",
        "Basic understanding of GST and financial regulations is a plus.",
        "Good communication skills for scheduling interviews and handling client communications.",
      ],
      salary: "12k - 15k per month",
    },
    {
      position: "Digital Marketing Specialist",
      description:
        "As a Fullstack Developer, you will handle both frontend and backend development tasks, ensuring the entire system works seamlessly.",
      shortDes:
        "This is a full-time on-site role as a Digital Marketing Specialist at Nipralo Technologies, located in Ghatkopar East, Mumbai, just 10 minutes from Ghatkopar station. Your responsibilities include:",
      location:
        "Ghatkopar East, Mumbai, Maharashtra. Near the station (10-minute auto ride)",
      responsibilities: [
        "Developing and implementing effective digital marketing strategies across multiple channels including SEO, SEM, social media, email marketing, and content marketing.",
        "Analyzing and optimizing campaign performance to ensure maximum ROI.",
        "Managing and growing social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        "Creating and managing content calendars to ensure consistent and engaging communication.",
        "Monitoring website analytics and creating detailed reports on campaign performance.",
        "Collaborating with the design and development teams to optimize website content for SEO and user engagement.",
        "Staying updated with the latest digital marketing trends and best practices.",
      ],
      skillqualifications: [
        "Proven experience in digital marketing, with a strong understanding of SEO, SEM, social media, and content marketing.",
        "Excellent analytical skills and the ability to interpret data to drive campaign optimization.",
        "Strong communication and content creation skills.",
        "Proficiency in marketing tools such as Google Analytics, Google Ads, and social media management platforms.",
        "Ability to work independently and manage multiple projects simultaneously.",
      ],
      salary: "12k - 15k per month",
    },
  ];

  const positions = jobDescriptions.map((job) => job.position);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
    position: selectedPosition || "",
    resume: null,
  });

  const currentJobDescription = jobDescriptions.find(
    (job) => job.position === formData.position
  );

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
    position: "",
    resume: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
      isValid = false;
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required.";
      isValid = false;
    }

    if (!formData.position) {
      newErrors.position = "Position is required.";
      isValid = false;
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required.";
      isValid = false;
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.resume.type)
    ) {
      newErrors.resume = "Resume must be a PDF, Word, or Document file.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      setSuccessMessage("Your application has been submitted successfully!");
      closeModal();
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-10 '
      onClick={closeModal}
    >
      <div
        className='bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl max-h-[70vh] md:max-h-[80vh]  overflow-y-auto grid md:grid-cols-2 gap-8'
        onClick={(event) => event.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        {/* Left side: Job Description */}
        <div className='w-[95%] pr-6 md:max-h-[70vh] overflow-y-auto career-form'>
          <h4 className='font-medium text-[24px]'>
            Job Role -{" "}
            <span className=''>
              {currentJobDescription?.position || "(Select a Position)"}
            </span>
          </h4>
          {currentJobDescription?.responsibilities && (
            <>
              <h4 className='font-medium text-[20px] mt-5'>
                Responsibilities:
              </h4>
              <div>
                {currentJobDescription?.responsibilities.map((item, index) => (
                  <div key={index} className='flex'>
                    <span className='cus-dot-blue'></span>
                    <p className='text-16px'>{item}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {currentJobDescription?.skillqualifications && (
            <>
              <h4 className='font-medium text-[20px] mt-4'>
                Skills and Qualifications:
              </h4>
              <div>
                {currentJobDescription?.skillqualifications.map(
                  (item, index) => (
                    <div key={index} className='flex'>
                      <span className='cus-dot-blue'></span>
                      <p className='text-16px'>{item}</p>
                    </div>
                  )
                )}
              </div>
            </>
          )}

          {currentJobDescription?.location && (
            <>
              <h4 className='font-medium text-[20px] mt-4'>Location:</h4>
              <div>
                <div className='flex'>
                  <span className='cus-dot-blue'></span>
                  <p>{currentJobDescription?.location}</p>
                </div>
              </div>
            </>
          )}

          {currentJobDescription?.salary && (
            <>
              <h4 className='font-medium text-[20px] mt-4'>Salary:</h4>

              <div className='flex'>
                <span className='cus-dot-blue'></span>
                <p>{currentJobDescription?.salary}</p>
              </div>
            </>
          )}
        </div>

        {/* Right side: Form */}
        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Apply for the position
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Name:
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                  )}
                </label>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Email:
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                  )}
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Mobile Number:
                  <input
                    type='text'
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0'
                  />
                  {errors.mobile && (
                    <p className='text-red-500 text-sm mt-1'>{errors.mobile}</p>
                  )}
                </label>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Position:
                  <select
                    name='position'
                    value={formData.position}
                    onChange={handleChange}
                    className='mt-1 p-[10px] block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0'
                  >
                    <option value=''>Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.position}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Experience:
                <div className='mt-2'>
                  <label className='inline-flex items-center mr-4'>
                    <input
                      type='radio'
                      name='experience'
                      value='Fresher'
                      checked={formData.experience === "Fresher"}
                      onChange={handleChange}
                      className='form-radio'
                    />
                    <span className='ml-2'>Fresher</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='experience'
                      value='Experienced'
                      checked={formData.experience === "Experienced"}
                      onChange={handleChange}
                      className='form-radio'
                    />
                    <span className='ml-2'>Experienced</span>
                  </label>
                </div>
                {errors.experience && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.experience}
                  </p>
                )}
              </label>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Resume (PDF, Word, or Document):
                <input
                  type='file'
                  name='resume'
                  onChange={handleChange}
                  className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                />
                {errors.resume && (
                  <p className='text-red-500 text-sm mt-1'>{errors.resume}</p>
                )}
              </label>
            </div>
            {successMessage && (
              <p className='text-green-500 text-sm mt-1'>{successMessage}</p>
            )}
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={closeModal}
                className='mr-2 bg-blue-500 text-white px-4 py-2 rounded-md'
              >
                Close
              </button>
              <button
                type='submit'
                className='bg-green-500 text-white px-4 py-2 rounded-md'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareersFormModal;
