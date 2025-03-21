/*
 * JS just handles the playground of parameters
 * and inserts the repeated markup in an optimized way.
 */
const UI = {
    bands: document.querySelector('#bands'),
    cells: document.querySelector('#cells'),
    size: document.querySelector('#size'),
    speed: document.querySelector('#speed'),
    image: document.querySelectorAll('#image input'),
    borders: document.querySelector('#with-border'),
    optimize: document.querySelector('#optimize'),
    world: document.querySelector('.world')
  }
  
  const state = {
    bands: +UI.bands.value,
    cells: +UI.cells.value,
    size: +UI.size.value,
    speed: +UI.speed.value,
    image: UI.image[0].value,
    borders: UI.borders.checked,
    optimize: UI.optimize.checked
  }
  
  UI.bands.addEventListener('input', (e) => {
    state.bands = +e.target.value
    render()
  })
  
  UI.cells.addEventListener('input', (e) => {
    state.cells = +e.target.value
    render()
  })
  
  UI.size.addEventListener('input', (e) => {
    state.size = +e.target.value
    render()
  })
  
  UI.speed.addEventListener('input', (e) => {
    state.speed = +e.target.value
    render()
  })
  
  Array.from(UI.image).forEach(input => {
    input.addEventListener('change', () => {
      state.image = input.value
      render()
    })
  })
  
  UI.borders.addEventListener('input', (e) => {
    state.borders = e.target.checked
    render()
  })
  
  UI.optimize.addEventListener('input', (e) => {
    state.optimize = e.target.checked
    render()
  })
  
  render()
  
  function render() {
    UI.world.style.setProperty('--bands', state.bands)
    UI.world.style.setProperty('--cells', state.cells)
    UI.world.style.setProperty('--_size', state.size)
    UI.world.style.setProperty('--_speed', state.speed)
    UI.world.style.setProperty('--image', state.image)
    UI.world.classList.toggle('with-borders', state.borders)
    UI.world.classList.toggle('optimize', state.optimize)
    UI.world.innerHTML = chunk(state.bands, i => {
      let cells = state.cells
      if (state.optimize) {
        cells = optimizeCellCount(
          state.bands, i, state.cells
        )
      }
      return `
        <div class="band" style="--i: ${i}; --cells: ${cells}">
          ${chunk(cells, j => `
            <div class="cell" style="--j: ${j}"></div>
          `)}
        </div>
      `
    })
  }
  
  function chunk(howMany, mapFn) {
    return Array
      .from({ length: howMany }, (_, i) => mapFn(i))
      .join('')
  }
  
  // Performance optimization:
  // As bands get nearer to the poles, they get lesser cells
  function optimizeCellCount(bands, bandIndex, cells) {
    const latitude = Math.sin(Math.PI / bands * bandIndex)
    return Math.round(cells * latitude)
  }