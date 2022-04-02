import { AttributifyOptions } from '@unocss/preset-attributify';
import type { Family } from '~/features/theme/color/constants';
import { FAMILY_LABEL } from '~/features/theme/color/constants';
import { useThemeColorContext } from '~/features/theme/color/context';

type Props = {
  isNext?: boolean;
} & AttributifyOptions;

export default function FamilySwitcher({ ...attributifyOptions }: Props) {
  const { family, setFamily } = useThemeColorContext();
  const getIsCurrentFamily = (currentFamily: string) =>
    currentFamily === family;
  const onClick = (family: string) => () => setFamily(family as Family);

  return (
    <div
      shadow="default"
      p="1"
      border="rounded-xl none"
      bg="white"
      text="black"
      {...attributifyOptions}
    >
      {Object.entries(FAMILY_LABEL).map(([family, label]) => (
        <button
          key={family}
          border="rounded-2xl"
          px="2.5"
          bg="white"
          {...(getIsCurrentFamily(family) && {
            bg: 'black',
            color: 'white'
          })}
          onClick={onClick(family)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}