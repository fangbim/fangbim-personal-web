import { faGithub, faLinkedin, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function SocialMedia() {

  return (
    <div className='mt-10 md:mt-20 w-full items-center justify-center flex'>
        <div className='flex flex-col md:flex-row gap-y-10 md:gap-44'>
            <a href='https://github.com/fangbim'>
                <FontAwesomeIcon icon={faGithub} size='6x'/>
            </a>
            <a href='https://www.linkedin.com/in/fajar-anggito-abimanyu/'>
                <FontAwesomeIcon icon={faLinkedin} size='6x'/>
            </a>
            <a href='https://www.youtube.com/channel/UC83H-XxAVJ9QxyE945o2bzg'>
                <FontAwesomeIcon icon={faYoutube} size='6x'/>
            </a>
            <a href='https://www.twitch.tv/hypebim'>
                <FontAwesomeIcon icon={faTwitch} size='6x'/>
            </a>
        </div>
    </div>
  );
};
