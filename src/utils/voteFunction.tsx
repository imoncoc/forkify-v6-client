export const checkUserVote = (
  userId: string | null | undefined,
  upvotes: string[],
  downvotes: string[]
) => {
  if (!userId) {
    return {
      isUpVote: false,
      isDownVote: false,
    };
  }

  const isUpVote = upvotes.includes(userId);
  const isDownVote = downvotes.includes(userId);

  return {
    isUpVote,
    isDownVote,
  };
};
