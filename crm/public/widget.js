    //public/widget.js (product)

    (function(window){
        var config = window.FeedbackWidgetConfig || {tenantId:'unknown' , color: 'blue'};

        var btn = document.createElement('button');
            btn.innerHTML = 'Feedback';
            var btnStyles = "position:fixed; bottom:30px; right:30px; padding:15px 25px; " +
                    "background:#2563eb; color:white; border:none; border-radius:100px; " +
                    "cursor:pointer; font-weight:bold; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4); " +
                    "transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index:9999;";
                    btn.style.cssText = btnStyles;
                     // Hover effects for the button
                    btn.onmouseover = function() { this.style.transform = "scale(1.1) translateY(-3px)"; };
                    btn.onmouseout = function() { this.style.transform = "scale(1) translateY(0)"; };

        //   btn.style.cssText='position:fixed; bottom:20px; right:20px; padding:12px 20px; background:" + config.color + "; color:white; border:none; border-radius:50px; cursor:pointer; z-index:9999;'
            
        var formContainer = document.createElement('div');
        //  formContainer.style.cssText = "display:none; position:fixed; bottom:80px; right:20px; width:300px; background:white; border:1px solid #ddd; padding:20px; border-radius:10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index:9999;";
        // formContainer.style.cssText = "display:none; opacity:0; transition: opacity 0.3s ease; position:fixed; bottom:80px; right:20px; width:300px; background:white; border:1px solid #ddd; padding:20px; border-radius:10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index:9999;";
        var formStyles = "display:none; opacity:0; transform: translateY(20px) scale(0.95); " +
                 "transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); " +
                 "position:fixed; bottom:100px; right:30px; width:350px; background:white; " +
                 "border-radius:20px; padding:30px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); " +
                 "z-index:9999; border: 1px solid #f1f5f9;";
            formContainer.style.cssText = formStyles;
        formContainer.innerHTML = `
            <h3 style="margin-top:0;">We value your feedback!</h3>
            <input type="email" id="userEmail" placeholder="Your email" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;" required />
            <textarea id="message" placeholder="Your feedback" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;" rows="4" required></textarea>
            <button id="submitBtn" style="width:100%; padding:10px; background:${config.color}; color:white; border:none; border-radius:5px; cursor:pointer;">Submit</button>`
        
        document.body.appendChild(btn);
        document.body.appendChild(formContainer);


        btn.onclick = function() {
    if (formContainer.style.display === 'none') {
        formContainer.style.display = 'block';
        setTimeout(function() {
            formContainer.style.opacity = '1';
            formContainer.style.transform = 'translateY(0) scale(1)';
        }, 10);
    } else {
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(function() { formContainer.style.display = 'none'; }, 400);
    }
};
        
        // ES5 AJAX request to your Node.js Server
        document.getElementById('ff-submit').onclick = function() {
            var email = document.getElementById('ff-email').value;
            var msg = document.getElementById('ff-msg').value;
            
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:3000/api/feedback", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Feedback sent!");
                    formContainer.style.display = 'none';
                    document.getElementById('ff-msg').value = '';
                }
            };
            
            xhr.send(JSON.stringify({
                tenantId: config.tenantId,
                email: email,
                message: msg
            }));
        };
    })(window);

