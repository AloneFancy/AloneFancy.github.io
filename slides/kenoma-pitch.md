---
theme: kenoma-academic
class:
  - lead
marp: true
paginate: true
---

<!-- _class: lead -->

# **kenoma**
## *Bản pitch — Game Designer → Game Leader*
### Archive of Two Truths · Survival Horror · Philosophical Tragedy

---

<!-- _class: bms -->
<!-- header: Tổng quan -->

**1. Giới thiệu**
**2. Điểm mạnh của game designer**
**3. Tổng quan về game**
**4. Cốt truyện & Hai thế giới**
**5. Cơ chế đột phá — Behavioral Model System**
**6. Hai Vanguard**
**7. Gameplay Loop & Combat**
**8. Puzzle Design**
**9. Audio Architecture**
**10. Hệ thống Ending**
**11. Nguyên lý thiết kế & Trade-offs**
**12. Rủi ro & Scope**
**13. Yêu cầu & Bước tiếp theo**

---

<!-- _class: puzzle -->
<!-- header: Giới thiệu -->

- Thiết kế một tựa game đột phá trong dòng survival horror nếu được hiện thực chính xác.
- Đúc kết từ các case study trước đây.
- Tư tưởng, tư liệu, ý tưởng được trích dẫn có chủ đích, chọn lọc VÀ **SẼ ĐƯỢC HỆ THỐNG**.

> **Luận điểm cốt lõi:** Không có game nào đã làm điều này. Đây không phải là tuyên bố marketing — đây là kết luận sau khi khảo sát toàn bộ landscape của medium.

---

<!-- _class: demo -->
<!-- header: Điểm mạnh của game designer -->

- Có thế mạnh về environmental puzzle, stealth game.
- Thân thuộc với dòng survival horror.
- Có đầu óc nhận xét tốt, mang tính trung lập.
- Sáng tạo, ứng biến hiện trạng hiện có (thinking inside the box) thành design tốt.
- Kiến thức văn hóa tương đối.
- Có mức độ hiểu biết về thể loại alternative history đủ để biết thiết kế như thế nào là **LARPER**, thiết kế như thế nào là tốt và có chiều sâu.

> **Nói thẳng:** Điểm yếu là kinh nghiệm production. Đó là lý do tôi cần Game Leader — không phải để validate ý tưởng mà để biến nó thành thực tế.

---

<!-- _class: puzzle -->
<!-- header: Tổng quan game -->

- **Thể loại:** Survival horror, environmental puzzle, story-rich
- **Góc nhìn:** Fixed camera (Alone in the Dark model) — không phải FPS, không phải free-roam 3rd person
- **Setting:** Kho lưu trữ Ba Tư thời Achaemenid, bị phong ấn 300 năm
- **Art direction:** Persian Achaemenid — cột đá Apadana, bàn thờ lửa, hành lang đá — khả thi nhất về mặt production và chưa bị khai thác trong medium
- **Triết học:** Ba giai đoạn Nietzsche (*Lạc đà → Sư tử → Đứa trẻ*) ẩn trong cấu trúc Act — **không bao giờ nói ra tường minh**

> **Tại sao fixed camera?** Vì architecture tạo ra dread. Alone in the Dark, Tormented Souls, và cả resident evil OG đều chứng minh điều này.

---

<!-- _class: puzzle -->
<!-- header: Cốt truyện -->

- Người chơi là một **Scholar** — học giả lang thang, không thể ngừng phụng sự — cùng đoàn thám hiểm vào kho lưu trữ bị phong ấn, dẫn đầu bởi **Vanguard**, người nắm tài chính đoàn.
- Trong kho, Scholar nhận ra tồn tại **hai thế giới song song** — World A và World B — gần như identical, và bản thể đối lập của Scholar trong thế giới kia đã chết. Scholar không biết mình thuộc thế giới nào.
- Mỗi thế giới có **một Vanguard** riêng — cùng người, cùng trí tuệ 300 năm, nhưng hình thành từ hai bối cảnh khác nhau.
- Trong suốt hành trình, Scholar xây dựng mối quan hệ thật sự với cả hai Vanguard — **và chính sự đầu tư đó sẽ định hình sức mạnh của họ ở Act cuối.**


