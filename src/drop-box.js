AFRAME.registerComponent('drop-box', {
  schema: {
    color: {type: 'string'}
  },

  init: function () {
    this.el.setAttribute('position', {
      x: -1,
      y: 4,
      z: -3
    })
    this.el.setAttribute('velocity', {
      x: 0,
      y: 0,
      z: 0 
    })
    this.el.setAttribute('angular-velocity', {
      x: 0,
      y: 0,
      z: 0 
    })
    this.el.setAttribute('rotation', {
      x: 40,
      y: 45,
      z: 0 
    })
    this.el.setAttribute('dynamic-body', true)
    this.el.setAttribute('dynamic-body', true)
    // set color
    this.el.setAttribute('color', this.el.getAttribute('color'))

    // Listen for clicks on this box and 'reset' it
    this.el.addEventListener('click', (e) => {
      // create our new box
      const box = document.createElement('a-box')
      box.setAttribute('drop-box', '')
      box.setAttribute('color', this.el.getAttribute('color'))
      // add it to the parent
      this.el.parentNode.appendChild(
        document.importNode(box, true)
      )
      // remove the original box
      this.el.parentNode.removeChild(this.el)
    })
  }
});