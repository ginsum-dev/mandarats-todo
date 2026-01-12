import Mandarat from "@/components/mandarat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "만다라트 목표 관리 - MandaPlan",
  description:
    "만다라트로 목표를 구조화하세요. 중앙 목표를 8개의 하위 목표로 나누고, 각각을 64개의 실행 과제로 세분화하여 목표 달성을 체계적으로 관리하는 무료 목표 관리 앱.",
  keywords: [
    "만다라트",
    "목표관리",
    "계획",
    "자기계발",
    "할일관리",
    "루틴",
    "투두리스트",
    "성장",
    "습관형성",
    "목표달성",
    "목표앱",
    "productivity",
    "mandalart",
  ],
  openGraph: {
    title: "만다라트 목표 관리 - MandaPlan",
    description:
      "만다라트로 목표를 구조화하고 실행으로 연결하세요. 체계적인 목표 관리 도구.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <Mandarat />;
}
