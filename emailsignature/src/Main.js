import React, { useState } from "react";
import dce from './Assets/dce.png';
import dcp from './Assets/dcp.png';
import dcr from './Assets/dcr.png';
import dct from './Assets/dct.png';
import facebook_24 from './Assets/facebook_24.png';
import instagram_24 from './Assets/instagram_24.png';
import linkedin_24 from './Assets/linkedin_24.png';
import twitter_24 from './Assets/twitter_24.png';
import youtube_24 from './Assets/youtube_24.png';
import address from './Assets/address.png';
import phone from './Assets/phone.png';
import weblink from './Assets/weblink.png';
import line from './Assets/lineneed.png';

const Divider = () => (
    <div style={{
        borderBottom: '1px solid #FF3300', // Change color and style as needed
        margin: '10px 0', // Space around the divider
        width: '30%'
    }} />
);


const EmailInput = () => {
    const [firstName, setFirstName] = useState('Hazel');
    const [lastName, setLastName] = useState('KWON');
    const [secondName, setSecondName] = useState('Hyesung');
    const [role, setRole] = useState('Design Lead');
    const [domain, setDomain] = useState(null);
    const [number, setNumber] = useState('8999 8999');

    const [company, setCompany] = useState('Please select a domain');
    const [image, setImage] = useState('');


    const handleChange = (e) => {
        const selectedDomain = e.target.value;
        setDomain(e.target.value);
        if (selectedDomain === 'dC Plus') {
            setCompany('dConstruct Plus | AI & Robotics Programs');
            setImage("https://static.wixstatic.com/media/160bab_c5a3aa5b6c234ff592203358c7594d9f~mv2.png");
        } else if (selectedDomain === 'dC Robotics') {
            setCompany('dConstruct Robotics | AI & Robotics Products');
            setImage("https://static.wixstatic.com/media/160bab_4694fa35b96b4a5a93e5d472656f3bdf~mv2.png");
        } else if (selectedDomain === 'dC Engineering') {
            setCompany('dConstruct Engineering | AI & Robotics Projects');
            setImage("https://static.wixstatic.com/media/160bab_fc8ce24ab0d249589d9760fb105dd4b8~mv2.png");
        } else if (selectedDomain === 'dC Technologies') {
            setCompany('dConstruct Technologies | AI & Robotics');
            setImage("https://static.wixstatic.com/media/160bab_aeae549f24234e52967bb6136a7bb390~mv2.png");
        } else {
            setCompany('Please select a domain');
            setImage(null);
        }
    };

    const handleNumberChange = (e) => {
        var value = e.target.value;
        if (/^\d{8}$/.test(value)) {
            // Separate the number into two groups of four
            var formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');

            // Display the formatted number
            value = formatted;
        } else {
            value = value;
        }
        setNumber(value);
    };

    return (
        <div>
            <div>
                <label>
                    First name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Last name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value.toUpperCase())}
                    />
                </label>
            </div>
            <div>
                <label>
                    Second given name (if any):
                    <input
                        type="text"
                        value={secondName}
                        onChange={(e) => setSecondName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Choose your domain:
                    <select value={domain} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="dC Plus">dC Plus</option>
                        <option value="dC Robotics">dC Robotics</option>
                        <option value="dC Engineering">dC Engineering</option>
                        <option value="dC Technologies">dC Technologies</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Role:
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Number:
                    <input
                        type="number"
                        value={number}
                        onChange={handleNumberChange}
                    />
                </label>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '20px' }}>

                <table style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <div style={{ fontWeight: 'bold', fontSize: '8.5pt', fontFamily: 'Arial, sans-serif', marginTop: '10px' }}>{firstName} {lastName} {secondName}</div>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <div style={{ fontSize: '8.5pt', fontFamily: 'Arial, sans-serif', marginTop: '15px' }}>{role}</div>
                            </td>
                        </tr>

                        <tr >
                            <td style={{ padding: '0', textAlign: 'left' }}>
                                <div style={{ fontSize: '8.5pt', fontFamily: 'Arial, sans-serif', marginTop: '15px' }}>{company}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{ width: '50%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td colSpan="2" style={{ padding: '0', textAlign: 'left' }}> {/* Merge columns */}
                                <img src="https://static.wixstatic.com/media/160bab_d68881ea903f4dad9190cc46677eaab9~mv2.png" alt="Line" style={{ width: '400px', height: '1px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <img src="https://static.wixstatic.com/media/160bab_775e777b22a342a5bad620ef65e818f1~mv2.png" alt="Phone" style={{ width: '16px', height: '16px' }} />
                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>
                                <p style={{ textAlign: 'left', margin: '10px 0', fontFamily: 'Arial, sans-serif', fontSize: '8.5pt' }}>
                                    Tel +65 6100 5382 | Mobile +65 {number}
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <img src="https://static.wixstatic.com/media/160bab_55e6b94102b645e3bb029039da920312~mv2.png" alt="Weblink" style={{ width: '16px', height: '16px' }} />
                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>
                                <a
                                    href="https://www.dconstruct.co/" // Add the URL here
                                    style={{
                                        textAlign: 'left',
                                        margin: '10px 0',
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '8.5pt',
                                        color: 'black', // Optional: specify link color
                                    }}
                                    target="_blank" // Optional: open link in a new tab
                                    rel="noopener noreferrer" // Optional: security for opening new tabs
                                >
                                    www.dconstruct.co
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }}>
                                <img src="https://static.wixstatic.com/media/160bab_f9dc111269ff4e8192607dd15e59da85~mv2.png" alt="Address" style={{ width: '16px', height: '16px' }} />

                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>

                                <p style={{ textAlign: 'left', margin: '10px 0', fontFamily: 'Arial, sans-serif', fontSize: '8.5pt' }}>10 Central Exchange Green, #03-01, 02 Singapore 138649</p>

                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ padding: '0', textAlign: 'left' }}> {/* Merge columns */}
                                <img src="https://static.wixstatic.com/media/160bab_d68881ea903f4dad9190cc46677eaab9~mv2.png" alt="Line" style={{ width: '400px', height: '1px' }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ marginTop: '10px', borderCollapse: 'collapse' }}>
                    <tbody>

                        <tr>
                            <td style={{ padding: '0 30px 0 0', textAlign: 'left' }} >
                                <a href="https://www.dconstruct.co/" target="_blank" rel="noopener noreferrer">
                                    <img src={image} alt="Selected" style={{ width: 'auto', height: 'auto' }} />
                                </a>
                            </td>
                            <td style={{ padding: '0 10px', textAlign: 'left' }} >
                                <a href="https://www.facebook.com/p/dConstruct-100067460462997/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.wixstatic.com/media/160bab_e5544d0cba3c4a69879f4a54124fd082~mv2.png" alt="Facebook" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </td>
                            <td style={{ padding: '0 10px', textAlign: 'left' }} >
                                <a href="https://www.instagram.com/dconstructt/?igsh=M3o4NHRyd2FuaG42&amp;utm_source=qr" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.wixstatic.com/media/160bab_b9f9c46e582b4ddfb9ec45fb5e116f8b~mv2.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </td>
                            <td style={{ padding: '0 10px', textAlign: 'left' }} >
                                <a href="https://www.linkedin.com/company/dconstruct/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.wixstatic.com/media/160bab_2facaa86d1974fcf9c304ad88ae62177~mv2.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </td>
                            <td style={{ padding: '0 10px', textAlign: 'left' }} >
                                <a href="https://twitter.com/dConstructTech" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.wixstatic.com/media/160bab_6cd3acd5020144148dd1a78804e6ff2d~mv2.png" alt="Twitter" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </td>
                            <td style={{ padding: '0 10px', textAlign: 'left' }} >
                                <a href="https://www.youtube.com/@dConstructTech" target="_blank" rel="noopener noreferrer">
                                    <img src="https://static.wixstatic.com/media/160bab_5563c0d722f3419cb4df2c75c4e8addf~mv2.png" alt="YouTube" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    );

}

export default EmailInput;