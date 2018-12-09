async function bootstrap() {
    const r = await fetch('./data.json');
    const data = await r.json();
    console.log(data);
}

window.addEventListener('load', bootstrap);
