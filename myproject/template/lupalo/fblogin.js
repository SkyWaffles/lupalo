FB.login(function(response) {
    if (response.authResponse) {
        window.location = window.location +
                '?access_token=' + response.authResponse.accessToken +
                '&expires=' + response.authResponse.expiresIn +
                '&signed_request=' + response.authResponse.signedRequest;
    }
}, {scope: "{{ app_scope }}" })
 