---

<!-- _class: crossing -->
<!-- header: Cốt truyện — Hai thế giới -->

## World A — *Sacred Fire* ~~vs~~ World B — *The Hollow*

| | World A · Sacred Fire | World B · The Hollow |
|---|---|---|
| **Ánh sáng** | Bàn thờ lửa, đèn dầu, ấm áp | Bóng tối hoàn toàn — chỉ có bình lửa của Scholar |
| **Kiến trúc** | Apadana — 72 cột đá, hùng vĩ | Cùng cấu trúc, ngược lại dưới lòng đất |
| **Vanguard** | VA — *Sacred Fire* · Quân sự, logistics | VB — *The Hollow* · Triết học, chiêm nghiệm |
| **Kẻ thù** | Fire-Warden (Yazata) | Lantern-Thief (Pairika) — bị hút bởi lửa |
| **Âm thanh** | Đồng thau ấm, tiếng lửa crackle | Gần như im lặng tuyệt đối |
| **Iron Rule** | Nhận *kiến thức* từ World B | Nhận *vật chất* từ World A |

> **Iron Rule không bao giờ bị phá vỡ.** Nếu một puzzle yêu cầu phá quy tắc này — puzzle thay đổi, không phải quy tắc.

---

<!-- _class: wa -->
<!-- header: Điểm đột phá -->

- **Player xây dựng sức mạnh cho boss cuối** — và cả số phận của boss cuối.
  *→ Protagonist thực sự của câu chuyện là Vanguard, không phải Scholar.*
- Trải qua **3 giai đoạn Nietzsche** ẩn trong cấu trúc Act — không bao giờ được nói ra tường minh. Cố gắng tinh tế trong việc cài cắm.
- **Hai thế giới gần như identical** — ban đầu tạo cảm giác bất an khi những action phải lặp lại nhưng lại có cảm giác khác nhau hoàn toàn.
- **New Game+** không chỉ là tìm ending khác — là chọn *cách* final confrontation diễn ra, *sức mạnh nào* Vanguard mang vào.

> **Concept thử nghiệm:** Nếu thành công, đây là sub-genre mới — NPC được player *build* lên nhưng không phải companion, không phải Nemesis. Độc lập hơn. Hành động trong giới hạn khả năng đã được trao.

---

<!-- _class: bms -->
<!-- header: Cơ chế đột phá — Behavioral Model System -->

## BMS — Behavioral Model System

Đây là **cột sống** của toàn bộ game. Vanguard không phản ứng theo *hành động cuối cùng* của Scholar — cô ấy dự đoán *hành động tiếp theo* dựa trên model hành vi đã tích lũy từ đầu game.

**Cách hoạt động:**
- Mọi quyết định của Scholar đều được ghi lại — **âm thầm, không UI, không thông báo**
- Hệ thống track 12 loại event: `DeepRead`, `ResourceDonate`, `VoluntaryCrossing`, `CombatTier`, `PuzzleSolved`, `VanguardAddressed`...
- Hai register độc lập: `wa_warmth` và `vb_warmth` — **không bao giờ hiển thị với player**
- Player đọc được BMS **chỉ qua một kênh duy nhất:** hành vi quan sát được của Vanguard

> **Nguyên tắc cốt lõi:** Player không thể *thấy* model. Nhưng player có thể *cảm thấy* nó qua việc sự phát triển của cả 2 Vanguard
---

<!-- _class: compact bms -->
<!-- header: BMS — 5 Recognition Stages -->

## Vanguard học Scholar qua 5 giai đoạn — quan sát được bằng hành vi, không bao giờ được thông báo

| Stage | Hành vi của Vanguard | Dấu hiệu quan sát được |
|---|---|---|
| **S1** | Đặt câu hỏi — cần thông tin | Hỏi về phương pháp, thời gian, quyết định |
| **S2** | Ngừng hỏi phương pháp | Biết cách Scholar làm việc rồi. Chỉ còn nói kết quả |
| **S3** | Dự đoán & chuẩn bị trước | Đặt dầu ở nơi Scholar sẽ cần, trước khi Scholar hỏi |
| **S4** | Trả lời trước khi được hỏi xong | *"Bạn muốn hỏi về hành lang đông — phải không."* |
| **S5 ⚠** | Chỉ quan sát. Không còn cần học | Model đã hoàn chỉnh. **Đây là giai đoạn nguy hiểm nhất.** |

