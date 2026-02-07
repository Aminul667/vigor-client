import { Router } from "express";
import { SpecialityRoutes } from "../module/speciality/speciality.route";


const router = Router();

// router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialityRoutes);

export const IndexRoutes = router;
