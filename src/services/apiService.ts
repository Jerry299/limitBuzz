// I would be using fetch and not axios as the project made little HTTP requests and there is no need to add a dependency
import { UserInfoProps } from "../pages/UserProfile/user";
import { getUsersUrl } from "./url";

export interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  phone?: string;
  data?: Record<string, string>;
}

export const getUsers = async (): Promise<[]> => {
  const res = await fetch(`${getUsersUrl}`);
  const result = res.json();
  return result;
};

export const getSingleUser = async (
  userid: string | undefined
): Promise<UserInfoProps> => {
  const res = await fetch(`${getUsersUrl}/${userid}`);
  const result = res.json();
  return result;
};
