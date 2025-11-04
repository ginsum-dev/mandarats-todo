"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import DesktopCard from "./custom/mandarat/DesktopCard";
import MobileCard from "./custom/mandarat/MobileCard";

interface MandaratData {
  [key: string]: string;
}

const STORAGE_KEY = "mandarat-data";

export default function Mandarat() {
  const [data, setData] = useState<MandaratData>({});
  const [isClient, setIsClient] = useState(false);
  const [focusedBox, setFocusedBox] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h1 className="text-3xl sm:text-4xl font-bold text-center my-10 text-foreground">
          Mandarat Planner
        </h1>
        {isMobile ? (
          <div className="grid grid-cols-1 gap-1.5 justify-items-center">
            <MobileCard getValue={getValue} />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1.5 justify-items-center">
            {cardPositions.map((pos, cardIndex) => (
              <DesktopCard
                key={cardIndex}
                cardIndex={cardIndex}
                focusedBox={focusedBox}
                getValue={getValue}
                setFocusedBox={setFocusedBox}
                handleChange={handleChange}
              />
            ))}
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-6 sm:mt-8">
          All changes are automatically saved to your browser
        </p>
      </div>
    </div>
  );
}
