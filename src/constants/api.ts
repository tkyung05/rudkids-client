const API = {
  BEARER: 'Bearer',
  AUTHORIZATION_KEY: 'Authorization',
  CONTENT_TYPE: {
    KEY: 'Content-Type',
    DEFUALT: `application/json`,
    FORM_DATA: `multipart/form-data`,
  },
};

const STATUS_TYPE = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const RESPONSE = {
  STATUS: {
    OK: 200,
    UNAUTHORIZED: 401,
    UNVERIFY: 400,
  },
};

const CACHE_KEY = {
  PRODUCT_LIST: 'productList',
  PRODUCT_DETAIL: 'productDetail',
  ITEM_DETAIL: 'itemDetail',
  ITEM_RECOMMEND_LIST: 'recommendItemList',
  CART_LIST: 'cartList',
  SELECTED_CART_ITEM_LIST: 'selectedCartItemList',
  COMMUNITY_LIST: 'communityList',
  USER: 'user',
  VIDEO_THUMBNAIL_LIST: 'videoThumbnailList',
  VIDEO_DETAIL: 'videoDetail',
  DELIVERY_INFO_LIST: 'deliveryInfoList',
  ORDER_LIST: 'orderList',
  ORDER_DETAIL: 'orderDetail',
  CANCELED_ORDER_LIST: 'canceledOrderList',
  ORDER_PAYMENT_WIDGET: 'orderPaymentWidget',
  COLLECTION: 'collection',
  MYSTERY: 'mystery',
};

export { RESPONSE, API, CACHE_KEY, STATUS_TYPE };
