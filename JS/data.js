const users = [
  { id: "test", password: "123456", role: "user" },
  { id: "admin", password: "admin", role: "admin" },
];

let cart = [],
  currentUser,
  userExtraInfo = [];

const products = [
  {
    name: "Asus VivoBook",
    model: "S433EA-EB179T",
    price: 22449000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 1165G7",
      ram: "16GB",
      storage: "512GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "Win 10",
      color: "Black",
    },
    description: `<h2>THIẾT KẾ NỔI BẬT</h2>
    <p>
      Nổi bật có nghĩa là thể hiện bản thân ra bên ngoài và VivoBook S14 nổi bật lên
      nhờ thân máy hoàn toàn bằng kim loại với viền cắt kim cương, màu sắc độc nhất
      và phím Enter vàng khác biệt. Thiết kế cắt kim cương cũng giúp bạn dễ dàng mở
      nắp máy ra hơn.
    </p>
    <h2>MÀU SẮC</h2>
    <p>
      Màu sắc độc nhất của VivoBook S14 tạo nên xu hướng mới giúp thể hiện chính bản
      thân bạn. Bạn sẽ tự do lựa chọn màu sắc phản ánh tích cực phong cách và cá
      tính của bản thân. Vẻ ngoài đầy màu sắc này sẽ khiến bạn trở nên nổi bật một
      cách khác biệt.
    </p>
    <h2>MỎNG VÀ NHẸ</h2>
    <p>
      VivoBook S14 giúp bạn có thể làm việc và giải trí ngay cả trong lúc di chuyển.
      Với độ dày chỉ 15.9mm, tổng khối lượng chỉ 1,4kg và thiết kế siêu mỏng, bạn
      chỉ cần cho VivoBook S14 vào balo và mang đi mọi nơi bạn muốn nên hãy ra ngoài
      và đừng ngần ngại thể hiện bản thân với thế giới xung quanh.
    </p>
    <h2>MÀN HIỂN THỊ NANOEDGE</h2>
    <p>
      Màn hình NanoEdge viền mỏng đem đến cho bạn trải nghiệm hình ảnh đắm chìm và
      chiếm không gian nhỏ gọn hơn giúp VivoBook S14 chiếm ít không gian trên bàn
      làm việc hoặc trong ba lô của bạn. Trên tất cả, màn hình Full HD này có góc
      nhìn rộng và tái tạo màu sắc vượt trội để đem lại hình ảnh chân thực, sống
      động.
    </p>
    <h2>HIỆU NĂNG TUYỆT VỜI</h2>
    <p>
      Bất kể bạn là một nhà sáng tạo nội dung hay chỉ sử dụng VivoBook S14 như một
      chiếc máy tính xách tay thông thường, VivoBook S14 có đủ hiệu năng bạn cần để
      phục vụ cho cả ngày làm việc. Thiết bị trang bị bộ vi xử lý Intel® Core™ i7
      thế hệ thứ 11 với bộ nhớ lên tới 16GB SSD PCIe® dung lượng lớn giúp bạn có bộ
      nhớ siêu nhanh để tiếp cận nhanh chóng mọi thứ.
    </p>
    <h2>WI-FI 6</h2>
    <p>
      Hãy bước ra khỏi bàn làm việc cố định để vươn tới tương lai – dù bạn ở nhà,
      trong một quán cà phê cổ điển ở trung tâm hay tại sân bay – văn phòng làm việc
      là bất cứ nơi đâu bạn chọn. Intel Wi-Fi 6 (802.11ax) đem lại tốc độ kết nối
      siêu nhanh để truyền các tệp lớn nhanh hơn, chơi game online ổn định hơn và
      trò chuyện video mượt mà hơn.
    </p>
    <h2>NUMBERPAD</h2>
    <p>
      NumberPad mới giúp bạn dễ dàng gõ số, chỉ cần chạm vào biểu tượng bàn di chuột
      để biến bàn di chuột thành phím số ảo có đèn LED.
    </p>
    <h2>HARMAN KARDON</h2>
    <p>
      Âm nhạc là âm thanh của cuộc sống và VivoBook S14 giúp nó hoàn thiện hơn. Hệ
      thống âm thanh được chứng nhận bởi Harman Kardon mang đến âm thanh chuẩn mực
      chất lượng cao. đã chứng nhận
    </p>
    <h2>HIỆU NĂNG VƯỢT TRỘI</h2>
    <p>
      VivoBook S14 sở hữu hàng loạt tính năng đa dạng được thiết kế để giúp bạn làm
      hiệu hiệu quả suốt cả ngày. Tính năng sạc nhanh giúp bạn sạc pin đến mức 60%
      chỉ trong vòng 49 phút còn bàn phím kích cỡ đầy đủ đem đến trải nghiệm gõ phím
      thoải mái.
    </p>
    `,
    image: "vivobook.jpg",
  },
  {
    name: "Asus ZenBook",
    model: "UX434FLC-A6212T",
    price: 24499000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i5 10210U",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "14 inch FHD",
      os: "Win 10",
      color: "Silver",
    },
    description: `<p>
    Đẳng cấp, thời trang và công nghệ, tất cả đều hội tụ trong Laptop Asus ZenBook
    UX434FLC-A6212T. Đây là chiếc Ultrabook 14 inch nhỏ gọn nhất thế giới và màn
    hình ScreenPad 2.0 siêu độc đáo.
  </p>
  
  <h2>Chiếc laptop 14 inch nhỏ gọn và di động nhất</h2>
  <p>
    Một chiếc laptop Asus màn hình 14 inch luôn là kích thước tiêu chuẩn được số
    đông người dùng lựa chọn. Laptop Asus ZenBook UX434FLC-A6212T mở ra một kỷ
    nguyên mới khi có khung máy siêu nhỏ gọn và siêu nhẹ. Nhờ màn hình NanoEdge
    viền siêu mỏng cả 4 cạnh, laptop ZenBook 14 thế hệ mới là chiếc laptop 14 inch
    nhỏ gọn nhất thế giới với độ mỏng 1,8cm và trọng lượng 1,1kg. Thật dễ dàng để
    bạn có thể sáng tạo ở mọi lúc mọi nơi.
  </p>
  <p>
    Là một chiếc laptop thời trang có vẻ ngoài “mong manh” nhưng trên thực tế
    Laptop Asus ZenBook UX434FLC-A6212T lại rất bền vững, thậm chí là đạt chuẩn
    quân đội MIL-STD-810G. ZenBook 14 đã phải trải qua nhiều bài kiểm tra về độ
    bền khi phải hoạt động ở môi trường khắc nghiệt bao gồm độ cao, nhiệt độ và độ
    ẩm… để có độ bền cao nhất khi đến tay người dùng. Cuộc sống hiện đại cần phải
    luôn đảm bảo năng lượng. ZenBook 14 hiểu điều đó và cung cấp cho bạn thời
    lượng pin lên tới gần 14 tiếng sử dụng liên tục. Dù là làm việc suốt cả ngày
    dài hay tham gia các cuộc họp quan trọng, Laptop Asus ZenBook UX434FLC-A6212T
    vẫn luôn có đầy đủ pin để đồng hành bên cạnh bạn.
  </p>
  <h2>Đẳng cấp đến từng chi tiết</h2>
  <p>
    Hướng đến người dùng phân khúc cao cấp, Laptop Asus ZenBook UX434FLC-A6212T có
    thiết kế tỉ mỉ và chăm chút đến từng chi tiết nhỏ. Phiên bản màu xanh hoàng
    gia trang nhã lấy cảm hứng từ vẻ đẹp tuyệt diệu của ánh bình minh vàng rực
    trên đại dương xanh thẳm tạo nên một thiết kế cổ điển nhưng đầy tinh tế. Tất
    nhiên không thể không nhắc đến nét đặc trưng của dòng ZenBook, đó là những
    đường vân kim loại đồng tâm trên nắp lưng và logo vàng hồng tạo điểm nhấn. Mọi
    chi tiết trên ZenBook UX434 đều toát lên sự đẳng cấp thời thượng.
  </p>
  <p>
    Bản lề ErgoLift là sự sáng tạo tuyệt vời của dòng ZenBook để bạn có được những
    trải nghiệm thoải mái nhất. Với việc bản lề nâng máy lên một góc nghiêng 3 độ,
    qua đó mở laptop ở góc 145 độ, tối ưu cho mắt và cách đặt tay của người dùng.
    Bạn sẽ có được góc nhìn tốt hơn, khoảng cách với mắt an toàn hơn và cảm giác
    đánh máy thoải mái nhất. Chưa kể việc dùng bản lề nâng như thế này giúp phần
    viền màn hình cạnh dưới mỏng hơn, đồng thời tăng cường hiệu suất làm mát và âm
    thanh từ loa ngoài.
  </p>
  <h2>Bộ đôi ScreenPad – Bàn phím đỉnh cao</h2>
  <p>
    ScreenPad 2.0 là công nghệ sáng tạo chỉ có ở dòng ZenBook UX434. Ở vị trí của
    chuột cảm ứng TouchPad thông thường, bạn sẽ có một màn hình cảm ứng 5,65 inch
    để sáng tạo mọi thứ. Asus đã hợp tác với nhiều nhà phát triển ứng dụng để tối
    ưu hóa khu vực màn hình ScreenPad, cho phép bạn thao tác nhanh chóng hơn, đặc
    biệt là ở những ững dụng ghi chú, chỉnh sửa ảnh hay biên tập video. Ngoài ra,
    bạn còn có thể điều hướng nhanh ứng dụng và sử dụng bàn phím số một cách tiện
    lợi.
  </p>
  <p>
    Bàn phím Laptop Asus ZenBook UX434FLC-A6212T được thiết kế tỉ mỉ theo những
    tính toán công thái học, với hành trình phím hợp lý để bạn có thể gõ nhẹ nhàng
    với tốc độ nhanh nhất. Ngoài ra, bàn phím này còn trang bị đèn nền, cho phép
    làm việc hiệu quả ngay cả trong đêm tối. ZenBook UX434 cũng tích hợp những
    phím nóng chuyên dụng để bạn dễ dàng chụp ảnh màn hình hay khóa hệ thống chỉ
    trong một lần nhấn phím duy nhất.
  </p>
  <h2>Hiệu năng cao cấp với bộ vi xử lý Intel thế hệ thứ 10</h2>
  <p>
    Laptop Asus ZenBook UX434FLC-A6212T có hiệu năng cao cấp ở mọi linh kiện. Bạn
    sẽ là một trong những người đầu tiên được trải nghiệm tốc độ từ bộ vi xử lý
    Intel Core i7 10510U thế hệ thứ 10 mới nhất. Bên cạnh đó là 8GB RAM và 512GB
    SSD siêu tốc. Tất cả thao tác đều diễn ra nhanh chóng, mang đến cho bạn sức
    mạnh hoàn hảo trên một thiết bị di động. Card đồ họa rời NVIDIA GeForce MX250
    2GB cho trải nghiệm hình ảnh mượt, không còn tình trạng xé hình, giật hình, sử
    dụng các ứng dụng thiết kế đồ họa chuyên nghiệp.
  </p>
  `,
    image: "zenbook.jpg",
  },
  {
    name: "Asus ExpertBook",
    model: "P2451FA-EK0229T",
    price: 17299000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i5 10210U",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "Win 10",
      color: "Black",
    },
    description: `<h2>Hiệu năng cao cho doanh nhân</h2>
    <p>
      ASUS ExpertBook P2451FA-EK0229T là sản phẩm hoàn hảo để mang lại hiệu toàn
      diện để giúp bạn vượt qua một ngày làm việc. Máy tính xách tay siêu nhẹ kết
      hợp cùng bản lề phẳng 180 độ để bạn có thể đặt laptop trên bất kỹ mặt phẳng
      nào, cực kỳ lý tưởng để chia sẻ nội dung trên màn hình với người khác.
    </p>
    <p>
      ExpertBook P2 kết hợp các yếu tố kiến trúc vào thiết kế với lớp hoàn thiện
      Star Black bóng bẩy và các góc được tạo hình chính xác, mang đến vẻ ngoài
      thanh lịch và chuyên nghiệp hơn hẵn so với các mẫu laptop giá rẻ khác.
    </p>
    <h2>Di chuyển mọi lúc mọi nơi</h2>
    <p>
      Máy có kích thước siêu mỏng và nhẹ 1,5kg cho phép bạn có thể dễ dàng cho vào
      một chiếc cặp hoặc ba lô để bạn có thể làm việc ở bất cứ đâu.
    </p>
    <h2>Màn hình NanoEdge cao cấp</h2>
    <p>
      Một màn hình NanoEdge viền mỏng cung cấp không gian làm việc rộng hơn. Tỉ lệ
      màn hình so với khung máy cũng giúp phần khiến cho mẫu laptop 14inch này nhìn
      không quá khác so với các dòng máy tính xách tay 13inch hiện nay.
    </p>
    <h2>Hướng đến năng suất</h2>
    <p>
      Asus ExpertBook P2 được thiết kế cho các doanh nhân cần hiệu năng ổn định để
      thực hiện công việc hàng ngày. Bộ xử lý Intel Core i5 thế hệ mới nhất mang đến
      hiệu năng nhanh và nhạy mà bạn cần. Với thiết kế lưu trữ kép cung cấp không
      gian lưu trữ rộng rãi và truy cập dữ liệu nhanh hơn. Laptop Asus ExpertBook P2
      cũng là lựa chọn thích hợp trong tương lai, với thiết kế dễ truy cập giúp dễ
      dàng nâng cấp các thành phần bên trong để phục vụ nhiều nhu cầu làm việc hơn
      nữa.
    </p>
    <h2>Kết nối toàn diện</h2>
    <p>
      Khi bạn làm việc ở những nơi công cộng, kết nối là rất quan trọng. ExpertBook
      P2 cung cấp một bộ cổng I/O toàn diện để truyền dữ liệu dễ dàng và kết nối
      ngoại vi linh hoạt. Để đảm bảo độ tin cậy, các cổng được kiểm tra để chịu đựng
      tới 15.000 lần.
    </p>
    <h2>Thiết kế kiên cố</h2>
    <p>
      Thiết kế khung gầm kết hợp các tính năng cung cấp thêm độ cứng cho kết cấu để
      đối phó với các trường hợp không may có thể diễn ra bất cứ lúc nào.
    </p>
    <h2>Sẵn sàng hành động</h2>
    <p>
      Độ bền cuối cùng là giá trị cốt lõi mà ExpertBook P2 mang lại cho người dùng
      doanh nghiệp, đảm bảo tài sản có giá trị của bạn sẽ tồn tại bất cứ điều gì
      nghiêm ngặt hàng ngày, tác động ngẫu nhiên mà họ gặp phải. ExpertBook P2 được
      xây dựng chắc chắn và được kiểm tra chất lượng nghiêm ngặt theo tiêu chuẩn
      quân sự MIL-STD 810G của Hoa Kỳ với các bài kiểm tra chất lượng của ASUS.
    </p>
    <h2>An toàn và bảo mật</h2>
    <p>
      ExpertBook P2 bao gồm các tính năng bảo mật toàn diện cho doanh nghiệp để bảo
      vệ dữ liệu quan trọng của bạn. Một khe khóa Kensington bảo vệ chống trộm,
      trong khi tấm chắn bảo mật webcam, cảm biến vân tay và chip TPM 2.0 giữ cho
      những gì bên trong an toàn. Nếu bạn đang băn khoăn lo lắng về vấn đề bảo mật
      thì hãy chọn ngay cho mình sản phẩm laptop Asus này nhé!
    </p>
    `,
    image: "expertbook.jpg",
  },
  {
    name: "Asus TUF",
    model: "FA506IV-HN202T",
    price: 30999000,
    brand: "Asus",
    spec: {
      cpu: "AMD Ryzen 7 4800H",
      ram: "16GB",
      storage: "1TB SSD",
      vga: "NVIDIA RTX 2060 6GB",
      screen: "15.6 inch FHD 144Hz",
      os: "Win 10",
      color: "Grey",
    },
    description: `<h2>Thiết kế mang tính di động</h2>
    <p>
      Mặc dù tự hào với khung máy có thiết kế nhỏ hơn và nhẹ hơn so với người tiền
      nhiệm. Khung máy Fortress Grey lịch lãm và bóng bẩy. Thiết kế tổ ong tinh tế
      được trang trí trên bề mặt dưới khung máy giúp tăng độ bám cũng như khả năng
      lưu thông không khí làm mát, trong khi thiết kế trải xước trên chiếu nghỉ tay
      giữ cho bề mặt luôn bóng mượt và sạch sẽ.
    </p>
    <h2>Độ bền cấp quân đội</h2>
    <p>
      Asus TUF FA506IV-HN202T được trải qua các tiêu chuẩn khắt khe trong các bài
      kiểm tra độ bền MIL-STD-810H. Các thiết bị được thử nghiệm như rơi rớt, độ
      rung, độ ẩm và nhiệt độ khắc nghiệt để đảm bảo độ tin cậy.
    </p>
    <h2>Hiệu suất đáng kinh ngạc</h2>
    <p>
      Laptop gaming Asus TUF FA506IV-HN202T mang đến hiệu năng đáng kinh ngạc để
      chơi game, phát trực tuyến hoặc ngay cả thiết kế đồ họa chuyên nghiệp. Bộ xử
      lý CPU đến từ AMD Ryzen thế hệ mới cung cấp khả năng xử lý đa nhiệm nhanh
      chóng. Khả năng đồ họa được kết hợp với GPU rời lên đến GeForce RTX™ 2060 , có
      thể đảm bảo tốc độ khung hình cao trong một loạt các trò chơi phổ biến hiện
      nay.
    </p>
    <h2>Màn hình chuyên nghiệp</h2>
    <p>
      Với màn hình IPS có tần số quét lên tới 144Hz, chiếc máy tính Asus này hoàn
      hảo để chơi game ở tốc độ nhanh. Với Adaptive Sync thì tần số quét của màn
      hình sẽ đồng bộ hóa với tốc độ khung hình của GPU để giảm độ trễ, giảm thiểu
      tình trạng lắp hình và loại bỏ hiện tượng rách hình ảnh, đem lại trải nghiệm
      chơi game cực kỳ mượt mà và chân thực.
    </p>
    <h2>Bàn phím chơi game</h2>
    <p>
      Đèn nền RGB đồng nhất cho phép bạn thể hiện phong cách độc đáo của riêng mình,
      trong khi cụm phím WASD được thiết kế nổi bật giúp bạn thao tác dễ dàng hơn
      đến các lệnh di chuyển chính.
    </p>
    <p>
      Công nghệ overstroke giúp điểm kích hoạt cao hơn trong mỗi lần nhấn phím để có
      độ phản hồi nhanh hơn và kiểm soát dễ dàng.
    </p>
    <h2>Âm thanh sống động</h2>
    <p>
      Trên mẫu laptop gaming này, hai loa được nâng cấp phát ra âm thanh lớn hơn 1,8
      lần và âm trầm sâu hơn 2,7 lần so với các thế hệ trước cho trải nghiệm âm
      thanh sống động hơn. Công nghệ DTS:X Ultra mang đến âm thanh vòm ảo 7.1 có độ
      trung thực cao, cho âm thanh chất lượng như rạp hát với tai nghe tương ứng.
    </p>
    <h2>Khả năng tản nhiệt hiệu quả</h2>
    <p>
      Nhiều ống dẫn nhiệt kết hợp với 3 tản nhiệt sẽ thu nhiệt từ các thành phần cốt
      lõi. Thiết kế tản nhiệt tự làm sạch đảm bảo rằng hệ thống tản nhiệt sẽ luôn
      hoạt động ổn định trong thời gian dài.
    </p>
    <h2>Khả năng kết nối hoàn hảo</h2>
    <p>
      Rất nhiều cổng I/O cho phép bạn kết nối các thiết bị ngoại vi yêu thích của
      mình và bắt đầu làm việc ở bất cứ đâu. Hai cổng USB 3.2 Type A cho phép truyền
      dữ liệu nhanh chóng, và cổng USB 2.0 Type A bổ sung dành cho kết nối các thiết
      bị ngoại vi như chuột, bàn phím. Bluetooth cũng cho phép bạn ghép nối chuột,
      tai nghe và các thiết bị tương thích khác để có không gian làm việc không dây.
    </p>
    <p>
      Sử dụng USB 3.2 Gen 2 Type-C (hỗ trợ DisplayPort ™ 1.4) kết nối màn hình
      G-SYNC siêu tốc để chơi game mượt mà. Kết hợp trực tuyến với Wi-Fi 802.11ac
      (2×2) để có kết nối nhanh và đáng tin cậy ở bất cứ nơi nào có Wi-Fi.
    </p>
    <h2>Phần mềm quản lý độc quyền</h2>
    <p>
      Armory Crate hợp nhất các điều khiển hệ thống và ánh sáng để cài đặt các cấu
      hình thiết yếu trong một tiện ích duy nhất.
    </p>
    `,
    image: "tuf.jpg",
  },
  {
    name: "Asus Gaming ROG Zephyrus M15",
    model: "GU502LV-HC090T",
    price: 45999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10875H",
      ram: "16GB",
      storage: "1TB SSD",
      vga: "NVIDIA RTX 2060 6GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Grey",
    },
    description: `<p>
    Các anh em game thủ nếu đang tìm kiếm một “chiến mã” thực thụ có thể chiến đấu
    với nhiều tựa game hot mà mức giá lại vừa tầm thì Laptop Asus ROG Stix G
    G532L-HC090T của thương hiệu Asus là một lựa chọn cực kỳ hợp lý. Hôm nay, xin
    gửi đến các anh em bài viết đánh giá về một số đặc điểm tính năng nổi bật của
    mẫu laptop này trong bài viết sau đây. Laptop Asus ROG Stix G G532L-HC090T nổi
    bật với thiết kế độc đáo và cá tính, thiết kế này được lấy cảm hứng từ BMW
    Designworks. Bao quanh cạnh máy, logo Rog và bàn phím nổi bật với dải led ánh
    sáng Aura Sync. Thiết kế bản lề nổi lên khi mở máy sẽ tạo ra vùng lưu thông
    khí 3D và tản nhiệt phía sau, giúp tăng cường khả năng tản nhiệt cho máy.
  </p>
  <h2>Thiết kế độc đáo và cá tính</h2>
  <p>
    Màn hình của Laptop Asus ROG Stix G G532L-HC090T có thiết kế viền màn hình
    bezel siêu mỏng tạo nên diện tích màn hình lớn so với máy. Máy trang bị màn
    hình NanoEdge 15.6" có độ phân giải Full HD (1920*1080), với tấm nền IPS tránh
    tình trạng nhòe hay vỡ ảnh do chuyển động. Tần số quét 240hz giúp người dùng
    có trải nghiệm hình ảnh sống động trong game và khai thác tối đa sức mạnh từ
    GPU.
  </p>
  <h2>Màn hình Nanodge viền siêu mỏng mang trải nghiệm cực “đã”</h2>
  <p>
    Cũng như những dòng laptop gaming khác, Laptop Asus ROG Stix G G532L-HC090T
    cũng được thiết kế cụm phím WASD nổi bật với tone màu sáng hơn so với toàn bộ
    phím. Đồng thời, hành trình phím sâu và bố trí khoảng cách giữa các phím hợp
    lý cũng đem đến sự chính xác cho các game thủ. Cũng như dòng FX705, bàn phím
    cũng sử dụng Overstroke để ghi nhận lại một cách nhanh chóng các thao tác phím
    bấm
  </p>
  <h2>Bàn phím chơi game cực “chất”</h2>
  
  <h2>Đầy đủ các kết nối và chuẩn wifi</h2>
  
  <p>
    Như nói đã nói ở trên, bàn phím của Laptop Asus ROG Stix G G532L-HC090T nổi
    bật dải đèn Led Aura Sync và ngoài ra có trang bị thêm đèn nền RGB. Ngoài ra,
    bàn phím có trang bị thêm 5 phím nóng để tạo lệnh quan trọng nhanh hơn. Những
    đặc điểm độc đáo này của bàn phím góp phần tạo điều kiện giúp các game thủ
    thao tác phím nhanh, chính xác hơn và đạt được hiệu quả cực cao khi chiến
    game.
  </p>
  <p>
    Laptop Asus ROG Stix G G532L-HC090T trang bị chuẩn Wi-Fi 802.11ac Wave 2 vói
    băng tần không dây 1.7Gbps. Các game thủ sẽ hạn chế tình trạng mất kết nối,
    trải nghiệ, sóng wifi mạnh mẽ hơn với Wi-Fi Rangeboost. Ngoài ra để đáp ứng
    kết nối với các thiết bị ngoại vi, nhà Asus cũng đã trang bị đầy đủ các cổng
    kết nối: cổng USB 3.1 Type C, 3 cổng USB 3.1 thế hệ 1 Type A., cổng HDMI 1.4.
    Jack…Laptop Asus ROG Stix G G532L-HC090T xứng đáng là chiếc laptop được các
    game thủ săn đón với hiệu năng mạnh mẽ chơi được các game hạng nặng. Máy được
    trang bị cấu hình khủng với CPU Intel® Core™ i7 10875H và RAM 16GB DDR4 giúp
    việc xử lý các tác vụ đa luồng nhanh và mượt mà. Người dùng có thể yên tâm máy
    có thể chạy nhiều tựa game nặng và các ứng dụng phong phú, người dùng sẽ không
    gặp tình trạng lag giật khi đang chiến game trên máy.
  </p>
  <h2>Hiệu năng mạnh mẽTản nhiệt làm mát hiệu quả</h2>
  <p>
    Nếu chưa cảm thấy hài lòng và muốn nâng cấp Ram và SSD để đáp ứng nhu cầu công
    việc, máy có thêm một khe cắm RAM và một khe cắm SSD. Card đồ họa NVIDIA
    Geforce RTX 2060 6GB mang lại những trải nghiệm mượt mà những game và ứng dụng
    yêu cầu cao về đồ họa.
  </p>
  <p>
    Laptop Asus ROG Stix G G532L-HC090T trang bị lá tản nhiệt mỏng và hệ thống
    n-Blade 83 cánh tăng cường luồng khí và diện tích bề mặt tản nhiệt. Thiết kế
    module tản nhiệt và có khả năng tự đẩy bụi ra phía ngoài. Ngoài ra, máy còn
    được cài đặt ROG Armory Crate - một phần mềm giúp tăng cường hiệu suất tản
    nhiệt cho máy.
  </p>
  <p>
    Laptop Asus ROG Stix G G532L-HC090T chắc chắn sẽ mang đến cho người dùng những
    trải nghiệm âm thanh sống động nhất. Máy sử dụng Sonic Studio III hạn chế tạp
    âm bên ngoài, tiếng ồn tạo nên tạo nên vòm âm thanh tuyệt vời. Trong trận game
    với nhưng âm thanh nhỏ nhẹ nhất thông qua các loa Side-firing bạn cũng sẽ nghe
    được rõ ràng, mang lại âm thanh lớn và sống động nhất. Việc điều chỉnh công
    suất âm cũng trở nên dễ dàng với công nghệ khuếch đại âm thanh.
  </p>
  <h2>Âm thanh chân thực</h2>
  <p>
    Với thiết kế cá tính và hiệu năng mạnh mẽ mà Laptop Asus ROG Stix G
    G532L-HC090T mang lại thực sự xứng đáng là một ‘chiến mã” thực thụ giúp các
    game thủ làm chủ được mọi cuộc chơi.
  </p>
  `,
    image: "rogm15.jpg",
  },
  {
    name: "Acer Aspire 5",
    model: "A515-55G-5633",
    price: 17689000,
    brand: "Acer",
    spec: {
      cpu: "Intel Core i5 1035G1",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA MX350 2GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Silver",
    },
    description: `<h2>THIẾT KẾ MỎNG NHẸ LINH ĐỘNG</h2>
    <p>
      Lớp vỏ bên ngoài với chất liệu nhôm trơn mịn giúp bảo vệ Aspire 5 trước những
      va chạm bên ngoài, đồng thời cải thiện hiệu quả tản nhiệt so với vỏ nhựa.
    </p>
    <p>
      Độ mỏng của máy chỉ 17.95mm, nhẹ chỉ 1.5kg biến chiếc laptop văn phòng này trở
      thành người bạn đồng hành đắc lực, dễ cất gọn trong balo và đem đi khắp nơi.
    </p>
    <h2>PHONG CÁCH TỐI GIẢN, CÁ TÍNH</h2>
    <p>
      Viền màn hình của Aspire 5 cũng đã được làm mỏng đúng với xu hướng thiết kế
      hiện nay, cho không gian làm việc rộng rãi hơn trước. Thiết kế tối giản, với
      mặt lưng màu trắng bạc mang đến vẻ cá tính và không kém phần thanh lịch, sang
      trọng, đúng chuẩn một chiếc laptop văn phòng hiện đại
    </p>
    <h2>CÔNG NGHỆ CAO CẤP, HIỆU NĂNG MẠNH MẼ</h2>
    <p>
      Được trang bị vi xử lý Intel Core thế hệ thứ 10, mang lại cho Aspire 5 sức
      mạnh xử lý vượt trội. Lưu trữ thấp nhất 256 GB SSD đến cao nhất 1 TB SSD là
      trang bị tiêu chuẩn trên Aspire 5, đảm bảo mọi tác vụ được xử lý nhanh chóng
      hơn ổ HDD truyền thống.
    </p>
    <h2>KHẢ NĂNG XỬ LÝ VƯỢT TRỘI</h2>
    <p>
      Với phiên bản cấu hình có khả năng nâng cấp tối đa lên đến 20GB RAM, card màn
      hình rời mới nhất NVIDIA GeForce MX350, việc chơi các game không đòi hỏi cao
      về cấu hình hay sử dụng các phần mềm thiết kế căn bản, render video đơn giản
      sẽ không làm khó được Aspire 5.
    </p>
    <h2>CHẤT LIỆU BỀN BỈ, CHẮC CHẮN</h2>
    <p>
      Có thể nói Aspire 5 là sự lựa chọn số một dành cho những bạn thường “xài hao”
      đồ công nghệ trong thời gian ngắn. Với thiết kế vỏ nhôm cứng cáp, cấu trúc
      chắc chắn từ bản lề, bàn rê cho đến bàn phím, Acer Aspire 5 có khả năng chịu
      va đập rất tốt.
    </p>
    <h2>THỜI LƯỢNG PIN ĐẾN 11 TIẾNG</h2>
    <p>
      Thời lượng pin của Aspire 5 có thể sử dụng từ 7 -11 giờ liên tục trong ngày
      cho những hoạt động công sở thường nhật, như vừa xử lý công việc, vừa thưởng
      thức âm nhạc.
    </p>
    <h2>HIỂN THỊ HÌNH ẢNH ĐẸP SẮC NÉT VÀ BẢO VỆ MẮT</h2>
    <p>
      Màn hình FullHD với công nghệ Acer Color Intelligence thể hiện hình ảnh sắc
      nét và chân thật. Phần mền ngăn ánh sáng xanh Blue Light Shield, cản 80% ánh
      sáng xanh độc hại giúp bảo vệ mắt khi sử dụng trong thời gian dài.
    </p>
    <p>
      Acer Aspire 5 có đầy đủ các cổng kết nối phổ biến gồm cổng USB Type-C, 2 cổng
      USB 3.1, cổng USB 2.0, cổng HDMI, cổng âm thanh 3.5 mm (hỗ trợ tai nghe có
      microphone tích hợp), cổng nguồn, đặc biệt là Bluetooth 5.0 và Wi-Fi 6 tốc độ
      cao. Điểm khác biệt ấn tượng của chiếc laptop mỏng nhẹ này chính là vẫn sở hữu
      cổng Ethernet ( LAN) có khả năng truyền tải nhanh dữ liệu cỡ lớn, thường chỉ
      có trên những dòng máy nặng và dày.
    </p>
    `,
    image: "aspire5.jpg",
  },
  {
    name: "Acer Swift",
    model: "SF314-57G-53T1",
    price: 18989000,
    brand: "Acer",
    spec: {
      cpu: "Intel Core i5 1035G1",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "14 inch FHD",
      os: "Win 10",
      color: "Grey",
    },
    description: `<p>
    Ấn tượng chung của mọi người dùng về mẫu Laptop Acer Swift SF314-57G-53T1
    (NX.HJESV.001) là mỏng, thời trang, quyến rũ. Chiếc laptop mới nhất của thương
    hiệu Acer này gây ấn tượng mạnh với khách hàng nhờ 4 ưu điểm sau đây.
  </p>
  
  <h2>Thiết kế sexy thời thượng sang chảnh</h2>
  
  <p>
    Thiết kế mỏng nhẹ đặc trưng của dòng Acer Swift 3 thể hiện rất rõ trong mẫu
    Laptop Acer Swift SF314-57G-53T1 (NX.HJESV.001). Cân nặng của SF314-57G-53T1
    (NX.HJESV.001) chỉ vẻn vẹn 1.19 kg và độ dày chỉ khoảng 15 mm.
  </p>
  
  <p>
    Viền màn hình mỏng với tỉ lệ màn hình so với thân máy khoảng 84%. Viền diamond
    cut với những nét cắt xén tỉ mỉ cẩn thận hợp thời trang. Lớp vỏ máy được làm
    từ chất liệu hợp kim nhôm magie không chỉ có độ bền cao mà còn mang đến cảm
    giác sang trọng thời thượng.
  </p>
  
  <p>
    Acer Swift 3 SF314-57G-53T1 (NX.HJESV.001) với lớp vỏ xám bạc là một gam màu
    khá trung tính, thể hiện sự trưởng thành chuyên nghiệp, phù hợp cho cả nam lẫn
    nữ.
  </p>
  
  <h2>Thời lượng pin lên đến 12 giờ đồng hồ</h2>
  
  <p>
    Ưu điểm tiếp theo của Acer Swift 3 SF314-57G-53T1 (NX.HJESV.001) là thời lượng
    pin khủng kéo dài 12 giờ, đủ để phục vụ nhu cầu một ngày dài làm việc dù chủ
    nhân của nó có phải di chuyển thường xuyên. Đặc biệt công nghệ sạc nhanh mới
    được nhà sản xuất nâng cấp ở dòng Swift 3 SF314-57 cho phép chiếc máy tính xác
    tay này sạc 30 phút sử dụng được trong thời gian 4 giờ đồng hồ.
  </p>
  
  <h2>Hỗ trợ giải trí đỉnh cao</h2>
  
  <p>
    Nếu xem phim hoặc nghe nhạc trên chiếc Laptop Acer Swift 3 SF314-57G-53T1
    (NX.HJESV.001), chắc chắn bạn sẽ phải cho điểm “Cực phê”. Với công nghệ màn
    hình Acer Color Intelligence™ và Acer ExaColor, màu sắc hiển thị trên máy cho
    cảm giác sống động và chân thực đến từng millimet.
  </p>
  
  <p>
    Chất lượng âm thanh thì càng không có gì phải phàn nàn. Máy được tích hợp công
    nghệ âm thanh Acer True Harmony mang đến âm thanh cực kì rõ ràng. Bên cạnh đó
    là khả năng tái tạo âm thanh vòm cho người dùng trải nghiệm nghe nhạc xem phim
    trên cả tuyệt vời.
  </p>
  
  <p>
    Chuẩn Wifi6 mới nhất từ Intel giúp cho máy bắt sóng Wifi nhanh gấp 3 lần các
    thế hệ Swift 3 tiền nhiệm. Điều này đồng nghĩa với việc bạn có thể tha hồ nghe
    nhạc hay xem phim online chất lượng cao mà không còn lo đến hiện tượng giật
    lag.
  </p>
  
  <p>
    Màn hình của Laptop Acer Swift 3 SF314-57G-53T1 (NX.HJESV.001) là màn hình
    tiêu chuẩn Full HD IPS. Công nghệ In-plane Switch cho góc hiển thị lên tới 178
    độ so với phương ngang, cho phép người dùng có thể tận hưởng chất lượng hình
    ảnh tuyệt vời với nhiều góc nhìn.
  </p>
  
  <h2>Hệ thống bảo mật tuyệt đối với cổng kết nối tiện dụng</h2>
  
  <p>
    Acer Swift 3 SF314-57G-53T1 (NX.HJESV.001) có cổng USB Type C tích hợp công
    nghệ Thunderbolt cho tăng tốc độ kết nối lên đến 40Gbps, hỗ trợ hiển xuất màn
    hình với độ phân giải 4K - 5K 60Hz, sạc 100W, và đa cổng kết nối.
  </p>
  
  <p>
    Ngoài ra Acer Swift 3 SF314-57G-53T1 (NX.HJESV.001) còn hỗ trợ đầy đủ các cổng
    kết nối cơ bản: USB 3.1, USB 2.0, HDMI, Kensington lock.
  </p>
  
  <p>
    Cuối cùng không thể không kể đến công nghệ Finger Print đặc trưng được tích
    hợp trên tất cả dòng Swift. Công nghệ Finger Print bảo mật bằng vân tay sinh
    học, kết hợp với phần mềm bảo mật Window Hello từ Microsoft giúp đảm bảo an
    toàn bảo mật với những giao dịch online hoặc lưu trữ dữ liệu.
  </p>
  `,
    image: "swift.jpg",
  },
  {
    name: "Acer Gaming Nitro 5",
    model: "AN515-55-77P9",
    price: 27999000,
    brand: "Acer",
    spec: {
      cpu: "Intel Core i7 10750H",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA GTX1650Ti 4GB",
      screen: "15.6 inch FHD 144Hz",
      os: "Win 10",
      color: "Black",
    },
    description: `<h2>Cấu hình dành cho chơi game và đồ họa</h2>
    <p>
      Với phiên bản này, Acer Nitro AN515 sử dụng CPU Intel Core i7 10750H cho hiệu
      năng ổn định, sử dụng được các ứng dụng nặng.
    </p>
    
    <p>
      Kết hợp là RAM 8 GB có khả năng nâng cấp tối đa lên đến 32 GB giúp đa nhiệm
      tốt, thoải mái sử dụng nhiều ứng dụng cùng lúc hay mở nhiều tab Chrome.
    </p>
    
    <p>
      Card đồ họa rời khủng Geforce GTX 1650Ti 4 GB cho máy sức mạnh chiến mượt các
      tựa game tầm trung. Bạn cũng sẽ có trải nghiệm sử dụng mượt mà, chuyên nghiệp
      các ứng dụng đồ họa 2D như Photoshop, Ai,...
    </p>
    
    <p>
      Thêm một điểm cộng cho Acer Nitro AN515 là chiếc ổ cứng SSD 512 GB M.2 PCIe
      vận hành nhanh, phản hồi mọi tác vụ chỉ trong vài giây.
    </p>
    
    <p>
      Máy cũng trang bị khe cắm HDD cho người dùng có nhu cầu nâng cấp không gian
      lưu trữ.
    </p>
    
    <h2>Thiết kế mạnh mẽ chuẩn gaming</h2>
    <p>
      Acer Nitro AN515 mang đến vẻ hầm hố, mạnh mẽ thông qua thiết kế của mình. Toàn
      bộ thân máy được làm bằng nhựa với tone màu đen - đỏ ấn tượng.
    </p>
    
    <p>
      Với trọng lượng 2.3 kg, chiếc máy khá nhẹ so với laptop gaming cùng phân khúc,
      không khó để bạn di chuyển.
    </p>
    
    <p>
      Đèn nền bàn phím sử dụng đèn nền màu đỏ đồng bộ với thiết kế của máy, trackpad
      cũng được viền màu đỏ nổi bật, phản hồi nhanh. Cụm phím chuyên sử dụng khi
      chơi game cũng được thiết kế để dễ nhận diện khi chơi game.
    </p>
    
    <h2>Khả năng tản nhiệt nhanh</h2>
    <p>
      Laptop có hệ thống tản nhiệt với 3 chế độ tăng tốc quạt và giúp máy giảm nhiệt
      độ ngay lập tức.
    </p>
    
    <p>
      Phím tắt Nitro Sense được trang bị ngay trên bàn phím để bạn dễ dàng truy cập
      vào ứng dụng, dễ dàng kiểm soát nhiệt độ của máy.
    </p>
    
    <h2>Không gian giải trí tuyệt vời</h2>
    <p>
      Màn hình Full HD rộng 15.6 inch 144hz với viền siêu mỏng đem đến không gian
      nhìn rộng rãi, hình ảnh rõ ràng, sắc nét với màu sắc chính xác. Công nghệ Acer
      ComfyView giúp màn hình hiển thị tốt ngoài trời nắng, đồng thời giảm ánh sáng
      xanh, hạn chế mỏi mắt khi dùng lâu.
    </p>
    
    <p>
      Công nghệ âm thanh độc quyền Acer TrueHarmony mang đến trải nghiệm âm thanh
      sống động, rõ ràng cho trải nghiệm khi xem phim, chơi game thoải mái. Dễ dàng
      phát hiện kẻ địch nhờ có âm thanh vòm phát ra từ nhiều hướng cho bạn cảm giác
      như đang hòa mình vào game.
    </p>
    
    <h2>Truyền dữ liệu cực nhanh</h2>
    <p>
      Laptop gaming Acer với các cổng kết nối hiện đại, thông dụng như USB 3.1,
      HDMI, USB 2.0, USB Type-C cho bạn dễ dàng nhập hoặc xuất dữ liệu từ máy tính
      sang thiết bị khác.
    </p>
    
    <p>
      Đây là mẫu laptop gaming đáng sở hữu dành cho các game thủ trẻ hoặc những ai
      làm đồ họa. Máy có ưu điểm là thiết kế đẹp, mạnh mẽ và khả năng hiển thị tốt
      với card đồ họa rời.
    </p>
    `,
    image: "nitro5.jpg",
  },
  {
    name: "Acer Gaming Predator Helios 300",
    model: "PH315-53-770L",
    price: 37189000,
    brand: "Acer",
    spec: {
      cpu: "Intel Core i7 10750H",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA GTX1660Ti 6GB",
      screen: "15.6 inch FHD 144Hz",
      os: "Win 10",
      color: "Black",
    },
    description: `<p>
    Laptop Acer Predator Helios 300 là dòng sản phẩm nổi tiếng trong danh sách
    laptop gaming với cấu hình mạnh và thiết kế đẹp. Máy có mức giá tầm trung cực
    kỳ hấp dẫn, hứa hẹn mang tới cho người dùng trải nghiệm siêu nhanh về tốc độ
    và hiệu suất. Hãy cùng HNC tìm hiểu về dòng máy này qua bài viết review chiếc
    Laptop Acer Gaming Predator Helios 300 PH315-53-770L (NH.Q7XSV.002) ngay dưới
    đây thôi nào.
  </p>
  <h2>
    Thiết kế của Laptop Acer Gaming Predator Helios 300 PH315-53-770L
    (NH.Q7XSV.002)
  </h2>
  <p>
    Không còn giữ thiết kế với tông màu đen đỏ chủ đạo như trước, Acer đã mang tới
    cho Predator Helios 300 một sắc màu xanh – đen cá tính. Logo Predator và 2
    đường thẳng màu xanh được làm bằng kim loại sang trọng nổi bật trên nắp máy
    màu đen. Bản lề thiết kế ổn định giúp giữ máy chắc chắn khi sử dụng. So với
    kích thước của những chiếc laptop gaming có màn hình 15.6-inch khác thì máy có
    kích thước tương đối nhỏ gọn, cân nặng dừng lại ở mức 2.4kg, người dùng có thể
    dễ dàng mang theo bên mình di chuyển tới khắp mọi nơi.
  </p>
  
  <p>
    Acer Gaming Predator Helios 300 PH315-52-75R6 (NH.Q54SV.003) được trang bị bàn
    phím chiclet có phần hơi lõm vào khung máy. Hành trình phím có độ dài hợp lý
    giúp các game thủ có thể chiến đấu ở mọi tư thế. Các phím nóng nổi trội WASD
    và cụm phím mũi tên lên xuống được nhấn các đường màu xanh quanh viền. Các
    phím bấm còn lại được sơn đen và hỗ trợ đèn nền RGB bắt mắt. Nút nguồn cũng
    được tích hợp ngay trên góc trên bên phải của bàn phím vô cùng tiện lợi. Bàn
    di chuột có kích thước 10.7 x 7.8cm, cảm ứng đa điểm từ các đầu ngón tay, phía
    dưới được tích hợp hai nút nhấn chuột, khi thao tác ít phát ra tiếng ồn và sử
    dụng dễ dàng như chuột rời.
  </p>
  
  <p>
    Ngoài ra, Acer đã trang bị cho máy rất nhiều cổng kết nối cần thiết để các
    game thủ có thể chiến đấu và trao đổi dữ liệu một cách nhanh chóng. Thêm vào
    đó, máy còn được trang bị Wifi chuẩn AC, khả năng truyền tải tối đa 1730 Mb/s
    và chạy trên băng tần 5GHz mang đến trải nghiệm chiến game online phê hết nấc
    cho người dùng.
  </p>
  <h2>
    Hiệu năng của Laptop Acer Gaming Predator Helios 300 PH315-53-770L
    (NH.Q7XSV.002)
  </h2>
  <p>
    Laptop Acer Gaming Predator Helios 300 PH315-53-770L (NH.Q7XSV.002) được trang
    bị bộ vi xử lý Intel Core™ i7-10750H Processor. Đây là sự lựa chọn tuyệt vời
    dành cho máy tính chơi game. Ram 8GB DDR4 được tích hợp sẵn với mục đích tối
    ưu hóa quá trình sử dụng của người dùng luôn diễn ra một cách trơn tru dù có
    mở đồng thời nhiều tác vụ trong cùng một lúc. Hơn nữa, người dùng hoàn toàn dễ
    dàng nâng cấp lên dung lượng tối đa là 32GB tùy thuộc vào nhu cầu công việc.
  </p>
  <p>
    Ổ cứng SSD 512GB với khả năng kép, vừa giúp người dùng lưu trữ dữ liệu, vừa
    giúp máy khởi động siêu nhanh và bật/tắt các ứng dụng chỉ trong vài giây. Một
    điểm đặc biệt ở chiếc laptop này đó chính là card đồ họa, card rời GTX 1660Ti
    6GB GDDR6 cân tốt mọi tựa game triple A hot nhất hiện nay cũng như đáp ứng tốt
    việc thiết kế đồ họa chỉnh sửa hình ảnh, video một cách chuyên nghiệp.
  </p>
  
  <p>
    Laptop Acer Gaming Predator Helios 300 PH315-53-770L (NH.Q7XSV.002) sở hữu màn
    15.6-inch Full HD, tấm nền IPS công nghệ LED mang tới cho người dùng góc nhìn
    mở rộng từ nhiều phía. Tần số quét lên tới 144Hz, mọi chuyển động sẽ được bắt
    gọn trong chớp nhoáng dù là các trò chơi AAA chuyên sâu hay làm các tác vụ đồ
    họa. Tóm lại, nếu bạn đang đi tìm kiếm chiếc laptop chiến được mọi tựa game
    triple A hiện đại nhất, hay bạn đang tìm kiếm chiếc laptop để sử dụng cho công
    việc thiết kế đồ họa thì đây chính là lựa chọn tuyệt vời nhất dành cho bạn.
  </p>
  `,
    image: "predatorhelios300.jpg",
  },
  {
    name: "Dell Inspiron 7501",
    model: "X3MRY1",
    price: 29489000,
    brand: "Dell",
    spec: {
      cpu: "Intel Core i7 10750H",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA GTX1650Ti 4GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Silver",
    },
    description: `<h2>Thiết kế mỏng nhẹ hơn</h2>
    <p>
      Sang trọng, đẳng cấp với với màu bạc tinh tế, hoàn thiện chắc chắn và vát mỏng
      đều ở các góc cạnh. Bên cạnh đó Dell đã thiết kế mỏng nhẹ hơn với trọng lượng
      chỉ 1.75kg dễ dàng mang theo di chuyển đến mọi nơi.
    </p>
    
    <p>
      Dell Inspiron 15 7501 còn được thiết kế với quạt kép, ống dẫn nhiệt kép và
      thiết kế bản lề giúp hệ thống của bạn mát mẻ khi làm việc, trong khi lỗ thông
      hơi mới phía trên bàn phím và dưới máy tính xách tay cải thiện luồng không
      khí, giúp giữ cho máy tính của bạn luôn mát mẻ, vận hành êm ái.
    </p>
    
    <h2>Màn hình</h2>
    <p>
      Trang bị màn hình 15.6 inch FHD (1920 x 1080) với viền siêu mỏng giúp mang tới
      những hình ảnh sắc nét trong một tỉ lệ màn hình lớn, trải nghiệm giải trí trở
      nên đắm chìm hơn.
    </p>
    
    <h2>Hiệu năng</h2>
    <p>
      Sức mạnh của Dell Inspiron 15 7501 gần như không giới hạn khi được trang bị bộ
      vi xử lý Intel® Core™ i7-10750H thế hệ thứ 10 . Con chip trên chiếc laptop có
      bộ nhớ đệm 12MB và múc xung nhịp CPU 2.6GHz – 5.0GHz. Kết hợp cùng với RAM 8GB
      DDR4 2933MHz khả năng xử lý mượt mà, nhanh chóng mọi tác vụ đặc biệt khi xử lý
      đa nhiệm
    </p>
    
    <p>
      Với mục đích laptop phục vụ cho công việc, sáng tạo, và giải trí nên Dell
      Inspiron 15 7501 đủ sức để giải quyết những việc phức tạp như xử lý đồ họa. Có
      sẵn card rời GeForce GTX® 1650 Ti vô cùng mạnh mẽ, không chỉ chạy tốt những
      phần mềm đồ họa chuyên sâu mà còn chơi được những tựa game đòi hỏi cấu hình
      cao trên máy tính.
    </p>
    
    <p>
      Sử dụng ổ cứng thể rắn SSD cao cấp, cho tốc độ truyền dữ liệu nhanh hơn, vận
      hành êm ái và độ bền vượt trội so với ổ cứng HDD thông thường với 512GB. Ổ đĩa
      thể rắn NVMe (SSD) có nghĩa là thời gian đáp ứng nhanh hơn nhiều, hiệu năng êm
      hơn và khả năng chống sốc được cải thiện so với ổ cứng thông thường và thậm
      chí còn nhanh hơn cả ổ SSD SATA thông thường.
    </p>
    
    <h2>Bảo mật cao</h2>
    <p>
      Truy cập tức thì vào Dell Inspiron 15 7501 dễ dàng, đăng nhập nhanh bằng đầu
      đọc dấu vân tay và Windows Hello rất tiện lợi và bảo mật cao. Bỏ qua cách đăng
      nhập truyền thống mất thời gian.
    </p>
    
    <h2>Kết nối wifi</h2>
    <p>
      Trang bị WIFI 6, tốc độ truyền, phạm vi và độ tin cậy WIFI của Inspiron hoạt
      động tốt hơn bao giờ hết dù bạn đang trong các quán cà phê và các khu vực lưu
      lượng truy cập cao khác.
    </p>
    
    <h2>Kết hợp thiết bị của bạn với Dell Mobile Connect</h2>
    
    <p>
      Tích hợp liền mạch PC / điện thoại thông minh: Truy cập nhiều thiết bị mà
      không cần phân chia sự chú ý của bạn Dell Dell Connect Connect ghép nối điện
      thoại thông minh iOS hoặc Android của bạn với laptop
    </p>
    
    <p>
      Hạn chế sự gián đoạn: Với Dell Mobile Connect, bạn có thể thực hiện cuộc gọi,
      gửi văn bản, nhận thông báo và thậm chí phản chiếu điện thoại của mình lên PC
      để tương tác với tất cả các ứng dụng yêu thích của bạn.
    </p>
    
    <p>
      Duy trì quyền riêng tư của bạn : Điện thoại của bạn kết nối với PC thông qua
      kết nối an toàn, điểm nối của Dell Mobile Connect để dữ liệu của bạn không bao
      giờ bị lộ thông qua các kết nối internet không bảo mật.
    </p>
    
    <p>
      Chuyển dễ dàng: Di chuyển nhanh chóng hình ảnh, video, nhạc và tài liệu từ PC
      và ngược lại, mà không cần các dịch vụ lưu trữ đám mây phức tạp hoặc dây cáp
      cồng kềnh.
    </p>
    
    <h2>Bàn phím</h2>
    <p>
      Ngoài việc thiết kế bố cục hợp lý cùng trang bị đèn nền bàn phím, với Dell
      Inspiron 15 7501 việc gõ phím trở nên tối ưu với bản lề nâng được cải thiện
      thêm độ nghiêng cho bàn phím và với bàn di chuột lớn hơn 9,5%, việc hoàn thành
      công việc chưa bao giờ thoải mái hơn.
    </p>
    
    <h2>Cổng kết nối</h2>
    <p>
      Đầu đọc thẻ micro SD | 2. USB 3.1 Gen 1 | 3. Jack kết hợp tai nghe / micro |
      4. Sức mạnh | 5. HDMI | 6. USB 3.1 Gen 1 | 7. USB 3.2 Gen 1 Type-C ™ (DP /
      PowerDelivery) tùy chọn hỗ trợ Thunderbolt ™ 3
    </p>
    `,
    image: "inspiron7501.jpg",
  },
  {
    name: "Dell Vostro 5490",
    model: "V4I5106W",
    price: 17189000,
    brand: "Dell",
    spec: {
      cpu: "Intel Core i5 10210U",
      ram: "8GB",
      storage: "256GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "Win 10",
      color: "Grey",
    },
    description: `<p>
    Laptop Dell Vostro 5490 (V4I5106W) là một chiếc máy tính xách tay doanh nhân
    phong cách. Máy sở hữu bề ngoài bắt mắt, kết hợp cấu hình mạnh mẽ bởi thế hệ
    chip mới nhất hiện nay. Chiếc laptop di động này đã làm cho bao người dùng
    điêu đứng và muốn có được ngay từ lần nhìn đầu tiên.
  </p>
  
  <h2>Thiết kế cứng cáp bền bỉ, hướng tới trải nghiệm người dùng</h2>
  <p>
    Nhờ vào thiết kế với lớp vỏ bằng nhôm nên Laptop Dell Vostro 5490 (V4I5106W)
    trở nên cứng cáp và bền bỉ hơn rất nhiều. Sở hữu tông màu xám xanh cực kỳ
    quyến rũ, cảm giác tươi mát vô cùng, lưng máy được in chìm logo Dell nằm chính
    giữa vòng tròn màu đen nổi bật. Trọng lượng của máy mỏng nhẹ linh hoạt, cân
    nặng 1.42kg, mỏng 17.9mm. Bạn hoàn toàn có thể mang theo bên mình mỗi khi di
    chuyển. Các góc cạnh được bo vuông vức, tinh tế từng đường nét.
  </p>
  
  <p>
    Phần bản lề cũng được nhấc lên khỏi bàn một chút khi mở máy một góc 135 độ,
    vừa có tác dụng lưu thông không khí, vừa nâng cao trải nghiệm gõ phím thoải
    mái hơn. Bàn phím chống tràn với kích thước tiêu chuẩn, các phím cho cảm giác
    gõ thoải mái nhờ độ nảy tốt, khoảng cách các phím được sắp xếp khoa học. Phần
    touchpad rộng rãi với khả năng hỗ trợ đa điểm giúp các thao tác cuộn trang,
    thu phóng… được thực hiện dễ dàng và chính xác.
  </p>
  
  <h2>Cấu hình mạnh mẽ đáp ứng mọi nhu cầu</h2>
  <p>
    Laptop Dell Vostro 5490 (V4I5106W) được trang bị bộ vi xử lí i5 10210U mang
    lại khả năng xử lí đa nhiệm mượt mà, RAM 8GB gia tăng sức mạnh của máy, giúp
    bạn chuyển đổi dễ dàng giữa các ứng dụng đang mở.
  </p>
  
  <p>
    Laptop hỗ trợ ổ cứng 256GB SSD giúp bạn có không gian lưu trữ nhiều tài liệu,
    nâng cao hiệu suất làm việc, giúp bạn đạt hiệu quả công việc, học tập tốt
    nhất.
  </p>
  
  <h2>Hứa hẹn mang đến trải nghiệm hình ảnh – âm thanh tuyệt vời</h2>
  <p>
    Laptop Dell Vostro 5490 (V4I5106W) đã được trang bị màn tràn viền, thanh
    thoát, tinh tế hơn rất nhiều. So với thế hệ trước thì có lẽ đây là phiên bản
    cải tiến vượt trội với nhiều điểm mới thu hút người dùng. Màn hình 14 inch, độ
    phân giải Full HD, kết hợp công nghệ chống lóa Anti-Glare giúp bạn thỏa sức
    làm việc trong nhiều điều kiện ánh sáng khác nhau.
  </p>
  
  <p>
    Công nghệ âm thanh Waves MaxxAudio ® sẽ không để bạn bỏ lỡ bất kỳ cuộc vui
    nào. Âm thanh sống động và được điều chỉnh một cách chuyên nghiệp, âm thanh
    5.1 giúp tăng cường độ nét, và không bị bóp méo. Sử dụng bộ giảm nhiễu tiên
    tiến, mang lại chất lượng âm thanh cải thiện đáng kể. Từ đó bạn có thể tận
    hưởng những phút giây giải trí xem phim hay chơi game cực kỳ đã.
  </p>
  
  <h2>Công nghệ Dell Mobile Connect</h2>
  <p>
    Việc kết nối giữa máy tính với thiết bị smartphone sẽ trở nên dễ dàng hơn với
    công nghệ Dell Mobile Connect. Với Dell Mobile Connect, bạn có thể nhận cuộc
    gọi, gửi văn bản, nhận thông báo và kết nối màn hình điện thoại trên máy tính,
    điều này cho phép bạn trải nghiệm những ứng dụng yêu thích trên điện thoại
    trong một màn hình lớn hơn. Việc di chuyển ảnh, video, nhạc và tài liệu giữa
    máy tính và Smartphone cũng trở nên đơn giản hơn với công nghệ này thay vì
    phải sử dụng lưu trữ đám mây phức tạp hay dây cáp cồng kềnh để chuyển đổi.
  </p>
  `,
    image: "vostro5490.jpg",
  },
  {
    name: "Dell Latitude 3400",
    model: "L3400I5SSD",
    price: 16289000,
    brand: "Dell",
    spec: {
      cpu: "Intel Core i5 8265U",
      ram: "8GB",
      storage: "256GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "DOS",
      color: "Black",
    },
    description: `<h2>Kiểu dáng hiện đại, gọn nhẹ</h2>
    <p>
      Latitude 3400 L3400I5SSD được "tô điểm" nhờ những chi tiết thiết kế hiện đại
      với bản lề chắc chắn, khung máy mỏng nhẹ, các cạnh bên được vát mỏng, dòng sản
      phẩm này dường như tiệm cận với những các dòng cao cấp khác. Đặc biệt, các
      thiết kế bên ngoài của Latitude 3400 đáp ứng các tiêu chuẩn về độ bền quân sự
      Mỹ MIL-STD 810G, giúp bảo vệ máy tốt hơn trong những công việc có sự tác động
      trực tiếp từ môi trường bên ngoài.
    </p>
    
    <h2>Hình ảnh hiển thị trung thực, sắc nét</h2>
    <p>
      Latitude 3400 được trang bị màn hình HD 14.0 inch cho máy có góc nhìn tốt, độ
      tương phản cao cũng như hiển thị hình ảnh trung thực, đáp ứng nhu cầu sử dụng
      máy để thư giãn, giải trí. Tấm nền IPS mang lại góc nhìn cực kỳ ổn định, bạn
      sẽ không hề gặp phải bất kỳ vấn đề nào về góc nhìn ngay cả ở những góc rất
      hẹp.
    </p>
    
    <h2>Cân trọn mọi công việc</h2>
    <p>
      Các dòng sản phẩm Latitude của Dell hướng đến các đối tượng doanh nhân, những
      người có công việc thường xuyên dịch chuyển, cần một "trợ lý dắc lực" có độ
      bền cao, thời lượng pin lâu và cấu hình mạnh.
    </p>
    
    <p>
      Latitude 3400 được trang bị bộ xử lý mạnh mẽ Intel Core i5 8265U thế hệ thứ 8,
      cung cấp khả năng giải quyết công việc trơn tru, hiệu quả. Sản phẩm có bộ nhớ
      RAM 8GB DDR4 hỗ trợ máy hoạt động liền mạch, cùng với đó là ổ cứng SSD 256GB
      PCIe NVMe, mang đến không gian lưu trữ thoải mái, tằn tốc độ truy xuất dữ liệu
      và thời gian mở máy nhanh chóng.
    </p>
    
    <h2>Kết nối đầy đủ</h2>
    <p>
      Laptop Dell Latitude 3400 L3400I5SSD có chuẩn kết nối Wi-Fi 6 mang đến cho bạn
      khả năng kết nối mạng nhanh tức thì. Laptop này còn được trang bị đầy đủ các
      cổng kết nối bao gồm cả RJ45, HDMI, USB 3.1 và USB Type-C™. Hơn thế, Latitude
      3400 là sản phẩm bao gồm cả cổng VGA để bạn có thể kết nối mà không cần bộ
      chuyển đổi.
    </p>
    `,
    image: "latitude3400.jpg",
  },
  {
    name: "Dell XPS 15 7590",
    model: "70196711",
    price: 67989000,
    brand: "Dell",
    spec: {
      cpu: "Intel Core i9 9980HK",
      ram: "32GB",
      storage: "1TB SSD NVMe",
      vga: "Onboard",
      screen: "15.6 inch 4K UHD Touch",
      os: "Win 10",
      color: "Black",
    },
    description: `<p>
    Dell XPS là dòng laptop cao cấp của Dell sở hữu thiết kế hiện đại cùng hiệu
    năng mạnh mẽ để đáp ứng tốt cả nhu cầu làm việc của doanh nhân văn phòng cũng
    như giải trí đa phương tiện. Trong đó, Dell XPS 15 7590 70196711 là sản phẩm
    mới nhất của dòng máy này thừa hưởng hoàn hảo những yếu tố nổi bật nói trên.
  </p>
  
  <h2>Thiết kế mỏng nhẹ, cao cấp</h2>
  <p>
    Laptop Dell XPS 15 7590 70196711 được thiết kế mỏng nhẹ, vỏ nhôm nguyên khối
    thời trang, kiểu dáng hiện đại, cao cấp. Vỏ máy chế tác hoàn toàn từ nhôm kim
    loại để đảm bảo độ bền cao, cộng hưởng với kính Corning Gorilla Glass 4 có khả
    năng chống hư hại và va chạm tốt để giữ cho chiếc máy cao cấp này có vỏ ngoài
    chắc chắn nhất.
  </p>
  
  <p>
    Bên trong laptop là phần khung bàn phím và phần nghỉ tay cũng được làm từ sợi
    carbon cực kì mát mẻ khi bạn kê tay gõ phím. Bên cạnh đó, các đường bo tròn
    nhẹ nhàng ở 4 góc hòa quyện với vỏ máy màu bạc tinh tú đã góp phần làm cho
    Dell XPS 15 7590 70196711 trở thành một chiếc laptop cao cấp đáng để mọi người
    ao ước sở hữu.
  </p>
  
  <p>
    Laptop mỏng, bền với trọng lượng nhẹ giúp bạn mang theo máy mọi nơi dễ dàng và
    phù hợp với nhiều không gian, môi trường khác nhau như học tập, làm việc, giải
    trí,...
  </p>
  
  <h2>Hiệu năng mạnh mẽ</h2>
  <p>
    Dell XPS 15 7590 70196711 được trang bị bộ vi xử lí Core i9 9980HK
    (2.4GHz/16MB) up to 5.0 GHz mang lại khả năng xử lí đa nhiệm nhanh chóng, mượt
    mà, RAM 32GB gia tăng sức mạnh của máy, giúp bạn chuyển đổi dễ dàng giữa các
    ứng dụng đang mở, cài đặt và chạy mượt mà mọi tác vụ nâng cao.
  </p>
  
  <p>
    Card đồ họa Nvidia GTX1650 4GB DDR5 với khả năng xử lí nổi bật, cho bạn trải
    nghiệm giải trí, đặc biệt là chơi game online mượt mà, chạy ứng dụng photoshop
    ổn định.
  </p>
  
  <p>
    Laptop hỗ trợ ổ cứng 1TB giúp bạn lưu trữ nhiều hình ảnh, video và dữ liệu với
    không gian lưu trữ lớn, nâng cao hiệu suất làm việc, giúp bạn đạt hiệu quả
    công việc, học tập tốt nhất.
  </p>
  
  <h2>Màn hình 4K sắc nét</h2>
  <p>
    Dell XPS 15 7590 70196711 có màn hình cảm ứng 15.6 inch, có độ phân giải 4K
    mang lại hình ảnh siêu sắc nét, chi tiết ở mọi góc độ. Máy có đường viền siêu
    mỏng cho tỉ lệ màn hình lớn mang lại trải nghiệm góc nhìn rộng với hình ảnh,
    video sống động, chân thực. Cùng tận hưởng hình ảnh siêu sắc nét với công nghệ
    chống chói lóa thỏa sức trải nghiệm ngay cả khi làm việc trong môi trường
    nhiều ánh sáng.
  </p>
  
  <p>Công nghệ Dell Mobile Connect</p>
  <h2>
    Việc kết nối giữa máy tính với thiết bị smartphone sẽ trở nên dễ dàng hơn với
    công nghệ Dell Mobile Connect. Với Dell Mobile Connect, bạn có thể nhận cuộc
    gọi, gửi văn bản, nhận thông báo và kết nối màn hình điện thoại trên máy tính,
    điều này cho phép bạn trải nghiệm những ứng dụng yêu thích trên điện thoại
    trong một màn hình lớn hơn. Việc di chuyển ảnh, video, nhạc và tài liệu giữa
    máy tính và Smartphone cũng trở nên đơn giản hơn với công nghệ này thay vì
    phải sử dụng lưu trữ đám mây phức tạp hay dây cáp cồng kềnh để chuyển đổi.
  </h2>
  
  <h2>Bàn phím chất lượng tuyệt hảo</h2>
  <p>
    Hệ thống phím được trang bị tinh tế với khoảng cách hợp lí cùng độ nảy tốt
    mang lại cho bạn trải nghiệm gõ mê tay. Bên cạnh đó, đèn nền trắng sẽ là một
    yếu tố không thể thiếu để giúp bạn thao tác dễ dàng hơn trong điều kiện thiếu
    sáng. Cảm biến vân tay cũng được đặt ngay cạnh bàn phím cho bạn đăng nhập 1
    chạm nhanh chóng và dễ dàng.
  </p>
  
  <h2>Cổng kết nối đa dạng</h2>
  <p>
    Dell XPS 15 7590 70196711 được hãng trang bị đa dạng các cổng kết nối với tính
    năng hiện đại. Ở mặt phải của máy là khe cắm thẻ SD, USB 3.1 gen 1, nút chỉ
    báo pin và khe khóa ăn toàn.
  </p>
  
  <p>
    Bên cạnh trái laptop là jack nguồn, USB 3.1 gen 1, HDMI 2.0, Thunderbolt 3 đa
    năng (dùng sạc pin, kết nối Thunderbolt 2 hướng 40 Gbps, kết nối USB 3.1 gen 2
    10Gbps, đầu ra video Displayport 1.2, VGA, HDMI, Ethernet và USB typa A) và
    cuối cùng là jack cắm tai nghe.
  </p>
  `,
    image: "xps157590.jpg",
  },
  {
    name: "HP Pavilion 15",
    model: "8RJ61PA",
    price: 17299000,
    brand: "HP",
    spec: {
      cpu: "Intel Core i5 1035G1",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Gold",
    },
    description: `<p>
    Dòng sản phẩm HP Pavilion từ lâu đã trở thành một cái tên quen thuộc đối với
    những người dùng laptop không chỉ ở Việt Nam mà còn trên phạm vi toàn cầu. Cấu
    hình ổn định, mẫu mã đẹp mắt và hiệu suất máy cao – tất cả những yếu tố này đã
    làm cho Laptop HP Pavilion 15 trở thành một trợ lý xuất sắc cho người dùng
    doanh nghiệp. Năm 2019 mẫu Laptop Pavilion 15 đã có những sự thay đổi như thế
    nào, hãy cùng HNC tìm hiểu qua mẫu Laptop HP Pavilion 15-cs3060TX (8RJ61PA)
    sau đây nhé.
  </p>
  
  <h2>Thiết kế bên ngoài của Laptop HP Pavilion 15-cs3060TX (8RJ61PA)</h2>
  <p>
    Ở chiếc Laptop HP Pavilion 15-cs3060TX (8RJ61PA) ta thấy toát lên một vẻ đẹp
    chuyên nghiệp, hiện đại. Mọi chi tiết đường nét trong thiết kế máy đều được
    tính toán kỹ càng. Độ mỏng của máy chỉ 18.5mm, trọng lượng chỉ khoảng 2.1kg.
    Vì lẽ đó mà người dùng có thể dễ dàng mang máy đến bất cứ nơi nào mình muốn mà
    không thấy khó khăn gì. Máy được phủ lớp màu vàng huỳnh gấm, không chỉ tăng
    thêm vẻ sang trọng quý tộc cho máy mà còn giúp máy tránh được trầy xước hay bị
    in dấu vân tay khi sử dụng. Logo HP trắng bóng nổi bật trên nắp máy trông vô
    cùng bắt mắt.
  </p>
  
  <p>
    Hướng đến đối tượng là người dùng doanh nghiệp nên Laptop HP Pavilion
    15-cs3060TX (8RJ61PA) được thiết kế sao cho thuận tiện nhất đối với đối tượng
    này. Thiết kế bản lề hỗ trợ nâng bàn phím lên vị trí gõ phím thoải mái nhất
    đối với người dùng đồng thời nâng cao hiệu quả tản nhiệt. Hành trình phím dài
    mang lại cảm giác thoải mái khi gõ phím. Hai cạnh bên của máy với đầy đủ các ổ
    USB giúp người dùng có thể kết nối máy không giới hạn với các thiết bị khác.
  </p>
  
  <h2>Hiệu năng của Laptop HP Pavilion 15-cs3060TX (8RJ61PA)</h2>
  <p>
    Laptop HP Pavilion 15-cs3060TX (8RJ61PA) được trang bị bộ vi xử lý chip Intel
    Core i5-1035G1 thế hệ thứ 10. Bộ nhớ RAM dung lượng 8GB giúp máy có thể chạy
    đa nhiệm mượt mà, đủ để thỏa mãn nhu cầu làm việc và giải trí thông thường của
    người dùng. Đồng thời nhà sản xuất cũng trang bị cho máy khe RAM trống giúp
    người dùng có thể nâng cấp máy một cách dễ dàng. Ngoài ra, máy còn được trang
    bị ổ cứng SSD 512GB và card đồ họa MX250 2GB giúp máy tăng nhanh tốc độ xử lý
    dữ liệu cũng như xử lý game hay các phần mềm đồ họa mượt mà.
  </p>
  
  <p>
    Màn hình của Laptop HP Pavilion 15-cs3060TX (8RJ61PA) có viền đen với hai cạnh
    bên mỏng, kích thước 15.6” Full HD cho hình ảnh sống động rõ nét. Công nghệ
    tấm nền IPS anti-glare cho góc nhìn lên đến 180 độ nên khi nhìn nghiêng máy
    cũng không bị thay đổi màu sắc. Độ tương phản và độ sâu màu sắc của máy khá
    tốt so với một chiếc laptop tầm trung. Độ sáng màn hình khá cao cùng công nghệ
    chống chói do đó người dùng có thể sử dụng máy trong nhiều điều kiện môi
    trường. Không chỉ mang đến trải nghiệm hình ảnh tốt mà trải nghiệm thính giác
    máy mang lại cũng thuộc hàng cao cấp. Với loa kép, công nghệ HP Audio Boost
    kết hợp với B&O, Laptop HP Pavilion 15-cs3060TX (8RJ61PA) mang đến trải nghiệm
    âm thanh chân thực vô cùng sống động.
  </p>
  `,
    image: "pavilion15.jpg",
  },
  {
    name: "HP ProBook 440 G6",
    model: "5YM73PA",
    price: 19999000,
    brand: "HP",
    spec: {
      cpu: "Intel Core i7 8565U",
      ram: "8GB",
      storage: "1TB HDD + 128GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "DOS",
      color: "Silver",
    },
    description: `<p>
    Là một thành viên trong đại gia đình laptop doanh nghiệp của thương hiệu HP
    nhưng so với đa số các anh em khác, Laptop HP ProBook 440 G6 lại mang vẻ ngoài
    mỏng sang trọng độc đáo. Không chỉ đẹp mà cấu hình của máy khá ổn định, phù
    hợp với hầu hết người dùng làm công việc văn phòng. Chi tiết cụ thể về dòng
    laptop HP ProBook 440 G6, hãy cùng HNC tìm hiểu qua chiếc Laptop HP ProBook
    440 G6 (5YM73PA) dưới đây nhé.
  </p>
  
  <h2>NGOẠI HÌNH CỦA LAPTOP HP PROBOOK 440 G6 (5YM73PA)</h2>
  <p>
    Laptop HP ProBook 440 G6 (5YM73PA) mang lại cảm giác khỏe khoắn cứng cáp với
    các đường nét vuông thành sắc cạnh. Khung máy và lớp vỏ ngoài được làm từ chất
    liệu nhôm nguyên khối, khi cầm trên tay mang đến cảm giác mát lạnh đã tay.
    Viền hai bên màn hình khá hẹp, có tác dụng tăng diện tích màn hình. Bản lề
    được làm chắc chắn với khả năng mở góc 180 độ. Với bản lề này, người dùng sẽ
    có trải nghiệm cực tốt do màn hình rất ít bị rung trong quá trình sử dụng.
  </p>
  
  <p>
    Cũng giống như các thế hệ Probook trước đây, HP ProBook 440 G6 (5YM73PA) đã
    xuất sắc vượt qua tiêu chuẩn độ bền quân đội Mỹ MIL STD-810G. Đặc biệt nhờ lớp
    phim trong suốt lót dưới bàn phím, máy sở hữu tính năng chống tràn cao. Do đó,
    bạn hoàn toàn có thể yên tâm sử dụng máy để làm việc trong một số môi trường
    đặc thù chẳng hạn như môi trường có độ ẩm cao hay môi trường có nhiều bụi bặm.
  </p>
  
  <h2>HIỆU NĂNG CỦA HP PROBOOK 440 G6 (5YM73PA)</h2>
  <p>
    Về mặt hiệu năng, laptop HP ProBook 440 G6 (5YM73PA) có khả năng thỏa mãn nhu
    cầu công việc và giải trí của bạn một cách nhẹ nhàng. Cụ thể HP ProBook 440 G6
    (5YM73PA) được trang bị con chip Intel Core i7 8565U thế hệ thứ 8 đi kèm dung
    lượng RAM 8GB cùng bộ nhớ SSD 128GB kết hợp HDD 1TB. Theo phản ánh của đa số
    người dùng, thời gian khởi động máy khá nhanh, chỉ mất vài giây. Đồng thời,
    trong khi làm việc, họ cũng không hề gặp bất kì hiện tượng giật lag nào cả.
    Tuy nhiên cấu hình này cũng có mặt hạn chế đó là khả năng lưu trữ dữ liệu của
    máy không quá cao.
  </p>
  
  <p>
    Xét trên khía cạnh thời gian sử dụng pin thì pin của HP ProBook 440 G6
    (5YM73PA) là pin 3 cells 45Wh – loại pin ở mức trung bình. Loại pin này cho
    phép người dùng sử dụng máy trong khoảng hơn 2 tiếng đồng hồ nếu máy hoạt động
    hết công suất hoặc từ 7 đến 8 tiếng nếu chỉ kết nối wifi và xem video.
  </p>
  `,
    image: "probook440g6.jpg",
  },
  {
    name: "HP Envy 13",
    model: "8XS69PA",
    price: 27599000,
    brand: "HP",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "Onboard",
      screen: "13.3 inch FHD",
      os: "Win 10",
      color: "Grey",
    },
    description: `<h2>Thiết kế</h2>
    <p>
      Laptop HP Envy 13-aq1047TU 8XS69PA là dòng sản phẩm laptop cao cấp nổi bật với
      thiết kế mỏng nhẹ, gọn gàng. Nhờ kết cấu khung nhôm siêu nhẹ, chiếc máy chỉ có
      khối lượng là 1.28kg – giúp bạn dễ dàng nâng bằng 1 tay cũng như tiện lợi mang
      đi học hay đi làm hàng ngày.
    </p>
    
    <h2>Bản lề nâng đột phá</h2>
    
    <p>
      Khi mở máy, hệ thống bản lề của laptop HP Envy 13 AQ1047TU 8XS69PA sẽ nâng lên
      giúp bạn có trải nghiệm gõ phím thoải mái hơn. Song song đó, bản lề nâng cũng
      hỗ trợ tối ưu hệ thống làm mát để duy trì hiệu năng ở mức cao nhất.
    </p>
    
    <h2>Thiết kế bản lề hiện đại</h2>
    
    <p>
      Laptop core i7 HP Envy 13 sở hữu màn hình 13.3 Full HD nhỏ gọn vừa tầm nhìn.
      Viền màn hình siêu mỏng ở 3 cạnh kết hợp tấm nền IPS giúp góc nhìn rộng hơn
      với 178 độ, góp phần mang lại không gian hiển thị thoải mái nhất cho người
      dùng.
    </p>
    
    <h2>Màn hình viền mỏng sắc nét</h2>
    
    <p>
      Bên cạnh đó, độ phân giải FHD sẽ giúp hình ảnh hiển thị chân thực và sống động
      cho bạn làm việc và giải trí hiệu quả.
    </p>
    
    <h2>Hiệu năng</h2>
    
    <p>
      Bạn đang tìm kiếm laptop gọn nhẹ và có hiệu năng cao? Hp Envy 13 i7 sẽ là lựa
      chọn hoàn hảo cho câu hỏi của bạn. Với trang bị chip Core i7-10510U 4 nhân 8
      luồng cùng RAM 8GB, mọi đa nhiệm hàng ngày sẽ được xử lý dễ dàng và mượt mà.
      Thêm vào đó, SSD 512GB cũng hỗ trợ tốt để giúp truy xuất dữ liệu nhanh chóng
      hơn.
    </p>
    
    <p>
      Tuy không có card rời nhưng với nền tảng UHD Graphics, bạn cũng sẽ dễ dàng
      thực hiện việc chỉnh sửa ảnh đơn giản cũng như giải trí tốt với các game
      offline nhẹ hàng ngày.
    </p>
    
    <h2>Thời lượng pin bền bỉ</h2>
    
    <p>
      Bạn đã sẵn sàng cho một ngày dài năng động mà không cần bận tâm đến việc sạc
      pin? Hãy để HP Envy 13 AQ1047TU 8XS69PA làm điều đó với trang bị pin 4 cell
      53Whr đem lại thời lượng pin lên tới 14 tiếng cùng công nghệ sạc nhanh ấn
      tượng (Sạc đầy 50% dung lượng pin trong vòng 45” khi máy đang ở trạng thái
      “shut down”).
    </p>
    
    <h2>Bàn phím</h2>
    
    <p>
      Đồng điệu với màn hình viền mỏng 4 cạnh là bàn phím tràn lề ấn tượng. Các phím
      được thiết kế hình vuông cân đối với kích thước hợp lí giúp bạn gõ chính xác
      và tiện lợi.
    </p>
    
    <p>
      Để phù hợp với kích thước màn hình 13.3”, bàn phím sẽ không hỗ trợ phím số
      nhưng bù lại laptop HP Envy 13 AQ1047TU sở hữu đèn nền tiện lợi để bạn thao
      tác gõ phím tốt hơn trong điều kiện thiếu sáng.
    </p>
    `,
    image: "envy13.jpg",
  },
  {
    name: "HP Spectre x360 Convertible 13",
    model: "8YQ35PA",
    price: 45999000,
    brand: "HP",
    spec: {
      cpu: "Intel Core i7 1065G7",
      ram: "16GB",
      storage: "512GB SSD",
      vga: "Onboard",
      screen: "13.3 inch FHD",
      os: "Win 10",
      color: "Black",
    },
    description: `<p>
    Sở hữu thiết kế mảnh mai nhưng không kém phần khỏe khoắn, dòng máy tính xách
    tay cao cấp 2 trong 1 Laptop HP Spectre x360 Convertible 13 thu hút mọi ánh
    nhìn của tất cả mọi người ngay từ lần đầu tiên. Hãy cùng HNC tìm hiểu dòng
    laptop đặc biệt này qua mẫu Laptop HP Spectre x360 Convertible 13-aw0181TU
    (8YQ35PA) mới nhất này nhé!
  </p>
  
  <h2>Thiết kế của Laptop HP Spectre x360 Convertible 13-aw0181TU (8YQ35PA)</h2>
  
  <p>
    Mẫu laptop HP Spectre x360 Convertible 13-aw0181TU (8YQ35PA) là một thành viên
    trong dòng sản phẩm laptop sang trọng nhất của thương hiệu HP. Máy có thiết kế
    mỏng nhẹ với độ dày chỉ 13.6mm và trọng lượng chỉ 1.26kg, được cắt vát từ một
    khối hợp kim nhôm duy nhất bằng lập trình máy tính có độ chính xác cao đến
    từng milimet. Những chi tiết của máy đều được tính toán nhằm mang đến cho
    người dùng một thiết bị mạnh mẽ với các đường nét gãy gọn, định hình thanh nhã
    và cấu trúc nhẹ nhàng. Hành trình phím dài và độ nảy tốt chắc chắn sẽ mang đến
    những trải nghiệm thoải mái nhất cho người dùng.
  </p>
  
  <p>
    Với bản lề vô cùng chắc chắn có thể gập xoay 360 độ, Laptop HP Spectre x360
    Convertible 13-aw0181TU (8YQ35PA) có khả năng chuyển đổi mượt mà từ hiệu năng
    công việc vượt trội sang chế độ sáng tạo tuyệt vời. Người dùng có 4 chế độ vô
    cùng đa dạng có thể sử dụng trên máy: một là chế độ máy tính xách tay xử lý đa
    tác vụ, hai là chế độ máy tính bảng để viết, ba là chế độ xoay ngược để xem và
    cuối cùng là chế độ gấp tam giác hoàn hảo để cùng chia sẻ. Theo lời hãng HP
    tuyên bố, bản lề này cho phép máy gập xoay hết cỡ trên 28000 lần, vì vậy người
    dùng có thể hoàn toàn yên tâm sử dụng máy.
  </p>
  
  <h2>Hiệu năng của Laptop HP Spectre x360 Convertible 13-aw0181TU (8YQ35PA)</h2>
  
  <p>
    Sở hữu hiệu năng đỉnh cao cùng thời lượng pin đột phá, Laptop HP Spectre x360
    Convertible 13-aw0181TU (8YQ35PA) thực sự là một thiết bị có sức mạnh đỉnh cao
    và sự dẻo dai phi thường. Máy được trang bị con chip Intel Core i7 1065G7 thế
    hệ thứ 10 mới nhất của nhà Intel đảm bảo tốc độ xử lý các tác vụ đa nhiệm
    tuyệt vời. Bộ nhớ RAM dung lượng 16GB đủ để người dùng giải quyết các công
    việc thường ngày một cách vô cùng mượt mà. Ổ cứng SSD dung lượng 512GB không
    những có dung lượng khá lớn mà còn có tốc độ truy xuất và phản hồi dữ liệu cực
    nhanh, giúp người dùng tăng nhanh hiệu suất làm việc. Một điểm đáng tiếc là do
    máy thuộc dòng mỏng nhẹ nên chỉ có khả năng nâng cấp duy nhất ổ cứng. Tuy
    nhiên nhìn chung, với cấu hình trên máy đã có thể thỏa mãn hầu hết nhu cầu làm
    việc và giải trí của người dùng.
  </p>
  
  <p>
    Không chỉ có cấu hình cao mà Laptop HP Spectre x360 Convertible 13-aw0181TU
    (8YQ35PA) còn tạo ấn tượng với thời lượng pin khủng có thể lên đến hơn 16
    tiếng cùng công nghệ sạc nhanh Fast Charge cho phép người dùng tận dụng linh
    động và triệt để quỹ thời gian trong ngày để làm nhiều việc hơn. Một điểm khác
    gây ấn tượng mạnh với người dùng là khá nhiều công nghệ bảo mật thông minh
    tiên tiến được tích hợp trên máy như màn hình chống nhìn trộm HP SURE VIEW,
    đầu đọc vân tay, camera hồng ngoại nhận diện khuôn mặt… Chất lượng hình ảnh và
    âm thanh mà máy mang lại thuộc hàng đỉnh cao với màn hình cảm ứng 13.3 inch 4K
    viền siêu mỏng, kính cường lực CORNING® GORILLA® GLASS NBT™ cùng âm thanh chân
    thực sống động được tinh chỉnh bởi các chuyên gia của B&O.
  </p>
  `,
    image: "spectrex360.jpg",
  },
  {
    name: "HP WS Zbook 15 G6",
    model: "6CJ09AV",
    price: 51999000,
    brand: "HP",
    spec: {
      cpu: "Intel Core i7 9750H",
      ram: "16GB",
      storage: "256GB SSD",
      vga: "NVIDIA Quadro T2000 4GB",
      screen: "15.6 inch FHD",
      os: "DOS",
      color: "Black",
    },
    description: `<h2>Hiệu năng xử lý 3D chuyên nghiệp</h2>
    <p>
      Laptop HP ZBook 15 G6 (6CJ09AV) giúp xử lý nhiều công việc hơn cùng một lúc
      với bộ xử lý Intel đa nhân thế hệ mới nhất được thiết kế để xử lý các ứng dụng
      phức tạp, đa luồng như Adobe Premier Pro và tăng tốc với Autodesk 3ds Max.
      Render hình ảnh và thiết kế quang học nhanh chóng với đồ họa NVIDIA Quadro
      T2000 giúp tối ưu hóa đem lại sự ổn định và hiệu suất cao nhất với các ứng
      dụng phần mềm chuyên nghiệp.
    </p>
    
    <h2>Tản nhiệt tốt hơn 30%</h2>
    
    <p>
      Laptop HP ZBook 15 G6 (6CJ09AV) được thiết kế các quạt tản nhiệt lớn hơn và
      chạy ở tốc độ RPM chậm hơn, âm thầm hút khí lạnh qua cửa hút và truyền nó qua
      các vây nhiệt giúp tản nhiệt hiệu quả đem lại hiệu suất tối đa từ ​​lõi
      CPU/GPU.
    </p>
    
    <h2>Nâng cấp cấu hình đơn giản</h2>
    
    <p>
      Với việc có thể nâng cấp lên nhiều cấu hình khác nhau, Laptop HP ZBook 15 G6
      (6CJ09AV) có thể đáp ứng các nhu cầu công việc của mọi kỹ sư và nhà thiết kế.
      Và khi nhu cầu công việc của bạn cần phát triển, hãy nâng cấp bộ nhớ RAM hoặc
      ổ lưu trữ nhanh chóng chỉ trong trong vài giây.
    </p>
    
    <h2>Bảo mật an toàn</h2>
    
    <p>
      Bảo vệ công việc của bạn với các tính năng bảo mật hàng đầu trong ngành. Một
      nút chạm kích hoạt màn hình bảo mật HP Sure View trên Laptop HP ZBook 15 G6
      (6CJ09AV) giúp chống nhìn lén từ mọi phía và chế độ RAID 1 duy trì bản sao lưu
      tất cả các tệp của bạn trong trường hợp bạn cần.
    </p>
    
    <h2>Hình ảnh sắc nét chuyên nghiệp</h2>
    
    <p>
      Mang tất cả dự án của bạn với hình ảnh cực kỳ chuyên nghiệp với màn hình HP
      DreamColor có độ phân giải cao và độ sáng lên đến 600 nits. Laptop HP ZBook 15
      G6 (6CJ09AV) duy trì độ chính xác màu với hệ thống hiệu chỉnh màu tích hợp.
      Kết nối với nhiều màn hình và nhận tốc độ truyền tải dữ liệu nhanh chóng với
      cổng Thunderbolt™ 3 kép.
    </p>
    
    <h2>Lưu trữ mạnh mẽ</h2>
    
    <p>
      Làm việc với năng suất cao nhất ở bất kỳ nơi nào nhờ bộ lưu trữ PCIe tích hợp
      có tốc độ xử lý dữ liệu nhanh hơn tới 6 lần so với SSD SATA và nhanh hơn tới
      21 lần so với lưu trữ ổ cứng truyền thống.
    </p>
    `,
    image: "wszbook15g6.jpg",
  },

  {
    name: "Lenovo IdeaPad 5",
    model: "81YK004VVN",
    price: 15999000,
    brand: "Lenovo",
    spec: {
      cpu: "Intel Core i5 1035G1",
      ram: "8GB",
      storage: "256GB SSD",
      vga: "NVIDIA MX330 2GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Grey",
    },
    description: `<h2>Hoàn toàn yên tâm về bảo mật</h2>
    <p>
      Việc hình ảnh đời tư bị hack đang là một nguy cơ tiềm ẩn trong cuộc sống hiện
      đại ngày nay. Ở Lenovo IdeaPad 5-15IIL05, bạn có thể khóa hoàn toàn webcam khi
      không dùng đến, để những hacker không thể nào thâm nhập được hình ảnh. Ngoài
      ra, với một đầu đọc vân tay ngay trên phím nguồn, bạn có thể đăng nhập vào
      laptop một cách nhanh chóng và an toàn, không cần phải nhập mật khẩu.
    </p>
    
    <h2>Hiệu năng cực đỉnh, tốc độ hoàn hảo</h2>
    
    <p>
      Lenovo IdeaPad 5-15IIL05 sở hữu hiệu năng cực đỉnh nhờ việc trang bị bộ vi xử
      lý Intel thế hệ thứ 10 Ice Lake mới nhất. IdeaPad 5 mang trên mình con chip
      Intel Core i5 1035G1 sản xuất trên tiến trình 10nm tiên tiến nhất hiện nay,
      cho tốc độ xử lý nhanh vượt trội đồng thời rất tiết kiệm năng lượng, góp phần
      kéo dài tuổi thọ pin. Bên cạnh đó là 8GB RAM DDR4 và ổ cứng SSD 512GB cao cấp.
    </p>
    
    <p>
      8GB RAM chuẩn DDR4 sẽ giúp bạn làm được nhiều việc cùng lúc hơn nhờ nâng cao
      khả năng đa nhiệm. Trong khi đó ổ cứng SSD có dung lượng lớn 512GB là một linh
      kiện rất đắt tiền, vì nó vừa đảm bảo tăng tốc máy tính toàn diện, lại vừa cho
      dung lượng lưu trữ lớn. Bạn sẽ có một chiếc laptop hiệu năng lý tưởng trong
      tầm giá.
    </p>
    
    <h2>RAM Lenovo IdeaPad 5-15IIL05</h2>
    
    <p>
      Với cấu hình xuất sắc, Lenovo IdeaPad 5-15IIL05 chắc chắn sẽ đáp ứng tốt công
      việc và nhu cầu giải trí của bạn. Ngoài ra, việc sử dụng lâu dài cũng là điều
      mà bạn yên tâm vì đây đều là những linh kiện mới và tốt bậc nhất, không hề bị
      lỗi thời.
    </p>
    
    <h2>Thiết kế mềm mại, cao cấp hàng đầu</h2>
    
    <p>
      Lenovo IdeaPad 5-15IIL05 có thiết kế cân bằng giữa tất cả những gì người dùng
      cần. Bạn sẽ có một chiếc laptop bề ngoài đẹp, cao cấp và hết sức cơ động. Kiểu
      dáng máy được làm vuông vắn, độ hoàn thiện cao, khi gấp lại hoàn toàn phẳng,
      cân đối tạo nên dáng vẻ rất hiện đại. Nhưng ấn tượng hơn phải nói đến kiểu sơn
      mới áp dụng trên Lenovo IdeaPad 5-15IIL05. Lớp sơn mới mềm tựa như vải, giúp
      chiếc máy tính của bạn vô cùng mềm mại, cho cảm giác thoải mái khi chạm vào
      máy. Lenovo IdeaPad 5-15IIL05 cũng hết sức nhỏ gọn với độ mỏng 1,99cm và trọng
      lượng chỉ 1,8 kg, vô cùng nhẹ nhàng để bạn mang máy đi bất cứ đâu dù đây là
      một chiếc laptop màn hình lớn 15,6 inch.
    </p>
    
    <h2>Chiếc laptop viền mỏng nhất bạn từng thấy</h2>
    
    <p>
      Lenovo IdeaPad 5-15IIL05 là một trong những chiếc laptop có viền màn hình mỏng
      nhất trên thị trường hiện nay. Bạn sẽ được đắm chìm trong những bộ phim,
      chương trình yêu thích với màn hình Full HD sắc nét, viền mỏng đến tối đa. Với
      viền cạnh chỉ 4,3mm, IdeaPad 5 mang đến một màn hình viền mỏng đáng kinh ngạc,
      cho diện tích màn hình chiếm tới 90% mặt trước, hoàn hảo cho cả công việc lẫn
      giải trí.
    </p>
    
    <h2>Âm thanh Dolby sống động</h2>
    
    <p>
      Tất nhiên để giải trí được hấp dẫn như ý muốn thì bên cạnh phần nhìn, chúng ta
      còn cần được thỏa mãn cả phần nghe. Lenovo IdeaPad 5 với âm thanh đến từ Dolby
      Audio, mang đến những âm thanh chân thực chuẩn rạp chiếu phim. Bạn sẽ có những
      phút giây giải trí thoải mái trên chiếc laptop yêu thích.
    </p>
    
    <h2>Thời lượng pin lên tới 15 tiếng, sạc nhanh siêu tốc</h2>
    
    <p>
      Bộ vi xử lý mới tiết kiệm năng lượng giúp thời lượng pin Lenovo IdeaPad 5 xuất
      sắc hơn bao giờ hết. Laptop có thể bên bạn suốt cả ngày làm việc mà không cần
      nguồn sạc. Thời gian sử dụng lên tới 15 giờ cho công việc văn phòng, đây là
      thông số rất tuyệt vời của một chiếc laptop mỏng nhẹ như Lenovo IdeaPad 5. Ấn
      tượng hơn nữa, với việc tương thích chuẩn sạc nhanh Quick Charge 2.0, bạn chỉ
      mất vỏn vẹn 15 phút sạc để máy có thể sử dụng trong 3 giờ đồng hồ.
    </p>
    
    <h2>Đầy đủ cổng kết nối</h2>
    
    <p>
      Trên Lenovo IdeaPad 5 là những cổng kết nối đầy đủ và đa dạng, phục vụ hoàn
      hảo cho công việc của bạn. Các cổng kết nối này bao gồm 2 cổng USB 3.1; cổng
      USB Type-C; cổng HDMI; đầu đọc thẻ SD 4-in-1 và jack tai nghe.
    </p>
    `,
    image: "ideapad5.jpg",
  },
  {
    name: "Lenovo ThinkPad E14",
    model: "20RAS0KX00",
    price: 16199000,
    brand: "Lenovo",
    spec: {
      cpu: "Intel i5 10210U",
      ram: "8GB",
      storage: "256GB SSD",
      vga: "Onboard",
      screen: "14 inch FHD",
      os: "DOS",
      color: "Black",
    },
    description: `<h2>Thiết kế</h2>
    <p>
      Chiếc laptop "đàn em" của ThinkPad E490 có thiết kế mỏng hơn và nhẹ hơn so với
      người đi trước. Hướng tới đối tượng là doanh nhân, những người liên tục phải
      đi công tác, ThinkPad E14 được thiết kế với độ dày chưa đầy 20mm, gấp hơn hai
      lần chiếc iPhone 11 Pro Max, và cân nặng chỉ vỏn vẹn 1.7kg. Với một kích cỡ
      như thế này, người dùng có thể dễ dàng mang chiếc ThinkPad E14 này đi khắp
      nơi, phục vụ nhiều mục đích sử dụng. Phần vỏ được làm phần lớn từ nhôm cứng
      cáp nhưng vẫn đảm bảo được cân nặng cho thiết kế mỏng nhẹ của ThinkPad E14,
      kết hợp với các góc bo vuông vức, mang lại cho người dùng một cảm giác rất
      sang trọng, lịch lãm và đậm chất doanh nhân. Vân tay được tích hợp vào nút
      nguồn, chủ nhân của chiếc máy có thể vừa thực hiện xác minh bản thân trong lúc
      khởi động máy, giúp rút ngắn các thao tác. Thế nhưng có một điểm trừ khá lớn ở
      thiết kế của chiếc ultrabook này, đó là khi đóng/mở màn hình, người dùng có
      thể nghe thấy những tiếng lạch xạch nhỏ khá là khó chịu.
    </p>
    
    <h2>Màn hình</h2>
    
    <p>
      Chiếc ThinkPad E14 được trang bị màn hình 14 inch với tỉ lệ 16:9, độ phân giải
      Full HD. Chiếc laptop này còn có công nghệ màn hình IPS, giúp cung cấp những
      dải màu rộng hơn, mang đến cho người dùng những trải nghiệm giải trí chân
      thật, sống động. Bên cạnh đó, nếu người dùng phải sử dụng máy tính liên tục
      trong nhiều giờ đồng hồ thì cũng không quá lo ngại, bởi công nghệ chống chói
      Anti-glare sẽ giúp giảm cảm giác khô và nhức mỏi mắt. Và tất nhiên, với một
      chiếc laptop ở tầm thấp này, chúng ta khó có thể đòi hỏi màn hình có thể cảm
      ứng được từ phía Lenovo. Độ sáng màn hình là 250 nits, vẫn đủ sáng nếu chỉ
      dùng trong nhà, nhưng nếu người dùng muốn làm việc ngoài trời hay ở những nơi
      có độ sáng cao, thì màn hình của chiếc ThinkPad E14 sẽ làm bạn thất vọng.
    </p>
    
    <h2>Hiệu năng</h2>
    
    <p>
      Hiệu năng của chiếc ThinkPad E14 là khá ổn định, nhưng chỉ trên mức trung
      bình. Về CPU, người dùng có thể lựa chọn từ Intel Core i3-10110U hai lõi cho
      đến Core i7-10710U bốn lõi. Mọi phiên bản CPU đều được trang bị Intel UHD
      Graphics 620, ngoài ra, ở phiên bản max-option, người dùng có thể nâng cấp
      thêm AMD Radeon 625 hoặc AMD Radeon RX 640. Với sức mạnh này, chiếc ThinkPad
      E14 hoàn toàn có thể phục vụ nhu cầu sử dụng văn phòng hay các tác vụ chỉnh
      sửa ảnh. Đây là chiếc ultrabook nhắm tới đối tượng doanh nhân hay dân văn
      phòng là chủ yếu, nên sức mạnh gaming của ThinkPad E14 không có gì ấn tượng.
      Nếu bạn muốn có một trải nghiệm chơi game mượt mà và tối ưu nhất, có lẽ bạn
      nên cân nhắc nâng cấp card đồ họa lên AMD hoặc chuyển sang một dòng máy khác,
      như Legion Y-Series chẳng hạn.
    </p>
    
    <h2>Thời lượng pin</h2>
    
    <p>
      Có thể nói, ThinkPad E14 có thời lượng pin khá tốt. Với thời lượng sạc trung
      bình 108 phút, người dùng có thể sử dụng chiếc laptop này liên tục trong vòng
      8 tiếng đối với các tác vụ thông thường. Về mặt nhiệt độ, mức nhiệt cao nhất
      mà chiếc ThinkPad E14 có thể đạt được là khoảng 41°C, ấm nhưng không quá nóng.
      Chiếc laptop này cũng vận hành rất êm ái, người dùng khó có thể nghe được âm
      thanh lớn nào ngay cả khi chạy những tác vụ đòi hỏi nhiều nhất.
    </p>
    `,
    image: "thinkpade14.jpg",
  },
  {
    name: "Lenovo ThinkBook 15",
    model: "20RW0091VN",
    price: 14399000,
    brand: "Lenovo",
    spec: {
      cpu: "Intel Core i5 10210U",
      ram: "4GB",
      storage: "256GB SSD",
      vga: "Onboard",
      screen: "15.6 inch FHD",
      os: "DOS",
      color: "Grey",
    },
    description: `<h2>Giới thiệu về Laptop Lenovo ThinkBook 15-IML (20RW0091VN)</h2>

    <p>
      Được trang bị cấu hình hiệu năng cao cũng như có thiết kế nhằm đảm bảo tính
      bảo mật và độ bền bỉ, dòng Laptop ThinkBook 15 của Lenovo sẽ giúp bạn tự tin
      xử lý công việc ở bất cứ đâu. Hôm nay, HANOICOMPUTER sẽ giúp các bạn có một
      cái nhìn sơ lược về dòng máy này qua bài viết đánh giá Laptop Lenovo ThinkBook
      15-IML (20RW0091VN) – một trong những mẫu máy tiêu biểu của ThinkBook 15 ngay
      dưới đây.
    </p>
    
    <h2>Hiệu năng nổi trội</h2>
    
    <p>
      Trước hết hãy cùng khám phá cấu hình hiệu năng của Laptop Lenovo ThinkBook
      15-IML (20RW0091VN). Máy được trang bị bộ vi xử lý Intel Core i5 thế hệ thứ 10
      không chỉ hoạt động nhanh và hiệu quả hơn mà còn giúp máy tiết kiệm điện năng
      pin, kéo dài thời gian hoạt động. Bộ nhớ RAM 4GB không phải quá cao nhưng cũng
      vừa đủ giúp máy xử lý mượt mà các ứng dụng văn phòng cơ bản hay lướt web, xem
      phim… Nếu bạn cảm thấy bộ nhớ RAM này chưa đủ dùng thì vẫn có thể nâng cấp
      thêm do máy hỗ trợ tối đa 20GB RAM.
    </p>
    
    <p>
      Ổ cứng được cài đặt cho máy là ổ cứng SSD 256GB M.2 2280 NVME TLC. Ổ cứng này
      sẽ giúp bạn làm việc có hiệu suất cao hơn khi máy có tốc độ truy xuất dữ liệu,
      tốc độ khởi động cũng như khả năng vận hành nhanh chóng và mạnh mẽ. Với cấu
      hình trên, Laptop Lenovo ThinkBook 15-IML (20RW0091VN) chắc chắn sẽ mang đến
      cho bạn hiệu năng cao liên tục và tính phản hồi nhanh nhạy dù bạn đang ở đâu.
    </p>
    
    <h2>Thiết kế mỏng nhẹ di động đảm bảo độ bảo mật cao</h2>
    
    <p>
      Bên cạnh hiệu năng nổi trội, thiết kế của Laptop Lenovo ThinkBook 15-IML hướng
      đến mỏng nhẹ, di động song không mất đi sự bền bỉ cũng như đảm bảo tính bảo
      mật cao. Máy có độ mỏng chỉ 18.9mm cũng như cân nặng chỉ 1.8kg, kích thước này
      cho phép máy nằm gọn trong ba lô hay túi xách, sẵn sàng cho mọi chuyến đi công
      tác dài ngày.
    </p>
    
    <p>
      Bản lề của máy khá chắc chắn, có thể mở một góc tối đa 180 độ, giúp bạn có thể
      dễ dàng điểu chỉnh góc nhìn sao cho phù hợp nhất với bản thân. Một điểm nổi
      bật mà ta không thể không nhắc đến trong thiết kế của mẫu laptop này chính là
      nắp đậy camera ThinkShutter. Đây là nắp đậy vật lý dùng để che webcam, đảm bảo
      hình ảnh riêng tư của người dùng không bị lộ khi chủ nhân không hề hay biết.
    </p>
    
    <h2>Trải nghiệm hình ảnh âm thanh</h2>
    
    <p>
      Vì Laptop Lenovo ThinkBook 15-IML (20RW0091VN) có cạnh màn hình viền mỏng và
      tỉ lệ từ màn hình xuống thân là 80%, sự tương tác trên màn hình sẽ trở nên
      chân thực hơn với màn hình Full HD 15.6". Không những thế, bạn sẽ được cảm
      nhận sự phong phú, rõ ràng của âm thanh thông qua hai loa ngoài Dolby Audio™.
    </p>
    `,
    image: "thinkbook15.jpg",
  },
  {
    name: "Lenovo Legion 5",
    model: "15IMH05",
    price: 26499000,
    brand: "Lenovo",
    spec: {
      cpu: "Intel Core i7 10750H",
      ram: "8GB",
      storage: "512GB SSD",
      vga: "NVIDIA GTX1650 4GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Black",
    },
    description: `<h2>Hiệu năng mạnh mẽ</h2>
    <p>
      Được trang bị Intel Core i7 10750H đây là thế mới nhất của Intel, thêm bộ nhớ
      Ram 8GB DDR giúp khả năng xử lý các tác vụ đa nhiệm mượt mà, nhẹ nhàng hỗ trợ
      trải nghiệm chơi game tốt nhất, nhanh nhất.
    </p>
    
    <p>
      Card rời GTX 1650 4GB hỗ trợ tăng tốc độ xử lý cho các game phổ biến nhất LOL,
      FO4, CS.GO ở mức FPS 70 max setting, các Game 3D cấu hình cao như PUBG, GTA 5,
      War Tank, God of War thì cũng chẳng phải nghĩ ngợi nhiều đâu chơi ổn định ở
      mức cấu hình trung bình ngon lành.
    </p>
    
    <h2>Tản nhiệt</h2>
    
    <p>
      Lenovo Legion 5 15IMH05 82AU004XVN trang bị công nghệ Legion Coldfront.
      Coldfront mang đến các tính năng mới nhất mà hệ thống tản nhiệt hai kênh có
      thể cung cấp, bao gồm làm mát CPU và GPU riêng cho nhiệt độ hệ thống không bị
      quá tải, bốn lỗ thông hơi để cải thiện luồng khí, đồng bộ nhiệt chuyên dụng
      cho nhiệt độ bàn phím mát hơn và 70 cánh quạt riêng lẻ trên mỗi kênh giúp giảm
      tiếng ồn hệ thống. Chơi liên tiếp trong nhiều giờ liền mà không bị nóng máy.
    </p>
    
    <h2>Màn hình Full HD</h2>
    
    <p>
      Được sử dụng màn hình Full HD có kích thước 15.6 inch IPS gần như tràn viền.
      Khiến cho các trò chơi yêu thích của bạn trở nên sống động với màn hình chất
      lượng cao, tần số quét lên đến 120Hz (tùy chọn phiên bản) và độ sáng 300 nit
      cho người chơi được trải nghiệm hình ảnh chân thực, sắc nét nhất, tạo cảm giác
      thật khi đang chơi game.
    </p>
    
    <h2>Thiết kế</h2>
    
    <p>
      Có kích thước 36.32 x 25.91 x 2.54cm và 2,3kg được làm từ hợp kim nhôm. Nhìn
      chung với thiết kế của một chiếc Laptop Gaming như thế này được coi là khá
      nhẹ. Máy được thiết kế mạnh mẽ khá vuông vắn tạo cảm giác cho người sử dụng
      hài lòng ưng ý.
    </p>
    
    <h2>Bàn phím và trackpad</h2>
    
    <p>
      Lenovo Legion 5 15IMH05 sử dụng bàn phím Legion TrueStrike mới với bàn phím
      số, hành trình phím 1,5 mm với thời gian phản hồi dưới 1 mili giây. Bàn phím
      này cũng được trang bị đèn nền RGB bốn vùng tùy chọn với lớp phủ phím chống
      dầu và mài mòn hỗ trợ game thủ chơi trong không thiếu sáng rất tốt. Bên cạnh
      đó, Lenovo cũng tăng kích thước của trackpad lên 39% cho bạn không gian di
      chuột rộng rãi hơn.
    </p>
    `,
    image: "legion5.jpg",
  },
  {
    name: "Lenovo IdeaPad Gaming 3",
    model: "82EY00C3VN",
    price: 16999000,
    brand: "Lenovo",
    spec: {
      cpu: "AMD R5 4600H",
      ram: "8GB",
      storage: "256GB SSD",
      vga: "NVIDIA GTX1650 4GB",
      screen: "15.6 inch FHD",
      os: "Win 10",
      color: "Black",
    },
    description: `<h2>
    Thiết kế từ nhựa cao cấp cho độ bền bỉ cùng màn hình 15.6 inche chống chói
  </h2>
  
  <p>
    Mang trong mình một thiết kế từ nhựa cao cấp với độ cứng và độ bền bỉ tốt theo
    thời gian. Với thiết kế nhựa chắc hẳn máy sẽ hạn chế được các lực tác động lên
    bo mạch chủ khi có xảy ra rơi rớt và đồng thời hạn chế được các trầy xước trên
    mặt lưng.
  </p>
  
  <h2>RAM DDR4 8GB đa nhiệm tốt cùng ổ cứng SSD 256GB tốc độ cao</h2>
  
  <p>
    Thông thường trên các loại laptop trên thị trường hiện nay, đặc biệt là các
    dòng laptop cùng phân khúc lại có mức RAM 4GB phổ thông, thì với chiếc laptop
    Gaming 3 này bạn sẽ có được mức RAM gấp đôi lên đến 8GB. Việc này giúp bạn có
    thể đa nhiệm và xử lý đa nhiệm tốt và nhanh hơn.
  </p>
  
  <h2>Window 10 Home SL bản quyền và viên pin 3 Cell Li-Polymer bền bỉ</h2>
  
  <p>
    Windows 10 Home được tích hợp sẵn trên chiếc laptop giúp cho máy hoạt động ổn
    định và nhẹ nhàng hơn. Cùng với đó là hệ thống AI của window 10 cũng tốt hơn
    các thế hệ Windows trước khi chúng có khả năng phản hồi giọng nói Cortana giúp
    bạn có thể tương tác một cách nhanh chóng.
  </p>
  `,
    image: "ideapadgaming3.jpg",
  },
];

const sortArr = [...products];
