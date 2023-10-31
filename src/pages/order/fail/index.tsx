import { NextSeo } from 'next-seo';

import OrderFail from '@/components/OrderFail';

import { PATH } from '@/constants';

function OrderFailPage() {
  return (
    <>
      <NextSeo
        title="Order Failed"
        description="상품주문 실패 페이지"
        canonical={PATH.CLIENT_URL + PATH.ORDER + '/fail'}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ORDER + '/fail'}`,
        }}
      />

      <OrderFail />
    </>
  );
}

export default OrderFailPage;
