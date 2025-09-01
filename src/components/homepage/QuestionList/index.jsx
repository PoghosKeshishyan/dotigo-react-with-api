import { useEffect, useState } from 'react';
import { DISPLAY_LANG } from '../../../config';
import './QuestionList.css';

export default function QuestionList({ questionData }) {
  const [activeTab, setActiveTab] = useState('');
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    if (questionData?.data?.length) {
      const firstTabId = questionData.data[0].id;
      setActiveTab(firstTabId);
      setActiveItem(`${firstTabId}-0`);
    }
  }, [questionData]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveItem(`${tabId}-0`);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(prev => prev === itemId ? '' : itemId);
  };

  return (
    <div className="questions-list wrapper">
      <h2>{questionData.heading.title[DISPLAY_LANG]}</h2>

      <div className="row">
        <div className="tabs" id="tabs">
          {questionData.data.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="accordion-container" id="accordion-container">
          {questionData.data.map(tab => (
            <div 
              key={tab.id}
              className={`accordion-section ${activeTab === tab.id ? 'active' : ''}`}
              data-tab={tab.id}
            >
              {tab.items.map((item, index) => {
                const itemId = `${tab.id}-${index}`;
                const isActive = activeItem === itemId;
                
                return (
                  <div 
                    key={itemId}
                    className={`accordion-item ${isActive ? 'active' : ''}`}
                  >
                    <button 
                      className="accordion-header"
                      onClick={() => handleItemClick(itemId)}
                    >
                      <img 
                        src={
                          isActive 
                            ? "./images/questions-list/quesion-minus.svg" 
                            : "./images/questions-list/quesion-plus.svg"
                        } 
                        alt={isActive ? "Collapse" : "Expand"}
                      />
                      {item.question}
                    </button>
                    <div className="accordion-content">
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}