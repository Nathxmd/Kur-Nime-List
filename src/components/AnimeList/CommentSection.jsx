"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentSection = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.status == 200) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Post Success...</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 px-4 py-1"
      />
      <button
        onClick={handlePosting}
        className="w-32 py-2 px-4 bg-color-accent"
      >
        Post
      </button>
    </div>
  );
};

export default CommentSection;
