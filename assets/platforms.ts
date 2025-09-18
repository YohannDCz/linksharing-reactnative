/**
 * Plateformes disponibles pour le partage de liens
 * Données basées sur l'image de référence avec couleurs et logos correspondants
 */

export interface Platform {
  id: string;
  name: string;
  color: string;
  iconPath: string;
}

export const platforms: Platform[] = [
  {
    id: 'github',
    name: 'GitHub',
    color: '#1A1A1A',
    iconPath: '@/assets/images/icon-github.svg',
  },
  {
    id: 'devto',
    name: 'Dev.to',
    color: '#333333',
    iconPath: '@/assets/images/icon-devto.svg',
  },
  {
    id: 'frontend-mentor',
    name: 'Frontend Mentor',
    color: '#FFFFFF',
    iconPath: '@/assets/images/icon-frontend-mentor.svg',
  },
  {
    id: 'codewars',
    name: 'Codewars',
    color: '#8A1538',
    iconPath: '@/assets/images/icon-codewars.svg',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    color: '#43B7E9',
    iconPath: '@/assets/images/icon-twitter.svg',
  },
  {
    id: 'freecodecamp',
    name: 'freeCodeCamp',
    color: '#302267',
    iconPath: '@/assets/images/icon-freecodecamp.svg',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    color: '#2D68FF',
    iconPath: '@/assets/images/icon-linkedin.svg',
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    color: '#EB4925',
    iconPath: '@/assets/images/icon-gitlab.svg',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    color: '#EE3939',
    iconPath: '@/assets/images/icon-youtube.svg',
  },
  {
    id: 'hashnode',
    name: 'Hashnode',
    color: '#0330D1',
    iconPath: '@/assets/images/icon-hashnode.svg',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    color: '#2442AC',
    iconPath: '@/assets/images/icon-facebook.svg',
  },
  {
    id: 'stack-overflow',
    name: 'Stack Overflow',
    color: '#EC7100',
    iconPath: '@/assets/images/icon-stack-overflow.svg',
  },
  {
    id: 'twitch',
    name: 'Twitch',
    color: '#EE3FC8',
    iconPath: '@/assets/images/icon-twitch.svg',
  },
];

/**
 * Fonction utilitaire pour récupérer une plateforme par son ID
 */
export const getPlatformById = (id: string): Platform | undefined => {
  return platforms.find(platform => platform.id === id);
};

/**
 * Fonction utilitaire pour récupérer toutes les plateformes triées par nom
 */
export const getPlatformsSorted = (): Platform[] => {
  return [...platforms].sort((a, b) => a.name.localeCompare(b.name));
};
