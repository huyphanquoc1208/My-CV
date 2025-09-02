"use client"

// Import các thư viện cần thiết cho React và UI components
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Download,
  Globe,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react"

export default function CVPage() {
  // State management - Quản lý trạng thái của component
  const [currentMomentSlide, setCurrentMomentSlide] = useState(0) // Slide hiện tại trong phần khoảnh khắc
  const [isDarkMode, setIsDarkMode] = useState(true) // Chế độ tối/sáng (mặc định là tối)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Trạng thái menu mobile

  // Effect để áp dụng dark mode cho document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  // Dữ liệu cho slide khoảnh khắc - 5 bức ảnh về những moment đáng nhớ
  const momentSlides = [
    {
      image: "/coding-workspace.png",
      title: "Không Gian Làm Việc",
      description: "Nơi tôi tạo ra những dòng code tuyệt vời",
    },
    {
      image: "/team-collaboration.png",
      title: "Hợp Tác Nhóm",
      description: "Cùng team phát triển các dự án công nghệ",
    },
    {
      image: "/conference-presentation-tech.png",
      title: "Thuyết Trình Công Nghệ",
      description: "Chia sẻ kiến thức tại các hội nghị tech",
    },
    {
      image: "/award-ceremony-achievement.png",
      title: "Thành Tựu Đạt Được",
      description: "Những giải thưởng và recognition",
    },
    {
      image: "/coding-mentorship.png",
      title: "Mentorship",
      description: "Hướng dẫn và truyền cảm hứng cho thế hệ trẻ",
    },
  ]

  // Dữ liệu kỹ năng với phần trăm thành thạo
  const skills = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 88 },
    { name: "Machine Learning", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "SQL/NoSQL", level: 80 },
  ]

  // Dữ liệu dự án nổi bật
  const projects = [
    {
      title: "AI Chatbot Platform",
      description: "Nền tảng chatbot thông minh sử dụng NLP và machine learning.",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      image: "/ai-chatbot-interface.png",
    },
    {
      title: "E-commerce Analytics",
      description: "Hệ thống phân tích dữ liệu bán hàng real-time.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/data-analytics-dashboard.png",
    },
    {
      title: "Smart IoT System",
      description: "Hệ thống IoT thông minh cho smart home.",
      tech: ["Python", "Arduino", "MQTT", "React"],
      image: "/smart-home-iot-control.png",
    },
  ]

  // Auto-slide effect - Tự động chuyển slide mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMomentSlide((prev) => (prev + 1) % momentSlides.length)
    }, 5000)
    return () => clearInterval(timer) // Cleanup timer khi component unmount
  }, [momentSlides.length])

  // Functions để điều khiển slide
  const nextSlide = () => setCurrentMomentSlide((prev) => (prev + 1) % momentSlides.length)
  const prevSlide = () => setCurrentMomentSlide((prev) => (prev - 1 + momentSlides.length) % momentSlides.length)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation Bar - Thanh điều hướng cố định ở đầu trang */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-emerald-500">CS Expert</div>

            {/* Desktop Navigation - Chỉ hiển thị trên màn hình lớn */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-emerald-500 border-b-2 border-emerald-500 pb-1">
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                Contact
              </a>

              {/* Theme Toggle Button - Nút chuyển đổi chế độ sáng/tối */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-500"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button - Nút menu cho mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Menu mobile khi mở */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-2 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-sm font-medium text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Phần giới thiệu chính với background và avatar */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background Image với opacity thấp */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{ backgroundImage: "url('/computer-science-expert.png')" }}
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Social Icons - Các icon mạng xã hội */}
          <div className="flex justify-center space-x-4 mb-8">
            {[Github, Linkedin, Mail, Phone].map((Icon, index) => (
              <button
                key={index}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>

          {/* Main Content - Nội dung chính với avatar ở góc trên trái */}
          <div className="relative">
            {/* Avatar khung tròn ở góc trên trái */}
            <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl bg-white dark:bg-gray-800 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Avatar Nguyễn Văn A"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-emerald-500 text-2xl font-medium mb-4">Hello I'm</h2>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">Nguyễn Văn A</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Professional Computer Science Expert</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              Tôi có kinh nghiệm phong phú trong phát triển phần mềm, AI và machine learning. Chuyên tạo ra những giải
              pháp công nghệ hiện đại và hiệu quả cho doanh nghiệp.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 text-xl font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Hire Me
          </Button>
        </div>
      </section>

      {/* Moments Slide Section - Phần slide 5 ảnh khoảnh khắc */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Những Khoảnh Khắc Đáng Nhớ
          </h2>

          <div className="relative">
            {/* Slide Container với transition mượt */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentMomentSlide * 100}%)` }}
              >
                {momentSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-96 object-cover"
                    />
                    {/* Gradient overlay cho text dễ đọc */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-lg opacity-90">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Nút điều hướng slide */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators - Chấm chỉ thị slide hiện tại */}
            <div className="flex justify-center space-x-2 mt-6">
              {momentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMomentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMomentSlide
                      ? "bg-emerald-500 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Phần giới thiệu về bản thân */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card - Card thông tin liên hệ */}
            <Card className="bg-emerald-500 text-white overflow-hidden">
              <div className="p-8">
                {/* Contact Information - Thông tin liên hệ */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5" />
                    <span>expert@email.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-5 h-5" />
                    <span>yourpersonalwebsite.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-5 h-5" />
                    <span>yourusername@skype.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5" />
                    <span>+84 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5" />
                    <span>Hồ Chí Minh, Việt Nam</span>
                  </div>
                </div>

                {/* Social Media Icons - Các icon mạng xã hội */}
                <div className="flex space-x-4">
                  {[Github, Linkedin, Mail, Phone, Globe].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-500 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* About Content - Nội dung giới thiệu */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Xin chào! Tôi là Nguyễn Văn A, Senior Web Developer với hơn 13 năm kinh nghiệm chuyên về front-end
                development. Có kinh nghiệm với tất cả các giai đoạn của chu trình phát triển cho các dự án web động.
              </p>

              {/* Action Buttons - Các nút hành động */}
              <div className="flex space-x-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD CV
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-transparent"
                >
                  CONTACT ME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Phần kỹ năng với progress bars */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">My Skills</h2>
          <Card className="bg-white dark:bg-gray-800 shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">{skill.name}</span>
                    <span className="text-emerald-500 font-bold">{skill.level}%</span>
                  </div>
                  {/* Progress Bar với animation */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-4 rounded-full bg-emerald-500 transition-all duration-2000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Portfolio Section - Phần dự án với grid layout */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image với hover effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-500">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Phần liên hệ với call-to-action */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-emerald-500 border-none p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
            <p className="text-xl mb-12 text-emerald-100">
              Sẵn sàng hợp tác trong các dự án thú vị? Hãy liên hệ với tôi!
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Button size="lg" className="bg-white text-emerald-500 hover:bg-gray-100">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-500 bg-transparent"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-500 bg-transparent"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Social Media Footer */}
            <div className="flex justify-center space-x-6 pt-8 border-t border-emerald-400/30">
              {[Github, Linkedin, Mail, Phone, Globe, MessageCircle].map((Icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
