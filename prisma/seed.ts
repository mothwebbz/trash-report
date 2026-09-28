import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create some users
  const user1 = await prisma.user.create({
    data: {
      nama: 'Budi',
      email: 'budi@example.com',
      noHp: '08123456789',
    },
  });

  // Create JenisSampah
  const jenis1 = await prisma.jenisSampah.create({
    data: { namaJenis: 'Plastik' },
  });
  const jenis2 = await prisma.jenisSampah.create({
    data: { namaJenis: 'Kertas' },
  });

  // Create Wilayah
  const wilayah1 = await prisma.wilayah.create({
    data: { namaWilayah: 'Jakarta Pusat' },
  });
  const wilayah2 = await prisma.wilayah.create({
    data: { namaWilayah: 'Bandung' },
  });

  // Create a report with photo
  const report = await prisma.laporanSampah.create({
    data: {
      berat: 5.2,
      userId: user1.id,
      jenisSampahId: jenis1.id,
      wilayahId: wilayah1.id,
      foto: {
        create: {
          imageUrl: 'https://example.com/foto1.jpg',
        },
      },
    },
  });

  console.log('Seeded data:', { user1, jenis1, wilayah1, report });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());