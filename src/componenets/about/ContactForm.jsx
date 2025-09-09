import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const nameParts = name.trim().split(" ");
    if (nameParts.length < 2) {
      setError("Please enter first and last name.");
      setTimeout(() => setError(""), 5000);
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{6,15}$/;
    const isEmailValid = emailPattern.test(email);
    const isPhoneValid = phonePattern.test(phone);

    if (!isEmailValid && !isPhoneValid) {
      setError("Please provide a valid email or phone number.");
      setTimeout(() => setError(""), 5000);
      return false;
    }
    if (message.trim().length === 0) {
      setError("Please write your message.");
      setTimeout(() => setError(""), 5000);
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Something went wrong.");
      const firstName = formData.name.trim().split(" ")[0];
      setSuccess(`Thank you, ${firstName}! Your message was sent.`);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <section className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <h2 className="contact-form-title">Get in Touch</h2>

        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}

        <div className="form-group">
          <label htmlFor="name">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Your Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message"
            required
          />
        </div>

        <button type="submit" className="contact-form-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}