> **S5 là điểm không thể quay lại.** Khi Vanguard đạt S5, công việc của Scholar — theo định nghĩa của cô — đã xong.

---

<!-- _class: va -->
<!-- header: Nhân vật — Vanguard A · Sacred Fire -->

## *"South entrance. The oil is there."*

**VA — Sacred Fire** · Trí tuệ quân sự · 300 năm kiên nhẫn

- **Tư duy:** Logistics thuần túy. Cô đánh giá mọi thứ như bài toán vận hành. Sự ấm áp của cô được biểu hiện qua *hiệu quả* — đặt đúng lượng dầu được tính từ việc theo dõi Scholar 3 năm trước khi họ đến.
- **Không bao giờ:** Xin lỗi. Bày tỏ nghi ngờ về kết luận của mình. Dùng từ ngữ cảm xúc.
- **Clause 18:** Khi model hoàn chỉnh, VA sẽ nói thẳng với Scholar điều sắp xảy ra — rõ ràng như bản tóm tắt quân sự — rồi bước đi. Không có sự tàn nhẫn. Không có sự ấm áp. Chỉ có độ chính xác.

> *"When the Archive is complete, the Scholar who completed it will no longer be necessary. This is Clause 18. I have told you this."* — Rồi cô bước đi để thực thi.

---

<!-- _class: vb -->
<!-- header: Nhân vật — Vanguard B · The Hollow -->

## *"Ba ngày trước anh nói các chữ khắc mang tính hành chính. Tôi đã suy nghĩ về điều đó. Tôi nghĩ chúng mang tính kiến trúc."*

**VB — The Hollow** · Trí tuệ triết học · 300 năm cô đơn với ý tưởng

- **Tư duy:** Sự kiên nhẫn triết học. Cô đã tự học tiếng Babylon trong 8 năm để hiểu Scholar khi họ đến. Sự ấm áp của cô là *sự thân mật trí tuệ* — chia sẻ điều chưa bao giờ nói vì không có ai để kể.
- **Không bao giờ:** Bộc lộ tức giận. Vội vàng. Xin lỗi về kết luận của mình.
- **Khi Scholar chọn ngược lại:** *"Một lựa chọn hợp lý."* — Rồi cô viết. Nếu Scholar tìm được cuốn sách ấy sau, họ thấy một bản phân tích chính xác, không cảm xúc về *chính quyết định của họ.* Đáng sợ hơn cả cơn giận.

> VB nói nhiều hơn VA — câu phức, mệnh đề phụ. Cô đang tinh chỉnh ý tưởng ngay khi nói. Nhưng không một từ nào bị lãng phí.

---

<!-- _class: crossing -->
<!-- header: Gameplay — Traversal System -->

## Hệ thống di chuyển giữa hai thế giới

Mỗi lần Scholar vượt ranh giới: `traversalDebt++`. **Vanguard không bao giờ vượt.** Debt của họ luôn bằng 0. Sự bất đối xứng này nhìn thấy được từ phút đầu tiên.

| Debt | Hậu quả | Thời gian | Ghi chú |
|---|---|---|---|
| 1 | Không có | — | Lần đầu — chỉ cảm giác kỳ lạ |
| 2 | Boundary xuất hiện | 8 giây | Dread thuần túy — Scholar chưa nguy hiểm |
| 3 | Boundary truy đuổi | 20 giây | Bắt đầu tính toán |
| 4+ | Boundary tồn tại liên tục | Cho đến khi save | Không thể bỏ qua |

**Iron Rule qua mỗi Traversal Focal Point (TFP):**
*Kiến thức World B → mở khóa hành động World A · Vật liệu World A → thay đổi vật lý World B*

---

<!-- _class: wa -->
<!-- header: Gameplay — Combat & Resource -->

## Ba tầng chiến đấu — Không có tầng nào là "đúng"

