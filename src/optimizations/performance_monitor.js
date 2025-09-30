// performance_monitor.js
// Example frame performance monitor

export class PerformanceMonitor {
  constructor() {
    this.frames = []
  }

  recordFrame(_time, _timeDelta) {
    this.frames.push(Date.now())
    if (this.frames.length > 100) this.frames.shift()
  }

  getFPS() {
    if (this.frames.length < 2) return 0
    const duration = this.frames[this.frames.length - 1] - this.frames[0]
    return Math.round((this.frames.length / duration) * 1000)
  }
}
