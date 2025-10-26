import Image from "next/image";
import Link from "next/link";
import { FaCode, FaPlay } from "react-icons/fa";
import placeholder from "/public/png/placeholder.png";

const SingleProject = ({ project }) => {
  const {
    name,
    description,
    code,
    demo,
    image,
    tools,
    challenges_faced,
    future_plans,
  } = project;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-[#16f2b3] hover:text-pink-500 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </a>
        </div>

        {/* Main Project Card */}
        <div className="w-full h-fit flex flex-col items-center justify-center overflow-hidden px-3 md:px-8 py-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443] relative">
          {/* Project image container Background */}
          <div className="absolute left-0 top-0 flex justify-center opacity-40">
            <svg
              width="1170"
              height="403"
              viewBox="0 0 1170 403"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1170 57.3509H0V56.5132H1170V57.3509Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1014.35 402.472L1014.35 0.933594L1015.19 0.933594L1015.19 402.472L1014.35 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M928.071 402.472L928.071 0.933594L928.909 0.933594L928.909 402.472L928.071 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1100.63 402.472L1100.63 0.933594L1101.47 0.933594L1101.47 402.472L1100.63 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1170 143.631H0V142.793H1170V143.631Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1170 229.911H0V229.074H1170V229.911Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M237.827 402.472L237.827 0.933594L238.665 0.933594L238.665 402.472L237.827 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M669.23 402.472L669.23 0.933594L670.067 0.933594L670.067 402.472L669.23 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1170 316.192H0V315.354H1170V316.192Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M151.547 402.472L151.547 0.933594L152.385 0.933594L152.385 402.472L151.547 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M582.949 402.472L582.949 0.933594L583.787 0.933594L583.787 402.472L582.949 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1170 402.472H0V401.635H1170V402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.2666 402.472L65.2666 0.933594L66.1042 0.933594L66.1042 402.472L65.2666 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M496.669 402.472L496.669 0.933594L497.507 0.933594L497.507 402.472L496.669 402.472Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
              <rect
                x="152.382"
                y="57.3506"
                width="85.4536"
                height="85.4429"
                fill="white"
                fillOpacity="0.15"
              ></rect>
              <rect
                x="238.665"
                y="143.631"
                width="85.575"
                height="84.9928"
                fill="white"
                fillOpacity="0.1"
              ></rect>
              <rect
                x="842.615"
                y="57.3506"
                width="85.4597"
                height="85.4453"
                fill="white"
                fillOpacity="0.15"
              ></rect>
            </svg>
          </div>

          <div className="flex flex-col items-center w-50 h-50 relative z-10">
            {/* Project Image */}
            <div className="w-full max-w-4xl mb-6">
              <Image
                src={image || placeholder}
                alt={name || "Project"}
                width={1080}
                height={720}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Project description */}
        <div className="mt-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
          <h2 className="text-[#EFF3F4] not-italic font-semibold text-2xl md:text-[2rem] leading-[110%] text-center capitalize mb-6">
            {name}
          </h2>
          <p className="text-[#EFF3F4] text-sm md:text-base leading-relaxed p-6 bg-[#0f0b24] rounded-lg border border-[#1a1443]">
            {description}
          </p>
        </div>

        {/* LIVE + Code section container */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Challenges */}
          <div className="mt-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
            <h2 className="text-[#EFF3F4] not-italic font-semibold text-2xl md:text-[2rem] leading-[110%] text-center capitalize mb-6">
              Challenges Faced
            </h2>
            <p className="text-[#EFF3F4] text-sm md:text-base leading-relaxed p-6 bg-[#0f0b24] rounded-lg border border-[#1a1443]">
              {challenges_faced}
            </p>
          </div>
          {/* Future Plans */}
          <div className="mt-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
            <h2 className="text-[#EFF3F4] not-italic font-semibold text-2xl md:text-[2rem] leading-[110%] text-center capitalize mb-6">
              Future Plans
            </h2>
            <p className="text-[#EFF3F4] text-sm md:text-base leading-relaxed p-6 bg-[#0f0b24] rounded-lg border border-[#1a1443]">
              {future_plans}
            </p>
          </div>
        </div>
        {/* LIVE + Code section container */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Live Demo Section */}
          <div className="bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
            <h3 className="text-[#16f2b3] text-xl font-semibold mb-4">
              🚀 Live Demo
            </h3>
            <p className="text-[#EFF3F4] mb-4">
              Experience the live application in action
            </p>
            <Link
              href={demo}
              target="_blank"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#16f2b3] text-[#16f2b3] transition-all duration-300 hover:bg-[#16f2b3] hover:text-[#0f0b24] hover:scale-105 cursor-pointer no-underline"
            >
              <FaPlay />
              <span className="font-semibold">Live Demo</span>
            </Link>
          </div>

          {/* Source Code Section */}
          <div className="bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
            <h3 className="text-[#16f2b3] text-xl font-semibold mb-4">
              💻 Source Code
            </h3>
            <p className="text-[#EFF3F4] mb-4">Explore the code on GitHub</p>
            <Link
              href={code}
              target="_blank"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 border-violet-600 text-violet-600 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:scale-105 cursor-pointer no-underline"
            >
              <FaCode />
              <span className="font-semibold">Source Code</span>
            </Link>
          </div>
        </div>

        {/* Technologies Used container */}
        {tools && tools.length > 0 && (
          <div className="mt-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] p-6 rounded-lg border border-[#1a1443]">
            <h3 className="text-[#16f2b3] text-xl font-semibold mb-4">
              🛠️ Technologies & Tools Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#0f0b24] text-[#EFF3F4] rounded-full border border-[#1a1443] text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
