import express from 'express';
import { AuthController } from '../controllers/auth-controller';
import userValidation from '../validation/user-validation';
import { verifyValidate } from '../middleware/verify-validate';


const router = express.Router();
const authController = new AuthController();

router.post(
    "/login",
    verifyValidate(userValidation.UserLoginSchema),
    authController.login
);
router.post(
    "/register",
    verifyValidate(userValidation.UserCreateSchema),
    authController.register
);
router.post("/logout", authController.logout);

export default router;
