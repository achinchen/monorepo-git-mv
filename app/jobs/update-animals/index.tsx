import { PrismaClient } from '@prisma/client';
import { getAnimals } from './utils';

const db = new PrismaClient();

export default async function updateAnimals() {
  const animals = await getAnimals();

  await Promise.allSettled(
    animals.map((animal) =>
      db.animal.upsert({
        create: animal,
        update: animal,
        where: { id: animal.id }
      })
    )
  );
}
