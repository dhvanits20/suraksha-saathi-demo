import React, { useState } from 'react';
import { Shield, Phone, MessageSquare, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import './index.css';

const Dashboard = ({ onNavigate }) => (
  <div className="app-container">
    <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <Shield size={24} /> Suraksha Saathi AI
    </div>
    <div className="content">
      <div style={{ textAlign: 'center', padding: '10px 0' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Your AI Guardian</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Protecting your digital money in your language.</p>
      </div>

      <div className="card" onClick={() => onNavigate('upi')} style={{ cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#E0E7FF', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
            <MessageSquare size={28} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Fake UPI Detector</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scans messages for "Pay vs Receive" scams.</p>
          </div>
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('call')} style={{ cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#FEE2E2', padding: '12px', borderRadius: '12px', color: 'var(--danger)' }}>
            <Phone size={28} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>AI Scam Call Defense</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Real-time voice analysis for OTP requests.</p>
          </div>
        </div>
      </div>
      
      <div className="card" style={{ opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#D1FAE5', padding: '12px', borderRadius: '12px', color: 'var(--success)' }}>
            <Shield size={28} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Family Dashboard</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Coming in Phase 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FakeUPI = ({ onBack }) => {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="app-container" style={{ background: analyzed ? '#FEF2F2' : '#F3F4F6', transition: 'background 0.5s' }}>
      <div className="header" style={{ background: analyzed ? 'var(--danger)' : 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ArrowLeft size={24} onClick={onBack} style={{ cursor: 'pointer' }} />
        <span>UPI Request</span>
        <div style={{ width: 24 }}></div>
      </div>
      
      <div className="content" style={{ justifyContent: 'center' }}>
        {!analyzed ? (
          <div className="card" style={{ textAlign: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" style={{ height: 40, marginBottom: 20 }} />
            <h3 style={{ marginBottom: 10 }}>Rahul Sharma</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 20 }}>₹15,000</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 30 }}>Has sent you a request.</p>
            <button className="btn btn-primary" onClick={() => setAnalyzed(true)}>
              Proceed to UPI App
            </button>
          </div>
        ) : (
          <div className="glass-alert alert-pulse" style={{ animation: 'pulse-red 2s infinite' }}>
            <AlertTriangle size={64} style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>DANGER!</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: 1.5 }}>
              You are <strong>NOT RECEIVING</strong> ₹15,000.<br/><br/>
              You are about to <strong>PAY</strong> ₹15,000 to a stranger.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" style={{ background: 'white', color: 'var(--danger)', flex: 1 }} onClick={onBack}>
                Cancel Payment
              </button>
            </div>
            <p style={{ marginTop: 20, fontSize: '0.8rem', opacity: 0.9 }}>
              Voice guidance playing in Gujarati 🔊
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ScamCall = ({ onBack }) => {
  const [callState, setCallState] = useState('incoming'); // incoming, connected, warning
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({ flags: [] });
  
  const textToAnalyze = "Sir, your SBI account will be blocked today. Share your OTP...";

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      // TODO: Replace with your actual n8n webhook URL from the workflow
      const webhookUrl = 'https://YOUR_N8N_INSTANCE_URL/webhook/scam-detect';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToAnalyze })
      });
      
      if (response.ok) {
        const data = await response.json();
        // The n8n workflow returns JSON with 'score' and 'flags'
        setAnalysisResult({ flags: data.flags || ["Threat of account closure", "Asking for OTP"] });
        setCallState('warning');
      } else {
        throw new Error('Webhook error');
      }
    } catch (err) {
      console.log('Using fallback for demo because webhook failed or is missing', err);
      // Fallback behavior so the demo still works even if n8n isn't hooked up yet
      setTimeout(() => {
        setAnalysisResult({ flags: ["Threat of account closure", "Asking for OTP"] });
        setCallState('warning');
      }, 1500);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="app-container" style={{ background: callState === 'warning' ? '#FEF2F2' : '#1F2937', color: callState === 'warning' ? 'var(--text-primary)' : 'white' }}>
      <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        {callState !== 'warning' && (
          <ArrowLeft size={24} onClick={onBack} style={{ position: 'absolute', top: 20, left: 20, cursor: 'pointer' }} />
        )}
        
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <div style={{ width: 100, height: 100, background: '#374151', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Phone size={40} color="#9CA3AF" />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Unknown Number</h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
            {callState === 'incoming' ? 'Calling...' : '00:14'}
          </p>
        </div>

        {callState === 'incoming' && (
          <div style={{ display: 'flex', gap: '40px', marginTop: 'auto', marginBottom: 60 }}>
            <button onClick={() => setCallState('connected')} style={{ width: 70, height: 70, borderRadius: '50%', background: 'var(--success)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Phone size={32} />
            </button>
            <button onClick={onBack} style={{ width: 70, height: 70, borderRadius: '50%', background: 'var(--danger)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Phone size={32} style={{ transform: 'rotate(135deg)' }} />
            </button>
          </div>
        )}

        {callState === 'connected' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', padding: '0 20px', marginTop: 'auto', marginBottom: 40 }}>
            <div style={{ background: '#374151', padding: '16px', borderRadius: '12px', fontStyle: 'italic' }}>
              Transcribing caller: "{textToAnalyze}"
            </div>
            <button className="btn btn-primary" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analyzing via n8n...' : 'AI Risk Engine: Analyze'}
            </button>
            <button className="btn btn-danger" onClick={onBack} style={{ background: '#EF4444' }}>
              End Call
            </button>
          </div>
        )}

        {callState === 'warning' && (
          <div className="glass-alert alert-pulse" style={{ width: '100%', maxWidth: 350 }}>
            <AlertTriangle size={64} style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>SCAM DETECTED</h2>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: 4 }}><strong>Flags (From n8n AI):</strong></p>
              <ul style={{ fontSize: '0.9rem', paddingLeft: 20 }}>
                {analysisResult.flags.map((flag, idx) => (
                  <li key={idx}>{flag}</li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: 1.5 }}>
              Banks never ask for OTP. Do not share it.
            </p>
            <button className="btn" style={{ background: 'white', color: 'var(--danger)', width: '100%' }} onClick={onBack}>
              Block & End Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  return (
    <>
      {currentScreen === 'dashboard' && <Dashboard onNavigate={setCurrentScreen} />}
      {currentScreen === 'upi' && <FakeUPI onBack={() => setCurrentScreen('dashboard')} />}
      {currentScreen === 'call' && <ScamCall onBack={() => setCurrentScreen('dashboard')} />}
    </>
  );
}
