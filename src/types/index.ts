import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export interface IUser {
  _id?: string;
  userId?: string;
  name: string;
  role: string;
  email: string;
  status: string;
  phone: string;
  address?: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TRecipe {
  _id: string;
  title: string;
  isDeleted: boolean;
  isPremium: boolean;
  ratting: number;
  upvote: any[];
  downvote: any[];
  comments: any[];
  ingredients: string[];
  timeFun: number;
  thumbnail: string;
  tags: string[];
  description: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  publish: string;
}
