import React from 'react';
import { ArrowUpRight, GitBranch, FileText, MapPin, Clock } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-[#d97706] selection:text-white pb-24">
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-[#111] px-4 py-3 sticky top-0 bg-[#fafafa] z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm font-mono uppercase tracking-tight">
          <div className="flex gap-6 items-center">
            <span className="font-bold">NGUYỄN TRỌNG NGHĨA</span>
            <span className="text-[#555] hidden sm:inline-block">/</span>
            <span className="text-[#555]">Software Engineer</span>
          </div>
          <nav className="hidden lg:flex gap-4 items-center text-xs text-[#555]">
            <a href="#projects" className="hover:text-[#d97706] transition-colors">Projects</a>
            <span>/</span>
            <a href="#skills" className="hover:text-[#d97706] transition-colors">Skills</a>
            <span>/</span>
            <a href="#experience" className="hover:text-[#d97706] transition-colors">Experience</a>
            <span>/</span>
            <a href="#education" className="hover:text-[#d97706] transition-colors">Education</a>
            <span>/</span>
            <a href="#contact" className="hover:text-[#d97706] transition-colors">Contact</a>
          </nav>
          <div className="flex gap-4 items-center flex-wrap">
            <span className="flex items-center gap-1.5"><MapPin size={14}/> HCM, VN</span>
            <span className="flex items-center gap-1.5"><Clock size={14}/> UTC+7</span>
            <a href="/B24_JavaBackend_NguyenTrongNghia.pdf" download className="flex items-center gap-1 hover:text-[#d97706] transition-colors border border-[#111] px-2 py-0.5 font-bold bg-[#111] text-white hover:bg-transparent hover:text-[#d97706]">
              <FileText size={14}/> CV.PDF
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-16 space-y-24">
        
        {/* HERO / ABOVE THE FOLD */}
        <section className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 border border-[#111] text-xs font-mono mb-8 font-semibold uppercase tracking-wide">
            <span className="w-2 h-2 bg-[#d97706]"></span>
            AI-DRIVEN SOFTWARE ENGINEER
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
            Thiết kế kiến trúc phần mềm thực dụng, ứng dụng AI vào hệ thống để giải quyết bài toán hiện đại.
          </h1>
          <p className="text-lg text-[#444] mb-10 leading-relaxed max-w-2xl">
            Sở hữu nền tảng vững chắc về Backend (Java & .NET) kết hợp với tư duy nghiên cứu Trí tuệ nhân tạo (Deep Learning & RAG). Đề cao tính kỷ luật và logic giải quyết vấn đề từ môi trường quân ngũ, sẵn sàng thích ứng với kỷ nguyên AI-driven Development.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-sm uppercase font-bold tracking-wide">
            <a href="https://github.com/boy2407" target="_blank" rel="noreferrer" className="flex items-center gap-1 pb-1 border-b-2 border-[#111] hover:text-[#d97706] hover:border-[#d97706] transition-colors">
              <GitBranch size={16}/> GITHUB <ArrowUpRight size={14}/>
            </a>
            <a href="https://www.linkedin.com/in/nghia-nguyen-0932a3277/" target="_blank" rel="noreferrer" className="flex items-center gap-1 pb-1 border-b-2 border-[#111] hover:text-[#d97706] hover:border-[#d97706] transition-colors">
              <LinkedinIcon size={16}/> LINKEDIN <ArrowUpRight size={14}/>
            </a>
            <a href="mailto:nguyentrongnghia0379@gmail.com" className="flex items-center gap-1 pb-1 border-b-2 border-[#111] hover:text-[#d97706] hover:border-[#d97706] transition-colors">
              <MailIcon size={16}/> EMAIL <ArrowUpRight size={14}/>
            </a>
          </div>
        </section>

        {/* ENGINEERING CASE STUDIES */}
        {/* Section anchors */}
        <section id="projects">
          <h2 className="text-xl font-bold border-b-2 border-[#111] pb-2 mb-8 uppercase tracking-wide">Engineering Case Studies</h2>
          
          <div className="space-y-12">
            {/* Case 0: VIETJOBS */}
            <article className="border border-[#111] bg-white">
              <header className="border-b border-[#111] p-4 bg-[#f4f4f5] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-bold text-lg">VietJobs: Occupation & Salary Prediction</h3>
                  <p className="text-sm font-mono text-[#555] mt-1 uppercase">Khóa luận tốt nghiệp | 09/2026</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                  <a href="https://github.com/boy2407/vietjobs" target="_blank" rel="noreferrer" className="font-mono font-bold text-sm border border-[#111] px-3 py-1 hover:bg-[#111] hover:text-white transition-colors uppercase">
                    [Source Code]
                  </a>
                </div>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111]">
                <div className="p-5 md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#666] uppercase mb-2">Context & Problem</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Phân loại ngành nghề và dự đoán mức lương từ ~48,000 tin tuyển dụng tiếng Việt thực tế. Bài toán đặt ra là cần xử lý tập dữ liệu thô phức tạp và huấn luyện mô hình học sâu để trích xuất đặc trưng văn bản tiếng Việt chính xác.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#666] uppercase mb-2">Architecture & Implementation</h4>
                    <p className="text-sm leading-relaxed">
                      Xây dựng mạng Deep Neural Network phân loại đa nhãn dựa trên biểu diễn ngôn ngữ (embeddings) từ <strong>PhoBERT</strong>. Tách biệt hoàn toàn hai môi trường pipeline xử lý dữ liệu và huấn luyện mô hình (PyTorch). Quản lý chặt chẽ tập dữ liệu huấn luyện (frozen data splits) để tránh rò rỉ dữ liệu (data leakage) và đảm bảo tính tái lập (reproducibility).
                    </p>
                  </div>
                </div>
                <div className="p-5 font-mono text-xs space-y-6 bg-[#fafafa]">
                  <div>
                    <h4 className="font-bold text-[#111] uppercase border-b border-[#ccc] pb-2 mb-3">Tech Stack</h4>
                    <ul className="space-y-1.5 text-[#444]">
                      <li>• Python 3</li>
                      <li>• PyTorch, Hugging Face</li>
                      <li>• PhoBERT</li>
                      <li>• Scikit-learn, Pandas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111] uppercase border-b border-[#ccc] pb-2 mb-3">System Metrics</h4>
                    <ul className="space-y-1.5 text-[#444]">
                      <li>- Classify: macro-F1 0.603</li>
                      <li>- Salary: MAE 4.13m VNĐ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Case 1: SAIGONDEPOT */}
            <article className="border border-[#111] bg-white">
              <header className="border-b border-[#111] p-4 bg-[#f4f4f5] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-bold text-lg">SAIGONDEPOT: E-Commerce Catalog & Ordering</h3>
                  <p className="text-sm font-mono text-[#555] mt-1 uppercase">Dự án cá nhân | 07/2026 - 08/2026</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                  <a href="https://saigondepot.vn" target="_blank" rel="noreferrer" className="font-mono font-bold text-sm border border-[#111] bg-[#111] text-white px-3 py-1 hover:bg-transparent hover:text-[#111] transition-colors uppercase">
                    [Live Demo]
                  </a>
                </div>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111]">
                <div className="p-5 md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#666] uppercase mb-2">Context & Problem</h4>
                    <p className="text-sm leading-relaxed">Xây dựng API quản lý danh mục sản phẩm thương mại điện tử với luồng đặt hàng. Yêu cầu tìm kiếm sản phẩm tiếng Việt (có dấu và không dấu) với tốc độ cao mà không lạm dụng Elasticsearch để tối ưu chi phí hạ tầng (overhead).</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#666] uppercase mb-2">Architecture & Solution</h4>
                    <p className="text-sm leading-relaxed">Triển khai RESTful API bằng Spring Boot kết hợp JPA/Hibernate. Tận dụng PostgreSQL extension (<code>unaccent</code> và <code>pg_trgm</code>) để xử lý Full-text Search trực tiếp trên RDBMS, giảm thiểu component trung gian. Quản lý schema chặt chẽ bằng Flyway và containerize bằng Docker.</p>
                  </div>
                </div>
                <div className="p-5 font-mono text-xs space-y-6 bg-[#fafafa]">
                  <div>
                    <h4 className="font-bold text-[#111] uppercase border-b border-[#ccc] pb-2 mb-3">Tech Stack</h4>
                    <ul className="space-y-1.5 text-[#444]">
                      <li>• Java 21</li>
                      <li>• Spring Boot / Security</li>
                      <li>• PostgreSQL (pg_trgm)</li>
                      <li>• Flyway, Docker</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111] uppercase border-b border-[#ccc] pb-2 mb-3">System Metrics</h4>
                    <ul className="space-y-1.5 text-[#444]">
                      <li>- Search Strategy: RDBMS Native</li>
                      <li>- Auth: Stateless JWT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Case 2: E-COMMERCE API */}
            <article className="border border-[#111] bg-white">
              <header className="border-b border-[#111] p-4 bg-[#f4f4f5] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="font-bold text-lg">Smart E-Commerce API & Payment Gateway</h3>
                  <p className="text-sm font-mono text-[#555] mt-1 uppercase">Đồ án chuyên sâu | 02/2026 - 05/2026</p>
                </div>
                <a href="https://github.com/boy2407/NoName" target="_blank" rel="noreferrer" className="mt-4 sm:mt-0 font-mono font-bold text-sm border border-[#111] px-3 py-1 hover:bg-[#111] hover:text-white transition-colors uppercase">
                  [View Source]
                </a>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111]">
                <div className="p-5 md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#666] uppercase mb-2">Architecture & Implementation</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Áp dụng Clean Architecture và mô hình CQRS (thông qua MediatR) để tách biệt hoàn toàn luồng Read/Write, giải quyết triệt để bài toán thắt cổ chai khi scale hệ thống.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      Tích hợp Semantic Kernel để ứng dụng RAG (Retrieval-Augmented Generation) trong việc gợi ý sản phẩm thông minh.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Đảm bảo giao dịch thanh toán qua cổng MoMo với cơ chế ký số HMAC-SHA256, xử lý Asynchronous IPN Webhook để đối soát trạng thái đơn hàng.
                    </p>
                  </div>
                </div>
                <div className="p-5 font-mono text-xs space-y-6 bg-[#fafafa]">
                  <div>
                    <h4 className="font-bold text-[#111] uppercase border-b border-[#ccc] pb-2 mb-3">Tech Stack</h4>
                    <ul className="space-y-1.5 text-[#444]">
                      <li>• C# .NET 8 / EF Core</li>
                      <li>• SQL Server, Redis</li>
                      <li>• MediatR (CQRS pattern)</li>
                      <li>• Semantic Kernel (RAG)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SYSTEM KNOWLEDGE & TOOLING MATRIX */}
        <section id="skills">
          <h2 className="text-xl font-bold border-b-2 border-[#111] pb-2 mb-8 uppercase tracking-wide">System Knowledge & Tooling</h2>
          <div className="border-t border-l border-[#111] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
              <div className="p-4 bg-[#f4f4f5] font-mono font-bold text-xs uppercase tracking-wide text-[#555]">Core Runtime</div>
              <div className="p-4 md:col-span-3 text-sm font-medium">Java, C# (.NET 8), Python, SQL</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
              <div className="p-4 bg-[#f4f4f5] font-mono font-bold text-xs uppercase tracking-wide text-[#555]">Frameworks</div>
              <div className="p-4 md:col-span-3 text-sm font-medium">Spring Boot, Spring Security, Hibernate/JPA, Entity Framework Core, Django REST</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
              <div className="p-4 bg-[#f4f4f5] font-mono font-bold text-xs uppercase tracking-wide text-[#555]">Data & Caching</div>
              <div className="p-4 md:col-span-3 text-sm font-medium">PostgreSQL, SQL Server, MySQL, Redis</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
              <div className="p-4 bg-[#f4f4f5] font-mono font-bold text-xs uppercase tracking-wide text-[#555]">Infra & Testing</div>
              <div className="p-4 md:col-span-3 text-sm font-medium">Docker, Git/GitHub, Swagger, Postman, Katalon Studio (Automated UI/API Testing)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
              <div className="p-4 bg-[#f4f4f5] font-mono font-bold text-xs uppercase tracking-wide text-[#555]">Architecture Concepts</div>
              <div className="p-4 md:col-span-3 text-sm font-medium">Clean Architecture, CQRS, RESTful API Design, SOLID, Design Patterns</div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE LOG */}
        <section>
          <h2 id="experience" className="text-xl font-bold border-b-2 border-[#111] pb-2 mb-8 uppercase tracking-wide scroll-mt-16">Professional Experience Log</h2>
          <div className="border border-[#111] divide-y divide-[#111] bg-white">
            <div className="p-6 md:p-8">
              <header className="flex flex-col md:flex-row justify-between md:items-baseline mb-6 gap-2">
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-tight">Software Engineer</h3>
                  <div className="font-mono text-sm font-bold text-[#d97706] mt-1 uppercase">@ WEARESECTION</div>
                </div>
                <div className="font-mono text-sm font-bold text-[#111] border border-[#111] px-2 py-0.5 bg-[#f4f4f5]">
                  05/2026 - PRESENT
                </div>
              </header>
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#111] uppercase border-b border-dashed border-[#ccc] pb-1.5 mb-3">Adobe Experience Manager (AEM)</h4>
                  <ul className="space-y-2 text-sm list-none">
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> Tham gia phát triển các tính năng backend bằng hệ sinh thái Java (Sling Models, OSGi Services, Servlets).</li>
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> Phân tích và debug sâu vào các component cốt lõi, phối hợp giải quyết bottlenecks hiệu suất.</li>
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> Thực thi quy trình CI/CD nghiêm ngặt: Strict code review, branch management, Jira tracking.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#111] uppercase border-b border-dashed border-[#ccc] pb-1.5 mb-3">QA Automation (Katalon)</h4>
                  <ul className="space-y-2 text-sm list-none">
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> Kỹ thuật hóa quy trình test: Viết và bảo trì script tự động (Groovy) cho UI/API.</li>
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> Đảm bảo regression testing trước mỗi release cycle, kiểm soát chặt chẽ defect rò rỉ ra production.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC BACKGROUND */}
        <section>
          <h2 id="education" className="text-xl font-bold border-b-2 border-[#111] pb-2 mb-8 uppercase tracking-wide scroll-mt-16">Academic Background</h2>
          <div className="border border-[#111] bg-white">
            <div className="p-6 md:p-8">
              <header className="flex flex-col md:flex-row justify-between md:items-baseline mb-6 gap-2">
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-tight">Cử nhân Công nghệ Thông tin</h3>
                  <div className="font-mono text-sm font-bold text-[#d97706] mt-1 uppercase">@ Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM</div>
                </div>
                <div className="font-mono text-sm font-bold text-[#111] border border-[#111] px-2 py-0.5 bg-[#f4f4f5]">
                  06/2022 - 2027
                </div>
              </header>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#111] uppercase border-b border-dashed border-[#ccc] pb-1.5 mb-3">Academic Metrics & Focus</h4>
                  <ul className="space-y-2 text-sm list-none">
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> <strong>Cumulative GPA:</strong> 3.5 / 4.0</li>
                    <li className="flex gap-3"><span className="text-[#d97706] font-bold">→</span> <strong>Khóa luận tốt nghiệp:</strong> Xây dựng hệ thống phân loại ngành nghề và dự đoán mức lương từ dữ liệu tin tuyển dụng thực tế (ứng dụng PhoBERT & PyTorch).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact">
          <h2 className="text-xl font-bold border-b-2 border-[#111] pb-2 mb-8 uppercase tracking-wide">Contact</h2>
          <div className="border border-[#111] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111]">
              <a href="mailto:nguyentrongnghia0379@gmail.com" className="p-6 flex items-center gap-3 hover:bg-[#f4f4f5] transition-colors group">
                <MailIcon size={20} className="text-[#d97706]"/>
                <div>
                  <div className="font-mono text-xs font-bold text-[#666] uppercase">Email</div>
                  <div className="text-sm font-medium group-hover:text-[#d97706] transition-colors">nguyentrongnghia0379@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/nghia-nguyen-0932a3277/" target="_blank" rel="noreferrer" className="p-6 flex items-center gap-3 hover:bg-[#f4f4f5] transition-colors group">
                <LinkedinIcon size={20} className="text-[#d97706]"/>
                <div>
                  <div className="font-mono text-xs font-bold text-[#666] uppercase">LinkedIn</div>
                  <div className="text-sm font-medium group-hover:text-[#d97706] transition-colors">linkedin.com/in/boy2407</div>
                </div>
              </a>
              <a href="https://github.com/boy2407" target="_blank" rel="noreferrer" className="p-6 flex items-center gap-3 hover:bg-[#f4f4f5] transition-colors group">
                <GitBranch size={20} className="text-[#d97706]"/>
                <div>
                  <div className="font-mono text-xs font-bold text-[#666] uppercase">GitHub</div>
                  <div className="text-sm font-medium group-hover:text-[#d97706] transition-colors">github.com/boy2407</div>
                </div>
              </a>
            </div>
          </div>
          <p className="text-center text-xs font-mono text-[#999] mt-8">© 2026 NGUYỄN TRỌNG NGHĨA — Built with React & Tailwind CSS</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
