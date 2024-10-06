import { useUser } from "@/src/context/user.provider";
import { getAllRecipeComments } from "@/src/services/Comments";
import { TComment } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import RecipeDetailsCommentFooter from "./RecipeDetailsCommentFooter";

const RecipeDetailsComment = async ({ id }: { id: string }) => {
  const { data: comments } = await getAllRecipeComments(id);
  //   const [isFollowed, setIsFollowed] = useState(false);

  console.log("comments: ", comments);
  console.log("comment user: ", comments?.userId?._id);

  return (
    <>
      {comments.length === 0 && (
        <p className="py-16 text-2xl text-center">No Comment</p>
      )}
      {comments.length >= 1 && (
        <div>
          <p className="py-16 text-2xl text-center">All Comments</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comments.map((comment: TComment) => (
              <Card isFooterBlurred key={comment._id} className="w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar
                      isBordered
                      radius="full"
                      size="md"
                      src={comment.userId.profilePhoto}
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        {comment.userId.name}
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        {comment.userId.email}
                      </h5>
                    </div>
                  </div>
                  {/* <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button> */}
                </CardHeader>
                <CardBody className="px-3 pb-20 text-small text-default-400">
                  <div>
                    <p>{comment.comment}</p>
                    <span className="pt-2">
                      #ShareYourRecipe
                      <span className="py-2" aria-label="computer" role="img">
                        💻
                      </span>
                    </span>
                  </div>
                  {/* <div className="gap-3 flex">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">
                    97.1K
                  </p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </div> */}
                </CardBody>

                <RecipeDetailsCommentFooter
                  commentId={comment?._id as string}
                  userID={comment?.userId?._id as string}
                />
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetailsComment;
