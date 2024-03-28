import React, { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);

  return <div>{processedData}</div>;
};



const LazyComponent = lazy(() => import('./LazyComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
const LargeList = ({ data }) => {
  return (
    <List
      height={400}
      itemCount={data.length}
      itemSize={50} // Height of each item
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>
          {data[index]}
        </div>
      )}
    </List>
  );
};