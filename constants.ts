import { Playlist, RingGirl } from './types';

// The countdown will automatically target the next upcoming Nov 21st at 2 PM.
export const EVENT_DATE_TARGET = { month: 10, day: 21, hour: 14 }; // Month is 0-indexed (10 = November), hour is 24-hr format (14 = 2pm)
export const IS_SHOPIFY_LIVE = false;

export const TICKETS_URL = 'https://www.eventbrite.com/e/valley-fight-series-18-tickets-1118601811129?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-source=cp&utm-term=listing';
export const PPV_URL = 'https://starfund.stream/organizations/vfs';
export const SHOPIFY_MERCH_URL = 'https://valleyfightseries.myshopify.com/?_ab=0&pb=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVIyWVd4c1pYbG1hV2RvZEhObGNtbGxjeTV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNS0xMC0zMVQwMTozMTozMS4yNTBaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--26b1ea4e81a1d07b4608edea68195ace58d3343c&_fd=0&_sc=1&key=65bce868cc816abeaaff9c5fd573e17e1c789535a4f35f330042f827951cb51e&preview_theme_id=147609813044'; // Placeholder
export const SHOPIFY_MERCH_URL_PREVIEW = 'https://valleyfightseries.myshopify.com/password?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVIyWVd4c1pYbG1hV2RvZEhObGNtbGxjeTV0ZVhOb2IzQnBabmt1WTI5dEJqb0dSVlE9IiwiZXhwIjoiMjAyNS0xMC0zMVQwNDoxMjozMC42NjRaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--2115a9621b4c97b0e901ff1678b551c8c0db5225&_fd=0&_sc=1&key=ba12fa01fcae49390a8c648f5f2525e7cb3b656e01d49d6e7a6c2aab062858b6&preview_theme_id=147609813044';
export const INSTAGRAM_URL = 'https://www.instagram.com/vfsmma/';
export const YOUTUBE_URL = 'https://www.youtube.com/@ValleyFightSeriesMMA';


export const VENUE_MAPS_URL = 'https://maps.app.goo.gl/B7b4X34ZhuS1egTX7';
export const VENUE_IFRAME_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8725868755087!2d-119.64932152415307!3d36.985622772194844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094475b8a325d8b%3A0x7f48d7432d12ddfb!2s777%20Jackpot%20Ln%2C%20Friant%2C%20CA%2093626!5e1!3m2!1sen!2sus!4v1761721556479!5m2!1sen!2sus';

export const HERO_CAROUSEL_IMAGES = [
  '/home1.jpeg',
  '/home2.jpeg',
  '/home3.jpeg',
];

export const RING_GIRLS_HERO_IMAGE = '/ringgirls.jpg';

export const RING_GIRLS_DATA: RingGirl[] = [
  {
    name: 'Domonique Marie',
    bio: 'Dom is a Muay Thai fighter and MMA fan who trains in Muay Thai and Wrestling at Tusk MMA under Coach Blake Marshall. As an avid gym and fitness enthusiast, you can often catch Dom pumping iron in the weight room. By day, Dom is a full time Medicine Technician and huge animal lover who enjoys traveling to the coast and visiting wineries, sipping California’s finest.',
    image: '/girl1.jpg',
    socialLink: 'https://www.instagram.com/domoniquemariie/?hl=en',
  },
  {
    name: 'Yuliza Velazquez',
    bio: 'Yuli is a fitness enthusiast who is also a big combat sports fan; she truly enjoys having the best seat in the house!',
    image: '/girl2.jpg',
    socialLink: 'https://www.instagram.com/_yulizavelazquez/?hl=en',
  },
  {
    name: 'Susan Cordova',
    bio: 'Susan is a fitness enthusiast and used to train in Combat Sports!',
    image: '/girl3.jpg',
    socialLink: 'https://www.instagram.com/susancordovafit/?hl=en',
  },
  {
    name: 'Jackie',
    bio: 'Jackie has been involved in MMA for over 10 years, training at Valley Fight Club as an aspiring Muay Thai fighter!',
    image: '/girl4.jpg',
    socialLink: 'https://www.instagram.com/jlh_08_/?hl=en',
  },
];


