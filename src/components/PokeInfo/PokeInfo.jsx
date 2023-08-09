import React, { useEffect, useState } from 'react';
import './PokeInfo.scss';

const PokeInfo = React.memo(({ data }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    if (data) {
      setIsSelected(false);
      setTimeout(() => {
        setShowInfo(true);
      }, 300);
    }
  }, [data]);

  return (
    <>
      {isSelected ? (
        <p>Select a Pokemon</p>
      ) : (
        <>
          {data && (
            <div className={`poke-info ${showInfo ? 'show' : ''}`}>
              <h1 className="poke-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
              <img src={data.sprites.front_default} alt="" className="poke-image" />
              <div className="abilities">
                <h2 className="abilities-title">Abilities:</h2>
                <ul className="abilities-list">
                  {data.abilities.map((ability) => (
                    <li key={ability.ability.name} className="ability-item">
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="base-stat">
                <table className="base-stat-table">
                  <thead>
                    <tr>
                      <th>Stat</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.stats.map((stat) => (
                      <tr key={stat.stat.name} className="base-stat-row">
                        <td className="stat-name">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</td>
                        <td className="stat-value">{stat.base_stat}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="stat-name">Type</td>
                      <td className="stat-value">
                        {data.types.map((type) => type.type.name).join(', ')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
});

export default PokeInfo;
