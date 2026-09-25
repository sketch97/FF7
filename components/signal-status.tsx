"use client"

import { useEffect, useState } from "react"
import { Radio, Signal, Wifi, Activity, Database, Server } from "lucide-react"

export function SignalStatus() {
  const [stats, setStats] = useState({
    signalStrength: 98,
    activeNodes: 47,
    bandwidth: 85,
    latency: 12,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        signalStrength: Math.min(100, Math.max(90, prev.signalStrength + (Math.random() - 0.5) * 4)),
        activeNodes: Math.floor(prev.activeNodes + (Math.random() - 0.5) * 3),
        bandwidth: Math.min(100, Math.max(70, prev.bandwidth + (Math.random() - 0.5) * 5)),
        latency: Math.max(8, Math.floor(prev.latency + (Math.random() - 0.5) * 3)),
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-panel p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-4 h-4 text-[#8b0000] animate-signal-pulse" />
        <span className="text-xs font-mono tracking-wider text-muted-foreground">BROADCAST DASHBOARD</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Signal Strength */}
        <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
          <div className="flex items-center gap-2 mb-2">
            <Signal className="w-4 h-4 text-[#8b0000]" />
            <span className="text-[10px] font-mono text-muted-foreground">SIGNAL</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.signalStrength.toFixed(1)}%
          </div>
          <div className="mt-2 h-1 bg-[#1a1a1a] overflow-hidden">
            <div 
              className="h-full bg-[#8b0000] transition-all duration-500"
              style={{ width: `${stats.signalStrength}%` }}
            />
          </div>
        </div>

        {/* Active Nodes */}
        <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-[#8b0000]" />
            <span className="text-[10px] font-mono text-muted-foreground">NODES</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.activeNodes}
          </div>
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className={`flex-1 h-1 ${i < Math.floor(stats.activeNodes / 6) ? 'bg-[#8b0000]' : 'bg-[#1a1a1a]'}`}
              />
            ))}
          </div>
        </div>

        {/* Bandwidth */}
        <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
          <div className="flex items-center gap-2 mb-2">
            <Wifi className="w-4 h-4 text-[#8b0000]" />
            <span className="text-[10px] font-mono text-muted-foreground">BANDWIDTH</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.bandwidth.toFixed(0)}%
          </div>
          <div className="mt-2 h-1 bg-[#1a1a1a] overflow-hidden">
            <div 
              className="h-full bg-[#8b0000] transition-all duration-500"
              style={{ width: `${stats.bandwidth}%` }}
            />
          </div>
        </div>

        {/* Latency */}
        <div className="p-4 bg-[#0a0a0a]/50 border border-[#8b0000]/10">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4 text-[#8b0000]" />
            <span className="text-[10px] font-mono text-muted-foreground">LATENCY</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.latency}ms
          </div>
          <div className="mt-2 flex items-center gap-1">
            <Radio className="w-3 h-3 text-[#8b0000] animate-signal-pulse" />
            <span className="text-[10px] text-muted-foreground">OPTIMAL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
