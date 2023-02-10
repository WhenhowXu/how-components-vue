export function generateApi(data, delay = 1000) {
    return new Promise((resolve) => {
      let timer = setTimeout(()=>{
          resolve(data)
          clearTimeout(timer)
      }, delay)
    });
  }
  