import { useEffect, useState } from 'react';

import { usePostCartItem } from '@/hooks/@queries/cart';
import { useGetItemDetail } from '@/hooks/@queries/item';
import useCursor from '@/hooks/useCursor';
import useDeleteElement from '@/hooks/useDeleteElement';
import useAlert from '@/hooks/useToast';

import { OptionGroupsType } from '@/@types/cart';
import { ImageType } from '@/@types/image';

import { CURSOR_STATUS, PATH, QUERY_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';
import { getQueryKeyToDefaultText } from '@/utils/validation';

import Carousel from '../@common/Carousel';
import Loading from '../@common/Loading';
import VideoPlayer from '../@common/VideoPlayer';
import * as S from './ItemDetail.style';
import ItemMobileController from './ItemMobileController';
import OptionList, { SelectedOptionType } from './OptionList';
import PolicyList from './PolicyList';

const ADD_TO_CART_BUTTON_CLASSNAME = 'add-to-cart';

function ItemDetail() {
  const { onToast } = useAlert();

  const itemName = getSearchParam(QUERY_KEY.ITEM_NAME);
  const { data: item, status } = useGetItemDetail(itemName);

  const { mutate: addToCart } = usePostCartItem();
  const [selectedOptionList, setSelectOptionList] = useState<Map<string, SelectedOptionType>>(
    new Map()
  );

  const { offCursor } = useCursor([
    {
      onCursorStatus: CURSOR_STATUS.THUMBS_UP,
      targetClassName: ADD_TO_CART_BUTTON_CLASSNAME,
    },
  ]);

  const { deleteElement: deleteFooter } = useDeleteElement({ targetElementTagName: 'footer' });

  useEffect(() => {
    deleteFooter();
  }, []);

  const handleClickAddToCartButton = (itemName: string) => {
    if (getSelectedOptionGroupList().length === 0) return onToast('error', '옵션을 선택해주세요!');

    addToCart({
      itemName: itemName,
      amount: 1,
      optionGroups: getSelectedOptionGroupList(),
    });

    offCursor();
  };

  const getSelectedOptionGroupList = () => {
    const optionGroupList: OptionGroupsType = [];
    for (const [optionGroupName, option] of selectedOptionList) {
      optionGroupList.push({ name: optionGroupName, option });
    }
    return optionGroupList;
  };

  const getTotalPrice = (defaultPrice: number) => {
    let totalPrice = defaultPrice;
    for (const { price } of selectedOptionList.values()) {
      totalPrice += price;
    }
    return totalPrice;
  };

  const getItemImages = (images: ImageType[]) => {
    return images.filter((image, idx) => {
      if (idx !== 0) return image;
    });
  };

  return (
    <>
      {(status === STATUS_TYPE.LOADING || status === STATUS_TYPE.ERROR) && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && item && (
        <S.Container>
          <S.ItemMainContainer>
            <S.ItemImageContainer>
              {getItemImages(item.images)?.map((image, idx) => (
                <S.ItemImage
                  src={image.url}
                  alt={item.enName}
                  key={idx}
                  width={1000}
                  height={1000}
                />
              ))}
            </S.ItemImageContainer>

            <S.MobileItemImageContainer>
              <Carousel
                images={getItemImages(item.images)}
                name={item.enName}
                imagePosition="center"
                autoplay={false}
              />
            </S.MobileItemImageContainer>

            <S.ItemInfoContainer>
              <S.ItemOrderContainer>
                <S.ItemOrderBox>
                  <S.ItemEnName>{item.enName}</S.ItemEnName>
                  <S.ItemKoName>{item.koName}</S.ItemKoName>

                  {item.limitType === 'LIMITED' && <S.LimitedTag>Limited</S.LimitedTag>}

                  <S.VideoBox>
                    <VideoPlayer
                      url={item.videoUrl}
                      autoPlay={false}
                      muted={false}
                      handleOffVideo={() => {}}
                    />
                  </S.VideoBox>

                  <S.ItemLaptopInfoBundle>
                    <OptionList
                      itemOptionListData={item.itemOptionGroupInfoList}
                      selectedOptionListState={selectedOptionList}
                      menuPosition="auto"
                    />

                    <S.ItemPrice>{getTotalPrice(item.price)}</S.ItemPrice>

                    <S.AddToCartButton
                      size="100%"
                      className={ADD_TO_CART_BUTTON_CLASSNAME}
                      onClick={() => handleClickAddToCartButton(item.enName)}
                    >
                      Add to Cart
                    </S.AddToCartButton>
                  </S.ItemLaptopInfoBundle>
                </S.ItemOrderBox>
              </S.ItemOrderContainer>

              {/* 아이템 설명, 사이즈 가이드, 환불 정책 */}
              <PolicyList itemBio={item.itemBio} />

              {/* 모바일 컨트롤러 */}
              <ItemMobileController
                optionListElement={
                  <OptionList
                    itemOptionListData={item.itemOptionGroupInfoList}
                    selectedOptionListState={selectedOptionList}
                    menuPosition="top"
                  />
                }
                onInitialSelectedOption={() => setSelectOptionList(new Map())}
                handleClickAddToCartButton={() => handleClickAddToCartButton(item.enName)}
                price={getTotalPrice(item.price)}
                productId={item.productId}
              />
            </S.ItemInfoContainer>
          </S.ItemMainContainer>
        </S.Container>
      )}
    </>
  );
}

export default ItemDetail;
