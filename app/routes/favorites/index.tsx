import type { ActionFunction } from '@remix-run/node';
import type { AnimalId } from '~/utils/db/getAnimalByIds';
import { json } from '@remix-run/node';
import getAnimalByIds from '~/utils/db/getAnimalByIds';
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
