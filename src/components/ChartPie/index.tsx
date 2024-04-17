import { VictoryContainer, VictoryLabel, VictoryPie } from "victory";

export function ChartPie({ progress }: { progress: number }) {
  const colorGraphic = progress === 100 ? ["#5DDA7B", "transparent"] : ["#f2b72e", "transparent"];
  return (
    <svg viewBox="0 0 200 200" style={{ width: 300 }}>
      <VictoryPie
        width={200}
        standalone={false}
        height={200}
        innerRadius={38}
        data={[{ y: 100 }]}
        labels={[]}
        colorScale={["#808080"]}
      />

      <VictoryPie
        width={200}
        standalone={false}
        height={200}
        data={[
          { key: "1", y: progress },
          { key: "2", y: 100 - progress },
        ]}
        innerRadius={38}
        labels={[]}
        colorScale={colorGraphic}
        cornerRadius={({ datum }) => (datum.key === "1" ? 10 : 0)}
      />

      <VictoryLabel
        text={`${progress}%`}
        textAnchor="middle"
        x={100}
        y={100}
        style={{ fill: "white" }}
      />
    </svg>
  );
}
