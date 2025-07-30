import  { useState } from 'react';
import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' });
      return false;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnzdvpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-12 scroll-mt-24" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Got a question, project, or collaboration in mind? I’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="text-left bg-white p-6 sm:p-8 rounded-xl shadow-md">
          <InputField
            label="Name"
            name="name"
            placeholder="what's your name ?"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="what's your email address ?"
            value={form.email}
            onChange={handleChange}
          />
          <TextAreaField
            label="Message"
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition w-full sm:w-auto"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {feedback.message && (
            <p
              className={`mt-4 text-sm font-medium font-poppins ${
                feedback.type === 'success' ? 'text-green-600' : 'text-red-500'
              }`}
              aria-live="polite"
            >
              {feedback.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
