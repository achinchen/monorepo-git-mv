import Icon from '~/components/common/Icon';
import { HeaderPortal } from '~/components/common/Layout/header';
import HospitalCards from './Cards';
import HospitalAreaPanel from './AreaPanel';
import HospitalAreaHashId from './AreaHashId';
import { useIntersectionObserver } from './hooks';
import type { City } from './constants';
import { CITY_LABEL, HOSPITALS, REMINDER } from './constants';
import { HospitalContextProvider } from './context';

function Hospital() {
  useIntersectionObserver();
  return (
    <main m="auto" pb="4 lg:none" className="content-width">
      <HeaderPortal>
        <HospitalAreaPanel bg="white" />
      </HeaderPortal>
      <HospitalAreaPanel
        isDesktop
        display="lt-lg:none lg:flex"
        justify="center"
        mt="10"
      />
      <div mt="3" mx="3 lg:none" text="right lg:center">
        {REMINDER}
      </div>
      {Object.entries(HOSPITALS).map(([city, hospitals]) => (
        <section key={city} mx="4 lg:1" mt="8 lg:14">
          <HospitalAreaHashId city={city as City} />
          <h2 flex="~" text="lg" font="bold" mt="0" mb="2">
            <Icon icon="Location" />
            {CITY_LABEL[city as City]}
          </h2>
          <HospitalCards city={city as City} hospitals={hospitals} />
        </section>
      ))}
    </main>
  );
}

export default function HospitalWithContext() {
  return (
    <HospitalContextProvider>
      <Hospital />
    </HospitalContextProvider>
  );
}
