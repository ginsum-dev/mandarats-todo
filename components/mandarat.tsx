"use client";

import { useState, useEffect } from "react";
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
    if (isMobile && boxIndex === 4) {
      // 모바일 화면에서 중앙 박스가 변경되면 모든 카드의 중앙 박스도 동기화
      const targetCardIndex = cardIndex;
      const targetKey = `4-${targetCardIndex}`;
      newData[targetKey] = value;
    }

    setData(newData);
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  };

  // Get box value
  const getValue = (cardIndex: number, boxIndex: number) => {
    return data[`${cardIndex}-${boxIndex}`] || "";
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 py-10 sm:py-10 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-8 text-foreground">
          My Manda
        </h1>
        <div className="flex-col items-center justify-center p-5 text-center mb-6">
          <p className="text-sm text-zinc-500 mb-1">
            1. 중앙에 핵심 목표를 적으세요.
          </p>
          <p className="text-sm text-zinc-500 mb-1">
            2. 주변 8칸에 목표 달성을 위한 하위 목표를 작성하세요.
          </p>
          <p className="text-sm text-zinc-500">
            3. 각 하위 목표를 펼쳐 구체적인 실행 과제 8개씩 채워보세요.
          </p>
        </div>
        {isMobile ? (
          <div className="grid grid-cols-1 gap-1 justify-items-center">
            <MobileCard getValue={getValue} handleChange={handleChange} />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1.5 justify-items-center">
            {Array.from({ length: 9 }).map((_, cardIndex) => (
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
      </div>
    </div>
  );
}
