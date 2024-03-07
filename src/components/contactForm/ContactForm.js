import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name (e.g., John Doe)"
        />
      </label>
      {isDuplicate && <p style={{ color: 'red' }}>This name already exists</p>}
      <label>
        Phone:
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Phone number (e.g., 123-456-7890)"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email (e.g., example@example.com)"
        />
      </label>
      <button type="submit" className="contact-form-button">SUBMIT</button>
    </form>
  );
};

