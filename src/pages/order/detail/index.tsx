import { NextSeo } from 'next-seo';

import OrderDetail from '@/components/Profile/OrderDetail';

import { PATH } from '@/constants';

function OrderPage() {
  return (
    <>
      <NextSeo
        title="Order Detail"
        description="주문조회 상세 페이지"
        canonical={PATH.CLIENT_URL + PATH.ORDER_DETAIL}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ORDER_DETAIL}`,
        }}
      />

      <OrderDetail />
    </>
  );
}

export default OrderPage;