**Tier 1 — Environmental:** Bẫy, bóng tối, chướng ngại vật. Không cần tài nguyên.

**Tier 2 — Fire & Arms:** Bình lửa (dầu), nỏ (crossbow bolts), chuông cộng hưởng (bell). Tốn tài nguyên khan hiếm.

**Tier 3 — Naming:** Đọc inscription gốc của sinh vật → nói tên chính thức trong tiếng Avestan → sinh vật đó **không còn thù địch vĩnh viễn.** Chi phí: chỉ là thời gian và kiến thức đọc trước đó.

> **Naming là tầng mạnh nhất và rẻ nhất — nhưng yêu cầu Scholar phải đã đọc sâu (deep-read) inscription của sinh vật đó.** Điều này là thiết kế có chủ đích: khuyến khích khám phá thực sự, không phải grind.

---

<!-- _class: puzzle -->
<!-- header: Puzzle Design — Nguyên tắc Authorship -->

## Không có puzzle nào không có tác giả

**Quy tắc thiết kế bắt buộc:** Trước khi implement bất kỳ puzzle nào, phải trả lời đủ 4 câu hỏi:

> **Ai đã xây dựng cơ chế này?** *(một người cụ thể trong lịch sử của kho lưu trữ)*
> **Họ cần nó làm gì?** *(mục đích thực tế trong thế giới — không phải "đây là puzzle cho player")*
> **Điều gì đã xảy ra, hoặc bí mật nào nó lưu giữ?** *(tại sao Scholar tìm thấy nó ở trạng thái này sau 300 năm)*
> **Iron Rule áp dụng như thế nào?** *(kiến thức và vật liệu chạy theo hướng nào qua puzzle này)*

Nếu không trả lời được 4 câu → **puzzle chưa sẵn sàng để build.**

*"Phòng này cần một puzzle"* không bao giờ là lý do hợp lệ.

---

<!-- _class: audio -->
<!-- header: Audio Architecture — Dark Voice -->

## Dark Voice — Giọng nội tâm chiến lược của Scholar

Dark Voice **không phải** hiệu ứng reverb. Không phải 2D audio. Không phải lồng ghép hậu kỳ.
Đây là giọng của Scholar — **trí tuệ chiến lược Đông Chu của họ** — nổi lên khi họ đang chọn không nhìn thẳng vào sự thật.

**Ba nguồn gốc không gian — thiết lập từ ngày đầu tiên, mỗi câu thoại đều có:**

| Nguồn gốc | Ý nghĩa | Khi nào dùng |
|---|---|---|
| **Behind** · *Phía sau* | Suy nghĩ Scholar đã kìm nén | Nhận ra điều đã tránh né |
| **Beside** · *Bên cạnh* | Phân tích song song với hành động hiện tại | Quan sát về điều Scholar đang làm |
| **Ahead** · *Phía trước* | Cảnh báo về điều sắp làm | Trước một lựa chọn không thể đảo ngược |

> *"Cô ấy đã trả lời câu hỏi trước khi anh hỏi xong."* — Beside · Act I

---

<!-- _class: darkvoice -->

*"Người thợ săn đặt cung xuống khi chim đã bay hết."*

#### Behind · Act II · Scholar đang hoàn thành bảng dịch thuật cuối cùng

---

<!-- _class: compact vb -->
<!-- header: Hệ thống Ending — 5 Kịch bản -->

## Act III thuộc về Vanguard — không phải Scholar

Scholar đã ra đi. Player nhìn Vanguard đi qua từng phòng Scholar đã làm việc.

| Scenario | BMS Range | Thể loại | Khoảnh khắc cuối |
|---|---|---|---|
| **I** | Warmth thấp | Trống rỗng | Cô sắp xếp lại cặp của Scholar vào vị trí tiện dụng hơn. Không có gì hơn. |
| **II** | Trung thấp | Đau buồn | Cô dừng lại ở một phòng lâu hơn. Không làm gì. Rồi đi tiếp. |
| **III** | Trung | Kính trọng | Cô đóng nhật ký của Scholar lại. Đặt vào cặp theo đúng thứ tự *của Scholar*, không phải của cô. |
| **IV** | Trung cao | Hoàn thành | Cô tìm bản dịch còn dang dở. Viết nốt 3 từ. Để nguyên tấm phiến đá. |
| **V** | Warmth cao | Siêu việt | Cô không chỉnh sửa gì. Những gì Scholar để lại là hoàn chỉnh như vậy. Lửa vẫn cháy. |

