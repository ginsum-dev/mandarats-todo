import { cn } from "@/lib/utils";
import { boxColors, cardColors } from "@/lib/colors";

export default function DesktopCard({
  cardIndex,
  focusedBox,
  getValue,
  setFocusedBox,
  handleChange,
}: {
  cardIndex: number;
  focusedBox: string | null;
  getValue: (cardIndex: number, boxIndex: number) => string;
  setFocusedBox: (key: string | null) => void;
  handleChange: (key: string, value: string) => void;
}) {
  return (
    <div
      key={cardIndex}
      className={cn(
        "w-full max-w-[294px] aspect-square rounded-md border-2 p-1.5 shadow-sm transition-all hover:shadow-md",
        cardColors[cardIndex]
      )}
    >
      <div className="grid grid-cols-3 gap-1 h-full">
        {Array.from({ length: 9 }).map((_, boxIndex) => {
          const isCenter = cardIndex === 4;
          const isBoxCenter = boxIndex === 4;
          const key = `${cardIndex}-${boxIndex}`;
          const isFocused = focusedBox === key;

          const value = getValue(cardIndex, boxIndex);

          const isEditable = !(!isCenter && isBoxCenter);

          return (
            <div
              key={boxIndex}
              className="relative w-full h-full"
              onClick={() => {
                if (isEditable) {
                  setFocusedBox(key);
                }
              }}
            >
              {isFocused && isEditable ? (
                <textarea
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  onBlur={() => setFocusedBox(null)}
                  autoFocus
                  className={cn(
                    "w-[88px] h-[88px] resize-none rounded border transition-all",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50",
                    "text-center",
                    "scrollbar-hide",
                    isBoxCenter ? boxColors[cardIndex] : "",
                    isCenter
                      ? `${boxColors[boxIndex]} text-[20px]`
                      : "text-[16px]",
                    "placeholder:text-gray-400 placeholder:text-center"
                  )}
                  style={{
                    textAlign: "center",
                    paddingTop: "calc(50% - 0.75em)",
                    paddingBottom: "calc(50% - 0.75em)",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    lineHeight: "1.5",
                    display: "block",
                    boxSizing: "border-box",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                />
              ) : (
                <div
                  className={cn(
                    "w-[88px] h-[88px] rounded border transition-all",
                    "text-center bg-white overflow-hidden",
                    "flex items-center justify-center px-1",
                    isEditable ? "cursor-text" : "cursor-default",
                    isBoxCenter ? boxColors[cardIndex] : "",
                    isCenter ? `${boxColors[boxIndex]}` : ""
                  )}
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
