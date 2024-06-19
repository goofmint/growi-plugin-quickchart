import React from 'react';

import ReactDOM from 'react-dom/client';

import { QuickChart } from './QuickChart';

const code = `
{
	"url": "https://quickchart.io/chart",
	"width": "600",
	"height": "auto",
	"type": "bar",
	"data": {
		"labels": [
			2012,
			2013,
			2014,
			2015,
			2016
		],
		"datasets": [
			{
				"label": "Users",
				"data": [
					120,
					60,
					50,
					180,
					120
				]
			}
		]
	}
}
`;

const QuickChartComponent = QuickChart(() => <></>);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuickChartComponent
      className="language-quickchart"
    >
      {code}
    </QuickChartComponent>
  </React.StrictMode>,
);
