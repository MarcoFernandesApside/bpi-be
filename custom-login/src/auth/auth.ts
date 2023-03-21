import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export const createJwtToken = async (user: User) => {
  const token = await sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );

  return token;
};
