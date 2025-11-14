import { HelpCircle, Mail, MessageSquare } from "lucide-react";

const usageSteps = [
  {
    title: "1단계. 핵심 목표 설정",
    bullets: [
      "가장 중앙 칸에 달성하고 싶은 핵심 목표를 작성합니다.",
      "명확하고 구체적인 목표일수록 집중하기 쉽습니다.",
    ],
  },
  {
    title: "2단계. 8개의 하위 목표 작성",
    bullets: [
      "중앙 목표를 둘러싼 8개 칸에 하위 목표를 작성합니다.",
      "핵심 목표를 이루기 위해 필요한 주요 요소를 정리해 보세요.",
    ],
  },
  {
    title: "3단계. 실행 과제 세분화",
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
    <main className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="border border-zinc-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            만다라트란
          </h3>

          <span className="text-sm leading-6 text-zinc-600">
            만다라트(Mandal-Art)는 일본 디자이너 이마이즈미 히로아키가 고안한
            목표 달성 및 아이디어 발상 도구입니다. 중심 목표를 8개의 하위 목표로
            나누고, 각 하위 목표를 다시 8개의 실행 과제로 세분화하여 총 64개의
            구체적인 실천 항목을 구성합니다.
          </span>
        </div>

        <div className="border border-zinc-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            사용 방법
          </h3>

          {usageSteps.map((step) => (
            <div key={step.title} className="space-y-1.5 mt-3">
              <span className="text-base font-semibold text-zinc-700">
                {step.title}
              </span>
              {step.bullets.map((point) => (
                <div key={point} className="flex-row items-start">
                  <span className="mr-2 text-sm text-indigo-500">{"•"}</span>
                  <span className="flex-1 text-sm leading-6 text-zinc-600">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border border-zinc-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            기능 소개
          </h3>

          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex-row items-start mt-3 space-y-1"
            >
              <span className="text-md font-semibold text-zinc-700">
                {feature.title}
              </span>{" "}
              <br />
              <span className="text-sm leading-6 text-zinc-600">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-zinc-100 rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
         
          자주 묻는 질문
        </h3>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q. 작성한 내용이 저장되나요?
            </h4>
            <p className="text-gray-700">
              네, 작성하신 모든 내용은 자동으로 저장됩니다. 앱을 종료하거나 다시
              실행해도 이전에 작성한 내용을 그대로 확인할 수 있습니다.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q. 여러 개의 만다라트를 만들 수 있나요?
            </h4>
            <p className="text-gray-700">
              현재 버전에서는 하나의 만다라트를 작성하고 수정할 수 있습니다.
              추후 업데이트를 통해 여러 개의 만다라트를 관리할 수 있는 기능을
              추가할 예정입니다.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q. 데이터를 내보낼 수 있나요?
            </h4>
            <p className="text-gray-700">
              현재 버전에서는 데이터 내보내기 기능이 제공되지 않습니다. 향후
              업데이트에서 이미지 또는 PDF로 저장하는 기능을 추가할 계획입니다.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
