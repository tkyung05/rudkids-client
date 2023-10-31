import { NextSeo } from 'next-seo';

import CartList from '@/components/CartList';

import { PATH } from '@/constants';

function CartPage() {
  return (
    <>
      <NextSeo
        title="Cart"
        description="장바구니 페이지"
        canonical={PATH.CLIENT_URL + PATH.CART}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.CART}`,
        }}
      />

      <CartList />
    </>
  );
}

export default CartPage;
