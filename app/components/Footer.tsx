import React from 'react';

interface FooterProps {
    // Define any props needed for the Footer component
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center bg-[#121212] bg-opacity-90">
                <div className="flex flex-col items-center justify-center w-full max-w-4xl py-8">
                    <div className="flex flex-row space-x-4 content-center">
                        <a
                            href="https://www.linkedin.com/in/camila-spitale/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-11 w-11 hover:text-orange-500" // Adjust the size here
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <title>LinkedIn</title>
                                <path
                                    fillRule="evenodd"
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/camilaspt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 hover:text-orange-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <title>GitHub</title>
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42
                                    2.865 8.166 6.839 9.49.5.092.682-.217.682-.482
                                    0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.338-3.369-1.338
                                    -.455-1.16-1.11-1.468-1.11-1.468-.908-.62.07-.608.07-.608
                                    1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.34 1.088
                                    2.91.832.09-.645.35-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943
                                    0-1.09.39-1.98 1.03-2.68-.103-.253-.448-1.27.098-2.647
                                    0 0 .84-.27 2.75 1.03A9.58 9.58 0 0110 5.77c.84 0
                                    1.68.113 2.48.337 1.91-1.3 2.75-1.03 2.75-1.03.55 1.377.2
                                    2.394.1 2.647.64.7 1.03 1.59 1.03 2.68 0 3.845-2.34
                                    4.687-4.57 4.937.36.31.68.918.68 1.847
                                    0 1.33-.013 2.407-.013 2.737 0 .267.18.58.688.48C17.14
                                    18.165 20 14.42 20 10c0-5.523-4.477-10-10-10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
