$(document).ready(function() {
	$('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },

    });


    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
      });

      $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },

    });

    $("#MicBtn").click(function() {
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.playClickSound();
        eel.allCommands()();
    });

    // Settings button click handler
    $("#SettingsBtn").click(function() {
        // Show a simple modal for settings
        if ($('#settingsModal').length === 0) {
            $("body").append(`
                <div class="modal" id="settingsModal" tabindex="-1" style="display:block; background:rgba(0,0,0,0.5); position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999;">
                  <div style="background:#fff; margin:10% auto; padding:20px; border-radius:8px; width:300px; position:relative;">
                    <h5>Settings</h5>
                    <p>Settings panel coming soon!</p>
                    <button id="closeSettings" style="position:absolute; top:10px; right:10px;">&times;</button>
                  </div>
                </div>
            `);
            $("#closeSettings").click(function() {
                $('#settingsModal').remove();
            });
        }
    });
});