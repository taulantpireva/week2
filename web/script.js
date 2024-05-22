function addNumbers() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const formData = new FormData();
    formData.append('num1', num1);
    formData.append('num2', num2);

    fetch('/add', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').innerText = data.error;
        } else {
            document.getElementById('result').innerText = `Result: ${data.result}`;
        }
    })
    .catch(error => console.error('Error:', error));
}
