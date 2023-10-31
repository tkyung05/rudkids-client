import { NextSeo } from 'next-seo';

import OrderSuccess from '@/components/OrderSuccess';

import { PATH } from '@/constants';

function OrderSuccessPage() {
  return (
    <>
      <NextSeo
        title="Order Success"
        description="상품 주문 성공 페이지"
        canonical={PATH.CLIENT_URL + PATH.ORDER + '/success'}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ORDER + '/success'}`,
        }}
      />

      <OrderSuccess />
    </>
  );
}

export default OrderSuccessPage;
