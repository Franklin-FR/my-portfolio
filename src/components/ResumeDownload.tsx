import  { useState } from 'react';
import downloadIcon from '../assets/download.svg'; 


const resumes = [
  {
    label: 'Frontend Resume',
    file: '/Omoregie Franklyn Edamwen_FRONTEND.pdf',
  },
  {
    label: 'Backend Resume',
    file: '/Omoregie Franklyn Edamwen_BACKEND.pdf',
  },
  {
    label: 'Fullstack Resume',
    file: '/Omoregie Franklyn Edamwen_FULLSTACK.pdf',
  },
];

const ResumeDownload = () => {
  const [selectedResume, setSelectedResume] = useState(resumes[0].file);

  return (
    <div className="bg-white w-fit px-4 py-3 rounded-lg mt-5 border border-gray-200">
      <label className="text-sm font-semibold text-gray-800 mb-1 block">
        Select Resume:
      </label>
      <div className="flex items-center gap-3">
        <select
          onChange={(e) => setSelectedResume(e.target.value)}
          className="text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          {resumes.map((resume, index) => (
            <option key={index} value={resume.file}>
              {resume.label}
            </option>
          ))}
        </select>

        <a href={selectedResume} download>
          <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-900">
            <p className="text-white text-sm font-medium">Download</p>
            <img src={downloadIcon} alt="Download" className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
