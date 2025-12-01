export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 pb-[calc(env(safe-area-inset-bottom)+3rem)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-bold text-2xl mb-2">이삭디자인</div>
            <div className="text-sm opacity-80 mb-4">ISAAC DESIGN</div>
            <p className="text-sm opacity-80 leading-relaxed">프로토타입 & 목업 제작 전문 업체</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>CNC 정밀 가공</li>
              <li>3D 프린팅</li>
              <li>진공 주조</li>
              <li>표면 처리</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="tel:031-313-5710" className="hover:opacity-100 transition-opacity active:underline">
                  Tel: 031-313-5710
                </a>
              </li>
              <li>
                <a href="tel:010-9252-4644" className="hover:opacity-100 transition-opacity active:underline">
                  Mobile: 010-9252-4644
                </a>
              </li>
              <li>Fax: 031-313-5711</li>
              <li>
                <a href="mailto:bini49@naver.com" className="hover:opacity-100 transition-opacity active:underline">
                  Email: bini49@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} 이삭디자인. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
