$(document).ready(function() {
    $(".size").each(function() {
        var bytes = $(this).html();
        byteString = convert(bytes);
        $(this).html(byteString);
    });

    function convert(bytes) {
        if (bytes > 1073741824) {
            return parseFloat(bytes/1073741824).toFixed(2).toString() + " GB";
        } else if (bytes > 1048576) {
            return parseFloat(bytes/1048576).toFixed(2).toString() + " MB";
        } else if (bytes > 1024) {
            return parseFloat(bytes/1024).toFixed(2).toString() + " KB";
        } else {
            return parseFloat(bytes).toFixed(2).toString() + " B";
        }
    }
})