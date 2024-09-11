type AuthScreenState = "login" | "signup";

type Thought = {
  id: number;
  title: string;
  author: string;
  content: string;
};

type SignUpUserParams = {
  email: string;
  password: string;
  fullName: string;
  username: string;
};

type LoginUserParams = {
  email: string;
  password: string;
};

type CreateThoughtParams = {
  userId: string; // Replace Document._id with the correct property or value
  title: string;
  author: string;
  content: string;
};
