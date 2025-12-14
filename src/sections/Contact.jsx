import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary py-20 px-6 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's <span className="text-accent">Talk</span></h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="bg-slate-800 p-3 rounded-full">📧</span>
              <span>hello@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="bg-slate-800 p-3 rounded-full">📍</span>
              <span>Remote / Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Name</label>
            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Message</label>
            <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Your message..."></textarea>
          </div>

          <button className="w-full bg-accent hover:bg-sky-400 text-primary font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;