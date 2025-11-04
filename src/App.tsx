import { ArrowRight, Shield, Headphones, Cpu, Lock, Cloud, Server, Users, Zap, Award, Expand, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { useState } from 'react';

function App() {
  return (
    <div className="w-full">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <Shield className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Providing You with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              LEGENDARY
            </span>{' '}
            I.T. Services
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Empowering South African businesses with reliable IT solutions
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-gray-900 to-gray-100 py-20">
        <div className="h-px bg-gradient-to-r from-red-500 via-blue-500 to-red-500"></div>
      </div>

      <div className="w-full bg-gradient-to-b from-gray-100 to-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Who We Are
          </h2>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
            Our mission is to protect, maintain, and enhance your technology infrastructure so you can focus on what truly matters — your business growth.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We deliver innovative, reliable, and efficient IT support for businesses of all sizes.
          </p>
        </div>
      </div>

      <div className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Headphones className="w-12 h-12" />}
              title="Managed IT Support"
              description="24/7 proactive monitoring and support for your systems"
            />
            <ServiceCard
              icon={<Cpu className="w-12 h-12" />}
              title="Hardware & Network Setup"
              description="Professional installation and configuration of IT infrastructure"
            />
            <ServiceCard
              icon={<Lock className="w-12 h-12" />}
              title="Cybersecurity & Protection"
              description="Advanced security solutions to protect your business data"
            />
            <ServiceCard
              icon={<Cloud className="w-12 h-12" />}
              title="Cloud & Backup Solutions"
              description="Secure cloud services and reliable data backup systems"
            />
            <ServiceCard
              icon={<Server className="w-12 h-12" />}
              title="Server Maintenance & Monitoring"
              description="Continuous server health checks and preventive maintenance"
            />
            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Helpdesk & Remote Assistance"
              description="Quick technical support and remote issue resolution"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Partner With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Rapid Response Times"
              description="Get immediate support when you need it. Our team responds to critical issues within minutes, minimizing downtime for your business."
              delay="0"
            />
            <FeatureCard
              icon={<Award className="w-10 h-10" />}
              title="Certified Technicians"
              description="Our team comprises highly skilled professionals with industry-leading certifications ensuring expert-level IT solutions."
              delay="100"
            />
            <FeatureCard
              icon={<Expand className="w-10 h-10" />}
              title="Scalable Solutions for All Business Sizes"
              description="From startups to enterprises, we provide flexible IT solutions that grow and adapt with your business needs."
              delay="200"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Let's Build Something Legendary
          </h2>

          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <a href="tel:+27846348144" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(+27) 84 634 8144</span>
              </a>
              <a href="mailto:info@itlegends.co.za" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@itlegends.co.za</span>
              </a>
              <a href="https://www.itlegends.co.za" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Globe className="w-5 h-5" />
                <span>www.itlegends.co.za</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27846348144"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://facebook.com/itlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/itlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Instagram
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-red-500/0 group-hover:from-blue-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-red-500"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-500 to-blue-500"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-red-50 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 text-blue-600 group-hover:text-red-600">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: string }) {
  return (
    <div
      className="relative text-center opacity-0 animate-fade-in"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="mb-6 inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your IT needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-center text-green-600 font-semibold animate-fade-in">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center text-red-600 font-semibold animate-fade-in">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}

export default App;
