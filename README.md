# CV Website - Nguyễn Văn A

## Mô tả
Trang web CV cá nhân hiện đại và responsive được thiết kế cho chuyên gia Khoa học Máy tính. Website có giao diện đẹp mắt, animations mượt mà và tối ưu cho cả desktop và mobile.

## Tính năng
- ✨ Thiết kế hiện đại với hero section ấn tượng có background image
- 👤 Avatar khung tròn responsive ở góc trên trái hero section
- 🌙 Dark/Light mode toggle (mặc định dark mode)
- 📱 Responsive design (tối ưu cho mobile)
- 🎨 Animations và transitions mượt mà được đơn giản hóa
- 📊 Progress bars cho skills với animation
- 🖼️ Slide show 5 ảnh khoảnh khắc tự động chạy với navigation
- 🎯 Portfolio grid với hover effects
- 📞 Contact section với social media links
- 🎯 Smooth scrolling navigation
- 💬 Comments tiếng Việt chi tiết trong code

## Công nghệ sử dụng
- **Frontend Framework**: Next.js 14 với App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Custom CSS animations (đơn giản hóa)
- **Typography**: Inter font family
- **Static Version**: HTML standalone với Tailwind CDN

## Cấu trúc thư mục
\`\`\`
├── app/
│   ├── page.tsx          # Trang chính React (có comments tiếng Việt)
│   ├── layout.tsx        # Layout wrapper
│   └── globals.css       # Global styles với animations
├── components/ui/        # UI components (Button, Card, Badge)
├── public/              # Static assets (images)
├── index.html          # Static HTML version (standalone)
├── package.json        # Dependencies
└── README.md           # Documentation
\`\`\`

## Hướng dẫn cài đặt

### Phương pháp 1: Chạy file HTML tĩnh (Đơn giản nhất)
1. Tải file `index.html` về máy
2. Mở trực tiếp trong trình duyệt
3. Hoặc sử dụng live server extension trong VS Code
4. **Không cần cài đặt gì thêm!**

### Phương pháp 2: Chạy với Next.js
\`\`\`bash
# Clone repository
git clone <your-repo-url>
cd cv-website

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Mở http://localhost:3000
\`\`\`

## Tùy chỉnh nội dung

### 1. Thông tin cá nhân
**Trong file HTML (`index.html`):**
\`\`\`html
<!-- Thay đổi tên -->
<h1>Nguyễn Văn A</h1> <!-- Thay tên của bạn -->

<!-- Thay đổi avatar -->
<img src="https://images.unsplash.com/photo-..." alt="Avatar Nguyễn Văn A">

<!-- Thay đổi thông tin liên hệ -->
<span>expert@email.com</span> <!-- Thay email -->
<span>+84 123 456 789</span> <!-- Thay số điện thoại -->
\`\`\`

**Trong file React (`app/page.tsx`):**
\`\`\`tsx
// Thay đổi tên
<h1>Nguyễn Văn A</h1> // Thay tên của bạn

// Thay đổi avatar
<img src="https://images.unsplash.com/photo-..." alt="Avatar" />

// Thay đổi thông tin liên hệ trong About section
<span>expert@email.com</span> // Thay email của bạn
\`\`\`

### 2. Kỹ năng (Skills)
**Trong file HTML:**
\`\`\`html
<!-- Tìm section skills và sửa -->
<span>Python</span>
<span>95%</span>
<div style="--width: 95%"></div> <!-- Thay đổi % -->
\`\`\`

**Trong file React:**
\`\`\`tsx
const skills = [
  { name: "Python", level: 95 }, // Thay đổi tên và level
  { name: "JavaScript", level: 90 },
  // Thêm/sửa kỹ năng của bạn
]
\`\`\`

### 3. Slide ảnh khoảnh khắc (5 ảnh)
**Thay đổi ảnh trong slide:**
\`\`\`html
<!-- Trong file HTML, tìm các thẻ img trong slide -->
<img src="https://images.unsplash.com/photo-..." alt="Mô tả ảnh">
<!-- Thay URL ảnh, title và description -->
<h3>Không Gian Làm Việc</h3> <!-- Thay title -->
<p>Nơi tôi tạo ra những dòng code tuyệt vời</p> <!-- Thay mô tả -->
\`\`\`

**Trong file React:**
\`\`\`tsx
const momentSlides = [
  {
    image: "/your-image.png", // Thay đường dẫn ảnh
    title: "Tiêu đề của bạn", // Thay title
    description: "Mô tả của bạn", // Thay mô tả
  },
  // Thêm/sửa các slide khác
]
\`\`\`

### 4. Dự án (Projects)
\`\`\`html
<!-- Trong file HTML -->
<h3>AI Chatbot Platform</h3> <!-- Thay tên dự án -->
<p>Mô tả dự án...</p> <!-- Thay mô tả -->
<span>Python</span> <!-- Thay công nghệ sử dụng -->
\`\`\`

**Trong file React:**
\`\`\`tsx
const projects = [
  {
    title: "Tên dự án của bạn",
    description: "Mô tả dự án của bạn",
    tech: ["React", "Node.js", "MongoDB"], // Thay công nghệ
    image: "/project-image.png", // Thay ảnh dự án
  },
]
\`\`\`

### 5. Background Hero và Avatar
\`\`\`html
<!-- Trong file HTML, tìm class hero-bg -->
<section class="hero-bg">
<!-- Thay URL ảnh background trong CSS -->

<!-- Avatar positioning -->
<div class="avatar-container">
  <img src="your-avatar-url" alt="Your Name">
</div>
\`\`\`

### 6. Màu sắc chủ đạo
**Trong file HTML:**
\`\`\`css
:root {
  --primary: #10b981; /* Màu xanh lá - thay đổi theo ý muốn */
}
\`\`\`

**Trong file React:**
\`\`\`css
/* Trong app/globals.css */
:root {
  --primary: #10b981; /* Thay màu chủ đạo */
  --accent: #10b981; /* Màu accent */
}
\`\`\`

## Tính năng đã tối ưu

### Animations
- ✅ Fade-in animation đơn giản và mượt mà
- ✅ Slide-in animation cho các phần tử
- ✅ Bounce-in animation cho avatar
- ✅ Progress bar animation với stagger delays
- ✅ Hover effects với lift và scale
- ✅ Typing animation cho tên

### Slide Show (5 ảnh khoảnh khắc)
- ✅ 5 ảnh khoảnh khắc tự động chạy (5 giây/slide)
- ✅ Navigation buttons (prev/next)
- ✅ Indicators để jump đến slide cụ thể
- ✅ Responsive trên mobile
- ✅ Smooth transitions
- ✅ Gradient overlay cho text dễ đọc

### Avatar & Hero Section
- ✅ Avatar khung tròn responsive
- ✅ Positioning tự động điều chỉnh theo screen size
- ✅ Border và shadow effects
- ✅ Background image với overlay
- ✅ Centered content layout

### Theme Toggle
- ✅ Dark/Light mode switch trong navigation
- ✅ Lưu preference trong localStorage
- ✅ Mặc định dark mode
- ✅ Icons thay đổi theo theme
- ✅ Smooth transitions

## Deployment

### GitHub Pages (Cho file HTML)
1. Tạo repository mới trên GitHub
2. Upload file `index.html`
3. Vào Settings > Pages
4. Chọn source: Deploy from a branch
5. Chọn branch: main
6. Website sẽ có URL: `https://username.github.io/repository-name`

