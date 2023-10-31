import DEFAULT_CURSOR_URL from '@/assets/svg/cursor_default.svg';
import FUCK_YOU_CURSOR_URL from '@/assets/svg/cursor_fuck_you.svg';
import THUMBS_UP_CURSOR_URL from '@/assets/svg/cursor_thumbs_up.svg';

const PAYMENT_KEY = {
  CLIENT: process.env.NEXT_PUBLIC_PAYMENT_CLIENT_KEY,
};

const OAUTH_TYPE = {
  GOOGLE: 'google',
  KAKAO: 'kakao',
};

const IMAGE_KEY = {
  LIST: 'images',
  SINGLE: 'image',
};

const CURSOR_STATUS = {
  DEFAULT: DEFAULT_CURSOR_URL,
  FUCK_YOU: FUCK_YOU_CURSOR_URL,
  THUMBS_UP: THUMBS_UP_CURSOR_URL,
};

const QUERY_KEY = {
  OAUTH_KEY: 'code',
  PRODUCT_ID: 'productId',
  MYSTERY_ID: 'mysteryId',
  ITEM_ID: 'itemId',
  ITEM_NAME: 'name',
  COMMUNITY_ID: 'communityId',
};

const STORAGE_KEY = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  OAUTH_TYPE: 'oAuthType',
};

const PATH = {
  SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
  OAUTH_REDIRECT_URL: process.env.NEXT_PUBLIC_CLIENT_URL + '/auth/phoneNumber',
  MAIN: '/',
  AUTH: '/auth',
  AUTH_PHONE: '/auth/phoneNumber',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  ABOUT: '/about',
  VIDEO_LIST: '/videos',
  VIDEO_DETAIL: '/videos/television',
  SHOP: '/shop',
  PRODUCT_ART: '/shop/productArt',
  PRODUCT_DETAIL: '/shop/productDetail',
  MYSTERY_DETAIL: '/shop/mysteryDetail',
  ITEM_DETAIL: '/item',
  RECOMMEND: '/recommend',
  ORDER: '/order',
  ORDER_DETAIL: '/order/detail',
  MAGAZINE: '/magazine',
  MAGAZINE_DETAIL: '/magazine/detail',
  COMMUNITY: '/community',
  COMMUNITY_DETAIL: '/community/detail',
  CART: '/cart',
};

export { PATH, STORAGE_KEY, QUERY_KEY, CURSOR_STATUS, OAUTH_TYPE, IMAGE_KEY, PAYMENT_KEY };
