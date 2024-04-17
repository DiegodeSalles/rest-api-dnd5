import bcrypt from "bcrypt";
import { UserExists } from "./userExists";

const saltRounds = 10;

export async function GeneratePassword(userPassword: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(userPassword, salt);

    return hashPassword;
  } catch (error) {
    return "Password hashing failed!";
  }
}

export async function CheckPassword(
  userPassword: string,
  userEmail: string
): Promise<boolean> {
  try {
    const userExists = await UserExists(userEmail);

    if (userExists === null) {
      throw new Error("Usuário não encontrado.");
    } else {
      const password: string = userExists.password;
      console.log(password);
      const result = bcrypt.compare(userPassword, password);
      return result;
    }
  } catch (error) {
    return false;
  }
}
