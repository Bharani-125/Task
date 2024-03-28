import React, { useState, useEffect } from 'react';

// Higher-order component to handle loading states
const withLoading = (WrappedComponent, fetchData) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataAsync();
    }, []);

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <WrappedComponent {...props} data={data} />
        )}
      </div>
    );
  };
};

export default withLoading;
