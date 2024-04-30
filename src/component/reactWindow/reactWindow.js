import React, { useRef, useState, useEffect } from 'react';
import "./style.css";

// Example data with variable widths
const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  content: `Item ${index + 1}`,
  // Random width between 50 and 200 pixels
  width: Math.floor(Math.random() * 151) + 50,
}));

const List = () => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        console.log(containerRef.current)
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const calculateVisibleItems = () => {
      const topVisibleIndex = Math.floor(scrollTop / 100); // Assuming item height is 100px
      const bottomVisibleIndex = Math.ceil((scrollTop + window.innerHeight) / 100); // Assuming item height is 100px
      
      const newVisibleItems = items.slice(topVisibleIndex, bottomVisibleIndex + 1);

      setVisibleItems(newVisibleItems);
    };

    calculateVisibleItems();
  }, [scrollTop]);

  return (
    <div ref={containerRef} className="list-container" style={{ height: '500px', overflowY: 'auto', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0' }}>
        {visibleItems.map(item => (
          <div key={item.id} className="list-item" style={{ width: `${item.width}px`, height: '100px' }}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
