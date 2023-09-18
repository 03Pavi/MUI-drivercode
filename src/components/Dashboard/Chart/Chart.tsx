import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 30, label: '38%' },
  { value: 20, label: '20%' },
  { value: 15, label: '15%' },
  { value: 35, label: '35%' },
];

const size = {
  width: 300,
  height:150,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

 function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
  <>

    <PieChart  series={[{ data,  innerRadius: 50,
      outerRadius: 75, }]} >
      <PieCenterLabel>Total: <br/>100</PieCenterLabel>
    </PieChart>

  </>
  );
}
