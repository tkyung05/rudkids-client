import { useEffect, useState } from 'react';

import { ItemOptionGroupResponseListType } from '@/@types/item';

import Selector, { OptionsType, OptionType } from '@/components/@common/Selector';

import * as S from './OptionList.style';

export type SelectedOptionType = { name: string; price: number };

interface OptionListPropsType {
  itemOptionListData: ItemOptionGroupResponseListType;
  selectedOptionListState: Map<string, SelectedOptionType>;
  menuPosition: 'top' | 'bottom' | 'auto';
}

function OptionList(props: OptionListPropsType) {
  const [optionList, setOptionList] = useState<OptionsType[] | null>(null);

  useEffect(() => {
    if (props.itemOptionListData) {
      intializeOptionList(props.itemOptionListData);
    }
  }, [props.itemOptionListData]);

  const intializeOptionList = (optionGroupList: ItemOptionGroupResponseListType) => {
    const initOptionGroupList: OptionsType[] = [];

    optionGroupList?.map((optionGroup) => {
      const options: OptionsType = [];
      optionGroup.itemOptionInfoList.map((option) => {
        options.push({ label: option.itemOptionName, value: option.itemOptionPrice });
      });
      initOptionGroupList.push(options);
    });

    setOptionList(initOptionGroupList);
    handleChangeOption(props.itemOptionListData[0].itemOptionGroupName, initOptionGroupList[0][0]);
  };

  const handleChangeOption = (optionGroupName: string, option: OptionType) => {
    props.selectedOptionListState.set(optionGroupName, {
      name: option.label,
      price: parseInt(option.value),
    });
  };

  return (
    <S.ItemOptionContainer>
      {optionList?.map((options, idx) => {
        const OptionGroupName = props.itemOptionListData[idx]?.itemOptionGroupName;

        return (
          <div key={options[idx].label} style={{ width: '100%' }}>
            <S.ItemOptionName>{OptionGroupName}</S.ItemOptionName>

            <Selector
              defaultOption={options[0]}
              options={options}
              optionGroupName={OptionGroupName}
              handleChangeOption={handleChangeOption}
              menuPosition={props.menuPosition}
              placeholder="옵션 선택"
            />
          </div>
        );
      })}
    </S.ItemOptionContainer>
  );
}

export default OptionList;
