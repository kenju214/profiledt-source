/**
 * ====================================================================
 *  PROFILE BIO - FILE CẤU HÌNH (CHỈ SỬA FILE NÀY LÀ ĐỦ)
 * ====================================================================
 *  Cách dùng cho người mới:
 *  1. Mở file này bằng Notepad
 *  2. Điền thông tin của bạn vào các dòng có chữ THAY Ở ĐÂY
 *  3. Lưu lại (Ctrl + S) -> mở index.html để xem
 */

const CONFIG = {
    // ----------------------------------------------------------
    // 1. DISCORD ID - QUAN TRỌNG NHẤT (để hiện trạng thái online)
    // ----------------------------------------------------------
    // 👉 Lấy ID Discord của bạn như sau:
    //    Vào Discord > Cài đặt > Nâng cao > Bật "Chế độ nhà phát triển"
    //    Chuột phải vào tên bạn > Sao chép ID > Dán vào trong dấu " " bên dưới
    //
    //    Ví dụ: discordId: "123456789012345678",
    //
    // 👉 BẮT BUỘC phải bật Lanyard mới hiện online:
    //    Vào server https://discord.gg/lanyard > gõ lệnh /setup
    //    Nếu không làm bước này, web vẫn chạy nhưng hiện "STANDBY".
    discordId: "s4drewind", // <-- THAY Ở ĐÂY: dán Discord ID của bạn vào

    // ----------------------------------------------------------
    // 2. THÔNG TIN PROFILE
    // ----------------------------------------------------------
    profile: {
        name: "Nguyễn Quốc Anh", // <-- THAY Ở ĐÂY
        username: "Ken Ju", // <-- THAY Ở ĐÂY (không cần @)
        title: "Gamer • Music Lover • Coffee Addict", // <-- THAY Ở ĐÂY
        // Ảnh đại diện: để file ảnh chung thư mục (vd: "avatar.jpg")
        // hoặc dán link ảnh https://...
        avatar: "favicon.png", // <-- THAY Ở ĐÂY
        banner: "banner_executive.jpg", // tên file banner (đã có sẵn 2 file để chọn)
        // banner còn lại: "profile_banner.jpg" , "profile_banner_cyber.jpg"
        bio: "Viết vài câu giới thiệu về bạn ở đây.", // <-- THAY Ở ĐÂY
        location: "Hà Nội, Việt Nam", // <-- THAY Ở ĐÂY
        quotes: [
            "Gaming, coffee & good vibes.",
            "Living one chill day at a time.",
            "Music on, worries off.",
            "Collecting moments, not things."
        ],
        badges: [
            { icon: "fa-solid fa-gamepad", label: "Gamer", color: "#ffffff" },
            { icon: "fa-solid fa-headphones", label: "Music Lover", color: "#e0e0e0" },
            { icon: "fa-solid fa-mug-hot", label: "Coffee Addict", color: "#ffffff" },
            { icon: "fa-solid fa-plane", label: "Traveler", color: "#d1d5db" },
            { icon: "fa-solid fa-camera", label: "Photography", color: "#a1a1aa" },
            { icon: "fa-solid fa-film", label: "Movie Buff", color: "#ffffff" }
        ]
    },

    // ----------------------------------------------------------
    // 3. DISCORD SERVER (khung server trong web)
    // ----------------------------------------------------------
    // 👉 Lấy link mời: mở server Discord > Mời mọi người > Sao chép liên kết
    //    Dán vào inviteUrl bên dưới. Icon/banner web sẽ tự lấy từ Discord.
    servers: [
        {
            name: "InfiniteAur.", // <-- THAY Ở ĐÂY
            role: "Cộng đồng của InfiniteAur.", // <-- THAY Ở ĐÂY
            description: "hòa đồng vui vẻ ", // <-- THAY Ở ĐÂY
            inviteUrl: "https://discord.gg/7QXTzbDBh", // <-- THAY Ở ĐÂY
            icon: "favicon.png", // ảnh tạm, web sẽ tự thay bằng icon thật từ Discord
            banner: "profile_banner_cyber.jpg",
            cdnIcon: "favicon.png",
            cdnBanner: "profile_banner_cyber.jpg",
            members: "0 Members",
            online: "0 Online",
            tag: "COMMUNITY",
            featured: true
        }
    ],

    // ----------------------------------------------------------
    // 4. MẠNG XÃ HỘI (nút liên kết)
    // ----------------------------------------------------------
    // 👉 Muốn thêm/bớt nút: copy 1 dòng { name... } rồi đổi tên + link.
    //    Muốn xóa: xóa cả dòng đó đi.
    socials: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/quoc.anh.634055/" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com/username-cua-ban" },
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@kenbakhi4" },
        { name: "Spotify", icon: "fa-brands fa-spotify", url: "https://open.spotify.com/user/314xyyw4irorda5qsmup33hj2whu" }
    ],

    // ----------------------------------------------------------
    // 5. NHẠC (chép file .mp3 vào chung thư mục rồi ghi tên file)
    // ----------------------------------------------------------
    music: {
        autoplayOnEnter: true,
        volume: 0.4,
        playlist: [
            {
                title: "Rain In 7", // <-- THAY Ở ĐÂY
                artist: "Lil Shady", // <-- THAY Ở ĐÂY
                url: "bai1.mp3" // giữ nguyên nếu dùng file mẫu, hoặc đổi thành "ten-file-moi.mp3"
            },
            {
                title: "1000 Ánh Mắt",
                artist: "Obito",
                url: "bai2.mp3"
            }
        ],
        title: "Tên Bài 1",
        artist: "Tên Ca Sĩ",
        url: "bai1.mp3"
    },

    // ----------------------------------------------------------
    // 6. HIỆU ỨNG (true = bật, false = tắt)
    // ----------------------------------------------------------
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    },

    // ----------------------------------------------------------
    // 7. SỞ THÍCH (6 ô)
    // ----------------------------------------------------------
    techStack: [
        { name: "Gaming", domain: "PC • Mobile • Co-op", icon: "fa-solid fa-gamepad" },
        { name: "Nghe nhạc", domain: "Lofi • Chill • V-Pop", icon: "fa-solid fa-headphones" },
        { name: "Cà phê", domain: "Sáng • Sữa đá • Góc chill", icon: "fa-solid fa-mug-hot" },
        { name: "Du lịch", domain: "Biển • Núi • Khám phá", icon: "fa-solid fa-plane" },
        { name: "Chụp ảnh", domain: "Khoảnh khắc • Đời thường", icon: "fa-solid fa-camera" },
        { name: "Xem phim", domain: "Anime • Phim lẻ • Series", icon: "fa-solid fa-film" }
    ]
};
