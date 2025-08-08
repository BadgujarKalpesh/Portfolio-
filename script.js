function throttle(func, delay) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  };
}

// Usage: limit scroll event
window.addEventListener("scroll", throttle(() => {
  console.log("Throttled Scroll:", new Date().toLocaleTimeString());
}, 1000));