### Vercel (Cho Next.js)
1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động
4. Có thể custom domain

### Netlify (Cho file HTML)
1. Drag & drop file `index.html` vào Netlify
2. Hoặc kết nối với GitHub repository
3. Auto deploy khi có thay đổi

## Comments trong code
- ✅ Tất cả code React có comments tiếng Việt chi tiết
- ✅ Giải thích từng function và component
- ✅ Hướng dẫn cách tùy chỉnh trong comments
- ✅ Dễ hiểu cho người mới bắt đầu
- ✅ State management được giải thích rõ ràng
- ✅ Animation classes được document đầy đủ

## Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- ✅ Optimized animations để tránh lag trên mobile
- ✅ Lazy loading cho images
- ✅ Minimal JavaScript bundle
- ✅ CSS animations thay vì JavaScript
- ✅ Responsive images với proper sizing

## Troubleshooting

### Slide không chạy
- Kiểm tra JavaScript có load đúng không
- Đảm bảo Lucide icons đã load
- Kiểm tra console có lỗi không
- Verify DOM elements tồn tại

### Theme toggle không hoạt động
- Kiểm tra localStorage có được support không
- Đảm bảo JavaScript đã load hoàn toàn
- Check theme classes được apply đúng

### Ảnh không hiển thị
- Kiểm tra đường dẫn ảnh có đúng không
- Đảm bảo ảnh có tồn tại trong thư mục public/
- Sử dụng URL tuyệt đối nếu cần
- Check CORS policy cho external images

### Avatar không hiển thị đúng vị trí
- Kiểm tra responsive breakpoints
- Verify CSS positioning classes
- Test trên different screen sizes

### Animations không mượt
- Check browser support cho CSS animations
- Verify animation delays và durations
- Test performance trên mobile devices

## Customization Tips
- Thay đổi màu sắc trong CSS variables
- Upload ảnh cá nhân vào thư mục public/
- Customize animation timings trong globals.css
- Adjust responsive breakpoints theo nhu cầu
- Modify content trong data arrays

## Liên hệ
- Email: your-email@gmail.com
- GitHub: your-github-username
- LinkedIn: your-linkedin-profile

## License
MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

---

**Lưu ý**: File này chứa tất cả thông tin cần thiết để tùy chỉnh và deploy website CV của bạn. Hãy đọc kỹ phần troubleshooting nếu gặp vấn đề!
