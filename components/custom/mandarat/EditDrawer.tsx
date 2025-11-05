import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { boxColors } from "@/lib/colors";
import { cn } from "@/lib/utils";

interface EditDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  cardIndex: number;
  getValue: (cardIndex: number, boxIndex: number) => string;
  handleChange: (key: string, value: string) => void;
}

export default function EditDrawer({
  open,
  setOpen,
  cardIndex,
  getValue,
  handleChange,
}: EditDrawerProps) {
  const [values, setValues] = useState<{ [key: number]: string }>({});

  // Drawer가 열릴 때마다 최신 값으로 업데이트
  useEffect(() => {
    if (open) {
      const initial: { [key: number]: string } = {};
      const boxOrder = [4, 0, 1, 2, 3, 5, 6, 7, 8];
      boxOrder.forEach((boxIndex) => {
        initial[boxIndex] = getValue(cardIndex, boxIndex);
      });
      setValues(initial);
    }
  }, [open, cardIndex, getValue]);

  // 중앙 박스(4번)를 먼저, 나머지는 순서대로
  const boxOrder = [4, 0, 1, 2, 3, 5, 6, 7, 8];

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Edit</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto px-5 pb-4">
          <div className="space-y-6">
            {boxOrder.map((boxIndex, orderIndex) => {
              const isCenter = boxIndex === 4;
              return (
                <div key={boxIndex} className="flex items-center gap-3">
                  {!isCenter && (
                    <Label
                      htmlFor={`box-${boxIndex}`}
                      className={cn("text-lg font-medium text-gray-300")}
                    >
                      {boxIndex + 1}
                    </Label>
                  )}
                  <div className="relative w-full">
                    <Input
                      id={`box-${boxIndex}`}
                      value={values[boxIndex] || ""}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const key = `${cardIndex}-${boxIndex}`;
                        // 로컬 state 즉시 업데이트 (한글 입력 깨짐 방지)
                        setValues((prev) => ({
                          ...prev,
                          [boxIndex]: newValue,
                        }));
                        // 부모 컴포넌트의 데이터 업데이트
                        handleChange(key, newValue);
                      }}
                      placeholder={`내용을 입력하세요`}
                      className={cn(
                        "w-full h-[40px] focus:outline-none focus-visible:ring-0 rounded-none",
                        isCenter &&
                          `${boxColors[cardIndex]} font-semibold text-lg h-[60px]`
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <DrawerFooter>
          <Button className="w-full" onClick={() => setOpen(false)}>
            닫기
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
