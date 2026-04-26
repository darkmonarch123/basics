//public/widget.js (product)

(function(window){
     var config = window.FeedbackWidgetConfig || {tenantId:'unknown' , color: 'blue'};

     var btn = document.createElement('button');
          btn.innerHTML = 'Feedback';
          btn.style.cssText='position:fixed; bottom:20px; right:20px; padding:12px 20px; background:" + config.color + "; color:white; border:none; border-radius:50px; cursor:pointer; z-index:9999;'
          
     var formContainer = document.createElement('div');
     formContainer.style.cssText = "display:none; position:fixed; bottom:80px; right:20px; width:300px; background:white; border:1px solid #ddd; padding:20px; border-radius:10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index:9999;";

     formContainer.innerHTML = `
          <h3 style="margin-top:0;">We value your feedback!</h3>
          <input type="email" id="userEmail" placeholder="Your email" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;" required />
          <textarea id="message" placeholder="Your feedback" style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;" rows="4" required></textarea>
          <button id="submitBtn" style="width:100%; padding:10px; background:${config.color}; color:white; border:none; border-radius:5px; cursor:pointer;">Submit</button>`
      
     document.body.appendChild(btn);
     document.body.appendChild(formContainer);

     btn.onclick=function(){
          formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
     }
     
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

