const btn = document.querySelector("#btn");
btn.addEventListener("click", notification);

function notification() {
    switch (Notification.permission) {
        case "default":
            Notification.requestPermission();
            break;
        case "granted":
            new Notification("Code Tips", {
                body: "最新のニュースをお知らせします",

                // ここを追加
                tag: "テスト通知",
            });
            break;
        case "denied":
            alert("通知が拒否されています");
            break;
    }
}