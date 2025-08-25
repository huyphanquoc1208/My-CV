# CV Website - Phan Quốc Huy

## Mô tả
Trang web CV cá nhân hiện đại và responsive được thiết kế cho chuyên gia Khoa học Máy tính. Website có giao diện đẹp mắt, animations mượt mà và tối ưu cho cả desktop và mobile.

## Tính năng
- ✨ Thiết kế hiện đại với hero section ấn tượng
- 🌙 Dark/Light mode toggle
- 📱 Responsive design (tối ưu cho mobile)
- 🎨 Animations và transitions mượt mà
- 📊 Progress bars cho skills
- 🖼️ Portfolio grid với hover effects
- 📞 Contact section với social media links
- 🎯 Smooth scrolling navigation

## Công nghệ sử dụng
- **Frontend Framework**: Next.js 14 với App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Custom CSS animations
- **Typography**: Inter font family

## Cấu trúc thư mục
\`\`\`
├── app/
│   ├── page.tsx          # Trang chính
│   ├── layout.tsx        # Layout wrapper
│   └── globals.css       # Global styles
├── components/ui/        # UI components (Button, Card, Badge)
├── public/              # Static assets (images)
├── index.html          # Static HTML version
└── README.md           # Documentation
\`\`\`

## Hướng dẫn cài đặt

### Phương pháp 1: Chạy với Next.js (Khuyến nghị)
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

### Phương pháp 2: Chạy file HTML tĩnh
1. Mở file `index.html` trực tiếp trong trình duyệt
2. Hoặc sử dụng live server extension trong VS Code

## Tùy chỉnh nội dung

### 1. Thông tin cá nhân
Chỉnh sửa trong `app/page.tsx`:
\`\`\`tsx
// Thay đổi tên
<h1>Nguyễn Văn A</h1> // Thay tên của bạn

// Thay đổi thông tin liên hệ
const personalInfo = [
  { label: "Email", value: "your-email@gmail.com" },
  { label: "Điện thoại", value: "+84 xxx xxx xxx" },
  // ...
]
\`\`\`

### 2. Kỹ năng (Skills)
\`\`\`tsx
const skills = [
  { name: "Python", level: 95, color: "bg-emerald-500" },
  { name: "JavaScript", level: 90, color: "bg-emerald-400" },
  // Thêm/sửa kỹ năng của bạn
]
\`\`\`

### 3. Dự án (Projects)
\`\`\`tsx
const projects = [
  {
    title: "Tên dự án",
    description: "Mô tả dự án...",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/path-to-image.png",
  },
  // Thêm dự án của bạn
]
\`\`\`

### 4. Thay đổi ảnh
- Thay thế ảnh đại diện: `/computer-science-expert-headshot.png`
- Thay thế ảnh dự án trong thư mục `/public/`

### 5. Màu sắc chủ đạo
Chỉnh sửa trong `app/globals.css`:
\`\`\`css
:root {
  --primary: #10b981; /* Màu xanh lá - thay đổi theo ý muốn */
  --primary-dark: #059669;
}
\`\`\`

## Deployment

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

### Netlify
1. Drag & drop thư mục build vào Netlify
2. Hoặc kết nối với GitHub repository

### GitHub Pages
1. Build project: `npm run build`
2. Push thư mục `out` lên GitHub Pages

## Tối ưu hóa

### Performance
- ✅ Lazy loading cho images
- ✅ Optimized animations
- ✅ Minimal bundle size
- ✅ Fast loading fonts

### SEO
- ✅ Meta tags đầy đủ
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Alt text cho images

### Accessibility
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast compliance

## Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Liên hệ
- Email: your-email@gmail.com
- GitHub: your-github-username
- LinkedIn: your-linkedin-profile

## License
MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.
