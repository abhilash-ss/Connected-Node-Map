import React from 'react';
import { Graph } from 'react-d3-graph';

const NodeMap = (props) => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: props.nodes,
    links: props.links,
  };

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
  };

  // graph event callbacks
  const onClickGraph = function () {
    window.alert(`Clicked the graph background`);
  };

  const onClickNode = function (nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onDoubleClickNode = function (nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
  };

  const onRightClickNode = function (event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = function (nodeId) {
    window.alert(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = function (nodeId) {
    window.alert(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function (event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = function (source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function (source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
  };

  const onNodePositionChange = function (nodeId, x, y) {
    window.alert(
      `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
    );
  };
  return (
    <div>
      <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onDoubleClickNode={onDoubleClickNode}
        onRightClickNode={onRightClickNode}
        onClickGraph={onClickGraph}
        onClickLink={onClickLink}
        onRightClickLink={onRightClickLink}
        onMouseOverNode={onMouseOverNode}
        onMouseOutNode={onMouseOutNode}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}
        onNodePositionChange={onNodePositionChange}
      />
    </div>
  );
};

export default NodeMap;
