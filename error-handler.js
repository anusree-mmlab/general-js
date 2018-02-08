
function test(cb) {
    try {
        throw new Error("Test error occured");
    } catch(error) {
        console.log('Error', error);
        cb('Alas!');
    }    
}

test((data) => {
    console.log('--------',data);
});

console.log('After Error');