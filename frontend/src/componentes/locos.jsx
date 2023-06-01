import React from 'react';

function MyComponent() {
  const data = [
    { id: 1, content: 'Texto 1', showAttribute: 1 },
    { id: 2, content: 'Texto 2', showAttribute: 0 },
    { id: 3, content: 'Texto 3', showAttribute: 1 },
    // ...
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.content}</p>
          {item.showAttribute === 1 ? (
            <span>Atributo visible</span>
          ) : (
            <div>Otro elemento o texto cuando showAttribute es 0</div>
          )}
        </div>
      ))}
    </div>
  );
}
export default MyComponent;