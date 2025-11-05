import { cn } from "@/lib/utils";
import { boxColors, cardColors } from "@/lib/colors";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditDrawer from "./EditDrawer";

export default function MobileCard({
  getValue,
  handleChange,
}: {
  getValue: (cardIndex: number, boxIndex: number) => string;
  handleChange: (key: string, value: string) => void;
}) {
  const [cardIndex, setCardIndex] = useState(4);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);

  return (
    <div>
      <div
        key={cardIndex}
        className={cn(
          "w-full max-w-[286px] aspect-square rounded-md border-2 p-1.5 shadow-sm transition-all",
          cardColors[cardIndex]
        )}
        onClick={() => cardIndex !== 4 && setOpenEditDrawer(true)}
      >
        <div className="grid grid-cols-3 gap-1 h-full">
          {Array.from({ length: 9 }).map((_, boxIndex) => {
            const isCenter = cardIndex === 4;
            const isBoxCenter = boxIndex === 4;

            const value = getValue(cardIndex, boxIndex);

            const isEditable = !(!isCenter && isBoxCenter);

            return (
              <div key={boxIndex} className="relative w-full h-full">
                <div
                  className={cn(
                    "w-[88px] h-[88px] rounded border transition-all",
                    "text-center bg-white overflow-hidden",
                    "flex items-center justify-center px-1",
                    isEditable ? "cursor-text" : "cursor-default",
                    isBoxCenter ? boxColors[cardIndex] : "",
                    isCenter ? `${boxColors[boxIndex]}` : ""
                  )}
                  onClick={() => isCenter && setCardIndex(boxIndex)}
                >
                  {value && (
                    <span
                      className={cn(
                        isCenter && boxIndex === 4 && "text-[24px]",
                        isCenter && boxIndex !== 4 && "text-[20px]",
                        !isCenter && boxIndex === 4 && "text-[20px]",
                        !isCenter && boxIndex !== 4 && "text-[16px]",
                        "w-full text-center"
                      )}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: isCenter ? 2 : 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: "1.5",
                      }}
                    >
                      {value}
                    </span>
                  )}
                  {!value && (
                    <span className="text-[24px] w-full text-center text-gray-200 font-bold">
                      {boxIndex + 1}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {cardIndex !== 4 ? (
        <div className="flex gap-2 items-center justify-center mt-4">
          <EditDrawer
            open={openEditDrawer}
            setOpen={setOpenEditDrawer}
            cardIndex={cardIndex}
            getValue={getValue}
            handleChange={handleChange}
          />
          <Button onClick={() => setCardIndex(4)}>중앙 카드로 돌아가기</Button>
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-center mt-4">
          <EditDrawer
            open={openEditDrawer}
            setOpen={setOpenEditDrawer}
            cardIndex={cardIndex}
            getValue={getValue}
            handleChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
