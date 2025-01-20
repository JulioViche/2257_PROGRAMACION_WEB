let time = 21;

const interval = setInterval(counter, 1000);

function counter() {
    if (time == 0) {
        console.log(time);
        clearInterval(interval);
        return;
    }

    console.log(time);
    console.clear();
    time--;
}