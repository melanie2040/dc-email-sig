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
            setImage(dcp);
        } else if (selectedDomain === 'dC Robotics') {
            setCompany('dConstruct Robotics | AI & Robotics Products');
            setImage(dcr);
        } else if (selectedDomain === 'dC Engineering') {
            setCompany('dConstruct Engineering | AI & Robotics Projects');
            setImage(dce);
        } else if (selectedDomain === 'dC Technologies') {
            setCompany('dConstruct Technologies | AI & Robotics');
            setImage(dct);
        } else {
            setCompany('Please select a domain');
            setImage(null);
        }
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
                        onChange={(e) => setLastName(e.target.value)}
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
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </label>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                <p style={{ margin: '10px 0', fontWeight: 'bold', fontSize: '8.5pt', fontFamily: 'Arial, sans-serif' }}>{firstName} {lastName} {secondName}</p>
                <p style={{ margin: '10px 0', fontSize: '8.5pt', fontFamily: 'Arial, sans-serif' }}>{role}</p>
                <p style={{ margin: '10px 0', fontSize: '8.5pt', fontFamily: 'Arial, sans-serif' }}>{company}</p>
                <Divider />

                <table style={{ width: '50%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <img src={phone} alt="Phone" style={{ width: '16px', height: '16px' }} />
                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>
                                <p style={{ textAlign: 'left', margin: '10px 0', fontFamily: 'Arial, sans-serif', fontSize: '8.5pt' }}>
                                    Tel +65 6100 5382 | Mobile +65 {number}
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: '0', textAlign: 'left' }} >
                                <img src={weblink} alt="Weblink" style={{ width: '16px', height: '16px' }} />
                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>
                                <a
                                    href="https://www.dconstruct.co" // Add the URL here
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
                                <img src={address} alt="Address" style={{ width: '16px', height: '16px' }} />

                            </td>
                            <td style={{ padding: '0', textAlign: 'left', margin: '0' }}>

                                <p style={{ textAlign: 'left', margin: '10px 0', fontFamily: 'Arial, sans-serif', fontSize: '8.5pt' }}>10 Central Exchange Green, #03-01, 02 Singapore 138649</p>

                            </td>
                        </tr>
                    </tbody>
                </table>


                <Divider />

                <table style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={image} alt="Selected" style={{ width: 'auto', height: 'auto' }} />
                            </td>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={facebook_24} alt="Facebook" style={{ width: '24px', height: '24px' }} />
                            </td>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={instagram_24} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                            </td>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={linkedin_24} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                            </td>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={twitter_24} alt="Twitter" style={{ width: '24px', height: '24px' }} />
                            </td>
                            <td style={{ padding: '0 5px', textAlign: 'left' }} >
                                <img src={youtube_24} alt="YouTube" style={{ width: '24px', height: '24px' }} />
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    );

}

export default EmailInput;