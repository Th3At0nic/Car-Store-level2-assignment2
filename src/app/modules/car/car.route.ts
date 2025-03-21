import express from 'express';
import { CarControllers } from './car.controller';
import { auth } from '../../middlewares/authRequest';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  CarControllers.getAllCars,
);

router.get(
  '/:carId',
  auth(USER_ROLE.admin, USER_ROLE.user),
  CarControllers.getACarById,
);

export const CarRoutes = router;
