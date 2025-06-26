import React, { useEffect,useState } from 'react'
import {
  Crown,
  Star,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Contact() {
  useEffect(() => { 
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const validate = () => {
  const newErrors = {};
  if (!formData.name.trim()) newErrors.name = 'Name is required';
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Invalid email address';
  }
  if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
  if (!formData.message.trim()) newErrors.message = 'Message is required';
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    setErrors({});
    console.log('Form submitted:', formData);
    // You can send formData to backend here
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Fixed Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Crown className="absolute top-20 left-16 w-8 h-8 text-purple-500/20 animate-pulse" />
        <Star className="absolute top-32 right-16 w-9 h-9 text-blue-500/20 animate-pulse" />
        <Star className="absolute bottom-40 right-32 w-7 h-7 text-blue-500/15" />
        <Star className="absolute top-60 left-20 w-8 h-8 text-blue-500/10" />
        <Sparkles className="absolute top-24 left-1/2 w-7 h-7 text-teal-500/20 animate-pulse" />
        <Sparkles className="absolute bottom-60 right-20 w-9 h-9 text-teal-500/15" />
        <Sparkles className="absolute top-96 left-12 w-6 h-6 text-teal-500/10" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center pt-20 pb-20 mt-10" data-aos="fade-up">
          <div className="inline-block mb-8" data-aos="zoom-in" data-aos-delay="100">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-[#8A2BE2]/10 to-[#0056B3]/10 rounded-full border border-[#8A2BE2]/20 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-white" />
                <span className="text-white font-medium tracking-wide">Royal Consultation</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8" data-aos="fade-up" data-aos-delay="200">
            Get In Touch
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
            Ready to create something{' '}
            <span className="text-purple-400 font-semibold">extraordinary</span>? Let's discuss your vision and bring
            <br />
            it to life with <span className="text-teal-400 font-semibold">royal elegance</span>.
          </p>

          <div className="flex justify-center items-center gap-12 mt-12" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Royal Treatment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Premium Service</span>
            </div>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-4xl font-serif text-white">Send us a Message</h2>
              </div>

             <form className="space-y-6" onSubmit={handleSubmit}>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        placeholder="Your royal name"
        className={`w-full bg-gray-700/50 border ${
          errors.name ? 'border-red-500' : 'border-gray-600'
        } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
      />
      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="your.email@example.com"
        className={`w-full bg-gray-700/50 border ${
          errors.email ? 'border-red-500' : 'border-gray-600'
        } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
      />
      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
    <input
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      type="text"
      placeholder="What's this royal occasion about?"
      className={`w-full bg-gray-700/50 border ${
        errors.subject ? 'border-red-500' : 'border-gray-600'
      } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
    />
    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="6"
      placeholder="Tell us about your royal event vision..."
      className={`w-full bg-gray-700/50 border ${
        errors.message ? 'border-red-500' : 'border-gray-600'
      } rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none`}
    ></textarea>
    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
  >
    <span>Send Royal Message</span>
    <Sparkles className="w-5 h-5" />
  </button>
</form>

            </div>

            {/* Contact Info */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0056B3] to-[#008080] rounded-xl flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-4xl font-serif text-white">Royal Contact</h2>
              </div>

              {/* Phone */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos="fade-up">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Royal Hotline</h3>
                    <p className="text-purple-400 font-medium">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                    <p className="text-gray-400 text-sm mt-1">Available 24/7 for royal emergencies</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Royal Mail</h3>
                    <p className="text-teal-400 font-medium">hello@vibgyorevents.com</p>
                    <p className="text-gray-300">info@vibgyorevents.com</p>
                    <p className="text-gray-400 text-sm mt-1">We respond within royal hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Royal Palace</h3>
                    <p className="text-gray-300">123 Event Plaza, Royal Floor</p>
                    <p className="text-gray-300">Bandra West, Mumbai</p>
                    <p className="text-gray-300">Maharashtra 400050, India</p>
                    <p className="text-gray-400 text-sm mt-1">Where magic happens daily</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center" data-aos="zoom-in" data-aos-delay="300">
                <div className="bg-purple-600/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Interactive Royal Map</h3>
                <p className="text-gray-300">Coming Soon with Royal Directions</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300 font-medium">Follow Our Royal Journey</span>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="bg-blue-700 p-3 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
