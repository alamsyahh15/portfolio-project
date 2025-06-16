import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { PersonalData } from '../types';

interface ContactProps {
  personalData: PersonalData;
}

export default function Contact({ personalData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'd love to hear about your ideas 
            and discuss how we can work together to create something exceptional.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and potential collaborations. Whether you have a specific project in mind 
                or just want to explore possibilities, let's connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Email</p>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Phone</p>
                  <a 
                    href={`tel:${personalData.phone}`}
                    className="text-gray-900 dark:text-white font-semibold hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Location</p>
                  <p className="text-gray-900 dark:text-white font-semibold">{personalData.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Response Time</p>
                  <p className="text-gray-900 dark:text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Connect with me</p>
              <div className="flex space-x-4">
                <a 
                  href={personalData.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={personalData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={personalData.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project Inquiry</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}