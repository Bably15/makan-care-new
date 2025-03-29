import React, { useState } from "react";
import "./Subscribe.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept the terms & conditions.");
      return;
    }
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="subscribe-container">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Subscribe to our latest newsletter to get news<br/>about special discounts.</p>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          I agree to the terms and conditions and the privacy policy.
        </label>
      </form>
    </div>
  );
};

export default SubscribeForm;
