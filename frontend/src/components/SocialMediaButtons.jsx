import React from 'react';
import { SiInstagram, SiFacebook, SiX, SiGithub, SiGmail } from '@icons-pack/react-simple-icons';

function SocialMediaButtons() {
    return (
        <div className="flex space-x-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white px-3 py-3 rounded-full hover:bg-blue-600">
                <SiInstagram size={36} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white px-3 py-3 rounded-full hover:bg-blue-600">
                <SiFacebook size={36} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white px-3 py-3 rounded-full hover:bg-blue-600">
                <SiX size={36} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white px-3 py-3 rounded-full hover:bg-blue-600">
                <SiGithub size={36} />
            </a>
            <a href="mailto:email@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white px-3 py-3 rounded-full hover:bg-blue-600">
                <SiGmail size={36} />
            </a>
        </div>
    );
}


export default SocialMediaButtons