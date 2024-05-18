function getUpdated() {
    let yr = new Date().getFullYear(); 
    let upcoming = new Date(`Aug 5, ${yr} 00:00:00`); 
    if (upcoming.getTime() < new Date().getTime()) { 
      upcoming = new Date(`Aug 5, ${yr + 1} 00:00:00`); 
    }
    return upcoming; 
  }
  
  let x = setInterval(() => {
    let upcoming = getUpdated();
    let now = new Date().getTime();
    let gap = Math.abs(upcoming.getTime() - now);
  
    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((gap % (1000 * 60)) / (1000));
  
    document.getElementById("days").innerText = `${days}`;
    document.getElementById("hours").innerText = `${hours}`;
    document.getElementById("minutes").innerText = `${minutes}`;
    document.getElementById("seconds").innerText = `${seconds}`;
  }, 1000);
  
  const redirect = document.getElementById("buttn")
  redirect.addEventListener("click", (e) => {
    window.open("https://github.com/05sanjaykumar/", "_blank");
  })