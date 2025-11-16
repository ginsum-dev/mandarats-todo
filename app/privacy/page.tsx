export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 leading-relaxed">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>

      <p>최종 업데이트: 2025년 11월 16일</p>
      <br />

      <p>
        본 개인정보처리방침은 사용자가 &quot;MandaPlan(이하
        &quot;앱&quot;)&quot;을 이용할 때, 앱이 어떤 정보를 수집하고 어떻게
        활용하는지를 설명합니다. 현재 버전의 앱은 로그인 기능 없이 동작하며,
        사용자의 개인정보를 수집하거나 외부로 전송하지 않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. 수집하는 개인정보</h2>
      <p>
        본 앱은 회원가입, 로그인, 서버 연동 기능을 제공하지 않으며, 사용자의
        어떠한 개인정보도 수집하지 않습니다.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>이름, 이메일 등 개인 식별 정보 — 수집하지 않음</li>
        <li>위치 정보 — 수집하지 않음</li>
        <li>결제 정보 — 수집하지 않음</li>
        <li>
          사진/파일 접근 — 사용자가 저장 기능을 사용하는 경우에만 기기 내에
          저장되며 외부로 전송되지 않음
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. 데이터 저장 및 처리 방식
      </h2>
      <p>
        사용자가 작성하는 모든 만다라트 데이터는 사용자 기기 내부(Local Storage
        또는 앱 내부 저장소)에만 저장되며, 어떠한 정보도 서버로 전송되지
        않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. 제3자 제공</h2>
      <p>본 앱은 개인정보를 외부 서비스나 제3자에게 제공하지 않습니다.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. 광고 및 분석 도구 사용 여부
      </h2>
      <p>
        현재 버전의 앱은 광고(AdMob 등) 및 분석 도구(Firebase Analytics 등)를
        사용하지 않습니다.
      </p>
      <p className="mt-2">
        향후 서비스 품질 개선 또는 기능 추가를 위해 광고 또는 분석 도구가 도입될
        수 있으며, 이 경우 도입 전에 본 개인정보처리방침이 함께 업데이트됩니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. 사용자 권리</h2>
      <p>
        사용자는 언제든지 앱 내 데이터를 직접 삭제할 수 있습니다. 앱을 삭제하면
        기기에 저장된 모든 데이터도 함께 삭제됩니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. 개인정보 보호 조치</h2>
      <p>
        앱은 iOS 및 Android의 기본 보안 구조를 따르며, 기기 내 저장 데이터는
        외부와 공유되지 않습니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. 개인정보처리방침의 변경
      </h2>
      <p>
        앱 기능 변경, 로그인 기능 도입, 서버 연동, 광고 또는 분석 도구 추가
        등으로 개인정보 처리 방식이 변경될 수 있습니다. 변경 시 앱 업데이트와
        함께 본 개인정보처리방침이 수정되며, 업데이트 노트를 통해 사용자에게
        알립니다.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. 문의처</h2>
      <p>개인정보 관련 문의는 아래 연락처로 문의할 수 있습니다.</p>
      <ul className="list-disc ml-6 mt-2">
        <li>이메일: jennyjung.dev@gmail.com</li>
        <li>개발자: Jung Hae Kyoung</li>
      </ul>

      <br />
      <p>
        본 개인정보처리방침은 앱의 현재 기능을 기준으로 작성되었으며, 서비스
        개선을 위해 지속적으로 업데이트될 수 있습니다.
      </p>
    </main>
  );
}
