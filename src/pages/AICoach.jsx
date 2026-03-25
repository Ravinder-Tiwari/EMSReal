import React, { useState } from 'react';

export default function AICoach() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm your AI Coach. I can help you with interview preparation, coding problems, resume optimization, and more. What would you like help with today?",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: `That's a great question! Based on your career goals and current skills, here's my recommendation...`,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="grid-3" style={{ height: 'calc(100vh - 200px)' }}>
      {/* Chat */}
      <div className="card" style={{ gridColumn: '1 / 3', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>AI Career Coach</h2>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`ai-message ${msg.type}`}
              style={{
                marginLeft: msg.type === 'user' ? 'auto' : 0,
                maxWidth: '80%',
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything..."
            style={{ flex: 1 }}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="card">
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Quick Topics</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: '📝', text: 'Resume Tips' },
              { icon: '🎤', text: 'Interview Prep' },
              { icon: '💻', text: 'Coding Help' },
              { icon: '🗂️', text: 'Roadmap Advice' },
            ].map((topic, i) => (
              <button
                key={i}
                className="btn btn-ghost"
                onClick={() => setInput(`Tell me about ${topic.text.toLowerCase()}`)}
                style={{ justifyContent: 'flex-start', fontSize: 12 }}
              >
                {topic.icon} {topic.text}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Performance</h3>
          <div style={{ fontSize: 12 }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: 'var(--text2)' }}>Current Score:</span>
              <br />
              <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--accent)' }}>73/100</span>
            </div>
            <div style={{ paddingTop: 8, borderTop: '1.5px solid var(--border)' }}>
              <span style={{ color: 'var(--text3)' }}>Improve your score by solving more problems and completing courses.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
