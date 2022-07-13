import type {
  ColorValue,
  FamilyValue,
  GenderValue,
  SizeValue
} from '~/features/adoption/create/types';
import { Fragment } from 'react';
import Input from '~/components/common/Input';
import OptionButton from '~/features/adoption/create/CardOptionButton';
import Card from '~/features/adoption/create/Card';
import RequiredLabel from '~/features/adoption/create/RequiredLabel';
import { useCreateAdoptionContext } from '~/features/adoption/create/context';
import {
  FAMILY_OPTION,
  GENDER_OPTION,
  SIZE_OPTION,
  NAME_OPTION,
  COLOR_OPTION
} from './constants';
import { DEFAULT_VALUE } from '~/constants/options';

export default function AnimalInfo() {
  const { animalInfo, dispatchAnimalInfo } = useCreateAdoptionContext();
  const { family, gender, size, color, name } = animalInfo;
  const isSelectedFamily = family !== DEFAULT_VALUE;

  const onFamilyChange = (family: FamilyValue) => () =>
    dispatchAnimalInfo({ type: 'family', value: family });

  const onGenderChange = (gender: GenderValue) => () =>
    dispatchAnimalInfo({ type: 'gender', value: gender });

  const onSizeChange = (size: SizeValue) => () =>
    dispatchAnimalInfo({ type: 'size', value: size });

  const onNameChange = (value: string) =>
    dispatchAnimalInfo({ type: 'name', value });

  const onColorChange = (color: ColorValue) => () =>
    dispatchAnimalInfo({ type: 'color', value: color });

  return (
    <div flex="~ col" w="100%" max-w="98" gap="4">
      <Card>
        <Fragment>
          <fieldset>
            <legend>
              {FAMILY_OPTION.LABEL}
              <RequiredLabel />
              <div flex="~" gap="1" mt="2">
                {FAMILY_OPTION.OPTIONS.map(({ LABEL, VALUE }) => {
                  const isPressed = VALUE === family;
                  return (
                    <OptionButton
                      key={VALUE}
                      isPressed={isPressed}
                      label={LABEL(isPressed)}
                      onClick={onFamilyChange(VALUE)}
                    />
                  );
                })}
              </div>
            </legend>
          </fieldset>
          <fieldset>
            <legend>
              {GENDER_OPTION.LABEL}
              <RequiredLabel />
              <div flex="~" gap="1" mt="2">
                {GENDER_OPTION.OPTIONS.map(({ LABEL, VALUE }) => {
                  return (
                    <OptionButton
                      key={VALUE}
                      isPressed={VALUE === gender}
                      label={LABEL()}
                      onClick={onGenderChange(VALUE)}
                    />
                  );
                })}
              </div>
            </legend>
          </fieldset>
        </Fragment>
      </Card>
      <Card>
        <fieldset w="100%">
          <legend>
            {SIZE_OPTION.LABEL}
            <RequiredLabel />
            <div grid="~ cols-3" gap="2" mt="2">
              {SIZE_OPTION.OPTIONS.map(({ LABEL, VALUE }) => {
                return (
                  <OptionButton
                    key={VALUE}
                    isPressed={VALUE === size}
                    label={LABEL}
                    shape="rectangle"
                    onClick={onSizeChange(VALUE)}
                  />
                );
              })}
            </div>
          </legend>
        </fieldset>
      </Card>
      <Card>
        <fieldset flex="1">
          <legend flex="~ col">
            {NAME_OPTION.LABEL}
            <Input
              value={name}
              onValueChange={onNameChange}
              placeholder={NAME_OPTION.PLACEHOLDER}
            />
          </legend>
        </fieldset>
      </Card>
      {isSelectedFamily && (
        <Card>
          <fieldset w="100%">
            <legend>
              {COLOR_OPTION.LABEL}
              <RequiredLabel />
              <div grid="~ wrap cols-3" gap="2" mt="2">
                {COLOR_OPTION.OPTION(family).map(({ LABEL, VALUE }) => {
                  return (
                    <OptionButton
                      key={VALUE}
                      label={LABEL}
                      shape="rectangle"
                      isPressed={color === VALUE}
                      onClick={onColorChange(VALUE)}
                    />
                  );
                })}
              </div>
            </legend>
          </fieldset>
        </Card>
      )}
    </div>
  );
}