export const YOUTUBE_PLAYLISTS: Playlist[] = [
  {
    id: '',
    name: 'VFS 22',
    embedSrc: '',
  },
  {
    id: 'PPV',
    name: 'VFS 21',
    embedSrc: 'https://starfund.stream/organizations/vfs/ppvs/valley-fight-series-21',
  },
  {
    id: 'PPV',
    name: 'VFS 20',
    embedSrc: 'https://starfund.stream/organizations/vfs/ppvs/valley-fight-series-20',
  },
  {
    id: '',
    name: 'VFS 19',
    embedSrc: '',
  },
  {
    id: 'PLVtgij5T5RAjM4ghRiNFtfMoxIKJtIgQe',
    name: 'VFS 18',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAjM4ghRiNFtfMoxIKJtIgQe',
  },
  {
    id: 'PLVtgij5T5RAj-7q7Eb2x5k84K-8dYwtx1',
    name: 'VFS 17',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAj-7q7Eb2x5k84K-8dYwtx1',
  },
  {
    id: 'PLVtgij5T5RAgAh7tuaP2tuy47C6sT_MlC',
    name: 'VFS 16',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAgAh7tuaP2tuy47C6sT_MlC',
  },
  {
    id: 'PLVtgij5T5RAjmumngwDv2q2dQNghxEukL',
    name: 'VFS 15',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAjmumngwDv2q2dQNghxEukL',
  },
  {
    id: 'PPV',
    name: 'VFS 14',
    embedSrc: 'https://starfund.stream/organizations/vfs/ppvs/valley-fight-series-14-1',
  },
  {
    id: 'PLVtgij5T5RAgDYwXSvsNQcYAJ4MHyuLeg',
    name: 'VFS 13',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAgDYwXSvsNQcYAJ4MHyuLeg',
  },
  {
    id: 'PLVtgij5T5RAinG_A7HslDP8MldNhOKL5w',
    name: 'VFS 12',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAinG_A7HslDP8MldNhOKL5w',
  },
  {
    id: '',
    name: 'VFS 11',
    embedSrc: '',
  },
  {
    id: 'PLVtgij5T5RAj9ZmvLY-91Lol3prr5wSNJ',
    name: 'VFS 10',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAj9ZmvLY-91Lol3prr5wSNJ',
  },
  {
    id: 'PLVtgij5T5RAgpgZNnzs-joMh8CMxO3EhU',
    name: 'VFS 9',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAgpgZNnzs-joMh8CMxO3EhU',
  },
  {
    id: 'PLVtgij5T5RAiizLfR8zMuK-YV3JjZofpe',
    name: 'VFS 8',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAiizLfR8zMuK-YV3JjZofpe',
  },
  {
    id: 'PLVtgij5T5RAhKAdLwtb4lq4vr3yHPo7tV',
    name: 'VFS 7',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAhKAdLwtb4lq4vr3yHPo7tV',
  },
  {
    id: 'PLVtgij5T5RAiitV5PuFCh7S293AN_VN1e',
    name: 'VFS 6',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAiitV5PuFCh7S293AN_VN1e',
  },
  {
    id: '',
    name: 'VFS 5',
    embedSrc: '',
  },
  {
    id: 'PLVtgij5T5RAhziNVx_Ye1XnTGh8Ai03UI',
    name: 'VFS 4',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAhziNVx_Ye1XnTGh8Ai03UI',
  },
  {
    id: 'PLVtgij5T5RAg7nAZhVTzFXAghXrJyJ2-E',
    name: 'VFS 3',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=PLVtgij5T5RAg7nAZhVTzFXAghXrJyJ2-E',
  },
  {
    id: '',
    name: 'VFS 2',
    embedSrc: '',
  },
  {
    id: '',
    name: 'VFS 1',
    embedSrc: '',
  },
];