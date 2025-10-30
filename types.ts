
export interface Playlist {
  id: string;
  name: string;
  embedSrc: string;
}

export interface RingGirl {
  name: string;
  bio: string;
  image: string;
  socialLink: string;
}

export type Page = 'home' | 'previous-events' | 'fight-for-us' | 'contact-us' | 'media-press' | 'ring-girls' | 'venue';