export default function PrivacyPolicy() {
  return (
    <article className="my-16 p-8 lg:max-w-[70dvw] lg:p-0">
      <h1 className="mb-8 text-2xl font-bold">개인정보처리방침</h1>
      <p>
        KNOU 운영팀(이하 '회사')은 개인정보보호법 등 관련 법령에 따라 KNOU 서비스 이용자(이하 '회원')의 개인정보를
        보호하고 정보주체의 개인정보와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을
        수립 및 고지하고자 합니다.
      </p>

      <h2 className="mt-6 font-semibold">1. 개인정보의 처리 목적</h2>
      <p>회사는 회원의 개인정보를 다음의 목적으로 처리하며, 본 약관에 명시된 이외의 용도로 처리하지 않습니다.</p>
      <ol className="list-decimal list-inside">
        <li className="mt-2 ml-2">
          홈페이지 회원가입 및 관리
          <br />
          회원 가입의사 확인, 서비스 제공에 다른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종
          고지·통지, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.
        </li>
        <li className="mt-2 ml-2">
          서비스 제공
          <br />
          가입한 회원에게 한국방송통신대학교 강의 정보 제공 등 KNOU 서비스를 제공하기 위하여 개인정보를 처리합니다.
        </li>
        <li className="mt-2 ml-2">
          민원사무처리
          <br />
          민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를
          처리합니다.
        </li>
        <li className="mt-2 ml-2">
          법적 증거로 활용
          <br />
          법적 분쟁의 해소를 위한 증거 자료로 제출할 수 있습니다.
        </li>
      </ol>

      <h2 className="mt-6 font-semibold">2. 처리하는 개인정보의 항목 및 보유 기간</h2>
      <p>회사는 KNOU 서비스 제공을 정보주체의 아래 개인정보를 회원 탈퇴 시까지 보유 및 처리합니다.</p>
      <ol className="list-decimal list-inside">
        <li className="mt-2 ml-2">
          로그인 ID, 이메일
          <br />
          처리목적: 회원가입, 인증메일 발송, 서비스 중복 가입 방지, 회원 전용 서비스 제공
        </li>
        <li className="mt-2 ml-2">
          비밀번호
          <br />
          처리목적: 회원가입 및 로그인, 회원 전용 서비스 제공
        </li>
      </ol>
      <p className="mt-4">인터넷 서비스 특성상 이용과정에서 아래와 같은 정보가 추가로 수집될 수 있습니다.</p>
      <ul className="list-disc list-inside">
        <li className="mt-2 ml-2">
          쿠키
          <br />
          처리목적: 로그인 상태 유지
        </li>
      </ul>

      <h2 className="mt-6 font-semibold">3. 개인정보의 파기</h2>
      <p>
        회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를
        파기합니다. 개인정보 파기의 절차 및 방법은 다음과 같습니다.
      </p>
      <ol className="list-decimal list-inside">
        <li className="mt-2 ml-2">
          파기절차
          <br />
          보유기간이 경과한 개인정보는 보유 종료일로부터 즉시 파기합니다.
        </li>
        <li className="mt-2 ml-2">
          파기방법
          <br />
          전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는
          분쇄기로 분쇄하거나 소각하여 파기합니다.
        </li>
      </ol>

      <h2 className="mt-6 font-semibold">4. 개인정보의 안전성 확보조치</h2>
      <p>회사는 정보주체의 개인정보를 안전하게 처리하기 위해 다음과 같은 조치를 취하고 있습니다.</p>
      <ol className="list-decimal list-inside">
        <li className="mt-2 ml-2">"개인정보의 안전성 확보조치 기준"에 의거한 내부관리계획을 수립 및 시행합니다.</li>
        <li className="mt-2 ml-2">
          개인정보취급자 및 개인정보에 대한 내부관계자의 접근을 최소화하고 정기적인 직원 교육을 실시합니다.
        </li>
        <li className="mt-2 ml-2">개인정보를 암호화하여 관리하고 외부 접근을 차단 통제합니다.</li>
      </ol>

      <h2 className="mt-6 font-semibold">5. 개인정보 자동 수집 장치의 설치・운영 및 거부방법</h2>
      <p>회사는 회원의 서비스 이용 편의를 위해 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</p>
      <p>
        쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자
        컴퓨터의 하드디스크에 저장됩니다. 쿠키는 회원의 로그인 상태를 유지하기 위해 사용되며, 개인을 식별하는 정보는
        쿠키에 저장되지 않습니다.
      </p>
      <p className="mt-4">회원은 다음과 같은 방법을 통해 쿠키 저장을 거부할 수 있습니다.</p>
      <ul className="list-disc list-inside">
        <li className="mt-2 ml-2">
          Chrome: [설정] &gt; [개인 정보 보호 및 보안] &gt; [사이트 설정] &gt; [추가 콘텐츠 설정] &gt; [기기 내 사이트
          데이터] 메뉴에서 저장 여부 설정
        </li>
        <li className="mt-2 ml-2">
          Edge: [설정] &gt; [쿠키 및 사이트 권한] &gt; [쿠키 및 사이트 데이터 관리 및 삭제] 메뉴에서 '차단' 여부 설정
        </li>
      </ul>

      <h2 className="mt-6 font-semibold">6. 정보주체 및 법정대리인의 권리・의무 및 행사방법</h2>
      <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
      <ol className="list-decimal list-inside">
        <li className="mt-2 ml-2">개인정보 열람요구</li>
        <li className="mt-2 ml-2">오류 등이 있을 경우 정정 요구</li>
        <li className="mt-2 ml-2">삭제요구</li>
        <li className="mt-2 ml-2">처리정지 요구</li>
      </ol>
      <p className="mt-4">
        위 항목에 따른 권리 행사는 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체
        없이 조치하겠습니다.
      </p>
      <p>
        정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해
        개인정보를 이용하거나 제공하지 않습니다.
      </p>
      <p>
        위 항목에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우
        개인정보 보호법 시행규칙 별지 제 11호 서식에 따른 위임장을 제출하셔야 합니다.
      </p>
      <p>
        개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할
        수 없습니다.
      </p>

      <h2 className="mt-6 font-semibold">7. 개인정보 보호책임자</h2>
      <p>
        회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제
        등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
      </p>
      <p className="mt-4">
        [개인정보 보호책임자]
        <br />
        성명: 한승아
        <br />
        연락처: 00hyun_@naver.com
      </p>
      <p className="mt-4">
        개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항은 개인정보 보호책임자 및 담당부서로 문의하실 수
        있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
      </p>

      <h2 className="mt-6 font-semibold">8. 권익침해에 대한 구제방법</h2>
      <p>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
      <ul className="list-disc list-inside">
        <li className="mt-2 ml-2">
          개인정보 침해신고센터: (국번없이) 118
          <br />
          https://privacy.kisa.or.kr/
        </li>
        <li className="mt-2 ml-2">
          개인정보 분쟁조정위원회: (국번없이) 1833-6972
          <br />
          https://kopico.go.kr/
        </li>
        <li className="mt-2 ml-2">
          대검찰청 사이버범죄수사단: 02-3480-2000
          <br />
          https://spo.go.kr/
        </li>
        <li className="mt-2 ml-2">
          경찰청 사이버수사국: (국번없이) 182
          <br />
          https://cyberbureau.police.go.kr/
        </li>
      </ul>

      <h2 className="mt-6 font-semibold">9. 개인정보 처리방침의 변경</h2>
      <p>이 개인정보처리방침은 2024년 8월 26일부터 적용됩니다.</p>
      <p>
        회사는 이 개인정보처리방침의 내용에 변경이 있을 경우 개정 시행 최소 7일 전에 홈페이지에 공지할 것입니다. 이전에
        개정된 개인정보처리방침의 내용은 아래에서 확인하실 수 있습니다.
      </p>
      <ul className="list-disc list-inside">
        <li className="mt-2 ml-2">2024-08-26(최신 문서): 최초 시행</li>
      </ul>
    </article>
  );
}