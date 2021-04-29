import { hash, compare } from 'bcryptjs';

const hashPassword = async password => await hash(password, 12);
const verify = async (password, hashedPassword) =>
  await compare(password, hashedPassword);

export { hashPassword, verify };
