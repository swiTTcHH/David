import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="border-t border-ink py-16">
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-4xl font-bold tracking-tight">
          Get In <span className="text-accent1">Touch</span>
        </h2>
        <span className="text-muted text-sm mb-1">
          Let's collaborate on your next project
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact info (Left) */}
        <div className="md:col-span-5 flex flex-col justify-between border-2 border-ink bg-card-bg p-8 shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-ink">Contact Details</h3>
            <p className="text-sm font-semibold text-muted leading-relaxed">
              Have a question, an opportunity, or a project idea? Feel free to reach out directly or send a message using the form.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-ink flex items-center justify-center font-bold bg-accent1/10 text-accent1 font-mono shrink-0">
                  ✉
                </div>
                <div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Email</div>
                  <a href="mailto:dvdokpeta@gmail.com" className="text-sm font-extrabold text-ink hover:underline">
                    dvdokpeta@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-ink flex items-center justify-center font-bold bg-accent2/10 text-accent2 font-mono shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Phone</div>
                  <a href="tel:08161592708" className="text-sm font-extrabold text-ink hover:underline">
                    08161592708
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-ink flex items-center justify-center font-bold bg-accent3/10 text-accent3 font-mono shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Location</div>
                  <span className="text-sm font-extrabold text-ink">
                    Oyo State, Nigeria
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-ink flex items-center justify-center font-bold bg-muted/10 text-muted font-mono shrink-0">
                  🐙
                </div>
                <div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-wider">GitHub</div>
                  <a href="https://github.com/swiTTcHH" target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-ink hover:underline">
                    github.com/swiTTcHH
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-muted font-mono pt-6 border-t border-ink/10">
            Available for remote and collaborative roles.
          </div>
        </div>

        {/* Message Form (Right) */}
        <div className="md:col-span-7 border-2 border-ink bg-card-bg p-8 shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <span className="inline-block bg-accent3 border-2 border-ink text-ink font-bold text-4xl p-4 rounded-full shadow-[2px_2px_0px_0px_rgba(13,13,13,1)]">
                🎉
              </span>
              <h3 className="text-2xl font-black text-ink">Message Sent!</h3>
              <p className="text-sm text-muted font-semibold max-w-sm mx-auto">
                Thank you for reaching out, David. I will review your message and respond as soon as possible.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-6 py-2 border-2 border-ink bg-white font-bold hover:bg-paper transition duration-200 cursor-pointer text-xs uppercase"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs uppercase font-bold text-ink">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-paper border-2 border-ink px-4 py-2.5 text-sm text-ink placeholder-ink/40 font-semibold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] transition duration-150"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs uppercase font-bold text-ink">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-paper border-2 border-ink px-4 py-2.5 text-sm text-ink placeholder-ink/40 font-semibold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] transition duration-150"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs uppercase font-bold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-paper border-2 border-ink px-4 py-2.5 text-sm text-ink placeholder-ink/40 font-semibold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] transition duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink border-2 border-ink text-white font-bold py-3 uppercase tracking-wider hover:bg-accent1 hover:text-white transition duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(13,13,13,1)]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
