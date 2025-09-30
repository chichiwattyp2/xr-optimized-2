// vr_dashboard.js
// Example VR dashboard

export class VRDashboard {
  constructor() {
    this.widgets = []
  }

  addWidget(widget) {
    this.widgets.push(widget)
  }

  render(_time, _timeDelta, _data) {
    // Render all widgets
    this.widgets.forEach(w => {
      if (typeof w.render === 'function') w.render()
    })
  }
}
