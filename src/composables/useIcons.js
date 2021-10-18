import {
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons'


import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'


const upwork = {
  icon: [
    68,
    45,
    [],
    '',
    'M49.487 15.034c-6.86.033-12.074 4.57-14.026 11.8-3.275-5.04-5.83-10.805-7.295-15.672l-7.22.034.1 19.138a6.861 6.861 0 0 1-13.722.065l-.1-19.138L0 11.296.1 30.435C.128 38.377 6.474 44.67 14.24 44.63s14.055-6.386 14.02-14.33l-.015-3.25c1.456 2.88 3.276 5.94 5.276 8.64l-4.415 21.144 7.4-.034 3.18-15.362c2.896 1.793 6.15 2.86 9.94 2.842C57.57 44.245 64.04 37.717 64 29.41c-.036-7.946-6.568-14.413-14.512-14.377zm.103 21.846c-2.888.013-5.782-1.236-8.138-3.213l.708-2.9v-.182c.528-3.074 2.126-8.316 7.542-8.34a7.244 7.244 0 0 1 7.257 7.188c-.163 4.153-3.577 7.42-7.37 7.437z'
  ]
}

export default function useIcons() {
  return {
    mail: faEnvelope,
    telegramm: faPaperPlane,
    location: faMapMarkerAlt,
    linkedin: faLinkedin,
    github: faGithub,
    upwork,
  };
};
