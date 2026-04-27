export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 leading-relaxed">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>

      <p>최종 업데이트: 2026년 4월 27일</p>
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
          앱 실행, 화면 진입, 버튼 탭, 만다라트 생성/수정/삭제, 투두 체크 등 앱
          사용 기록
        </li>
        <li>앱 내 기능 사용 흐름과 관련된 제품 상호작용 정보</li>
      </ul>
      <p className="mt-2">
        또한 사용자가 앱에 직접 작성하는 만다라트 및 투두 내용은 기기 내부
        저장소에 저장되며, 현재 버전에서는 분석 목적의 외부 전송 대상에 포함되지
        않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. 데이터 저장 및 처리 방식
      </h2>
      <p>
        사용자가 작성한 만다라트 및 투두 데이터는 주로 사용자 기기 내부 저장소에
        저장됩니다.
      </p>
      <p className="mt-2">
        또한 앱의 기능 개선, 사용 흐름 분석, 서비스 품질 향상을 위해 일부 사용
        데이터는 외부 분석 서비스로 전송될 수 있습니다. 이 과정에서 사용자 입력
        내용(예: 만다라트 제목, 셀 내용, 투두 텍스트)은 수집하지 않으며, 화면
        진입 여부, 기능 사용 여부, 만다라트 개수, 카드/박스 인덱스 등 구조화된
        이벤트 정보만 수집합니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. 제3자 제공</h2>
      <p>
        본 앱은 서비스 이용 현황 분석 및 품질 개선을 위해 제3자 분석 도구를
        사용할 수 있습니다.
      </p>
      <p className="mt-2">
        현재 버전에서는 Mixpanel을 사용하여 다음과 같은 정보를 분석 목적으로
        처리할 수 있습니다.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>사용자 ID 또는 기기 식별자</li>
        <li>대략적인 위치 정보</li>
        <li>앱 내 화면 진입 및 기능 사용 이벤트</li>
      </ul>
      <p className="mt-2">
        본 앱은 광고 목적의 제3자 추적을 수행하지 않습니다.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. 광고 및 분석 도구 사용 여부
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
        5. 수집 정보의 이용 목적
      </h2>
      <p>수집된 정보는 다음 목적에 한하여 사용됩니다.</p>
      <ul className="list-disc ml-6 mt-2">
        <li>앱 기능 개선</li>
        <li>화면 및 기능 사용 흐름 분석</li>
        <li>서비스 운영 품질 향상</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. 사용자 권리</h2>
      <p>
        사용자는 앱 내 데이터를 직접 수정하거나 삭제할 수 있습니다. 앱을
        삭제하면 기기에 저장된 로컬 데이터도 함께 삭제됩니다. 또한 분석 데이터
        수집과 관련한 문의는 아래 문의처를 통해 요청할 수 있습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. 개인정보 보호 조치</h2>
      <p>
        앱은 iOS 및 Android의 기본 보안 구조를 따르며, 기기 내 저장 데이터는
        사용자의 기기 환경에 따라 보호됩니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. 개인정보처리방침의 변경
      </h2>
      <p>
        앱 기능 변경, 로그인 기능 도입, 서버 연동, 광고 또는 분석 도구 변경
        등으로 개인정보 처리 방식이 변경될 수 있습니다. 변경 시 앱 업데이트와
        함께 본 개인정보처리방침이 수정되며, 필요한 경우 사용자에게 관련 내용을
        안내합니다.
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
