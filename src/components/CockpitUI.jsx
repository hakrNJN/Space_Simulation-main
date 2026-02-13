import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SpaceEngine } from '../game/SpaceEngine';

const CockpitUI = () => {
    const mountRef = useRef(null);
    const engineRef = useRef(null);
    const [hudData, setHudData] = useState({
        speed: 0,
        coords: { x: 0, y: 0, z: 0 },
        targetName: 'SOLAR',
        targetDist: 0,
        heading: 0,
        nearbySystems: [],
        zone: 'normal',
        zoneTransition: 0,
        distanceFromCenter: 0
    });

    useEffect(() => {
        if (!mountRef.current) return;

        // Prevent double initialization in StrictMode
        let mounted = true;

        const initEngine = async () => {
            if (!mounted) return;

            engineRef.current = new SpaceEngine(mountRef.current, (data) => {
                if (!mounted) return;

                setHudData({
                    speed: Math.abs(data.speed).toFixed(0),
                    coords: {
                        x: data.position.x.toFixed(0),
                        y: data.position.y.toFixed(0),
                        z: data.position.z.toFixed(0)
                    },
                    targetName: data.nearestSystem || 'VOID',
                    targetDist: (data.nearestDistance / 1000).toFixed(1),
                    heading: data.heading || 0,
                    nearbySystems: data.nearbySystems || [],
                    zone: data.zone || 'normal',
                    zoneTransition: data.zoneTransition || 0,
                    distanceFromCenter: data.distanceFromCenter || 0
                });
            });
        };

        initEngine();

        return () => {
            mounted = false;
            if (engineRef.current) {
                engineRef.current.cleanup();
                engineRef.current = null;
            }
        };
    }, []);

    // Compass heading offset
    const heading = (hudData.heading % 360 + 360) % 360;
    const tapeOffset = heading * 8;

    return (
        <>
            <div id="canvas-container" ref={mountRef}></div>

            <div className="controls-hint">
                DRAG: Look/Steer<br />
                W: Cruise Forward<br />
                S: Reverse/Brake<br />
                SHIFT: Boost (10x)
            </div>

            {/* Teleport Buttons */}
            <div className="teleport-buttons">
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // Teleport to Solar System
                            engineRef.current.camera.position.set(1350000, 15000, 1850000);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    📍 SOLAR SYSTEM
                </button>
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // Teleport to Galactic Center (transition zone)
                            engineRef.current.camera.position.set(50000, 5000, 50000);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    📍 GALACTIC CENTER
                </button>
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // Teleport to Black Hole Zone
                            engineRef.current.camera.position.set(15000, 2000, 15000);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    📍 BLACK HOLE
                </button>
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // View 1 (4M)
                            engineRef.current.camera.position.set(0, 1500000, 4000000); // 4M distance
                            engineRef.current.camera.lookAt(0, 0, 0);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    🔭 VIEW 4M
                </button>
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // View 2 (12M)
                            engineRef.current.camera.position.set(0, 4000000, 12000000); // 12M distance
                            engineRef.current.camera.lookAt(0, 0, 0);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    🔭 VIEW 12M
                </button>
                <button
                    className="teleport-btn"
                    onClick={() => {
                        if (engineRef.current && engineRef.current.camera) {
                            // View 3 (20M)
                            engineRef.current.camera.position.set(0, 7000000, 20000000); // 20M distance
                            engineRef.current.camera.lookAt(0, 0, 0);
                            engineRef.current.state.speed = 0;
                        }
                    }}
                >
                    🔭 VIEW 20M
                </button>
            </div>

            {/* Mobile Touch Controls - Cruise & Brake */}
            <div
                id="btn-cruise"
                className="touch-btn"
                onTouchStart={() => { if (engineRef.current) engineRef.current.state.keys.w = true; }}
                onTouchEnd={() => { if (engineRef.current) engineRef.current.state.keys.w = false; }}
                onMouseDown={() => { if (engineRef.current) engineRef.current.state.keys.w = true; }}
                onMouseUp={() => { if (engineRef.current) engineRef.current.state.keys.w = false; }}
            >
                ▲ CRUISE
            </div>
            <div
                id="btn-brake"
                className="touch-btn"
                onTouchStart={() => { if (engineRef.current) engineRef.current.state.keys.s = true; }}
                onTouchEnd={() => { if (engineRef.current) engineRef.current.state.keys.s = false; }}
                onMouseDown={() => { if (engineRef.current) engineRef.current.state.keys.s = true; }}
                onMouseUp={() => { if (engineRef.current) engineRef.current.state.keys.s = false; }}
            >
                ▼ BACK
            </div>

            <div id="cockpit-ui">
                {/* Top Compass Bar */}
                <div className="top-bar">
                    <div className="compass-container">
                        <div className="compass-tape" style={{ transform: `translateX(-${tapeOffset}px)` }}>
                            {Array.from({ length: 72 }).map((_, i) => {
                                const deg = i * 5;
                                const isMajor = deg % 45 === 0;
                                return (
                                    <div key={deg} className={`tick ${isMajor ? 'major' : ''}`}>
                                        {isMajor && <span>{deg}</span>}
                                    </div>
                                );
                            })}
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

                {/* Center Reticle */}
                <div className="reticle"></div>

                {/* Bottom Dashboard */}
                <div className="dashboard-container">
                    <div className="dashboard-glass">

                        {/* Left Panel - Coordinates */}
                        <div className="screen-section screen-left">
                            <div className="data-row">
                                <div className="label">COORDS</div>
                                <div className="data-value">{hudData.coords.x}, {hudData.coords.y}, {hudData.coords.z}</div>
                            </div>
                            <div className="data-row">
                                <div className="label">STATUS</div>
                                <div className="data-value" style={{ color: '#0f0' }}>NOMINAL</div>
                            </div>
                            {/* DEV: Distance from Galactic Center */}
                            <div className="data-row" style={{ marginTop: '10px', borderTop: '1px solid rgba(0,255,255,0.2)', paddingTop: '5px' }}>
                                <div className="label" style={{ color: '#ff0' }}>GC DIST</div>
                                <div className="data-value" style={{
                                    color: hudData.zone === 'blackhole' ? '#f00' :
                                        hudData.zone === 'outer' ? '#ff0' : '#0ff',
                                    fontSize: '14px'
                                }}>
                                    {hudData.distanceFromCenter.toFixed(0)} u
                                </div>
                            </div>
                            {hudData.zone !== 'normal' && (
                                <div className="data-row">
                                    <div className="label" style={{ color: '#ff0' }}>ZONE</div>
                                    <div className="data-value" style={{
                                        color: hudData.zone === 'blackhole' ? '#f00' : '#ff0',
                                        fontSize: '12px'
                                    }}>
                                        {hudData.zone === 'outer' ? 'OUTER' : 'BH ZONE'}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Center Panel - Radar */}
                        <div className="screen-section screen-center">
                            <div className="radar-display">
                                <div className="radar-title">SYSTEM RADAR</div>
                                <div className="radar-grid">
                                    {/* Center dot (you) */}
                                    <div className="radar-center"></div>
                                    {/* Nearby system blips */}
                                    {hudData.nearbySystems.slice(0, 5).map((sys, i) => {
                                        // Calculate relative position on radar
                                        const maxRange = 300000;
                                        const scale = 35; // Radar radius in px
                                        const relX = (sys.position.x / maxRange) * scale;
                                        const relZ = (sys.position.z / maxRange) * scale;
                                        return (
                                            <div
                                                key={sys.name}
                                                className="radar-blip"
                                                style={{
                                                    left: `calc(50% + ${Math.max(-35, Math.min(35, relX))}px)`,
                                                    top: `calc(50% + ${Math.max(-35, Math.min(35, relZ))}px)`
                                                }}
                                                title={`${sys.name}: ${(sys.distance / 1000).toFixed(0)}km`}
                                            ></div>
                                        );
                                    })}
                                </div>
                                <div className="radar-systems-list">
                                    {hudData.nearbySystems.slice(0, 3).map(sys => (
                                        <div key={sys.name} className="radar-system-item">
                                            <span className="system-name">{sys.name}</span>
                                            <span className="system-dist">{(sys.distance / 1000).toFixed(0)} km</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Target & Speed */}
                        <div className="screen-section screen-right">
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value" style={{ color: '#0ff' }}>{hudData.targetName}</div>
                                <div className="label">NEAREST</div>
                            </div>
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value">{hudData.targetDist}</div>
                                <div className="unit">KM</div>
                            </div>
                            <div className="data-row" style={{ justifyContent: 'flex-end' }}>
                                <div className="data-value data-big">{hudData.speed}</div>
                                <div className="unit" style={{ alignSelf: 'flex-end', marginBottom: '5px' }}>KM/S</div>
                            </div>
                            {hudData.zone !== 'normal' && (
                                <div className="data-row" style={{ justifyContent: 'flex-end', marginTop: '10px' }}>
                                    <div className="data-value" style={{
                                        color: hudData.zone === 'blackhole' ? '#ff0' : '#f80',
                                        fontSize: '12px'
                                    }}>
                                        {hudData.zone === 'outer' ? 'OUTER ZONE' : 'BH ZONE'}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CockpitUI;
