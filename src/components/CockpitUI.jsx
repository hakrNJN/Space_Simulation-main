import React, { useEffect, useRef, useState } from 'react';
import { SpaceEngine } from '../game/SpaceEngine';

const CockpitUI = () => {
    const mountRef = useRef(null);
    const engineRef = useRef(null);
    const [hudData, setHudData] = useState({
        speed: 0,
        coords: { x: 0, y: 0, z: 0 },
        targetName: 'None',
        targetDist: 0,
        heading: 0
    });

    useEffect(() => {
        if (!mountRef.current) return;

        engineRef.current = new SpaceEngine(mountRef.current, (data) => {
            // Update HUD state efficiently (throttle if needed)
            // For now, simpler direct update

            // Find nearest
            let nearestDist = Infinity;
            let nearestName = 'SOLAR';
            data.planets.forEach(p => {
                const d = data.position.distanceTo(p.position);
                if (d < nearestDist) {
                    nearestDist = d;
                    nearestName = p.userData.name;
                }
            });

            setHudData({
                speed: Math.abs(data.speed).toFixed(0),
                coords: {
                    x: data.position.x.toFixed(0),
                    y: data.position.y.toFixed(0),
                    z: data.position.z.toFixed(0)
                },
                targetName: nearestName,
                targetDist: (nearestDist / 1000).toFixed(2),
                heading: THREE.MathUtils.radToDeg(data.rotation.y)
            });
        });

        const handleResize = () => engineRef.current.handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            engineRef.current.cleanup();
        };
    }, []);

    // Compass Tape Style
    const heading = (hudData.heading % 360 + 360) % 360;
    const tapeOffset = heading * 8;

    return (
        <>
            <div id="canvas-container" ref={mountRef}></div>

            <div className="controls-hint">
                MOUSE: Look/Steer<br />
                W: Warp Drive<br />
                S: Brake
            </div>

            <div id="cockpit-ui">
                <div className="top-bar">
                    <div className="compass-container">
                        <div className="compass-tape" style={{ transform: `translateX(-${tapeOffset}px)` }}>
                            {/* Static Tape Generation */}
                            {Array.from({ length: 72 }).map((_, i) => {
                                const deg = i * 5;
                                const isMajor = deg % 45 === 0;
                                return (
                                    <div key={deg} className={`tick ${isMajor ? 'major' : ''}`}>
                                        {isMajor && <span>{deg}</span>}
                                    </div>
                                );
                            })}
                            {/* Duplicate for loop */}
                            {Array.from({ length: 72 }).map((_, i) => {
                                const deg = i * 5;
                                const isMajor = deg % 45 === 0;
                                return (
                                    <div key={`dup-${deg}`} className={`tick ${isMajor ? 'major' : ''}`}>
                                        {isMajor && <span>{deg}</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="reticle"></div>

                <div className="dashboard-container">
                    <div className="dashboard-glass">

                        <div className="screen-section screen-left">
                            <div className="data-row">
                                <div className="label">COORDS</div>
                                <div className="data-value">{hudData.coords.x}, {hudData.coords.y}, {hudData.coords.z}</div>
                            </div>
                            <div className="data-row">
                                <div className="label">STATUS</div>
                                <div className="data-value" style={{ color: '#0f0' }}>NOMINAL</div>
                            </div>
                        </div>

                        <div className="screen-section screen-center">
                            {/* Radar Placeholder */}
                            <div className="label" style={{ opacity: 0.5 }}>RADAR ONLINE</div>
                        </div>

                        <div className="screen-section screen-right">
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value" style={{ color: '#fff' }}>{hudData.targetName}</div>
                                <div className="label">TARGET</div>
                            </div>
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value">{hudData.targetDist}</div>
                                <div className="unit">AU</div>
                            </div>
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value data-big">{hudData.speed}</div>
                                <div className="unit" style={{ alignSelf: 'flex-end', marginBottom: '5px' }}>KM/S</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CockpitUI;
import * as THREE from 'three'; // Import for MathUtils access
