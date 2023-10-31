import { NextSeo } from 'next-seo';

import Order from '@/components/Order';

import { PATH } from '@/constants';

function OrderPage() {
  return (
    <>
      <NextSeo
        title="Order"
        description="상품 주문 페이지"
        canonical={PATH.CLIENT_URL + PATH.ORDER}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ORDER}`,
        }}
      />

      <Order />
    </>
  );
}

export default OrderPage;
