import React from 'react';
import { SiInstagram, SiFacebook, SiX, SiGithub, SiGmail } from '@icons-pack/react-simple-icons';

function SocialMediaButtons() {
    return (
        <div className="flex space-x-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="bg-[#CFB991] text-[#6F5735] px-4 py-4 rounded-full transition hover:bg-[#B89E7D] hover:text-black">
                <SiInstagram size={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="bg-[#CFB991] text-[#6F5735] px-4 py-4 rounded-full transition hover:bg-[#B89E7D] hover:text-black">
                <SiFacebook size={32} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"
               className="bg-[#CFB991] text-[#6F5735] px-4 py-4 rounded-full transition hover:bg-[#B89E7D] hover:text-black">
                <SiX size={32} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="bg-[#CFB991] text-[#6F5735] px-4 py-4 rounded-full transition hover:bg-[#B89E7D] hover:text-black">
                <SiGithub size={32} />
            </a>
            <a href="mailto:email@gmail.com" target="_blank" rel="noopener noreferrer"
               className="bg-[#CFB991] text-[#6F5735] px-4 py-4 rounded-full transition hover:bg-[#B89E7D] hover:text-black">
                <SiGmail size={32} />
            </a>
        </div>
    );
}

export default SocialMediaButtons;
