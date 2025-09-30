// chatPool.js
// Example chat pool manager

export class ChatPool {
  constructor(size = 10) {
    this.size = size
    this.pool = []
  }

  add(message) {
    if (this.pool.length >= this.size) {
      this.pool.shift()
    }
    this.pool.push(message)
  }

  getAll() {
    return [...this.pool]
  }

  clear() {
    this.pool = []
  }
}
