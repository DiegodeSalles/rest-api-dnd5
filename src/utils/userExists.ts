export async function UserExists(email: string) {
  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  return userExists;
}
