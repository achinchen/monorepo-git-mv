import { useState, useMemo } from 'react';
import SearchSelect from '~/components/common/SearchSelect';
import { COUNTRIES, DISTRICTS_BY_COUNTRIES } from './constants';

export type Payload = {
  country: string;
  district: string;
};

type Props = {
  onFinish: ({ country, district }: Payload) => void;
};

export default function DistrictSelection({ onFinish }: Props) {
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');

  const districtOptions = useMemo(
    () => DISTRICTS_BY_COUNTRIES[country] || [],
    [country]
  );

  const onDistrictSelect = (district: Payload['district']) => {
    if (!country) return;
    setDistrict(district);
    onFinish({ country, district });
  };

  const onCountrySelect = (country: Payload['country']) => {
    setCountry((prevCountry) => {
      if (prevCountry !== country) setDistrict('');
      return country;
    });
  };

  return (
    <fieldset flex="~" gap="2">
      <SearchSelect
        options={COUNTRIES}
        placeholder="選擇城市"
        onSelect={onCountrySelect}
      />
      <SearchSelect
        options={districtOptions}
        placeholder="選擇地區"
        disabled={!country}
        initValue={district}
        onSelect={onDistrictSelect}
      />
    </fieldset>
  );
}
