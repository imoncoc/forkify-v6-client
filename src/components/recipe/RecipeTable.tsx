"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Image } from "@nextui-org/image";

import { TRecipe } from "@/src/types";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { VerticalDotsIcon } from "../icons";
import { Pagination } from "@nextui-org/pagination";

const RecipeTable = ({ userRecipeData }: { userRecipeData: any }) => {
  const [page, setPage] = useState(userRecipeData.page || 1);
  const [totalPages, setTotalPages] = useState(userRecipeData.totalPage || 3);
  const [limit, setLimit] = useState(userRecipeData.limit || 2);

  useEffect(() => {
    // Update state when the backend data changes
    setPage(userRecipeData.page || 1);
    setTotalPages(userRecipeData.totalPage || 3);
    setLimit(userRecipeData.limit || 2);
  }, [userRecipeData]);

  console.log("userRecipeData: ", userRecipeData);

  const handleViewDetails = (id: string) => {
    console.log({ id });
  };
  const handleEdit = (id: string) => {
    console.log({ id });
  };
  const handleDelete = (id: string) => {
    console.log({ id });
  };

  return (
    <div>
      <Table
        aria-label="Recipe Table"
        selectionMode="single"
        bottomContent={
          totalPages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={totalPages}
                onChange={(newPage) => setPage(newPage)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn>Image</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Premium Status</TableColumn>
          <TableColumn>Publish Status</TableColumn>
          <TableColumn>Rating</TableColumn>
          {/* <TableColumn>Details</TableColumn> */}
          <TableColumn>Action</TableColumn>
        </TableHeader>

        <TableBody>
          {userRecipeData?.data?.result?.map((recipe: TRecipe) => (
            <TableRow key={recipe._id}>
              <TableCell>
                <Image
                  alt={recipe.title}
                  className="size-10"
                  src={recipe.thumbnail}
                  width={100}
                />
              </TableCell>
              <TableCell>{recipe.title}</TableCell>
              <TableCell>
                <Chip color={recipe?.isPremium ? "secondary" : "default"}>
                  {recipe.isPremium ? "Yes" : "No"}
                </Chip>
              </TableCell>
              <TableCell className="uppercase">
                <Chip
                  color={
                    recipe?.publish === "pending"
                      ? "warning"
                      : recipe?.publish === "denied"
                        ? "danger"
                        : "success"
                  }
                  variant="shadow"
                >
                  {recipe.publish}
                </Chip>
              </TableCell>
              <TableCell>{recipe.ratting}</TableCell>
              {/* <TableCell>
                <Button
                  color="primary"
                  onClick={() => handleViewDetails(recipe._id)}
                >
                  View Details
                </Button>
              </TableCell> */}
              <TableCell className="">
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown className="bg-background border-1 border-default-200">
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                      >
                        <VerticalDotsIcon className="text-default-400" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem
                        color="primary"
                        onClick={() => handleViewDetails(recipe._id)}
                      >
                        View
                      </DropdownItem>
                      <DropdownItem onClick={() => handleEdit(recipe._id)}>
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        color="danger"
                        onClick={() => handleDelete(recipe._id)}
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecipeTable;
