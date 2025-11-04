import { cn } from "@/lib/utils";
import { boxColors, cardColors } from "@/lib/colors";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MobileCard({
  getValue,
}: {
  getValue: (cardIndex: number, boxIndex: number) => string;
}) {
  const [cardIndex, setCardIndex] = useState(4);

  return (
    <div>
      <div
        key={cardIndex}
        className={cn(
          "w-full max-w-[286px] aspect-square rounded-md border-2 p-1.5 shadow-sm transition-all",
          cardColors[cardIndex]
        )}
      >
        <div className="grid grid-cols-3 gap-1 h-full">
          {Array.from({ length: 9 }).map((_, boxIndex) => {
            const isCenter = cardIndex === 4;
            const isBoxCenter = boxIndex === 4;
            const key = `${cardIndex}-${boxIndex}`;

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
                  <span
                    className={cn(
                      isCenter ? "text-[20px]" : "text-[16px]",
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {cardIndex !== 4 ? (
        <Button className="mt-4" onClick={() => setCardIndex(4)}>
          중앙 카드로 돌아가기
        </Button>
      ) : (
        <div className="h-[50px]"></div>
      )}
    </div>
  );
}
