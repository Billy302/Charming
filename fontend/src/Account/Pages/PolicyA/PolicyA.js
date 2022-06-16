import React from "react";
// CSS檔
import style from "./PolicyA.module.css";
// navbar
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";

function PolicyA() {
  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem("auth");

  return (
    <>
      {now == "true" ? <LoginNav /> : <UnloginNav />}
      <section className={style.main}>
        <main>
          <h1 className={style.h1}>使用條款</h1>
          <hr className={style.hr} />
          <h3 className={style.h3}>1. 認知與接受條款</h3>
          <p className={style.p}>
            本服務條款旨在規範您使用本服務時，我們與您之間的關係，當您進入
            Charming
            網站及使用本服務時，即表示您已閱讀、瞭解並同意接受本服務條款之所有內容。
          </p>
          <p className={style.p}>
            本服務包括本網站及透過本網站或其相關服務所提供的所有資訊、連結網頁、功能、資料、文字、影像、相片、圖形、音樂、聲音、影片、訊息、標籤、內容、程式設計、軟體、應用程式服務
            (包括但不限於任何行動應用服務) 。
          </p>
          <p className={style.p}>
            當您使用 Charming
            特定服務或新增功能時，可能會依據該特定服務之性質，而須遵守 Charming
            所另行公告之服務條款或相關規定。此另行公告之服務條款或相關規定，亦均併入屬於本服務條款之一部分，本服務條款規範您對於
            Charming 所提供之服務的使用行為。
          </p>
          <p className={style.p}>
            Charming
            有權於任何時間修改或變更本服務條款之內容，建議您隨時注意該等修改或變更。您於任何修改或變更後繼續使用本服務，視為您已閱讀、瞭解並同意接受該等修改或變更。如果您不同意本服務條款的內容，或者您所屬的國家或地域排除本服務條款內容之全部或部份時，您應立即停止使用本服務。
          </p>
          <p className={style.p}>
            若您為未滿二十歲，除應符合上述規定外，並應於您的家長（或監護人）閱讀、瞭解並同意本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本服務。當您使用或繼續使用本服務時，即推定您的家長（或監護人）已閱讀、瞭解並同意接受本服務條款之所有內容及其後修改變更。
          </p>
          <h3 className={style.h3}>2. 與第三人網站的連結</h3>
          <p className={style.p}>
            本服務或協力廠商可能會提供連結至其他網站或網路資源的連結。您可能會因此連結至其他業者經營的網站，但不表示
            Charming
            與該等業者有任何關係。其他業者經營的網站均由各該業者自行負責，不屬
            Charming 控制及負責範圍之內。Charming
            對任何檢索結果或外部連結，不擔保其合適性、可依賴性、即時性、有效性、正確性及完整性。
          </p>
          <h3 className={style.h3}>3. 您的註冊義務</h3>
          <p className={style.p}>
            為了能使用本服務，您同意以下事項： (a)
            依本服務註冊表之提示提供您本人正確、最新及完整的資料， (b)
            維持並更新您個人資料，確保其為正確、最新及完整。若您提供任何錯誤、不實或不完整的資料，Charming
            有權暫停或終止您的帳號，並拒絕您使用本服務之全部或部份。
          </p>
          <h3 className={style.h3}>4. 買賣或其他交易行為</h3>
          <p className={style.p}>
            廠商或個人透過本服務進行商品買賣、服務或其他交易行為，各該買賣或其他合約均僅存在您與各該廠商或個人兩造之間。您應要求各該廠商或個人，就其商品、服務或其他交易標的物之品質、內容、運送、保證事項與瑕疵擔保責任等，事先詳細闡釋與說明。您因前述買賣、服務或其他交易行為所產生之爭執，應向各該廠商或個人尋求救濟或解決之道。
          </p>
          <h3 className={style.h3}>5. 智慧財產權的保護 Charming</h3>
          <p className={style.p}>
            所使用之軟體或程式、網站上所有內容，包括但不限於商品資訊、圖片、檔案、網站架構、網站畫面的安排、網頁設計、會員內容等，均由
            Charming
            或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。任何人不得逕自使用、修改、重製、公開播送、公開傳輸、公開演出、改作、散布、發行、公開發表、進行還原工程、解編或反向組譯。若您欲引用或轉載前述軟體、程式或網站內容，除明確為法律所許可者外，必須依法取得
            Charming
            或其他權利人的事前書面同意。尊重智慧財產權是您應盡的義務，如有違反，您應對
            Charming 負損害賠償責任。Charming
            及其關係企業為行銷宣傳本服務，就本服務相關之商品或服務名稱、圖樣等（以下稱「Charming
            商標」），依其註冊或使用之狀態，受商標法及公平交易法等之保護，未經
            Charming 事前書面同意，您同意不以任何方式使用 Charming 商標。
          </p>
        </main>
      </section>
    </>
  );
}

export default PolicyA;
