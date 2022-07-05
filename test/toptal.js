// Consider a list of photo sizes in the format WxH. We wish to stack these photos in a way that they fit inside a canvas of size 600x600.

// The used space inside the canvas should be optimal, while still maintaining the photo's aspect ratio. For example, to make a 1600x1200 photo fit inside the canvas, we should make it 600x450. See the illustration below. https://topt.al/4rcdyj

// stack(["1600x1200"]) // 600x450

// Write a function that receives the list of photo sizes and outputs to the console the respective size of the photos inside the canvas.

// Test cases:

// stack(["300x100", "200x150", "150x30", "100x100"]) // 600x200, 600x450, 600x120, 600x600

// stack(["1600x1200", "1536x2048", "2592x1936", "2448x3264"]) // 600x450, 450x600, 600x448, 450x600

// stack(["800x1300", "400x1000", "2000x2000", "844x390"]) // 369x600, 240x600, 600x600, 600x277

const stack = (list) => {
  const sWidth = 600
  const sHeigh = 450

  const all = list.map(dimension => {
    const pieces = dimension.split("x")
    const w = Number(pieces[0])
    const h = Number(pieces[1])

    const min = Math.min(w, h)
    const max = Math.max(w, h)

    const xMin = Math.round((600 * min) / max)
    if (w > h)
      return 600 + "x" + xMin
    else
      return xMin + "x" + 600
  })

  console.log(all)
}

stack(["300x100", "200x150", "150x30", "100x100"]) // 600x200, 600x450, 600x120, 600x600

stack(["1600x1200", "1536x2048", "2592x1936", "2448x3264"]) // 600x450, 450x600, 600x448, 450x600

stack(["800x1300", "400x1000", "2000x2000", "844x390"]) // 369x600, 240x600, 600x600, 600x277