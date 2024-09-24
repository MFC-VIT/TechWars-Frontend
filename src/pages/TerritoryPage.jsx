import React, { useState, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './SubTer.css';
import planetImage from './assets/planet.webm';
import SubTer from './components/SubTer';
import DeployTroopsModal from './components/DeployTroopsModal';
import SubTerDetail from './components/SubTerDetail';

const INITIAL_SUB_TERS = [
  { id: 1, type: 'subter2', troops: 0, damaged: false },
  { id: 2, type: 'subter2', troops: 0, damaged: false },
  { id: 3, type: 'subter2', troops: 0, damaged: false },
  { id: 4, type: 'subter1', troops: 0, damaged: false },
  { id: 5, type: 'subter1', troops: 0, damaged: false },
  { id: 6, type: 'subter1', troops: 0, damaged: false },
  { id: 7, type: 'subter1', troops: 0, damaged: false },
  { id: 8, type: 'subter1', troops: 0, damaged: false },
  { id: 9, type: 'subter1', troops: 0, damaged: false },
  { id: 10, type: 'subter1', troops: 0, damaged: false },
];

const App = () => {
  const [subTers, setSubTers] = useState(INITIAL_SUB_TERS);
  const [selectedSubTer, setSelectedSubTer] = useState(null);

  const handleSubTerClick = useCallback((subTer) => {
    setSelectedSubTer(subTer);
  }, []);

  const handleDeployTroops = useCallback((troops) => {
    if (selectedSubTer) {
      setSubTers((prevSubTers) =>
        prevSubTers.map((s) =>
          s.id === selectedSubTer.id ? { ...s, troops } : s
        )
      );
      setSelectedSubTer(null); // Close the modal by setting selectedSubTer to null
    }
  }, [selectedSubTer]);

  const handleEnemyAttack = useCallback((subTer) => {
    setSubTers((prevSubTers) =>
      prevSubTers.map((s) =>
        s.id === subTer.id ? { ...s, damaged: !s.damaged } : s
      )
    );
  }, []);

  const subTerElements = useMemo(() => {
    return subTers.map((subTer) => (
      <SubTer
        key={subTer.id}
        subTer={subTer}
        onEnemyAttack={handleEnemyAttack}
        onClick={handleSubTerClick}
      />
    ));
  }, [subTers, handleEnemyAttack, handleSubTerClick]);

  const MainView = () => (
    <div className="main-view">
      <div className = "time-view">
        <span>Time Left:</span>
        <span>Troops Availaible:</span> 
      </div>
      <div className="planet-container">
        <img src={planetImage} alt="Planet" className="planet" />
      </div>
      {subTerElements}
    </div>
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!selectedSubTer && <MainView />}
              {selectedSubTer && (
                <DeployTroopsModal
                  subTer={selectedSubTer}
                  onDeploy={handleDeployTroops}
                />
              )}
            </>
          }
        />
        <Route
          path="/subter/:id"
          element={<SubTerDetail subTers={subTers} setSubTers={setSubTers} />}
        />
      </Routes>
    </div>
  );
};

export default App;
