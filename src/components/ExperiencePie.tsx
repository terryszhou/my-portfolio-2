import * as React from "react";

import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';

import { expArray } from "../data/experienceData";

interface ExperiencePieProps {
  setIdx: React.Dispatch<number>,
  onOpen: () => void,
  hovered: number,
  setHovered: React.Dispatch<number>,
};

type Props = {
  data: React.ComponentProps<typeof PieChart>['data'];
};

const makeTooltipContent = (entry: Props['data'][0]) => `${entry.title} @ ${entry.company}`;

export const ExperiencePie = ({ setIdx, onOpen, hovered, setHovered }: ExperiencePieProps) => {
  const pieMap = expArray.map((exp, i) => (
    {
      title: exp.title,
      value: exp.length,
      color: exp.color,
      company: exp.company
    }
  ));

  return (
    <div className="pie-container" data-tip="" data-for="chart">
      <PieChart
        animate
        animationDuration={500}
        animationEasing="ease-out"
        radius={20}
        lineWidth={25}
        onClick={() => { setIdx(hovered); onOpen(); }}
        onMouseOver={(_, index) => setHovered(index)}
        onMouseOut={() => setHovered(null)}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        data={pieMap} />
      <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(pieMap[hovered]) : null
        } />
    </div> 
  );
};
