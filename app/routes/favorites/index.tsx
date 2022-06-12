import type { ActionFunction } from '@remix-run/node';
import type { Animal } from '@prisma/client';
import type { AnimalId } from '~/models/animal/getAnimalsByIds/index.server';
import { json } from '@remix-run/node';
import increaseFollow from '~/models/animalFollow/increaseFollow/index.server';
import decreaseFollow from '~/models/animalFollow/decreaseFollow/index.server';
import getAnimalByIds from '~/models/animal/getAnimalsByIds/index.server';
import parsePayloadByJson from '~/utils/action/parsePayloadByFormData';
import Favorites from '~/features/favorites';
import Layout from '~/components/common/Layout';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const ids: AnimalId[] = parsePayloadByJson({ formData, fallback: [] });
  if (!ids.length) return json({ animals: [] });

  const animals = await getAnimalByIds(ids);
  return json({ animals });
};

export default function ThemeColor() {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
}
