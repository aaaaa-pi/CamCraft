class Drag {
  private body?: HTMLBodyElement
  private pageX = 0
  private pageY = 0
  constructor() {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body?.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }
  private mouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseMoveCallback = this.mouseEvent.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
  }
  private mouseEvent(e: MouseEvent) {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
