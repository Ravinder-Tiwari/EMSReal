import React from 'react';

export const NotifToast = ({ notifications = [], onDismiss }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className="notif">
      {notifications.map(n => (
        <div
          key={n.id}
          className={`notif-item ${n.type}`}
          onClick={() => onDismiss(n.id)}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontSize: 18 }}>{getIcon(n.type)}</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{n.msg}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>
              {n.time} · click to dismiss
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
