import { CustomAddressSearchWidget } from './AddressSearchWidget.style';

interface AddressSearchWidgetPropsType {
  onCompleteSearchAddress: (zipCode: string, address: string) => void;
}

function AddressSearchWidget(props: AddressSearchWidgetPropsType) {
  const handleCompleteSearchingPostcode = (data: any) => {
    let address = '';

    if (data.userSelectedType === 'R') {
      address = data.roadAddress;
    } else {
      address = data.jibunAddress;
    }

    props.onCompleteSearchAddress(data.zonecode as string, address);
  };

  return <CustomAddressSearchWidget onComplete={handleCompleteSearchingPostcode} autoClose />;
}

export default AddressSearchWidget;
