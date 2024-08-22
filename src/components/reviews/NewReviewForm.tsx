"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { DraftContext } from "@/contexts/draft/DraftContextProvider";
import useThrottle from "@/hooks/useThrottle";

type NewReviewFormProps = {
  courseId: string;
  refreshData: () => void;
};

export default function NewReviewForm({ courseId, refreshData }: NewReviewFormProps) {
  const { getDraft, updateDraft } = useContext(DraftContext);
  const [content, setContent] = useState(getDraft(Number(courseId))?.content ?? "");
  const throttledValue = useThrottle(content, 3000);

  useEffect(() => {
    updateDraft(Number(courseId), content);
  }, [throttledValue]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/reviews?cid=${courseId}`, {
        method: "POST",
        body: JSON.stringify({ content }),
      });
      const body = await res.json();
      if (body.isSuccess) {
        setContent("");
        refreshData();
      } else throw Error("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-8">
        <Image src="/header-bar.svg" width={42} height={6} alt="수강생 리뷰 구간 표식" />
        <h1 className="mt-2 font-bold text-lg">내 리뷰 남기기</h1>
      </div>
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="content"
          placeholder="본 강의를 수강하셨나요? 리뷰를 남겨주세요!"
          multiline
          minRows={4}
          maxRows={10}
        />
        <Button className="self-end" type="submit" variant="contained" disableElevation>
          리뷰 등록
        </Button>
      </form>
    </div>
  );
}