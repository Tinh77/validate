var error_song = $('#song-form').validate({
    rules: {
        name: {
            required: true,
        },
        author: {
            required: true,
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var sederObject = {
            name: $(form["name"]).val(),
            description: $(form["description"]).val(),
            author: $(form["author"]).val(),
            singer: $(form["singer"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link: $(form["link"]).val()
        };
        $.ajax({
            url: CREATE_SONG_API,
            type: "POST",
            data: JSON.stringify(sederObject),
            contentType: "application/json; charset=utf-8",
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", 'Basic '+ localStorage.getItem('token-key'));
            },
            success: function (data) {
                alert(`Tạo thành công bài hát.`);
            },
            error: function (jqXHR) {
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    error_song.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});