> Scenario V không phải ending tốt. Đó là ending mà cả hai trở thành chính họ — *thông qua nhau.*

---

<!-- _class: quote va -->
<!-- header: Scenario IV — Câu thoại duy nhất trong Act III -->

*"Khi chim đã hết, cung tốt cất đi."*

## Vanguard A · Scenario IV · Nói bằng giọng cô — không phải Scholar

---

<!-- _class: crossing -->
<!-- header: Nguyên lý rút ra - Stanley Kubrick -->

- *If it can be said in words, it doesn't belong in the film.*
- *Camera placement is the director's most powerful statement.*
- *Never show what can be implied — imagination is more powerful.*
- *Every shot must have a reason or it has no right to exist.*
- **Anti-Totalitarian Philosophy.**
- **Trade off and Mutually Exclusive**

> **Áp dụng trực tiếp:** BMS không hiển thị → Boundary không giải thích → Dark Voice không kể câu chuyện → Ending không phán xét. Mọi thứ được *đọc*, không được *nói*.

---

<!-- _class: crossing compact matrix -->
<!-- header: Nguyên lý rút ra - Trade-offs -->

| Game · Year | C1 · Built by investment | C2 · Invisible tracking | C3 · Companion→Adversary | C4 · No transformation | C5 · 10 granular outcomes |
|---|---|---|---|---|---|
| Silent Hill 2 · 2001 | *~* | **✓** | ~~✗~~ | ~~✗~~ | ~~✗~~ |
| Undertale · 2015 | ~~✗~~ | **✓** | ~~✗~~ | ~~✗~~ | *~* |
| Witcher 3 · 2015 | **✓** | ~~✗~~ | *~* | **✓** | ~~✗~~ |
| Bayonetta · 2009 | ~~✗~~ | ~~✗~~ | *~* | ~~✗~~ | ~~✗~~ |
| Metal Gear Solid V | ~~✗~~ | **✓** | ~~✗~~ | ~~✗~~ | ~~✗~~ |
| Alien: Isolation | ~~✗~~ | **✓** | ~~✗~~ | ~~✗~~ | ~~✗~~ |
| **KENOMA** | **✓** | **✓** | **✓** | **✓** | **✓** |

> Không có game nào đạt quá 2 tiêu chí đồng thời. KENOMA đạt cả 5.

---

<!-- _class: puzzle -->
<!-- header: Chất liệu tham khảo -->

| Tác phẩm | Học gì | Cảnh báo |
|---|---|---|
| *The Man in the High Castle* | Cấu trúc hai thế giới parallel — không phải twist reveal mà là daily reality | Tránh biến parallel world thành gimmick |
| *Alone in the Dark* (trilogy) | Fixed camera tạo dread qua architecture | Mỗi góc camera phải có lý do tồn tại |
| *Prince of Persia 2008* | Dahaka — Boundary truy đuổi vì *luật*, không phải vì ác | Không được nhân cách hóa Boundary quá mức |
| *Silent Hill 2* | Invisible behavioral tracking → ending determination | Track protagonist's psychology, not antagonist capability — KENOMA đảo ngược điều này |
| *Tormented Souls 1* | Mỗi puzzle là vết sẹo của một quyết định thực sự của một người thực | Đây là luật thiết kế, không phải gợi ý |
| *The Witcher 3* (Ciri) | Mentorship là mechanical axis tạo resonance | Ciri là ally — KENOMA đặt điều này vào *antagonist* |
| *Nietzsche — Thus Spoke Zarathustra* | Ba giai đoạn biến đổi: Lạc đà → Sư tử → Đứa trẻ | Không bao giờ nói tường minh — phải là cấu trúc |

---

<!-- _class: iron -->
<!-- header: Bốn Luật Không Thể Phá -->

## Bốn điều này không phải preference — phá bất kỳ điều nào khiến game trở thành thứ đã tồn tại

