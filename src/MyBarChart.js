import React from 'react';
//Rechartから必要なコンポーネントをインポート
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea } from 'recharts';

//折れ線にするための仮データ
const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 500 },
  { name: 'Page D', uv: 400 },
  { name: 'Page E', uv: 200 },
  // 他のデータポイント...
];

export default function MyLineChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      //区間帯の表示
      <ReferenceArea y1={350} y2={450} stroke="red" strokeOpacity={0.3} />
    </LineChart>
  );
}
