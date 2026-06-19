"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">Let's Connect</h1>
          <p className="text-charcoal/70">
            Have a question, want to collaborate, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sage-100 p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
              <h2 className="font-serif text-3xl font-medium text-charcoal mb-4">Message Sent!</h2>
              <p className="text-charcoal/70 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-sage-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-sage-50/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal">Subject</label>
                <select
                  id="subject"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-sage-50/50"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="collab">Brand Collaboration</option>
                  <option value="question">Art/Craft Question</option>
                  <option value="shop">Shop Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-sage-50/50 resize-y"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
        
        <div className="mt-12 text-center text-charcoal/60 text-sm">
          <p>For urgent business inquiries, please email directly at <a href="mailto:hello@example.com" className="text-sage-600 hover:underline">hello@example.com</a></p>
        </div>
      </div>
    </main>
  );
}
