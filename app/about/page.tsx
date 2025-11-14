import {
  HelpCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Grid3X3,
  SquarePen,
  BookmarkCheck,
} from "lucide-react";

const usageSteps = [
  {
    title: "핵심 목표 설정",
    bullets: [
      "가장 중앙 칸에 달성하고 싶은 핵심 목표를 작성합니다.",
      "명확하고 구체적인 목표일수록 집중하기 쉽습니다.",
    ],
  },
  {
    title: "8개의 하위 목표 작성",
    bullets: [
      "중앙 목표를 둘러싼 8개 칸에 하위 목표를 작성합니다.",
      "핵심 목표를 이루기 위해 필요한 주요 요소를 정리해 보세요.",
    ],
  },
  {
    title: "실행 과제 세분화",
    bullets: [
      "각 하위 목표를 주변 8개 블록의 중앙으로 옮깁니다.",
      "각 칸에 구체적인 실행 과제 8개를 작성하여 실제 행동으로 연결합니다.",
    ],
  },
];

const features = [
  {
    title: "자동 저장",
    description:
      "작성한 내용은 자동으로 저장되어 언제든지 이어서 확인할 수 있어요.",
  },
  {
    title: "간편 수정",
    description:
      "각 칸을 눌러 내용을 즉시 수정하고, 목표가 바뀌면 자유롭게 업데이트하세요.",
  },
  {
    title: "중앙 ↔ 주변 연동",
    description:
      "중앙과 주변 카드가 연동되어 목표 간의 관계를 쉽게 파악할 수 있어요.",
  },
  {
    title: "카드 전체 보기",
    description:
      "모든 카드를 한 번에 볼 수 있어요. 중앙 목표와 주변 목표를 쉽게 파악할 수 있어요.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/60 via-white to-white px-6 py-20 text-gray-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="overflow-hidden rounded-3xl border border-rose-100 bg-white/70 p-10 shadow-sm shadow-rose-100 backdrop-blur">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-4 py-1 text-sm font-semibold text-rose-500">
                <Sparkles className="h-4 w-4" />
                MyManda is crafted for intentional goals
              </p>
              <h1 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
                만다라트로 <br />
                목표를 구조화하세요.
              </h1>
              <p className="mt-3 text-md leading-7 text-gray-600">
                MyManda는 전통 만다라트를 디지털 경험으로 재해석해, 생각을
                정리하고 실행으로 연결하도록 돕는 목표 설계 도구입니다.
              </p>
            </div>
            <div className="grid w-full max-w-sm grid-cols-2 gap-4 rounded-2xl bg-rose-50/80 p-6 text-center text-sm font-semibold text-rose-500">
              <div>
                <p className="text-3xl font-bold text-rose-400">64</p>
                <p className="text-xs text-rose-900/80">실행 과제</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-rose-400">8</p>
                <p className="text-xs text-rose-900/80">핵심 영역</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-rose-400">1</p>
                <p className="text-xs text-rose-900/80">중앙 목표</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-rose-400">∞</p>
                <p className="text-xs text-rose-900/80">아이디어</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Grid3X3 className="h-5 w-5 text-rose-400" />
              만다라트란?
            </h3>
            <p className="text-base leading-7 text-zinc-600">
              만다라트(Mandal-Art)는 일본 디자이너 이마이즈미 히로아키가 고안한
              목표 달성 및 아이디어 발상 도구입니다. 중심 목표를 8개의 하위
              목표로 나누고, 각 하위 목표를 다시 8개의 실행 과제로 세분화하여 총
              64개의 구체적인 실천 항목을 구성합니다. 복잡한 목표도 격자 구조
              덕분에 전체 숲과 개별 나무를 동시에 바라볼 수 있게 됩니다.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-rose-50 to-white p-8 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Sparkles className="h-5 w-5 text-rose-400" />
              MyManda의 방향
            </h3>
            <p className="text-base leading-7 text-zinc-600">
              우리는 “기록 → 구조화 → 실행”으로 이어지는 흐름이 가장 자연스러울
              때 목표가 더 빨리 완성된다고 믿어요. 그래서 MyManda는 복잡한 UI를
              최소화하고, 마치 종이에 쓰듯 빠르게 채워 넣고, 수정하고, 공유할 수
              있는 경험에 집중하고 있습니다.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
            <SquarePen className="h-6 w-6 text-rose-400" />
            사용 방법
          </div>

          <ol className="space-y-2">
            {usageSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-400 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-lg font-semibold text-zinc-800">
                    {step.title}
                  </p>
                </div>
                <ul className="space-y-1">
                  {step.bullets.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm leading-6 text-zinc-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
            <BookmarkCheck className="h-6 w-6 text-rose-400" />
            주요 기능
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-zinc-100 p-6"
              >
                <p className="text-lg font-semibold text-zinc-800">
                  {feature.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
