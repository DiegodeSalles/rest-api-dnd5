import { prisma } from "../lib/prisma";

export async function UserExists(email: string) {
  const userExists = await prisma.teste.findUnique({
    where: { email },
  });

  return userExists;
}
