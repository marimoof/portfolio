// ハンバーガーボタンとドロワー
$(function () {
    function toggleDrawerEvent(isMobile) {
        if (isMobile) {
            // スマホ版の処理を追加
            $("#js-button-drawer").on("click.drawer", function () {
                $(this).toggleClass("is-checked");
                $("#js-drawer").slideToggle();
                $("body").toggleClass("is-checked");
            });

            $("#js-drawer a").on("click.drawer", function () {
                $("#js-button-drawer").removeClass("is-checked");
                $("#js-drawer").slideUp();
                $("body").removeClass("is-checked");
            });
        } else {
            // PC版のイベントリスナーを解除
            $("#js-button-drawer").off(".drawer");
            $("#js-drawer a").off(".drawer");

            // PC版に切り替わった際のリセット処理
            $("#js-drawer").show(); // メニューを常に表示状態に
            $("#js-button-drawer").removeClass("is-checked"); // ボタン状態リセット
            $("body").removeClass("is-checked"); // 必要に応じてボディの状態リセット
        }
    }

    // 初期化
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    toggleDrawerEvent(mediaQuery.matches);

    // 画面幅変更時の処理
    mediaQuery.addEventListener("change", function (e) {
        toggleDrawerEvent(e.matches);
    });
});
