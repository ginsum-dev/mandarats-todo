"use client";

import { useState, useEffect } from "react";
import DesktopCard from "./custom/mandarat/DesktopCard";
import MobileCard from "./custom/mandarat/MobileCard";

export interface MandaratItem {
  content: string;
  isComplete: boolean;
  // 확장 가능한 메타데이터 (선택적)
  metadata?: {
    createdAt?: number;
    updatedAt?: number;
    priority?: number;
    tags?: string[];
    color?: string;
    notes?: string;
    // 미래 확장을 위한 인덱스 시그니처
    [key: string]: any;
  };
}

interface MandaratData {
  [key: string]: MandaratItem | string; // 기존 string 데이터와의 호환성을 위해
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
        const parsed = JSON.parse(saved);
        // 기존 string 데이터를 새로운 구조로 마이그레이션
        const migrated: MandaratData = {};
        let needsMigration = false;

        Object.keys(parsed).forEach((key) => {
          const value = parsed[key];
          if (typeof value === "string") {
            // 기존 string 데이터를 객체로 변환
            migrated[key] = {
              content: value,
              isComplete: false,
              metadata: {
                updatedAt: Date.now(),
              },
            };
            needsMigration = true;
          } else if (
            typeof value === "object" &&
            value !== null &&
            ("content" in value || "text" in value) &&
            "isComplete" in value
          ) {
            // 기존 BoxData 구조 (text 필드)를 MandaratItem (content 필드)로 마이그레이션
            if ("text" in value && !("content" in value)) {
              migrated[key] = {
                content: (value as any).text,
                isComplete: value.isComplete,
                metadata: {
                  ...(value as any).metadata,
                  updatedAt: Date.now(),
                },
              };
              needsMigration = true;
            } else {
              // 이미 올바른 구조인 경우 그대로 사용
              migrated[key] = value as MandaratItem;
            }
          } else {
            // 알 수 없는 형식인 경우 기본값으로 설정
            migrated[key] = {
              content: "",
              isComplete: false,
              metadata: {
                updatedAt: Date.now(),
              },
            };
            needsMigration = true;
          }
        });

        setData(migrated);

        // 마이그레이션이 필요했으면 localStorage에 저장
        if (needsMigration && typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        }
      } catch (e) {
        console.error("Failed to parse saved data:", e);
        // 파싱 실패 시 빈 데이터로 시작
        setData({});
      }
    }
  }, []);

  const handleChange = (key: string, value: string) => {
    const currentBoxData = data[key];
    const isComplete =
      typeof currentBoxData === "object" && currentBoxData !== null
        ? currentBoxData.isComplete
        : false;
    const existingMetadata =
      typeof currentBoxData === "object" && currentBoxData !== null
        ? currentBoxData.metadata
        : undefined;

    const newBoxData: MandaratItem = {
      content: value,
      isComplete,
      metadata: {
        ...existingMetadata,
        updatedAt: Date.now(),
      },
    };
    const newData = { ...data, [key]: newBoxData };

    // 중앙 카드의 외곽 박스가 변경되면 해당 외곽 카드의 중앙 박스도 동기화
    const [cardIndex, boxIndex] = key.split("-").map(Number);
    if (cardIndex === 4 && boxIndex !== 4) {
      // 중앙 카드의 외곽 박스이면, 해당 박스 인덱스와 같은 카드의 중앙 박스(4번)도 업데이트
      const targetCardIndex = boxIndex;
      const targetKey = `${targetCardIndex}-4`;
      const targetBoxData = data[targetKey];
      const targetIsComplete =
        typeof targetBoxData === "object" && targetBoxData !== null
          ? targetBoxData.isComplete
          : false;
      const targetMetadata =
        typeof targetBoxData === "object" && targetBoxData !== null
          ? targetBoxData.metadata
          : undefined;
      newData[targetKey] = {
        content: value,
        isComplete: targetIsComplete,
        metadata: {
          ...targetMetadata,
          updatedAt: Date.now(),
        },
      };
    }
    if (isMobile && boxIndex === 4) {
      // 모바일 화면에서 중앙 박스가 변경되면 모든 카드의 중앙 박스도 동기화
      const targetCardIndex = cardIndex;
      const targetKey = `4-${targetCardIndex}`;
      const targetBoxData = data[targetKey];
      const targetIsComplete =
        typeof targetBoxData === "object" && targetBoxData !== null
          ? targetBoxData.isComplete
          : false;
      const targetMetadata =
        typeof targetBoxData === "object" && targetBoxData !== null
          ? targetBoxData.metadata
          : undefined;
      newData[targetKey] = {
        content: value,
        isComplete: targetIsComplete,
        metadata: {
          ...targetMetadata,
          updatedAt: Date.now(),
        },
      };
    }

    setData(newData);
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  };

  const handleToggleComplete = (key: string) => {
    const currentBoxData = data[key];
    const currentContent =
      typeof currentBoxData === "object" && currentBoxData !== null
        ? currentBoxData.content
        : typeof currentBoxData === "string"
        ? currentBoxData
        : "";
    const currentIsComplete =
      typeof currentBoxData === "object" && currentBoxData !== null
        ? currentBoxData.isComplete
        : false;
    const existingMetadata =
      typeof currentBoxData === "object" && currentBoxData !== null
        ? currentBoxData.metadata
        : undefined;

    const newBoxData: MandaratItem = {
      content: currentContent,
      isComplete: !currentIsComplete,
      metadata: {
        ...existingMetadata,
        updatedAt: Date.now(),
      },
    };
    const newData = { ...data, [key]: newBoxData };

    setData(newData);
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  };

  // Get box value (content)
  const getValue = (cardIndex: number, boxIndex: number): string => {
    const boxData = data[`${cardIndex}-${boxIndex}`];
    if (!boxData) return "";
    if (typeof boxData === "string") return boxData; // 기존 데이터 호환성
    // 기존 text 필드도 지원 (마이그레이션 중)
    if ("text" in boxData && !("content" in boxData)) {
      return (boxData as any).text || "";
    }
    return boxData.content || "";
  };

  // Get box complete status
  const getIsComplete = (cardIndex: number, boxIndex: number): boolean => {
    const boxData = data[`${cardIndex}-${boxIndex}`];
    if (!boxData) return false;
    if (typeof boxData === "string") return false; // 기존 데이터 호환성
    return boxData.isComplete || false;
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
          MandaPlan
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
            <MobileCard
              getValue={getValue}
              getIsComplete={getIsComplete}
              handleChange={handleChange}
              handleToggleComplete={handleToggleComplete}
            />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1.5 justify-items-center">
            {Array.from({ length: 9 }).map((_, cardIndex) => (
              <DesktopCard
                key={cardIndex}
                cardIndex={cardIndex}
                focusedBox={focusedBox}
                getValue={getValue}
                getIsComplete={getIsComplete}
                setFocusedBox={setFocusedBox}
                handleChange={handleChange}
                handleToggleComplete={handleToggleComplete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
