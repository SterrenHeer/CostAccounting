import "./DiagramBar.scss";

const DiagramBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar_inner">
        <div
          className="diagram-bar_fill"
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="diagram-bar_label">{props.label}</div>
    </div>
  );
};

export default DiagramBar;
