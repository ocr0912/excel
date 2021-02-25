window.onload = () => {
    const fileReader = document.getElementById("fileReader");

    // 파일을 불러오면, 정보를 읽는다.
    fileReader.addEventListener("change", () => {
        const file = fileReader.files[0];
        const reader = new FileReader();

        // 파일 불러오기 시작.
        if (file) {
            reader.onload = () => console.log(reader.result);
            fileReader.value = "";
            reader.onerror = err => console.error(err);

            reader.readAsText(file);
        }
    });
};