import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
  const speciality = await prisma.speciality.create({
    data: payload,
  });

  return speciality;
};

const getAllSpecialties = async (): Promise<Speciality[]> => {
  const specialties = await prisma.speciality.findMany();
  return specialties;
};

const deleteSpeciality = async (id: string): Promise<Speciality> => {
  const speciality = await prisma.speciality.delete({
    where: { id },
  });

  return speciality;
};

export const SpecialtyService = {
  createSpeciality,
  getAllSpecialties,
  deleteSpeciality,
};
