const { faker } = require("@faker-js/faker");
const fs = require("fs");

(() => {
  let data = {
    all: [],
    news: [
      {
        id: faker.datatype.uuid(),
        name: "ISEKAI DE CHEAT SKILL WO TE NI SHITA ORE WA, GENJITSU SEKAI WO MO MUSOU SURU: LEVEL UP WA JINSEI WO KAETA TẬP 1",
        episode: "1",
        youtubeID: "mCgnSU4DLnM",
        view: "16,008",
        love: "240",
        follower: "290",
        category: ["Hành động", "Phiêu Lưu", "Giả tưởng"],
        description:
          "Cơ hội để trở lại! Một cánh cửa bí ẩn đã mở ra, một cầu bé bị bắt nạt đã bước một bước can đảm vào nơi chưa ai được biết. Ở phía bên kia, cậu đã tìm thấy một kho cổ vật vô giá và một thế giới ma thuật. Tuy nhiên, cậu có thể mang bất cứ thứ gì cậu muốn khi quay trở về Trái Đất. Sẽ không lâu nữa trước khi cuộc sống hai thế giới sẽ thay đổi cậu mãi mãi...",
        tag: [
          "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too / Iseleve",
          "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
          "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta Vietsub",
          "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta tập mới nhất",
        ],
        images: "https://i.postimg.cc/8c0VFSnY/r-9.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "ISEKAI WA SMARTPHONE TO TOMO NI. TẬP 13",
        episode: "13",
        youtubeID: "xCb1-JZFMlM",
        view: "2,155,782",
        love: "7,203",
        follower: "9,186",
        category: ["Lãng mạn", "Hài Hước", "Siêu Nhiên"],
        description:
          "Sau một tai nạn trời đánh vật nhân vật chính của chúng ta đến chết, Mochizuki Touya 15 tuổi tỉnh lại và hiện ra trước mặt cậu là God. Vị thần tối cao đã thốt lên một câu: Ta e rằng ta đã phạm phải một sai lầm ngớ ngẩn... Nhưng chết chưa phải là hết! Để bù đắp lại lỗi lầm của mình, God nói rằng Ngài có thể hồi sinh Touya tại một thế giới giả tưởng. Thêm vào đó, Touya có thể mang theo chiếc smartphone của mình. Thế là cuộc phiêu lưu mới đến thế giới phép thuật kì lạ, xa xôi đã bắt đầu. Bạn bè! Tiếng cười! Nước mắt! Touya bắt đầu chuyến đi mà không biết mình đi đâu, đụng độ nhiều vấn đề chung quanh cậu. Một thế giới bi hùng về kiếm, pháp thuật và điện thoại di động đã được mở màn!",
        tag: [
          "In Another World With My Smartphone",
          "Isekai wa Smartphone to Tomo ni.",
          "Isekai wa Smartphone to Tomo ni. Vietsub",
          "Isekai wa Smartphone to Tomo ni. HD",
        ],
        images: "https://i.postimg.cc/CKqdSvdY/r-8.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "KUMA KUMA KUMA BEAR TẬP 12",
        episode: "12",
        youtubeID: "5p7R85uHzP0",
        view: "171,380",
        love: "855",
        follower: "796",
        category: ["Viễn tưởng", "Hài Hước", "Phiêu Lưu"],
        description:
          "Câu chuyện xoay quanh Yuna, một cô gái 15 tuổi bắt đầu chơi game định dạng VRMMO đầu tiên trên thế giới. Cô đã nhận được hàng tỷ Yên từ tiền cổ phiếu đó và quyết định đóng đô luôn trong nhà, không đi học nữa. Đột nhiên, một bản cập nhật lớn đã tới tay người chơi. Cô ấy nhận được bộ trang phục Gấu quý hiếm, không-thể-chuyển-giao-cho-người-khác. Nhưng bộ đồ ấy làm cô quá mắc cỡ, đến nỗi cô cũng không dám mặc nó trong game. Hơn thế nữa, khi trả lời khảo sát về bản cập nhật cũng như tình hình khởi động lại game, cô nhận ra mình đã xuất hiện ở một thế giới khác, trong bộ trang phục gấu. Đây là đâu? Một lá thư từ Thần ư? Một thế giới khác sao?",
        tag: [
          "The Bears Bear a Bare Kuma",
          "Kuma Kuma Kuma Bear",
          "Kuma Kuma Kuma Bear Vietsub",
          "Kuma Kuma Kuma Bear HD",
        ],
        images: "https://i.postimg.cc/wvQ52xX1/r-7.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "ALICE GEAR AEGIS EXPANSION TẬP 1",
        episode: "1",
        youtubeID: "mCgnSU4DLnM",
        view: "4,231",
        love: "24",
        follower: "40",
        category: ["Hành động", "Viễn tưởng", "Game"],
        description:
          "Thời gian là tương lai, dưới sự tấn công bất ngờ của dạng sống máy móc Weiß, con người buộc phải thoát khỏi trái đất và tiến vào vũ trụ. Trong thời gian chạy trốn, Space Fleet SHARD đã phát triển thành công Alice Gear, một bộ giáp có thể cho phép con người chiến đấu chống lại Weiß, và gọi những người phụ nữ xuất sắc phù hợp để vận hành họ là Actress.Thời gian trôi qua, Actress của các doanh nghiệp tư nhân cũng có thể làm việc để trục xuất Weiß sau khi được tổ chức Weiß AEGiS công nhận, và đây cũng là khởi đầu của câu chuyện về những cô gái với Alice Gear cứu những người lang thang trong vũ trụ!",
        tag: [
          "Alice Gear Aegis Expansion",
          "Alice Gear Aegis Expansion Vietsub",
          "Alice Gear Aegis Expansion HD",
          "Alice Gear Aegis Expansion tập mới nhất",
        ],
        images: "https://i.postimg.cc/2SSQwfy6/r-6.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "《Kaguya-sama: Love Is War -The First Kiss That Never Ends-》 - Main PV1",
        episode: "Trailer",
        youtubeID: "5rb4cHXVs9U",
        view: "31,576",
        love: "176",
        follower: "179",
        category: ["Lãng mạn", "Hài hước", "Trường học"],
        description:
          "Phó chủ tịch Kaguya Shinomiya và chủ tịch hội học sinh Miyuki Shirogane gặp nhau trong hội học sinh của Học viện Shuzhiin, sau một thời gian dài đấu trí và tiếp xúc, cuối cùng hai thiên tài cũng bày tỏ tình cảm với nhau. Tuy nhiên, cả hai vẫn chưa thổ lộ rõ ​​ràng, tưởng chừng sắp thành người yêu nhưng vẫn duy trì mối quan hệ mập mờ, thay vào đó lại quan tâm đến nhau và cùng đón Giáng sinh. Shirogane, người khao khát trở nên hoàn hảo và Kaguya, người theo đuổi anh không hoàn hảo, đây là một câu chuyện tình yêu vô cùng bình thường của những thiên tài",
        tag: [
          "Kaguya-sama: Love is War - The First Kiss That Never Ends / Cuộc Chiến Tỏ Tình: Nụ hôn đầu không hồi kết",
          "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
          "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai Vietsub",
          "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai HD",
        ],
        images: "https://i.postimg.cc/c1wFzZm4/r-5.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Ushio và Tora - Tập 13 [Việt sub]",
        episode: "13",
        youtubeID: "WFHrTBFjeOo",
        view: "119,948",
        love: "293",
        follower: "315",
        category: ["Hành động", "Viễn tưởng", "Lãng mạn", "Kịch tính"],
        description:
          "Wisteria là một cô gái mồ côi sống ở một góc nhỏ Đế quốc Anh vào cuối thế kỷ 19. Cuộc sống của cô thật rất cô độc và vô vị - cho đến khi cô gặp gỡ Malbus, một sinh vật bất tử mạnh mẽ nhưng không kém phần cô đơn với vẻ ngoài đầy lông, bị săn đuổi bởi những người thợ săn. Cùng nhau, Wisteria và Malbus đã đi lang thang khắp Đế quốc - nơi có con người và những con thú giống người sinh sống - để tìm kiếm một nơi mà họ có thể chung sống trong hòa bình.",
        tag: [
          "The Tale of Outcasts",
          "Nokemono-tachi no Yoru",
          "Nokemono-tachi no Yoru Vietsub",
          "Nokemono-tachi no Yoru HD",
        ],
        images: "https://i.postimg.cc/cCHPQbp8/r-4.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "MY HOME HERO TẬP 1",
        episode: "1",
        youtubeID: "9GxczGZh2I",
        view: "8,307",
        love: "61",
        follower: "75",
        category: ["Hành động", "Kịch tính"],
        description:
          "Câu chuyện xoay quanh một người làm công ăn lương đã có vợ, vợ anh là một người đáng tin cậy và một cô con gái đang học đại học, cô nàng đôi khi có thể hành động hơi nổi loạn nhưng tất cả chính là niềm hạnh phúc của gia đình anh. Cho đến một ngày anh phát hiện ra con gái mình đã bị đánh và từ đó bắt đầu cuộc hành trình vào một thế giới nguy hiểm để bảo vệ gia đình mình.",
        tag: [
          "Anh Hùng Nhà Tôi",
          "My Home Hero",
          "My Home Hero Vietsub",
          "My Home Hero HD",
        ],
        images: "https://i.postimg.cc/3RgxsdNZ/r-3.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Loving Yamada at Lv999! - Official Trailer | English Sub",
        episode: "Trailer",
        youtubeID: "TJn4CziJD04",
        view: "29,695",
        love: "402",
        follower: "437",
        category: ["Lãng Mạn", "Hài hước"],
        description:
          "Khi Akane sắp từ bỏ trò chơi game mà cô từng chơi với bạn trai thì lại gặp Yamada trong một tựa game khác cùng thể loại. Yamada trong cuộc sống ngoài đời thực có thể được coi là một huyền thoại. Vấn đề duy nhất là anh ta CHỈ quan tâm đến game thôi. Khi tình cảm của Akane dành cho cậu ngày càng lớn, liệu Yamada có tập trung chơi game nữa không?",
        tag: [
          "Loving Yamada at Lv999 / My Love Story with Yamada-kun at Lv999 / Chuyện tình của tôi và Yamada ở cấp độ 999",
          "Yamada-kun to Lv999 no Koi wo Suru",
          "Yamada-kun to Lv999 no Koi wo Suru Vietsub",
          "Yamada-kun to Lv999 no Koi wo Suru HD",
        ],
        images: "https://i.postimg.cc/pX3YVjrQ/r-2.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "ROKUDOU NO ONNA-TACHI TẬP 01",
        episode: "1",
        youtubeID: "expwV588-XY",
        view: "21,364",
        love: "488",
        follower: "32,643",
        category: ["Lãng Mạn", "Hài hước", "Trường học"],
        description:
          "Rokudo là học sinh năm nhất của cao trung Aomori, một ngôi trường có rất nhiều bất hảo. Cậu thường xuyên bị bạn cùng lớp bắt nạt bởi sự yếu đuối và nhút nhát của mình. Cùng bị bắt nạt với cậu là hai người bạn có biệt danh là Trưởng ban và Đại tá. Hằng ngày, họ chỉ biết chui vào nhà về sinh khóc lóc và mơ về một cuộc sống học đường yên bình và vui vẻ. Thế rồi cuộc đời của Rokudo đã rẽ sang một trang mới khi cậu nhận được một thùng đồ từ người ông quá cố của mình. Đó là một cuộn giấy từ thời Heian, được ông bảo là có ghi lại thuật thức mà Âm Dương Sư sử dụng. Khi cầm cuộn giấy lên, nó đã phát sáng và để lại một dấu ấn trên trán Rokudo.Ngày hôm sau, Rokudo đến trường và bất ngờ khi nhận ra mọi cô gái bất hảo xung quanh bỗng nhiên có tình cảm đặc biệt với mình. Và rồi, dù vẫn bị bắt nạt, cậu đã có được trái tim của Himawari Ranna, một cô gái bất hảo rất mạnh, người có thể giúp cậu hướng đến cuộc sống học đường hạnh phúc mà cậu hằng ao ước",
        tag: [
          "六道の悪女たち",
          "Rokudou no Onna-tachi",
          "Rokudo's Bad Girls",
          "Rokudou no Onna-tachi Vietsub",
        ],
        images: "https://i.postimg.cc/g0Cw9y2Q/r-1.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "LAST PERIOD: OWARINAKI RASEN NO MONOGATARI TẬP 11",
        episode: "11",
        youtubeID: "0DuRcVSrppY",
        view: "90,605",
        love: "431",
        follower: "664",
        category: ["Hành động", "Hài hước", "Phiêu Lưu", "Siêu Nhiên", "Game"],
        description:
          "Anime lấy bối cảnh tại một thế giới nơi những loài huyễn thú được gọi là “Spirals” được triệu hồi từ sự cô lập. Những người có thể đánh bại chúng được gọi là “Period”. Haru là một Period tập sự thuộc Phân khu Arc End thứ 8. Tyu nhiên, sau một vụ trộm bí ẩn, sự sụp đổ kinh tế đã xảy ra, và tổng bộ Arc End quyết định bỏ mặc phân khu 8, cùng ba Periods còn lại, bao gồm cả Haru. Haru cùng với hai Period còn lại bắt đầu hành trình khôi phục lại phân khu 8.",
        tag: [
          "Last Period: Owarinaki Rasen no Monogatari",
          "Last Period: Owarinaki Rasen no Monogatari Vietsub",
          "Last Period: Owarinaki Rasen no Monogatari HD",
          "Last Period: Owarinaki Rasen no Monogatari tập mới nhất",
        ],
        images: "https://i.postimg.cc/Bvg08jtb/t-2.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "TONDEMO SKILL DE ISEKAI HOUROU MESHI TẬP 12",
        episode: "12",
        youtubeID: "gp3hYaFMggE",
        view: "357,061",
        love: "1067",
        follower: "1180",
        category: ["Viễn Tưởng", "Hài hước", "Phiêu Lưu"],
        description:
          "Mukouda Tsuyoshi chỉ là một người bình thường, vì vậy khi được triệu hồi đến một thế giới ma thuật, anh tin rằng mình đã sẵn sàng cho cuộc phiêu lưu của cuộc đời mình. Thật tệ rằng lý do anh đặt chân đến đây là bởi đã có sự nhầm lẫn! Không chỉ không phải là một trong ba anh hùng được triệu hồi, mà chỉ số của anh ta cũng thật đáng thất vọng... Điều duy nhất mà Mukouda có thể dựa vào là kỹ năng độc nhất của anh ta: Siêu thị trực tuyến, một kỹ năng cho phép anh mua hàng hóa hiện đại trong một thế giới giả tưởng.",
        tag: [
          "Campfire Cooking in Another World with My Absurd Skill",
          "Tondemo Skill de Isekai Hourou Meshi",
          "Tondemo Skill de Isekai Hourou Meshi Vietsub",
          "Tondemo Skill de Isekai Hourou Meshi HD",
          "Tondemo Skill de Isekai Hourou Meshi tập mới nhất",
        ],
        images: "https://i.postimg.cc/76nnryBp/t-3.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "NINGEN FUSHIN NO BOUKENSHA-TACHI GA SEKAI WO SUKUU YOU DESU TẬP 12",
        episode: "12",
        youtubeID: "EHc-xyLxOAQ",
        view: "119,911",
        love: "452",
        follower: "509",
        category: ["Hành Động", "Viễn Tưởng", "Phiêu Lưu"],
        description:
          "Câu chuyện bắt đầu vào một ngày nọ khi Nick, người tham gia nhóm thám hiểm, bị trục xuất bởi thủ lĩnh của mình, người mà anh coi như người cha. Nick đã bị buộc tội gian dối - tham ô, mặc dù đã hỗ trợ những người bạn đồng hành lười biếng của mình bằng tiền và kiến thức. Thậm chí, anh còn bị người yêu của mình ruồng rẫy.Tuy nhiên, Nick kết thúc tại một quán rượu, ngồi chung bàn với con gái của một gia đình quý tộc trước đây, một linh mục bị vạ tuyệt thông và một nữ chiến binh rồng. Ba người còn lại cũng là những nhà thám hiểm mất niềm tin vào con người sau khi bị ai đó phản bội.Nick và những người khác cân nhắc việc gia nhập lực lượng, đoàn kết bởi sự không tin tưởng của họ vào bất kỳ ai khác. Vì vậy, họ thành lập nhóm thám hiểm của riêng mình để cùng tồn tại",
        tag: [
          "Adventurers Who Don't Believe in Humanity Will Save The World",
          "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
          "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu Vietsub",
          "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu HD",
        ],
        images: "https://i.postimg.cc/50gLkSyJ/t-4.jpg",
      },
    ],
    todays: [
      {
        id: faker.datatype.uuid(),
        name: "Doraemon - Tập 460 - Ngôi Nhà Trực Thăng - Sinh Nhật Tồi Tệ Của Shizuka - Hoạt Hình Tiếng Việt",
        youtubeID: "Z9uEn2IVPkQ",
        view: "114,468",
        love: "473",
        follower: "658",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/nhRthz7L/image9.png",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon - Tập 491 - Tôm Chiên Của Nobita, Mọi Người Ơi! Cứu Mình Với!",
        youtubeID: "aiEzbK3YszI",
        view: "153,668",
        love: "539",
        follower: "319",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/JhYj19RX/image10.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 276 - Khăn Trải Bàn Ẩm Thực, Việc Làm Thêm Của Người Tuyết",
        youtubeID: "Xk7GKMV3Ipg",
        view: "234,643",
        love: "1255",
        follower: "3525",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/Jn9JXZD4/image11.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 284 - Đội Trưởng Nobita, Tên Lửa Của Thiên Tài Dekisugi",
        youtubeID: "5IafY9dMiFQ",
        view: "453,324",
        love: "643",
        follower: "1235",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/dt0vCpF3/image12.png",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 285 - Siêu Áo Giáp, Câu Chuyện Của Tinh Linh Và Nobita",
        youtubeID: "1nl5YuXuV0c",
        view: "53,235",
        love: "5649",
        follower: "1319",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/sxNL7nPG/image13.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 307 - Tiếp Tục Cuộc Hành Trình Của Mình - Tiếng Việt",
        youtubeID: "gnJKhjMr5cY",
        view: "53,325",
        love: "549",
        follower: "16",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/Njf4B8RW/image15.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 292 - Trò Chơi người Thật Của Tương Lai, Thám Tử Nobita",
        youtubeID: "Y9aVQrQVHG8",
        view: "6,398",
        love: "106",
        follower: "315",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/mDwkL9Y5/image16.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon - Tập 511 - Thợ Săn Khủng Long - Hoạt Hình Tiếng Viêt",
        youtubeID: "ADkVOsJwAAU",
        view: "64,322",
        love: "6,444",
        follower: "319",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/k58J6Vv3/image17.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 331 - Đi Bộ Dưới Đáy Biển, Mùa Đông Giữa Mùa Hè",
        youtubeID: "i_bsMOp9C84",
        view: "75,668",
        love: "7,554",
        follower: "4,319",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/fLD15km9/image18.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 278 - Máy Giao Dịch, Trang Trại Bánh Kẹo",
        youtubeID: "J4Lva96VCnk",
        view: "7,665",
        love: "1,643",
        follower: "532",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/LXv43cYm/image19.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 344 - Chương Trình Ăn Tối Đáng Sợ Của Jaian, Đôi Khi Nobita Cũng Dùng Não Suy Nghĩ",
        youtubeID: "Z3wQunEaMRU",
        view: "65,444",
        love: "25,325",
        follower: "6443",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/WpHTp60Y/image20.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Doraemon Tập 343 - Đẩy Lùi Người Ngoài Hành Tinh",
        youtubeID: "oM3Cr3h-ljQ",
        view: "644,334",
        love: "42,322",
        follower: "2,532",
        category: ["Hoạt hình", "Phiêu Lưu", "Vui vẻ"],
        description:
          "Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.",
        tag: ["Doraemon", "Nobita", "Shizuka", "Chaien"],
        images: "https://i.postimg.cc/KjrWTbR5/image21.jpg",
      },
    ],
    storys: [
      {
        id: faker.datatype.uuid(),
        name: "EDENS ZERO",
        chap: "Chap 233",
        title: "Edens Zero - Vũ Trụ Phiêu Lưu Ký",
        author: "Mashima Hiro",
        status: "Đang cập nhật",
        love: "128",
        follower: "222",
        view: "541,860",
        description:
          "Shiki là một thanh niên từ bé đã sống trên một hành tinh toàn robot. Rebecca, một cô gái lạc quan, có ước mơ trở thành một siêu sao B-cuber nổi tiếng khắp vũ trụ. Sau cuộc gặp gỡ định mệnh và một số biến cố xảy ra trên hành tinh quê hương của Shiki, Rebecca đã đưa cậu vào vũ trụ, hòa nhập với thế giới của con người. Shiki, Rebecca và chú mèo Happy sẽ bắt đầu vào cuộc hành trình tìm kiếm Mother, vị nữ thần ban điều ước đầy quyền năng của vũ trụ. Liệu cuộc hành trình của họ sẽ diễn ra như thế nào?",
        post: "https://i.postimg.cc/NM7wHRhr/n-1.jpg",
        banner: [
          "https://i.postimg.cc/W3LCBWJx/banner1.jpg",
          "https://i.postimg.cc/MTqt0hBZ/banner2.jpg",
        ],
        chapter: [
          "https://i.postimg.cc/W3N6q0Rh/chap1.jpg",
          "https://i.postimg.cc/Rh8cY8WH/chap2.jpg",
          "https://i.postimg.cc/7h7gp90t/chap3.jpg",
          "https://i.postimg.cc/7YtxF4Pc/chap4.jpg",
          "https://i.postimg.cc/59YdXzfP/chap5.jpg",
          "https://i.postimg.cc/rFNhsyRn/chap6.jpg",
          "https://i.postimg.cc/dQ86NQ6s/chap7.jpg",
          "https://i.postimg.cc/vBw959pW/chap8.jpg",
          "https://i.postimg.cc/Vv6NtkLq/chap9.jpg",
          "https://i.postimg.cc/PqyhMn72/chap10.jpg",
          "https://i.postimg.cc/QxD3vtr0/chap11.jpg",
          "https://i.postimg.cc/zXxcpXDL/chap12.jpg",
          "https://i.postimg.cc/PrJ4Xbhx/chap13.jpg",
          "https://i.postimg.cc/YC1mMj40/chap14.jpg",
          "https://i.postimg.cc/KcRQ7Xpf/chap15.jpg",
          "https://i.postimg.cc/4dC48Rbc/chap16.jpg",
          "https://i.postimg.cc/h4sgmdwT/chap17.jpg",
          "https://i.postimg.cc/jd1p6Qhw/chap18.jpg",
        ],
        footer: [],
      },
      {
        id: faker.datatype.uuid(),
        name: "ONE PIECE",
        chap: "Chap 1080",
        title: "Vua Hải Tặc",
        author: "Oda",
        status: "Đang cập nhật",
        view: "14,874,976",
        love: "1,293",
        follower: "1,994",
        description:
          "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn tru...",
        post: "https://i.postimg.cc/ZYCwwR8y/n-2.jpg",
        banner: ["https://i.postimg.cc/66VMMVLb/banner1.jpg"],
        chapter: [
          "https://i.postimg.cc/6pK2YRcc/chap1.jpg",
          "https://i.postimg.cc/J4GPRwCv/chap2.jpg",
          "https://i.postimg.cc/W31frhxb/chap3.jpg",
          "https://i.postimg.cc/PqSnBsjJ/chap4.jpg",
          "https://i.postimg.cc/CLrPThZW/chap5.jpg",
          "https://i.postimg.cc/fRZ7Jk33/chap6.jpg",
          "https://i.postimg.cc/s2dkBYYY/chap7.jpg",
          "https://i.postimg.cc/hvDrNj9Q/chap8.jpg",
          "https://i.postimg.cc/90sDZgFX/chap9.jpg",
          "https://i.postimg.cc/QdQFKbLs/chap10.jpg",
          "https://i.postimg.cc/F1tK7fD7/chap11.jpg",
          "https://i.postimg.cc/SN86Vc01/chap12.jpg",
        ],
        footer: [
          "https://i.postimg.cc/MHBQPJLf/footer1.jpg",
          "https://i.postimg.cc/0QT6JHNk/footer2.jpg",
        ],
      },
      {
        id: faker.datatype.uuid(),
        name: "AHAREN-SAN WA HAKARENAI",
        chap: "Chap 142",
        title: "Aharen-San Thật Khó Hiểu",
        author: "Mizu, Asato",
        status: "Đang cập nhật",
        view: "23,508",
        love: "13",
        follower: "25",
        description:
          "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn tru...",
        post: "https://i.postimg.cc/kXyR8N2N/n-3.jpg",
        banner: ["https://i.postimg.cc/rpwXSSn7/banner1.jpg"],
        chapter: [
          "https://i.postimg.cc/8k68Bk4k/chap1.jpg",
          "https://i.postimg.cc/fy4rgXCz/chap2.jpg",
          "https://i.postimg.cc/HWhxjLxp/chap3.jpg",
          "https://i.postimg.cc/3rvR4TDm/chap4.jpg",
          "https://i.postimg.cc/s2MzkYY7/chap5.jpg",
          "https://i.postimg.cc/WpF8fXdT/chap6.jpg",
          "https://i.postimg.cc/CKxHCNyy/chap7.jpg",
          "https://i.postimg.cc/pL2DxZL9/chap8.jpg",
          "https://i.postimg.cc/x1TbB16M/chap9.jpg",
          "https://i.postimg.cc/hGm4YFRV/chap10.jpg",
          "https://i.postimg.cc/3JzPck8b/chap11.jpg",
          "https://i.postimg.cc/jS4YnsTg/chap12.jpg",
        ],
        footer: [],
      },
      {
        id: faker.datatype.uuid(),
        name: "JUJUTSU KAISEN - CHÚ THUẬT HỒI CHIẾN",
        chap: "Chap 219",
        title: "Vật Thể Bị Nguyền Rủa",
        author: "Akutami Gege",
        status: "Đang cập nhật",
        view: "1,321,099",
        love: "288",
        follower: "574",
        description:
          "Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu ấy muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một ngày sau cái chết của ông mình, anh gặp Megumi Fushiguro, người đang tìm kiếm vật thể bị nguyền rủa mà các thành viên CLB đã tìm thấy. Đối mặt với những con quái vật khủng khiếp bị Ám, Yuuji nuốt vật thể bị phong ấn để có được sức mạnh của nó và cứu bạn bè của mình! Nhưng giờ Yuuji là người bị Ám, và cậu ấy sẽ bị kéo vào thế giới ma quỷ ly kỳ của Megumi ",
        post: "https://i.postimg.cc/GtyNVhyr/n-4.jpg",
        banner: ["https://i.postimg.cc/Gmv9QHmw/banner1.jpg"],
        chapter: [
          "https://i.postimg.cc/NfmrNNdz/chap1.jpg",
          "https://i.postimg.cc/T1kNBd2T/chap2.jpg",
          "https://i.postimg.cc/q78b4XBb/chap3.jpg",
          "https://i.postimg.cc/D0Y5Bx5Z/chap4.jpg",
          "https://i.postimg.cc/qBY8D64z/chap5.jpg",
          "https://i.postimg.cc/8zqvw2S9/chap6.jpg",
          "https://i.postimg.cc/gJGnTdBS/chap7.jpg",
          "https://i.postimg.cc/Tw23c0pB/chap8.jpg",
          "https://i.postimg.cc/zDcGnn5P/chap9.jpg",
          "https://i.postimg.cc/jd6qBBPB/chap10.jpg",
          "https://i.postimg.cc/sDKdYzpf/chap11.jpg",
          "https://i.postimg.cc/T19SJj5N/chap12.jpg",
          "https://i.postimg.cc/ZRPDJPHY/chap13.jpg",
          "https://i.postimg.cc/85bw2pkj/chap14.jpg",
          "https://i.postimg.cc/x1ykyc6J/chap15.jpg",
          "https://i.postimg.cc/rwCjHGVq/chap16.jpg",
          "https://i.postimg.cc/rsxxrczq/chap17.jpg",
          "https://i.postimg.cc/QM82Ydrn/chap18.jpg",
          "https://i.postimg.cc/6QBKshCc/chap19.jpg",
        ],
        footer: [],
      },
      {
        id: faker.datatype.uuid(),
        name: "KINGDOM – VƯƠNG GIẢ THIÊN HẠ",
        chap: "Chap 753",
        title: "Kingdom",
        author: "Hara Yasuhisa",
        status: "Đang cập nhật",
        view: "298,941",
        love: "19",
        follower: "56",
        description:
          "Trải qua hàng triệu năm kể từ thời đại của các vị thần. Đây là thời mà khát vọng của một người có thể xoay chuyển cả thế giới. Thời đại của hơn 500 năm binh biến: thời Chiến Quốc.",
        post: "https://i.postimg.cc/9XdY8740/n-5.jpg",
        banner: [
          "https://i.postimg.cc/bNWQHkrN/banner1.jpg",
          "https://i.postimg.cc/kXv2DSSp/banner2.jpg",
        ],
        chapter: [
          "https://i.postimg.cc/vBbjYpwj/chap1.jpg",
          "https://i.postimg.cc/qvmXhSKS/chap2.jpg",
          "https://i.postimg.cc/6qN1jgYz/chap3.jpg",
          "https://i.postimg.cc/rmbqDVys/chap4.jpg",
          "https://i.postimg.cc/bJ69b54s/chap5.jpg",
          "https://i.postimg.cc/6Qb0g3fM/chap6.jpg",
          "https://i.postimg.cc/3wQ7p8vb/chap7.jpg",
          "https://i.postimg.cc/wBR2Kz4H/chap8.jpg",
          "https://i.postimg.cc/5tktzdfH/chap9.jpg",
          "https://i.postimg.cc/XNssysCR/chap10.jpg",
          "https://i.postimg.cc/02q7jmtT/chap11.jpg",
          "https://i.postimg.cc/9fX6hD5T/chap12.jpg",
          "https://i.postimg.cc/x8gmBpKL/chap13.jpg",
          "https://i.postimg.cc/sfPbvPjS/chap14.jpg",
          "https://i.postimg.cc/t4zh6T1B/chap15.jpg",
          "https://i.postimg.cc/7ZJFPFfP/chap16.jpg",
          "https://i.postimg.cc/WzPGrJ7f/chap17.jpg",
          "https://i.postimg.cc/TwH83fqw/chap18.jpg",
        ],
        footer: [],
      },
      {
        id: faker.datatype.uuid(),
        name: "NGỰ LINH THẾ GIỚI",
        chap: "Chap 718",
        title: "Ngự Linh Thế Giới",
        author: "Đang cập nhật",
        status: "Đang cập nhật",
        view: "110,027",
        love: "14",
        follower: "33",
        description:
          "Một họa sĩ truyện tranh xuyên qua dị giới Đến lúc đó, hắn nhận ra 1 vấn đề Ta không phải nhân vật chính ? Mà là nhân vật phản diện đối địch với nhân vật chính ? Cái kịch bản này không đúng nha!",
        post: "https://i.postimg.cc/ZYXcYvnF/n-6.jpg",
        banner: [],
        chapter: [
          "https://i.postimg.cc/ZKXN2M2z/chap1.jpg",
          "https://i.postimg.cc/L4nVfZZy/chap2.jpg",
          "https://i.postimg.cc/656tYtt1/chap3.jpg",
          "https://i.postimg.cc/G2cdVCv2/chap4.jpg",
          "https://i.postimg.cc/kgzyTM3Q/chap5.jpg",
          "https://i.postimg.cc/cCtxMcQM/chap6.jpg",
          "https://i.postimg.cc/zB52kDKd/chap7.jpg",
          "https://i.postimg.cc/R0PGw1C0/chap8.jpg",
          "https://i.postimg.cc/QCvy1Qb7/chap9.jpg",
          "https://i.postimg.cc/yNzWn2dQ/chap10.jpg",
          "https://i.postimg.cc/wjbYjNKh/chap11.jpg",
        ],
        footer: [],
      },
    ],
    slides: [
      {
        id: faker.datatype.uuid(),
        name: "Thám tử lừng danh Conan - Chuyện Tình Sở Cảnh Sát",
        youtubeID: "q4VFvQJ3vt0",
        view: "134,678",
        love: "19,000",
        follower: "5,698",
        category: "Phiêu Lưu",
        description:
          "Đây là một tập phim dài 60 phút bao gồm các đoạn phim liên quan đến cặp đôi cảnh sát Miwako Sato và Wataru Takagi. Xuyên suốt những thước phim, khán giả sẽ cùng nhìn lại những cuộc phiêu lưu mà họ đã cùng nhau trải qua cùng và những bước ngoặt đáng nhớ trong cuộc tình của cả hai.",
        images: "https://i.postimg.cc/jdTV7TdC/c-2.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Cánh Hoa Trôi Giữa Hoàng Triều Mùa 1 - Tập Full",
        youtubeID: "HYNyfAylavY",
        view: "565,434",
        love: "63,326",
        follower: "16,343",
        category: "Phiêu Lưu",
        description:
          "Những hình ảnh đầu tiên từ bộ moving toon Cánh hoa trôi giữa Hoàng triều đã được hé lộ. Câu chuyện về Lý Chiêu Hoàng - vị nữ hoàng đế đầu tiên và cũng là duy nhất trong lịch sử Việt Nam, một mối tình khởi nguồn cho một cuộc chuyển giao quyền lực trước nay chưa từng có, sự khởi đầu và kết thúc của hai triều đại phong kiến rực rỡ bậc nhất trong lịch sử Việt Nam, tất cả sẽ được mang đến trong bộ moving toon lấy cảm hứng từ đề tại lịch sử này.",
        images: "https://i.postimg.cc/43dh5jwT/c-1.png",
      },
      {
        id: faker.datatype.uuid(),
        name: "Naruto Movie 5 : Huyết Ngục",
        youtubeID: "LIrXtG5viTM",
        view: "631,000",
        love: "75,181",
        follower: "1,698",
        category: "Phiêu Lưu",
        description:
          "Bị bắt sau khi bị kết tội mưu đồ ám sát Raikage, lãnh đạo tối cao của làng Mây cũng như sát hại các ninja Thượng đẳng của làng Sương Mù và làng Đá, Naruto sau đó bị giam vào ngục Hozukijou (còn được gọi là Huyết Ngục) Mui - kẻ đứng đầu nơi này sử dụng một loại nhẫn thuật tối thượng để đánh cắp sức mạnh của những tù nhân ở đây. Naruto cũng cảm nhận được mình đang bị thế lực nào đó truy sát. Những cuộc điều tra nhằm tìm ra sự thật về kẻ sát nhân giấu mặt cũng như khẳng định sự vô tội của Naruto từ đó cũng bắt đầu.",
        images: "https://i.postimg.cc/0jPsP1z6/c-3.jpg",
      },
      {
        id: faker.datatype.uuid(),
        name: "Dragon Ball Super",
        youtubeID: "gxKeCTtRytE",
        view: "1,532,125",
        love: "35,232",
        follower: "30,352",
        category: "Phiêu Lưu",
        description:
          "Dragon Ball Super kể về những cuộc phiêu lưu của Goku trong khoảng thời gian 10 năm sau thất bại của Majin Buu. Sau khi gặp những sinh vật mạnh hơn rất nhiều, Goku đạt được sức mạnh của một vị thần và phải học cách sử dụng sức mạnh mới đó trong vũ trụ của mình khi du hành đến các vũ trụ khác để đối mặt với những kẻ thù mạnh hơn và những kẻ thù gần như không thể ngăn cản. ",
        images: "https://i.postimg.cc/c4CD279m/banner4.jpg",
      },
    ],
  };
  data.news.forEach((item) => {
    data.all.push({
      id: item.id,
      name: item.name,
      type: "news",
    });
  });
  data.todays.forEach((item) => {
    data.all.push({
      id: item.id,
      name: item.name,
      type: "todays",
    });
  });
  data.storys.forEach((item) => {
    data.all.push({
      id: item.id,
      name: item.name,
      type: "storys",
    });
  });
  data.slides.forEach((item) => {
    data.all.push({
      id: item.id,
      name: item.name,
      type: "slides",
    });
  });
  fs.writeFile("database.json", JSON.stringify(data), () => {
    console.log("Generate data success");
  });
})();
