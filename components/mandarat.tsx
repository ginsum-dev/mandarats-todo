"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MandaratData {
  [key: string]: string;
}

const STORAGE_KEY = "mandarat-data";

export default function Mandarat() {
  const [data, setData] = useState<MandaratData>({});
  const [isClient, setIsClient] = useState(false);
  const [focusedBox, setFocusedBox] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Load from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved data:", e);
      }
    }
  }, []);

  const handleChange = (key: string, value: string) => {
    const newData = { ...data, [key]: value };

    // 중앙 카드의 외곽 박스가 변경되면 해당 외곽 카드의 중앙 박스도 동기화
    const [cardIndex, boxIndex] = key.split("-").map(Number);
    if (cardIndex === 4 && boxIndex !== 4) {
      // 중앙 카드의 외곽 박스이면, 해당 박스 인덱스와 같은 카드의 중앙 박스(4번)도 업데이트
      const targetCardIndex = boxIndex;
      const targetKey = `${targetCardIndex}-4`;
      newData[targetKey] = value;
    }

    setData(newData);
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  };

  // Card positions in 3x3 grid
  const cardPositions = [
    { row: 0, col: 0 }, // Top-left
    { row: 0, col: 1 }, // Top-center
    { row: 0, col: 2 }, // Top-right
    { row: 1, col: 0 }, // Middle-left
    { row: 1, col: 1 }, // Center (main goal card)
    { row: 1, col: 2 }, // Middle-right
    { row: 2, col: 0 }, // Bottom-left
    { row: 2, col: 1 }, // Bottom-center
    { row: 2, col: 2 }, // Bottom-right
  ];

  // Get box value
  const getValue = (cardIndex: number, boxIndex: number) => {
    return data[`${cardIndex}-${boxIndex}`] || "";
  };

  // Check if this is a special box (main goal or sub goal)
  const isMainGoal = (cardIndex: number, boxIndex: number) => {
    return cardIndex === 4 && boxIndex === 4; // Center card, center box
  };

  const isSubGoal = (cardIndex: number, boxIndex: number) => {
    if (cardIndex !== 4) return false; // Not center card
    const subGoalPositions = [
      { row: 0, col: 1 }, // Top center (connects to card 1)
      { row: 1, col: 0 }, // Left center (connects to card 3)
      { row: 1, col: 2 }, // Right center (connects to card 5)
      { row: 2, col: 1 }, // Bottom center (connects to card 7)
      { row: 0, col: 0 }, // Top-left (connects to card 0)
      { row: 0, col: 2 }, // Top-right (connects to card 2)
      { row: 2, col: 0 }, // Bottom-left (connects to card 6)
      { row: 2, col: 2 }, // Bottom-right (connects to card 8)
    ];
    return subGoalPositions.some(
      (pos) => pos.row === Math.floor(boxIndex / 3) && pos.col === boxIndex % 3
    );
  };

  // Pastel colors for cards
  const cardColors = [
    "bg-red-100 border-red-200", // Card 0
    "bg-orange-100 border-orange-200", // Card 1
    "bg-yellow-100 border-yellow-200", // Card 2
    "bg-purple-100 border-purple-200", // Card 3
    "bg-white border-stone-100", // Card 4 (center - main goal)
    "bg-lime-100 border-lime-200", // Card 5
    "bg-indigo-100 border-indigo-200", // Card 6
    "bg-sky-100 border-sky-200", // Card 7
    "bg-emerald-100 border-emerald-200", // Card 8
  ];

  const boxColors = [
    "bg-red-200 border-red-300", // Box 0
    "bg-orange-200 border-orange-300", // Box 1
    "bg-yellow-200 border-yellow-300", // Box 2
    "bg-purple-200 border-purple-300", // Box 3
    "bg-white border-stone-300", // Box 4
    "bg-lime-200 border-lime-300", // Box 5
    "bg-indigo-200 border-indigo-300", // Box 6
    "bg-sky-200 border-sky-300", // Box 7
    "bg-emerald-200 border-emerald-300", // Box 8
  ];

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-foreground">
          Mandarat Planner
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 justify-items-center">
          {cardPositions.map((pos, cardIndex) => (
            <div
              key={cardIndex}
              className={cn(
                "w-full max-w-[280px] sm:max-w-[300px] aspect-square rounded-md border-2 p-1.5 shadow-sm transition-all hover:shadow-md",
                cardColors[cardIndex]
              )}
            >
              <div className="grid grid-cols-3 gap-0.5 sm:gap-1 h-full">
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
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6 sm:mt-8">
          All changes are automatically saved to your browser
        </p>
      </div>
    </div>
  );
}
