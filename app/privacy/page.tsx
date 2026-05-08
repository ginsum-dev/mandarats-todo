export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 leading-relaxed">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>

      <p>최종 업데이트: 2026년 5월 8일</p>
      <br />

      <p>
        본 개인정보처리방침은 사용자가 &quot;MandaPlan(이하
        &quot;앱&quot;)&quot;을 이용할 때, 앱이 어떤 정보를 수집하고 어떻게
        활용하는지를 설명합니다.
      </p>
      <p className="mt-2">
        MandaPlan은 로그인 없이 사용할 수 있는 목표 관리 앱입니다. 사용자가
        작성한 만다라트 및 투두 데이터는 주로 사용자 기기 내부에 저장되며, 앱
        사용성 개선과 서비스 분석을 위해 일부 데이터가 외부 분석 도구를 통해
        수집될 수 있습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. 수집하는 개인정보</h2>
      <p>
        본 앱은 회원가입 및 로그인 기능을 제공하지 않으며, 사용자의 이름,
        이메일, 전화번호, 주소, 결제 정보와 같은 직접적인 개인 식별 정보는
        수집하지 않습니다.
        <p className="mt-2">
          다만 앱 사용성 개선 및 서비스 분석을 위해 다음과 같은 정보가 수집될 수
          있습니다.
        </p>
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>사용자 ID 또는 기기 식별자</li>
        <li>대략적인 위치 정보(도시, 지역, 국가 수준)</li>
        <li>
          앱 실행, 화면 진입, 버튼 탭, 만다라트 생성/수정/삭제, 투두 체크, AI
          추천 사용 등 앱 사용 기록
        </li>
        <li>앱 내 기능 사용 흐름과 관련된 제품 상호작용 정보</li>
        <li>
          사용자가 AI 추천 기능을 요청할 때 입력한 목표 정보(예: 중심 목표, 카드
          목표, 현재 카드의 일부 입력 내용)
        </li>
      </ul>
      <p className="mt-2">
        또한 사용자가 앱에 직접 작성하는 만다라트 및 투두 내용은 기본적으로 기기
        내부 저장소에 저장되며, 현재 버전에서는 AI 추천 기능을 요청하는 경우를
        제외하고 외부 전송 대상에 포함되지 않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. 데이터 저장 및 처리 방식
      </h2>
      <p>
        사용자가 작성한 만다라트 및 투두 데이터는 주로 사용자 기기 내부 저장소에
        저장됩니다.
      </p>
      <p className="mt-2">
        다만 다음과 같은 경우에는 일부 정보가 외부 서비스로 처리될 수 있습니다.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>앱 기능 개선, 사용 흐름 분석, 서비스 품질 향상을 위한 분석 처리</li>
        <li>AI 추천 기능 제공을 위한 추천 생성 처리</li>
        <li>AI 추천 사용량 관리 및 기능 운영 처리</li>
      </ul>
      <p className="mt-2">
        이 과정에서 사용자 입력 내용 전체를 무제한으로 수집하는 것이 아니라, 각
        목적 수행에 필요한 범위 내 정보만 처리됩니다.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. AI 추천 기능 관련 안내
      </h2>
      <p>
        본 앱은 사용자가 더 쉽게 만다라트를 작성할 수 있도록 AI 추천 기능을
        제공합니다.
      </p>
      <p className="mt-2">
        사용자가 AI 추천 기능을 직접 요청하는 경우에 한해, 추천 항목 생성을 위해
        사용자가 입력한 일부 목표 정보(예: 중심 목표, 카드 목표, 현재 카드의
        일부 입력 내용)가 서버를 통해 외부 AI 서비스로 전송될 수 있습니다.
      </p>
      <p className="mt-2">
        해당 정보는 AI 추천 결과 생성 목적에 한해 사용되며, 사용자가 AI 추천
        기능을 이용하지 않는 경우 이 목적의 외부 전송은 이루어지지 않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. 제3자 제공</h2>
      <p>
        본 앱은 서비스 이용 현황 분석, 기능 운영, AI 추천 기능 제공을 위해 제3자
        서비스를 사용할 수 있습니다.
      </p>
      <p className="mt-2">
        현재 버전에서는 다음과 같은 외부 서비스를 사용할 수 있습니다.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Mixpanel: 앱 사용 분석</li>
        <li>Supabase: 인증, 기능 운영 및 AI 사용량 관리</li>
        <li>OpenAI: AI 추천 기능 제공</li>
      </ul>
      <p className="mt-2">
        이들 서비스는 각각의 기능 수행에 필요한 범위에서 정보를 처리할 수
        있습니다.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. 광고 및 분석 도구 사용 여부
      </h2>
      <p className="mt-2">본 앱은 현재 광고 SDK를 사용하지 않습니다.</p>
      <p className="mt-2">
        다만 앱 사용 흐름 분석 및 서비스 개선을 위해 Mixpanel 분석 도구를
        사용합니다. 이를 통해 앱 실행, 화면 진입, 기능 사용 여부 등 제품
        상호작용 정보와 일부 식별자 및 대략적인 위치 정보가 수집될 수 있습니다.
      </p>
      <p className="mt-2">
        수집된 정보는 광고 추적이 아닌 분석 목적에 한해 사용됩니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. 수집 정보의 이용 목적
      </h2>
      <p>수집된 정보는 다음 목적에 한하여 사용됩니다.</p>
      <ul className="list-disc ml-6 mt-2">
        <li>앱 기능 개선</li>
        <li>화면 및 기능 사용 흐름 분석</li>
        <li>오류 및 사용성 문제 파악</li>
        <li>서비스 운영 품질 향상</li>
        <li>AI 추천 기능 제공</li>
        <li>AI 추천 사용량 제한 및 기능 운영 관리</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. 사용자 권리</h2>
      <p>
        사용자는 앱 내 데이터를 직접 수정하거나 삭제할 수 있습니다. 앱을
        삭제하면 기기에 저장된 로컬 데이터도 함께 삭제됩니다.
      </p>
      <p className="mt-2">
        또한 AI 추천 기능은 사용자가 직접 요청하는 경우에만 동작하며, 사용자는
        해당 기능을 사용하지 않을 수 있습니다.
      </p>
      <p className="mt-2">
        분석 데이터 수집과 관련한 문의는 아래 문의처를 통해 요청할 수 있습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. 개인정보 보호 조치</h2>
      <p>
        앱은 iOS 및 Android의 기본 보안 구조를 따르며, 기기 내 저장 데이터는
        사용자의 기기 환경에 따라 보호됩니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. 개인정보처리방침의 변경
      </h2>
      <p>
        앱 기능 변경, 로그인 기능 도입, 서버 연동 확장, 광고 또는 분석 도구
        변경, AI 기능 변경 등으로 개인정보 처리 방식이 변경될 수 있습니다. 변경
        시 앱 업데이트와 함께 본 개인정보처리방침이 수정되며, 필요한 경우
        사용자에게 관련 내용을 안내합니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. 문의처</h2>
      <p>개인정보 관련 문의는 아래 연락처로 문의할 수 있습니다.</p>
      <ul className="list-disc ml-6 mt-2">
        <li>이메일: jennyjung.dev@gmail.com</li>
        <li>개발자: Jung Hae Kyoung</li>
      </ul>

      <br />
      <p className="mt-2">
        본 개인정보처리방침은 앱의 현재 기능을 기준으로 작성되었으며, 서비스
        개선을 위해 지속적으로 업데이트될 수 있습니다.
      </p>
    </main>
  );
}
