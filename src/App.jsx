import React, { useState } from 'react';
import { Shield, Phone, MessageSquare, AlertTriangle, ArrowLeft, CheckCircle2, Users, MapPin, Map, Bell } from 'lucide-react';
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

      <div className="card fade-in" onClick={() => onNavigate('upi')} style={{ cursor: 'pointer', border: '1px solid #e5e7eb', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#E0E7FF', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
            <MessageSquare size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Fake UPI Check</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scan messages for fake payment links</p>
          </div>
        </div>
      </div>

      <div className="card fade-in" onClick={() => onNavigate('call')} style={{ cursor: 'pointer', border: '1px solid #e5e7eb', position: 'relative', overflow: 'hidden', animationDelay: '0.1s' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--danger)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#FEE2E2', padding: '12px', borderRadius: '12px', color: 'var(--danger)' }}>
            <Phone size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>AI Scam Call Defense</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Live analysis to block fraudsters</p>
          </div>
        </div>
      </div>

      {/* PHASE 2 ADDITIONS */}
      <h3 style={{ marginTop: '10px', fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Community Safety</h3>
      
      <div className="card fade-in" onClick={() => onNavigate('family')} style={{ cursor: 'pointer', border: '1px solid #e5e7eb', position: 'relative', overflow: 'hidden', animationDelay: '0.2s' }}>
        <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--success)', color: 'white', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '20px', fontWeight: 'bold' }}>NEW</div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--success)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: 'var(--success-bg)', padding: '12px', borderRadius: '12px', color: 'var(--success)' }}>
            <Users size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Family Dashboard</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Protect elderly family members remotely</p>
          </div>
        </div>
      </div>

      <div className="card fade-in" onClick={() => onNavigate('map')} style={{ cursor: 'pointer', border: '1px solid #e5e7eb', position: 'relative', overflow: 'hidden', animationDelay: '0.3s' }}>
        <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--success)', color: 'white', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '20px', fontWeight: 'bold' }}>NEW</div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--warning)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: 'var(--warning-bg)', padding: '12px', borderRadius: '12px', color: 'var(--warning)' }}>
            <Map size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Local Scam Heatmap</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>See trending scams in your village/city</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

const FakeUPI = ({ onBack }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult({ safe: false, reason: "Uses fake domain 'gpay-reward.in' instead of official 'google.com'" });
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="app-container fade-in">
      <div className="header" style={{ background: 'transparent', boxShadow: 'none', color: 'var(--text-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowLeft size={24} onClick={onBack} style={{ cursor: 'pointer' }} />
          UPI Check
        </div>
      </div>
      <div className="content">
        <div className="glass-panel" style={{ marginBottom: 20 }}>
          <div style={{ background: '#f3f4f6', padding: '16px', borderRadius: '12px', borderLeft: '4px solid var(--primary)', marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
              "Congratulations! You won ₹5000 scratch card. Click here to claim your reward directly to bank account: http://gpay-reward.in/claim"
            </p>
          </div>
          <button className="btn btn-primary" onClick={analyze} disabled={analyzing}>
            {analyzing ? 'AI is analyzing...' : 'Check Message Safety'}
          </button>
        </div>

        {result && !result.safe && (
          <div className="glass-panel alert-pulse" style={{ background: 'var(--danger-bg)', border: '1px solid #FECACA' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--danger)', marginBottom: '12px' }}>
              <AlertTriangle size={32} />
              <h3 style={{ fontSize: '1.2rem' }}>HIGH RISK SCAM</h3>
            </div>
            <p style={{ color: '#991B1B', lineHeight: 1.5 }}>{result.reason}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ScamCall = ({ onBack }) => {
  const [callState, setCallState] = useState('select'); // select, incoming, connected, warning, safe
  const [callType, setCallType] = useState('scam'); // scam, genuine
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({ flags: [] });
  
  const textToAnalyze = callType === 'scam' 
    ? "Sir, your SBI account will be blocked today. Share your OTP immediately to verify."
    : "Hi, this is Amazon delivery. I am at the main gate with your package.";

  const handleStartSim = (type) => {
    setCallType(type);
    setCallState('incoming');
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const webhookUrl = 'https://YOUR_N8N_INSTANCE_URL/webhook/scam-detect';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToAnalyze })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.isSafe) {
           setCallState('safe');
        } else {
           setAnalysisResult({ flags: data.flags || ["Threat of account closure", "Asking for OTP"] });
           setCallState('warning');
        }
      } else {
        throw new Error('Webhook error');
      }
    } catch (err) {
      setTimeout(() => {
        if (callType === 'scam') {
          setAnalysisResult({ flags: ["Threat of account closure", "Asking for OTP", "High Urgency"] });
          setCallState('warning');
        } else {
          setCallState('safe');
        }
      }, 1500);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (callState === 'select') {
    return (
      <div className="app-container fade-in" style={{ background: '#0F172A', color: 'white' }}>
        <div className="header" style={{ background: 'transparent', boxShadow: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ArrowLeft size={24} onClick={onBack} style={{ cursor: 'pointer' }} />
            Call Simulator
          </div>
        </div>
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Select Scenario</h2>
          <button className="btn" style={{ background: 'var(--success)', color: 'white', padding: '20px', fontSize: '1.2rem', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)' }} onClick={() => handleStartSim('genuine')}>
            <CheckCircle2 size={32} style={{ margin: '0 auto 10px', display: 'block' }} />
            Simulate Genuine Call<br/>
            <span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 'normal' }}>(e.g., Delivery driver)</span>
          </button>
          
          <button className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '20px', fontSize: '1.2rem', boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)' }} onClick={() => handleStartSim('scam')}>
            <AlertTriangle size={32} style={{ margin: '0 auto 10px', display: 'block' }} />
            Simulate Scam Call<br/>
            <span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 'normal' }}>(e.g., Fake SBI Agent)</span>
          </button>
        </div>
      </div>
    );
  }

  const bgColor = callState === 'warning' ? '#FEF2F2' : callState === 'safe' ? '#F0FDF4' : '#0F172A';
  const textColor = (callState === 'warning' || callState === 'safe') ? 'var(--text-primary)' : 'white';

  return (
    <div className="app-container fade-in" style={{ background: bgColor, color: textColor }}>
      <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        {callState !== 'warning' && callState !== 'safe' && (
          <ArrowLeft size={24} onClick={() => setCallState('select')} style={{ position: 'absolute', top: 24, left: 20, cursor: 'pointer', zIndex: 20, color: 'white' }} />
        )}
        
        <div style={{ textAlign: 'center', marginTop: 60, width: '100%' }}>
          <div className={callState === 'incoming' ? 'dot-pulse' : ''} style={{ width: 110, height: 110, background: '#334155', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Phone size={48} color="#CBD5E1" />
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', fontWeight: '700' }}>
            {callType === 'genuine' ? 'Delivery Agent' : 'Unknown Number'}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.2rem' }}>
            {callState === 'incoming' ? 'Calling...' : '00:14'}
          </p>
        </div>

        {callState === 'incoming' && (
          <div style={{ display: 'flex', gap: '50px', marginTop: 'auto', marginBottom: 60 }}>
            <button onClick={() => setCallState('connected')} style={{ width: 75, height: 75, borderRadius: '50%', background: 'var(--success)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 25px rgba(16,185,129,0.4)' }}>
              <Phone size={36} />
            </button>
            <button onClick={() => setCallState('select')} style={{ width: 75, height: 75, borderRadius: '50%', background: 'var(--danger)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 25px rgba(239,68,68,0.4)' }}>
              <Phone size={36} style={{ transform: 'rotate(135deg)' }} />
            </button>
          </div>
        )}

        {callState === 'connected' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', marginTop: 'auto', marginBottom: 40 }}>
            <div className="glass-dark" style={{ padding: '20px', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5 }}>
              Transcribing caller: <br/>"{textToAnalyze}"
            </div>
            <button className="btn btn-primary" onClick={handleAnalyze} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analyzing via n8n Edge...' : 'AI Risk Engine: Analyze'}
            </button>
            <button className="btn" onClick={() => setCallState('select')} style={{ background: '#334155', color: 'white' }}>
              End Call
            </button>
          </div>
        )}

        {callState === 'safe' && (
          <div className="glass-alert fade-in" style={{ width: '100%', maxWidth: 350, background: 'rgba(16, 185, 129, 0.95)', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}>
            <CheckCircle2 size={72} style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: '800' }}>CALL SAFE</h2>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '12px', marginBottom: '24px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.95rem', marginBottom: 8 }}><strong>AI Analysis:</strong></p>
              <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                Conversation matches typical delivery/logistics patterns. No financial threats detected.
              </p>
            </div>
            <button className="btn" style={{ background: 'white', color: 'var(--success)', width: '100%', fontSize: '1.1rem' }} onClick={() => setCallState('select')}>
              Back to Simulator
            </button>
          </div>
        )}

        {callState === 'warning' && (
          <div className="glass-alert alert-pulse" style={{ width: '100%', maxWidth: 350 }}>
            <AlertTriangle size={72} style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: '800' }}>SCAM DETECTED</h2>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '12px', marginBottom: '24px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.95rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}><strong>Flags (n8n AI Model):</strong></p>
              <ul style={{ fontSize: '1rem', paddingLeft: 20, lineHeight: 1.6 }}>
                {analysisResult.flags.map((flag, idx) => (
                  <li key={idx}>{flag}</li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '1.2rem', marginBottom: '24px', lineHeight: 1.5, fontWeight: '600' }}>
              Banks never ask for OTP. Do not share it.
            </p>
            <button className="btn" style={{ background: 'white', color: 'var(--danger)', width: '100%', fontSize: '1.1rem' }} onClick={() => setCallState('select')}>
              Block & End Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const FamilyDashboard = ({ onBack }) => {
  return (
    <div className="app-container fade-in" style={{ background: '#F8FAFC' }}>
      <div className="header" style={{ background: 'var(--success)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowLeft size={24} onClick={onBack} style={{ cursor: 'pointer' }} />
          Family Dashboard
        </div>
      </div>
      <div className="content">
        <h2 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--text-primary)' }}>Linked Accounts</h2>
        
        <div className="card" style={{ borderLeft: '4px solid var(--danger)', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#E2E8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--text-secondary)' }}>M</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Mother's Phone</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Last active: 2 mins ago</p>
              </div>
            </div>
            <span style={{ background: 'var(--danger-bg)', color: 'var(--danger)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>Alert</span>
          </div>
          <div style={{ background: '#FEE2E2', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', color: '#991B1B' }}>
            <strong>Blocked 1 Scam Call</strong> today.
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#E2E8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--text-secondary)' }}>F</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Father's Phone</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Last active: 1 hour ago</p>
              </div>
            </div>
            <span style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>Safe</span>
          </div>
        </div>

        <button className="btn btn-outline" style={{ marginTop: '24px' }}>
          + Add Family Member
        </button>
      </div>
    </div>
  );
};

const ScamHeatMap = ({ onBack }) => {
  return (
    <div className="app-container fade-in" style={{ background: '#0F172A', color: 'white' }}>
      <div className="header" style={{ background: '#1E293B', boxShadow: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowLeft size={24} onClick={onBack} style={{ cursor: 'pointer' }} />
          Local Scam Heatmap
        </div>
      </div>
      <div className="content">
        <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '16px' }}>
          Live view of trending financial scams in your region (Maharashtra).
        </p>

        <div className="map-container">
          <div className="map-marker alert-pulse" style={{ top: '40%', left: '30%' }}></div>
          <div className="map-marker alert-pulse" style={{ top: '60%', left: '50%', width: '16px', height: '16px' }}></div>
          <div className="map-marker alert-pulse" style={{ top: '20%', left: '70%', background: 'var(--warning)' }}></div>
          <div className="map-marker alert-pulse" style={{ top: '75%', left: '20%', background: 'var(--warning)' }}></div>
          
          <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, background: 'rgba(15, 23, 42, 0.9)', padding: '12px', borderRadius: '12px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <AlertTriangle size={16} color="var(--danger)" />
              <strong style={{ fontSize: '0.9rem' }}>Trending Now: Fake MSEDCL Bill</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>
              High volume of electricity bill scam SMS reported in Pune area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  return (
    <>
      {currentScreen === 'dashboard' && <Dashboard onNavigate={setCurrentScreen} />}
      {currentScreen === 'upi' && <FakeUPI onBack={() => setCurrentScreen('dashboard')} />}
      {currentScreen === 'call' && <ScamCall onBack={() => setCurrentScreen('dashboard')} />}
      {currentScreen === 'family' && <FamilyDashboard onBack={() => setCurrentScreen('dashboard')} />}
      {currentScreen === 'map' && <ScamHeatMap onBack={() => setCurrentScreen('dashboard')} />}
    </>
  );
}

export default App;
