
import { useState } from 'react';
import data from './mockData.json';
import ScorecardChart from './ScorecardChart';

export default function App() {
  const [step, setStep] = useState('ingest');
  const [persona, setPersona] = useState('CIO');
  const [journey, setJourney] = useState('Strategic Planning');

  const showJourneyUI = journey === 'Strategic Planning';

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">SDLC Journey Dashboard</h1>

      <div className='mb-4'>
        <label className='font-medium mr-2'>Journey:</label>
        <select value={journey} onChange={(e) => setJourney(e.target.value)}>
          <option>Strategic Planning</option>
          <option>Program Setup & Delivery</option>
          <option>Test & Quality Assurance</option>
          <option>Change & Risk Management</option>
          <option>Traceability & Compliance</option>
          <option>Incident & RCA Handling</option>
          <option>Release & Cutover</option>
          <option>Data & ML Lifecycle</option>
          <option>Security & Governance</option>
          <option>Service Health Monitoring</option>
          <option>Knowledge & Documentation</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='font-medium mr-2'>Persona:</label>
        <select value={persona} onChange={(e) => setPersona(e.target.value)}>
          <option>CIO</option>
          <option>PMO Lead</option>
        </select>
      </div>

      {showJourneyUI && (
        <>
          <div className="flex gap-2 mb-4">
            {[
              ['ingest', '1. Brief Ingested'],
              ['priority', '2. Priority Scoring'],
              ['scorecard', '3. Scorecard'],
              ['leverage', '4. Platform Reuse'],
              ['dependency', '5. Risk Mapping'],
              ['funding', '6. Funding'],
              ['notify', '7. Notify Execs']
            ].map(([key, label]) => (
              <button
                key={key}
                className={`px-4 py-2 rounded border ${step === key ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                onClick={() => setStep(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded border">
            {step === 'ingest' && (
              <p>📄 Initiative Brief parsed: OKRs, goals, and strategic themes extracted.</p>
            )}
            {step === 'priority' && (
              <p>🎯 Strategic Priority Agent maps to OKRs. Alignment score: {data.alignmentScore}% match.</p>
            )}
            {step === 'scorecard' && (
              <>
                <ul>
                  <li>💰 ROI: {data.roi}x</li>
                  <li>📉 Risk: {data.riskLevel}</li>
                  <li>⚙️ Platform Leverage: {data.platformReuse.length > 0 ? 'Yes' : 'None'}</li>
                </ul>
                <ScorecardChart />
              </>
            )}
            {step === 'leverage' && (
              <p>🔁 Reusable Services: {data.platformReuse.join(', ')}</p>
            )}
            {step === 'dependency' && (
              <ul>
                {data.dependencies.map((d, i) => (
                  <li key={i}>⚠️ Conflict with {d.conflict} - Milestone: {d.milestone}</li>
                ))}
              </ul>
            )}
            {step === 'funding' && (
              <p>💸 Capital Planning Agent suggests funding: {data.fundingSuggestion}</p>
            )}
            {step === 'notify' && (
              <p>📬 Executive Summary: {data.executiveSummary}</p>
            )}
          </div>

          {persona === 'CIO' && (
            <div className="space-y-3 bg-white p-4 rounded border mt-4 shadow">
              <h2 className="text-lg font-semibold">📊 Executive Summary</h2>
              <p>{data.executiveSummary}</p>
              <div className="flex gap-4 mt-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded">✅ Approve</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded">📝 Request Reframe</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">📤 Send to Finance</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
