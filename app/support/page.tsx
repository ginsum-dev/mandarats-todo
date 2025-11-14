import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">지원 및 문의</h1>

        <p className="mb-4">
          앱 사용 중 문제가 발생하거나 궁금한 점이 있으시면 언제든지 연락해
          주세요.
        </p>

        {/* Contact Information */}
        <div className="bg-gray-100 rounded-xl px-6 py-4 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-indigo-600" />
            연락처 정보
          </h3>

          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="text-sm text-gray-600 mb-1">이메일</p>
              <a
                href="mailto:jennyjung.dev@gmail.com"
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-700"
              >
                jennyjung.dev@gmail.com
              </a>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="text-sm text-gray-600 mb-1">운영 시간</p>
              <p className="text-lg font-semibold text-gray-900">
                평일 오전 9시 - 오후 6시 (주말 및 공휴일 제외)
              </p>
              <p className="text-sm text-gray-500 mt-1">
                * 영업일 기준 1-2일 내 답변드립니다
              </p>
            </div>
          </div>
        </div>

        {/* <p className="mb-2 text-gray-600">
          또는 아래 양식을 통해 피드백을 남겨주세요.
        </p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="이메일 주소"
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <textarea
            name="message"
            placeholder="내용을 입력해주세요"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            피드백 보내기
          </button>
        </form> */}

        <p className="mt-10 text-gray-500 text-sm">
          개발자: Jung Hae Kyoung © 2025 MyManda. All rights reserved.
        </p>
      </div>
    </div>
  );
}
