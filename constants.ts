import { Playlist } from './types';

// The countdown will automatically target the next upcoming Nov 21st at 2 PM.
export const EVENT_DATE_TARGET = { month: 10, day: 21, hour: 14 }; // Month is 0-indexed (10 = November), hour is 24-hr format (14 = 2pm)

export const TICKETS_URL = 'https://www.eventbrite.com/e/valley-fight-series-18-tickets-1118601811129?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-source=cp&utm-term=listing';
export const PPV_URL = 'https://starfund.stream/organizations/vfs';
export const SHOPIFY_MERCH_URL = 'https://www.shopify.com'; // Placeholder
export const INSTAGRAM_URL = 'https://www.instagram.com/vfsmma/';
export const YOUTUBE_URL = 'https://www.youtube.com/@ValleyFightSeriesMMA';


export const VENUE_MAPS_URL = 'https://maps.app.goo.gl/B7b4X34ZhuS1egTX7';
export const VENUE_IFRAME_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8725868755087!2d-119.64932152415307!3d36.985622772194844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094475b8a325d8b%3A0x7f48d7432d12ddfb!2s777%20Jackpot%20Ln%2C%20Friant%2C%20CA%2093626!5e1!3m2!1sen!2sus!4v1761721556479!5m2!1sen!2sus';

export const HERO_CAROUSEL_IMAGES = [
  'https://scontent-sea1-1.cdninstagram.com/v/t51.82787-15/568755637_18531461407039806_4623437137023200031_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc0OTg2MDc0Mjk2NDE4MjE5OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5mUBdMgfX-sQ7kNvwFbkt0j&_nc_oc=AdnRbckdQ3kTIhKEWlMJsgBDBEylZQbyzmXnfBGjdRKLzO9akdDwZ3OrlHlV5xx3Hk8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_gid=4Y1RI13IuCpLCRBLLCLN5w&oh=00_Afc10v-wyG97fcp-qDh7uGNQHCGrmBODzijz_OFAYuRzKg&oe=69061BA2',
  'https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/573927039_18532084396039806_6101295634535002027_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc1MjE2MjYzOTEwODg3MDEyNw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=GJLCxnQ1ogEQ7kNvwFYALIX&_nc_oc=AdlhMM_Fx5Mw8sgWThC-h_Ou-WPgt3MA_8_klJKsBT3VsCqxJ3YIMgzXxzm2Hrcrn5g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=4Y1RI13IuCpLCRBLLCLN5w&oh=00_AfdodBJ_HsUchP80RhNUomUC5Lzyqrh_3o3XxNohkMy-zA&oe=6906230B',
  'https://scontent-sea1-1.cdninstagram.com/v/t51.82787-15/568580875_18531022453039806_4245843058258021358_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc0ODU2NTk1MTUxMzI2OTM4Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=AJcnkqQ0sYMQ7kNvwFVLO8w&_nc_oc=Adle9HXKVjvMykb9WzQhvYFT0zK021Q0mNtqST9wCUgxkIKz-mAAy8aom4vhjBi82K0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_gid=4Y1RI13IuCpLCRBLLCLN5w&oh=00_AffJ044NGmGrYwiiBB9EilFLCWwcu3afEn_emoVgrm1Qng&oe=690626FF',
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