import { Router } from "express";
import { SpecialityController } from "./speciality.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialityController.createSpeciality,
);

router.get("/", SpecialityController.getAllSpecialties);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialityController.deleteSpeciality,
);

export const SpecialityRoutes = router;
