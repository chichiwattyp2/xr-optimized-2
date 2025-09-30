// chat_manager.js
// Example chat manager cleanup

export class ChatManager {
  constructor() {
    this.messages = []
  }

  addMessage(message) {
    const _userMessageId = crypto.randomUUID()
    this.messages.push({ id: _userMessageId, ...message })
  }

  getMessages() {
    return [...this.messages]
  }

  clear() {
    this.messages = []
  }
}
