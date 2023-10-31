import * as S from './Selector.style';

export type OptionType = { label: string; value: any };
export type OptionsType = OptionType[];

interface SelectorPorpsType {
  options: OptionsType;
  optionGroupName: string;
  handleChangeOption: (optionGroupName: string, option: OptionType) => void;
  placeholder: string;
  menuPosition: 'top' | 'bottom' | 'auto';
  defaultOption: OptionType;
}

function Selector(props: SelectorPorpsType) {
  return (
    <S.Selector
      options={props.options}
      onChange={(option: any) => props.handleChangeOption(props.optionGroupName, option)}
      styles={S.colorStyles}
      placeholder={props.placeholder}
      menuPlacement={props.menuPosition}
      isSearchable={false}
      defaultValue={props.defaultOption}
    />
  );
}

export default Selector;
