import { client } from './utils/fetchClient';

export const getUserByEmail = async (email) => {
  const users = await client.get(`/users?email=${email}`);

  return users[0] || null;
};

export const createUser = async ({ email, name }) => {
  return client.post('/users', { email, name });
};
