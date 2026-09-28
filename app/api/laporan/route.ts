import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const reports = await prisma.laporanSampah.findMany({
      include: { user: true, jenisSampah: true, wilayah: true, foto: true }
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}