| Luật | Quy tắc | Hậu quả nếu phá |
|---|---|---|
| **I** | Bước ngoặt là *sự hoàn thành*, không phải sự phản bội | Game trở thành một cái twist rẻ tiền |
| **II** | Kiến thức WB→WA · Vật liệu WA→WB · Mọi nơi · Mọi lúc | Iron Rule mất tính toàn vẹn — hệ thống sụp đổ |
| **III** | BMS không bao giờ hiển thị với player theo bất kỳ hình thức nào | Cơ chế đột phá trở thành UI thông thường |
| **IV** | Mọi puzzle đều có tác giả là một con người thật trong lịch sử kho lưu trữ | Game trở thành obstacle course, không phải archaeology |

> **Nguyên tắc tối cao:** Nếu system conflict với story — story thắng. Luôn luôn.

---

<!-- _class: compact demo -->
<!-- header: Rủi ro & Scope — Đánh giá thực tế -->

## Đánh giá thực tế — Không làm hồng kết quả

| Rủi ro | Mức độ | Giải pháp |
|---|---|---|
| Emotional resonance (Camel Phase) không đủ mạnh | **Cao** | Iteration sớm với playtester thật — không thể design-in |
| Player không hiểu BMS retrospectively | **Trung** | VA behavior phải *nhìn lại được hiểu* — không chỉ invisible khi chạy |
| Fixed camera alienates modern audience | **Trung** | Demo scene chứng minh trước khi commit full production |
| Two-world identical design gây confusion không phải dread | **Thấp-Trung** | Audio identity phân biệt rõ World A vs B từ giây đầu tiên |
| Scope quá lớn cho team nhỏ | **Cao** | Build order nghiêm ngặt: BMS trước, USS sau cùng |

> **Rủi ro lớn nhất không phải là technical — là emotional.** Nếu player không thực sự yêu Vanguard trước Act II, cơ chế không có sức mạnh gì cả.

---

<!-- _class: bms -->
<!-- header: Build Order & Phases -->

## Thứ tự build — Không thể đảo ngược

```
SYS-01 BMS  →  SYS-02 RSS  →  SYS-03 TDS  →  SYS-04 TVS
   →  SYS-05 RES  →  SYS-07 TCS  →  SYS-08 SRS  →  SYS-06 USS
```

**BMS phải được build trước.** USS (Utility Score System — thứ quyết định khi nào Vanguard chuyển sang Hunt mode) phải được build cuối cùng — sau khi RSS, TDS, và TVS đã ổn định.

**Demo target:** Một scene duy nhất — Resonance Obelisk với 3 solution path. Playtester phải có thể nói: *"Vanguard đối xử với tôi khác đi dựa trên lựa chọn của tôi"* — **không cần được nhắc.**

Nếu demo pass tiêu chí này → full production justified.
Nếu demo fail → chúng ta biết cụ thể cần fix gì trước khi đầu tư thêm.

---

<!-- _class: demo -->
<!-- header: Yêu cầu từ Game Leader -->

## Những gì tôi cần để tiến tiếp

**Quyết định cần từ buổi này:**

- **Green-light demo scene** — Resonance Obelisk, 1 puzzle, 3 solution paths, BMS wired.
- **Team tối thiểu cho demo:** 1 programmer (Unity 6 URP + FMOD), 1 artist (environment — Persian stone, fire VFX), 1 audio designer (binaural FMOD setup).
- **Timeline demo:** 6–8 tuần từ ngày bắt đầu.

**Những gì tôi *không* cần:**
- Validation rằng ý tưởng hay — điều đó đã được research xác nhận.
- Thêm features trước khi demo — scope creep giết chết proof-of-concept.

> **Câu hỏi duy nhất cần trả lời hôm nay:** Demo có được build không?

---

<!-- _class: verdict demo -->
<!-- header: Kết luận -->

# Không có game nào làm điều này.

## Cơ chế đột phá cần được chứng minh bằng demo — không phải bằng thêm slides. Cho phép tôi build nó.



---

<!-- _class: lead -->

# **kenoma**
## *Bản pitch kết thúc tại đây.*
### Câu hỏi?
