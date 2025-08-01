
import React from 'react';
import data from './mockData.json';

export default function ScorecardChart() {
  return (
    <div className="bg-white border rounded p-4 shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Scorecard Overview</h2>
      <ul className="space-y-1">
        <li>📊 ROI: ██████████ {data.roi}x</li>
        <li>📉 Risk: ███ {data.riskLevel}</li>
        <li>⚙️ Platform Reuse: {data.platformReuse.length > 0 ? 'Yes' : 'None'}</li>
        <li>📅 Dependencies: {data.dependencies.length}</li>
      </ul>
    </div>
  );
}
